<template>
 <v-row class="align-center layout px-4 pt-4 app--page-header">
    <v-col>
      <v-card class="mx-auto">
        <v-card-title>การจัดการกิจกรรมมหาวิทยาลัย</v-card-title>
        <v-data-table
          v-model="selected"
          :headers="headers"
          :items="items"
          :search="search"
          :item-class="itemRowBackground"
          item-key="ActivityID"
          class="elevation-1"
          sort-by=""
        >
          <template #top>
            <v-toolbar flat>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="ค้นหา"
                single-line
                hide-details
              ></v-text-field>
              <v-spacer></v-spacer>

            <v-dialog v-model="dialog2" width="600px">
                <template #activator="{ on, attrs }">
                  <v-btn color="teal darken-2"  class="mx-3" v-bind="attrs" v-on="on">
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
                              v-model="editedItem.ActivitytID"
                              :rules="[rules.required]"
                              label="รหัสกิจกรรม"
                              type="text"
                              @keydown.enter="save"
                            ></v-text-field>
                            <v-text-field
                              v-model="editedItem.ActivityType"
                              :rules="[rules.required]"
                              label="ประเภทกิจกรรม"
                              type="text"
                              @keydown.enter="save"
                            ></v-text-field>
                            <v-text-field
                              v-model="editedItem.ActivityName"
                              :rules="[rules.required]"
                              label="ชื่อกิจกรรม"
                              type="text"
                              @keydown.enter="save"
                            ></v-text-field>
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
                      <v-btn color="blue darken-1" text @click="save">
                        Save
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-form>
              </v-dialog>
              <v-dialog v-model="dialogDelete" max-width="500px">
                <v-card>
                  <v-card-title class="headline"
                    >Confrim to delete
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
          <template #[`item.actions`]="{ item }">
            <v-icon color="orange" medium @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon color="red" medium @click="deleteItem(item)">
              mdi-delete
            </v-icon>
          </template>
        </v-data-table>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: 'Aftermain',
  data: () => ({
    dialog: false,
    dialog2: false,
    dialogDelete: false,
    search: '',
    headers: [
      {
        text: 'รหัสกิจกรรม',
        align: 'start',
        value: 'ActivityID',
        sortable: false,
        class: 'tblHeader',
      },
      {
        text: ' ประเภทกิจกรรม',
        value: 'ActivityType',
        class: 'tblHeader' },
      {
        text: ' ชื่อกิจกรมม',
        value: 'ActivityName',
        class: 'tblHeader' },
      {
        text: 'จำนวนหน่วยชั่วโมง',
        value: 'ActivityCount',
        class: 'tblHeader',
      },

      { text: 'Action', value: 'actions', sortable: false, class: 'tblHeader' },
    ],

    editedIndex: -1,

    AddItem: {
      SubjectID: '',
      SubjectNameTH: '',
      SubjectNameEN: '',
      CreateBy:"Admin",
      UpdateBy:"",
      groupsub:
        {
          GroupID: ''
        },
      Credit: '',
      IsActive: '',
    },

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
    updatesub: [],
    rules: {
      required: (value) => !!value || 'Required.',
    },
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'เพิ่มรายการกิจกรรม' : 'แก้ไขรายการกิจกรรม'
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
    // this.loadGrid()
    this.initialize()
  },

  methods: {
    async loadGrid() {
      try {
        // console.log('hel')
        this.items = await this.$axios.$get('/activity');
        console.log(this.items)
        // console.log('helo')
        // this.NameGp = await this.$axios.$get('/groupsub')
      } catch (error) {
        console.error(error)
      }
    },
    itemRowBackground(item) {
      return this.items.indexOf(item) % 2 === 0 ? 'style-1' : 'style-2'
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
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    closeConfirm() {
      this.dialog = false;
      this.selected = [];
      this.SelectedText = "";
      
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

          this.editedItem.UpdateBy = 'x';
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
        } 
        else {
          await this.$axios.$post(`/activity`, this.editedItem)
          };
            this.loadGrid();
            this.closeConfirm();
            this.$alert.showMessage({
              content: 'บันทึกข้อมูลเรียบร้อย',
              type: 'success',
            });
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
