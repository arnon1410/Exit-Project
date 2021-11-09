<template>
  <v-container>
    <v-card-title>เพิ่มรายการกิจกรรม</v-card-title>
    <v-data-table
      :headers="headers"
      :items="items"
      :item-class="itemRowBackground"
      item-key="GradeID"
      class="elevation-1"
      sort-by=""
    >

      <template #top>
        <v-toolbar flat>
          <v-spacer></v-spacer>
            <v-dialog v-model="dialog" width="600px">
                <template #activator="{ on, attrs }">
                  <v-btn color="teal darken-2"  class="white--text" v-bind="attrs" v-on="on">
                    เพิ่ม
                  </v-btn>
                </template>
                <v-form ref="form" lazy-validation>
                  <v-card>
                    <v-card-title>
                      <span class="text-h5" >{{ formTitle }} </span>
                    </v-card-title>
                    <v-card-text >
                     <v-container>
                        <v-row>
                          <v-col cols="12" sm="6" md="8">
                            <v-text-field
                              v-model="editedItem.ActivityID"
                              :rules="[rules.required]"
                              label="รหัสกิจกรรม"
                              type="text"
                              @keydown.enter="save"
                            ></v-text-field>
                      </v-col>
                    </v-row>
                      <v-col cols="6">
                        <v-autocomplete
                          v-model="editedItem.ActivityType"
                          :rules="[rules.required]"
                          :items="Types"
                          placeholder=""
                          label="ประเภทกิจกรรม"
                          hide-details
                          hide-no-data
                          hide-selected
                          clearable
                        ></v-autocomplete>
                      </v-col>
                    </v-row>
                    </v-row>
                      <v-col cols="6">
                            <v-text-field
                              v-model="editedItem.ActivityName"
                              :rules="[rules.required]"
                              label="ชื่อกิจกรรม"
                              type="text"
                              @keydown.enter="save"
                            ></v-text-field>
                      </v-col>
                    </v-row>
                    </v-row>
                      <v-col cols="6">
                            <v-text-field
                              v-model="editedItem.ActivityCount"
                              :rules="[rules.required]"
                              label="จำนวนหน่วยชั่วโมง"
                              type="text"
                              @keydown.enter="save"
                            ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="red darken-1" text @click="close">
                    Cancel
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
                </v-card-actions>
              </v-card>
            </v-form>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="headline"
                >Confirm to delete
                {{ editedItem.ActivityName }}
                ?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="gray darken-1" text @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn color="red darken-1" text @click="deleteItemConfirm"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
                <template slot="body.append">
                    <tr class="blue--text">
                        <th class="title">Totals</th>
                        <th></th>
                        <th></th>
                        <th class="title text-center">{{ pageActivityCount }}</th>
                        <th class="title text-center"></th>
                    </tr>
                </template>

      <template #[`item.actions`]="{ item }">
        <v-icon color="orange" class="ma-2" @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon color="red" @click="deleteItem(item)">
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>

import { $array } from 'alga-js'

export default {
  layout: 'Aftermain',
  data: () => ({
    dialog: false,
    dialogDelete: false,
    
    search: '',
    headers: [
      {
        text: 'รหัสกิจกรรม',
        align: 'center',
        value: 'ActivityID',
        sortable: false,
        class: 'teal darken-2 white--text',
      },
      {
        text: ' ประเภทกิจกรรม',
        align: 'center',
        value: 'ActivityType',
        class: 'teal darken-2 white--text'},
      {
        text: ' ชื่อกิจกรรม',
        align: 'center',
        value: 'ActivityName',
        class: 'teal darken-2 white--text'},
      {
        text: 'จำนวนหน่วยชั่วโมง',
        align: 'center',
        value: 'ActivityCount',
        class: 'teal darken-2 white--text',
      },

      { text: 'Action', value: 'actions', sortable: false, class: 'teal darken-2 white--text'},
    ],

    filters: {
      ActivityID: [],
      ActivityType: [],
      ActivityName: [],
      ActivityCount: [],

    },
    items: [],
    TotalActivity:[],
    subjects: [],
    editedIndex: -1,
    editedItem: {
      ActivityID: '',
      ActivityType: '',
      ActivityName: '',
      ActivityCount: '',
      IsActive: '',
    },
    defaultItem: {
      ActivityID: '',
      ActivityType: '',
      ActivityName: '',
      ActivityCount: '',
      IsActive: '',
    },
    rules: {
      required: (value) => !!value || 'Required.',      
    },
    Credit: '',
    subtotal:'',
    Alltotal:0,
    Types: [
      {text: 'กิจกรรมมหาวิทยาลัย'}, 
      {text: 'กิจกรรมเพื่อสังคม'}, 
      {text: 'กิจกรรมเสริมสมรรถภาพ'},],

  }), // สิ้นสด data
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'เพิ่มรายการกิจกรรม' : 'แก้ไขรายการกิจกรรม'
    },
    pageActivityCount() {
      return $array.sum(this.items, 'ActivityCount')
    },
  },

  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    },
  },
  created() {
    this.loadGrid()
  },

  methods: {

    async loadGrid() {
      try {
        // this.items = await this.$axios.$get('/activity')
        this.items = await this.$axios.$get(`/activity/ByUserID/${this.$auth.user.StudentID}`);
      } catch (error) {
        console.error(error)
      }
    },


    itemRowBackground(item) {
      return (
        this.items.indexOf(item) % 2 === 0 ? 'style-1' : 'style-2'
      )
    },

    editItem(item) {
      this.editedIndex = this.items.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem(item) {
      this.editedIndex = this.items.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
      
    },

    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      });
    },
    closeConfirm() {
      this.dialog = false;
      
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    async save() {
      try {
        if (!this.$refs.form.validate()) return

        if (this.editedIndex > -1) {
          this.editedItem.users = this.$auth.user;
          this.editedItem.UpdateBy = this.$auth.user.StudentID;
          await this.$axios.$patch(
            `/activity/${this.editedItem.ActivityID}`,
            this.editedItem
          );
            this.loadGrid();
            this.close();
            this.$alert.showMessage({
              content: "บันทึกข้อมูลเรียบร้อย",
              type: "success"
            });
        } else {
          this.editedItem.users = this.$auth.user;
          this.editedItem.CreateBy = this.editedItem.UpdateBy = this.$auth.user.StudentID;
          await this.$axios.$post(`/activity`, this.editedItem)
        }
          this.loadGrid()
          this.closeConfirm()
      } catch (error) {
        console.error(error)
      }
    },
    async deleteItemConfirm() {
      try {
        await this.$axios.$delete(`/activity/${this.editedItem.ActivityID}`);
        this.loadGrid();
        this.closeDelete();
        this.$alert.showMessage({
          content: "บันทึกข้อมูลเรียบร้อย",
          type: "success"
        });

      } catch (error) {
      }
    },
  },
}
</script>

<style>
.list {
  max-width: 750px;
}
.tblHeader {
  background-color: whitesmoke;
}
</style>
