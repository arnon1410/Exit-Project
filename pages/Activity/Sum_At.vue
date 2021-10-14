/* eslint-disable no-dupe-keys */
<!--template>
  <div>
     <v-simple-table>
    <thead>
      <tr class="teal darken-2">
        <th class="text-center">
          ประเภทกิจกรรม
        </th>
        <th class="text-center">
          ชื่อกิจกรมม
        </th>
        <th class="text-center">
          จำนวนโครงการ
        </th>
        <th class="text-center">
          จำนวนคณะทำงาน
        </th>
        <th class="text-center">
          จำนวนกิจกรรม
        </th>
        <th class="text-center">
          จำนวนหน่วยชั่วโมง
        </th>
      </tr>
    </thead>
      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.name"
          class="text-center"
        >
          <td>{{ item.type_ac }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.count_pro }}</td>
          <td>{{ item.count_pp }}</td>
          <td>{{ item.count_ac }}</td>
          <td>{{ item.count_time }}</td>
        </tr>
      </tbody>
    </v-simple-table>
    <v-list-item-content>
    <v-row>
      <v-col>
            <v-list-item-title class="text-right " >
                <strong class="mx-10 py-3">จำนวนกิจกรรมรวม : </strong>
            </v-list-item-title>
      </v-col>
    </v-row>
    </v-list-item-content>

</div>
</!--template-->

<!--script>

export default {
   data: () => ({
     desserts: [
      {
        type_ac: 'กิจกรรมมหาวิทยาลัย',
        name: 'XXXXXXXX',
        count_pro: '9',
        count_pp: '0',
        count_ac: '6(>=9)',
        count_time: '105',
      },
      {
       type_ac: 'กิจกรรมเพื่อสังคม',
        name: 'XXXXXXXX',
        count_pro: '3',
        count_pp: '0',
        count_ac: '6(>=3)',
        count_time: '35',
      },
     ],
    }),
  }
</!--script-->
<!--template>
<div>
    <div class="search-wrapper">
       <label>
            <input v-model="subjects" type="text" placeholder="Search title.."/>
            Search hier:
        </label>
    </div>
    <div class="wrapper">
        <li v-for="SubjectNameTH in subjects " :key="SubjectNameTH">
            {{ name }}
        </li>
    </div>
</div>
</+template>

<script>

export default {
    data() {
        return {
            search: '',
            subjects: [],
        }
    },

watch: {
  created() {
    this.loadGrid()
  },
},
methods: {
  async loadGrid() {
      try {
        this.subjects = await this.$axios.$get('/subject' + this.search )
        .then((response) => {this.subjects = response.data})
      } catch (error) {
        console.error(error)
      }
    },
}
}
</!--script-->

