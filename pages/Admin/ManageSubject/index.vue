<template>
  <v-row align="center" class="list px-3 mx-auto">
    <v-col cols="12" sm="12">
      <v-card class="mx-auto" tile>
        <v-card-title>รายวิชา</v-card-title>
        <v-data-table
          v-model="selected"
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

              
            <v-dialog v-model="dialog2" width="600px">
                <template #activator="{ on, attrs }">
                  <v-btn color="primary" class="mx-3" v-bind="attrs" v-on="on">
                    เพิ่ม
                  </v-btn>
                </template>
                <v-form ref="form" lazy-validation>
                  <v-card>
                    <v-card-title>
                      <span class="text-h5">Add data</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12" sm="6" md="8">
                            <v-text-field
                              v-model="AddItem.SubjectID"
                              :rules="[rules.required]"
                              label="รหัสวิชา"
                              type="text"
                              @keydown.enter="savedata"
                            ></v-text-field>
                            <v-text-field
                              v-model="AddItem.SubjectNameTH"
                              :rules="[rules.required]"
                              label="ชื่อวิชาภาษาไทย"
                              type="text"
                              @keydown.enter="savedata"
                            ></v-text-field>
                            <v-text-field
                              v-model="AddItem.SubjectNameEN"
                              :rules="[rules.required]"
                              label="ชื่อวิชาภาษาอังกฤษ"
                              type="text"
                              @keydown.enter="savedata"
                            ></v-text-field>
                            <v-text-field
                              v-model="AddItem.groupsub.GroupID"
                              :rules="[rules.required]"
                              label="กลุ่มสาระฯ"
                              type="text"
                              @keydown.enter="savedata"
                            ></v-text-field>
                            <v-text-field
                              v-model="AddItem.Credit"
                              :rules="[rules.required]"
                              label="หน่วยกิต"
                              type="text"
                              @keydown.enter="savedata"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="red darken-1" text @click="close2">
                        Cancel
                      </v-btn>
                      <v-btn color="blue darken-1" text @click="savedata">
                        Save
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-form>
              </v-dialog>
              
              <v-dialog v-model="dialog" width="600px">

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
                              @keydown.enter="save"
                            ></v-text-field>
                            <v-text-field
                              v-model="editedItem.SubjectNameTH"
                              :rules="[rules.required]"
                              label="ชื่อวิชาภาษาไทย"
                              type="text"
                              @keydown.enter="save"
                            ></v-text-field>
                            <v-text-field
                              v-model="editedItem.SubjectNameEN"
                              :rules="[rules.required]"
                              label="ชื่อวิชาภาษาอังกฤษ"
                              type="text"
                              @keydown.enter="save"
                            ></v-text-field>
                            <v-text-field
                              v-model="editedItem.groupsub"
                              :rules="[rules.required]"
                              label="กลุ่มสาระฯ"
                              type="text"
                              @keydown.enter="save"
                            ></v-text-field>
                            <v-text-field
                              v-model="editedItem.Credit"
                              :rules="[rules.required]"
                              label="หน่วยกิต"
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
    dialog2: false,
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
      SubjectID: '',
      SubjectNameTH: '',
      SubjectNameEN: '',
      groupsub: 
        { 
          GroupID: ''
        },
      Credit: '',
      IsActive: '',
    },
    defaultItem: {
      SubjectID: '',
      SubjectNameTH: '',
      SubjectNameEN: '',
      groupsub: 
        { 
          GroupID: ''
        },
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
        this.items = await this.$axios.$get('/subject')
        this.items.forEach(x => {x.groupsub = x.groupsub.GroupID;});
        console.log(this.items)
      
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
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      });
    },

    close2() {
      this.dialog2 = false
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

    closeConfirm2() {
      this.dialog2 = false;
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
            `/subject/${this.editedItem.SubjectID}`,
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
          await this.$axios.$post(`/subject`, this.editedItem)
          };
            this.loadGrid();
            this.closeConfirm2();
            this.$alert.showMessage({
              content: 'บันทึกข้อมูลเรียบร้อย',
              type: 'success',
            });
      } catch (error) {
        console.error(error)
      }
    },
        async savedata() {
      if (!this.$refs.form.validate()) return;
        try {
          await this.$axios.post('/subject', this.AddItem)
            this.loadGrid();
            this.closeConfirm2();
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
        await this.$axios.$delete(`/subject/${this.editedItem.SubjectID}`);
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
