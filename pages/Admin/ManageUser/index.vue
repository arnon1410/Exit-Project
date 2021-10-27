<template>
  <v-row align="center" class="list px-3 mx-auto">
    <v-col cols="12" sm="12">
      <v-card class="mx-auto" tile>
        <v-card-title>จัดการยูเซอร์</v-card-title>
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
                              v-model="editedItem.StudentID"
                              :rules="[rules.required]"
                              label="รหัสนิสิต"
                              type="text"
                            ></v-text-field>
                            <v-text-field
                              v-model="editedItem.Name"
                              :rules="[rules.required]"
                              label="ชื่อ"
                              type="text"
                            ></v-text-field>
                            <v-text-field
                              v-model="editedItem.Email"
                              :rules="[rules.required]"
                              label="Email"
                              type="text"
                            ></v-text-field>
                            <v-text-field
                              v-model="editedItem.UserName"
                              :rules="[rules.required]"
                              label="UserName"
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
        text: 'ID',
        align: 'start',
        value: 'StudentID',
        sortable: false,
        class: 'tblHeader',
      },
      { 
        text: 'ชื่อ', 
        value: 'Name', 
        class: 'tblHeader' },
      {
        text: 'Email',
        value: 'Email',
        class: 'tblHeader',
      },
      { 
        text: 'UserName', 
        value: 'UserName', 
        class: 'tblHeader' },

      { text: 'Action', value: 'actions', sortable: false, class: 'tblHeader' },
    ],
    items: [],
    selected: [],
    SelectedText: "",
    editedIndex: -1,
    editedItem: {
      StudentID: '',
      Name: '',
      Email: '',
      UserName: '',
      IsActive: '',
    },
    defaultItem: {
      StudentID: '',
      Name: '',
      Email: '',
      UserName: '',
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
        this.items = await this.$axios.$get('/users/')
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
            `/users/${this.editedItem.StudentID}`,
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
          await this.$axios.$post(`/users`, this.editedItem)
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
        await this.$axios.$delete(`/users/${this.editedItem.StudentID}`);
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