<template>
  <v-row align="center" class="list px-3 mx-auto">
    <v-col cols="12" sm="12">
      <v-card class="mx-auto" tile>
        <v-card-title>รายวิชา</v-card-title>
        <v-data-table
          :headers="headers"
          :items="items"
          :search="search"
          :item-class="itemRowBackground"
          item-key="SubjectID"
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
              <v-dialog v-model="dialog" width="600px">
                <template #activator="{ on, attrs }">
                  <v-btn color="primary" class="mx-3" v-bind="attrs" v-on="on">
                    เพิ่ม
                  </v-btn>
                </template>
                <v-form ref="form" lazy-validation>
                  <v-card>
                    <v-card-title>
                      <span class="text-h5">{{ formTitle }}</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12" sm="6" md="8">
                            <v-text-field
                              v-model="editedItem.SubjectID"
                              :rules="[rules.required]"
                              label="รหัสวิชา"
                              type="text"
                            ></v-text-field>
                            <v-text-field
                              v-model="editedItem.SubjectNameTH"
                              :rules="[rules.required]"
                              label="ชื่อวิชาภาษาไทย"
                              type="text"
                            ></v-text-field>
                            <v-text-field
                              v-model="editedItem.SubjectNameEN"
                              :rules="[rules.required]"
                              label="ชื่อวิชาภาษาอังกฤษ"
                              type="text"
                            ></v-text-field>
                            <v-text-field
                              v-model="editedItem.groupsub"
                              :rules="[rules.required]"
                              label="กลุ่มสาระฯ"
                              type="text"
                            ></v-text-field>
                            <v-text-field
                              v-model="editedItem.Credit"
                              :rules="[rules.required]"
                              label="หน่วยกิต"
                              type="text"
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
                    {{ editedItem.SubjectNameTH }}
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
            <v-icon color="orange" medium class="mr-2" @click="editItem(item)">
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
    dialogDelete: false,
    search: '',
    headers: [
      {
        text: 'ลำดับ',
        align: 'start',
        sortable: false,
        value: '',
        class: 'tblHeader',
      },
      {
        text: 'รหัสวิชา',
        value: 'SubjectID',
        sortable: false,
        class: 'tblHeader',
      },
      { text: 'ชื่อวิชาภาษาไทย', value: 'SubjectNameTH', class: 'tblHeader' },
      {
        text: 'ชื่อวิชาภาษาอังกฤษ',
        value: 'SubjectNameEN',
        class: 'tblHeader',
      },
      { text: 'กลุ่มสาระฯ', value: 'groupsub', class: 'tblHeader' },
      { text: 'หน่วยกิต', value: 'Credit', class: 'tblHeader' },
      { text: '', value: 'actions', sortable: false, class: 'tblHeader' },
    ],
    items: [],
    editedIndex: -1,
    editedItem: {
      SubjectID: '',
      SubjectNameTH: '',
      SubjectNameEN: '',
      // groupsub: '',
      groupsub: {SubjectID: '', NameGroup: ''},
      Credit: '',
      IsActive: '',
    },
    defaultItem: {
      SubjectID: '',
      SubjectNameTH: '',
      SubjectNameEN: '',
      // groupsub: '',
      groupsub: {SubjectID: '', NameGroup: ''},
      Credit: '',
      IsActive: '',
    },
    updatesub: [],
    rules: {
      required: (value) => !!value || 'Required.',
      // min: v => v && v.length >= 6 || 'Min 6 characters',
    },
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Add Item' : 'Edit Item'
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
        // console.log('hel')
        this.items = await this.$axios.$get('/subject')
        this.items.forEach(x => {x.groupsub = x.groupsub.NameGroup;});
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

    deleteItemConfirm() {
      this.items.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
      this.resetForm()
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
          /* const data = [];
          this.groupsub.forEach(x => {
            const item = {};
            item.SubjectID = this.editedItem.SubjectID;
            item.groupsub = this.
            data.push(item);
          }); */
          this.editedItem.UpdateBy = 'x';
          await this.$axios.$patch(
            `/subject/${this.editedItem.SubjectID}`,
            this.editedItem
          )
        } else {
          this.editedItem.groupsub.NameGroup = this.groupsub
          this.editedItem.CreateBy = this.editedItem.UpdateBy = 'Admin'
          await this.$axios.$post(`/subject`, this.editedItem)
          // this.items.push(this.editedItem);
        }
        this.$alert.showMessage({
          content: 'บันทึกข้อมูลเรียบร้อย',
          type: 'success',
        })
        this.loadGrid()
        this.close()
      } catch (error) {
        console.error(error)
      }
    },

    /* async deleteItemConfirm() {
      try {
        // ลบข้อมูลใน items
        // this.items.splice(this.editedIndex, 1);
        // ลบข้อมูลผ่าน API
        await this.$axios.$delete(`/subject/${this.editedItem.SubjectID}`);

        this.$alert.showMessage({
          content: "บันทึกข้อมูลเรียบร้อย",
          type: "success"
        });

        this.loadGrid();
        this.closeDelete();
      } catch (error) {
        console.error(error);
      }
    }, */
    resetForm() {
      this.$refs.form.reset()
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
