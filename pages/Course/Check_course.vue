<template>
  <v-container>
    <v-card-title></v-card-title>
    <v-data-table
      :headers="headers"
      :items="items"
      :item-class="itemRowBackground"
      item-key="SubjectID"
      class="elevation-3"
      sort-by=""
    >
      <template #top>
        <v-toolbar flat>
          <v-autocomplete
            v-model="editedItem.Year"
            :items="year"
            label="ปีการศึกษา"
            class="pa-2"
            single-line
            hide-details
          ></v-autocomplete>
          <v-spacer></v-spacer>
          <v-autocomplete
            v-model="editedItem.StudenttermID"
            :items="term"
            label="เทอม"
            class="pa-2"
            single-line
            hide-details
          ></v-autocomplete>
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
                      <v-col cols="12" sm="6" md="4">
                        <v-autocomplete
                          v-model="editedItem.subjectid"
                          :rules="[rules.required]"
                          :items="subjects"
                          item-text="SubjectID"
                          item-value="SubjectID"
                          label="ค้นหารายวิชา"
                          hide-details
                          hide-no-data
                          hide-selected
                        ></v-autocomplete>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.subjectname"
                          :items="subjects"
                          item-text="SubjectNameTH"
                          item-value="SubjectNameTH"
                          label="ชื่อวิชา"
                          filled
                          readonly
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.subjectcredit"
                          item-text="Credit"
                          item-value="Credit"
                          label="หน่วยกิต"
                          disabled
                          solo
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.Grade"
                          :rules="[rules.required]"
                          label="เกรด"
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
                >Confrim to delete
                {{ editedItem.subjectname }}
                ?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="gray darken-1" text @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn color="red darken-1" text @click="deletesuccess"
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
  </v-container>
</template>

<script>
export default {
  layout: 'Aftermain',
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: 'ลำดับ',
        align: 'start',
        sortable: false,
        value: 'GradID',
        class: 'tblHeader',
      },
      {
        text: 'รหัสวิชา',
        value: 'subjectid',
        sortable: false,
        class: 'tblHeader',
      },
      {
        text: 'ชื่อวิชา',
        value: 'subjectname',
        sortable: false,
        class: 'tblHeader',
      },
      {
        text: 'หน่วยกิต',
        value: 'subjectcredit',
        sortable: false,
        class: 'tblHeader',
      },
      { text: 'เกรด', value: 'Grade', sortable: false, class: 'tblHeader' },
      { text: '', value: 'actions', sortable: false, class: 'tblHeader' },
    ],
    items: [],
    subjects: [],
    year: ['ชั้นปีที่ 1', 'ชั้นปีที่ 2', 'ชั้นปีที่ 3', 'ชั้นปีที่ 4'],
    term: ['เทอม 1', 'เทอม 2'],
    editedIndex: -1,
    editedItem: {
      // year: ['ชั้นปีที่ 1', 'ชั้นปีที่ 2', 'ชั้นปีที่ 3', 'ชั้นปีที่ 4'],
      // term: ['เทอม 1', 'เทอม 2'],
      GradID: '',
      // SubjectID: '',
      // SubjectNameTH: '',
      // Credit: '',
      subject: { SubjectID: [], SubjectNameTH: [], Credit: [] },
      Grade: '',
      subjectname: '',
      subjectid: '',
      subjectcredit: '',
      IsActive: '',
    },
    defaultItem: {
      // year: ['ชั้นปีที่ 1', 'ชั้นปีที่ 2', 'ชั้นปีที่ 3', 'ชั้นปีที่ 4'],
      // term: ['เทอม 1', 'เทอม 2'],
      GradID: '',
      // SubjectID: '',
      // SubjectNameTH: '',
      // Credit: '',
      subject: { SubjectID: [], SubjectNameTH: [], Credit: [] },
      Grade: '',
      subjectname: '',
      subjectid: '',
      subjectcredit: '',
      IsActive: '',
    },
    rules: {
      required: (value) => !!value || 'Required.',
      // min: v => v && v.length >= 6 || 'Min 6 characters',
    },
  }), // สิ้นสด data
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Add Item' : 'Edit Item'
    },

    /* filteredSub() {
        return this.subjects.filter(x  => '' + x.class === this.cls)
      } */
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
        this.items = await this.$axios.$get('/grade')
        this.subjects = await this.$axios.$get('/subject')
        this.items.forEach((x) => {
          x.subjectid = x.subject.SubjectID
          x.subjectname = x.subject.SubjectNameTH
          x.subjectcredit = x.subject.Credit
        })
        console.log(this.subjects)
        // const res = await this.$axios.$get('/subject')
        // console.log(res.data)
        // this.subjects = res.data.subject
        // this.$axios.$get(`/subject/${this.SubjectNameTH}`)
        // console.log(`ID: ${ this.subjects.SubjectID }== Name: ${ this.subjects.SubjectNameTH }`)
        // console.log(this.subjects);
      } catch (error) {
        console.error(error)
      }
    },

    itemRowBackground(item) {
      return (
        // eslint-disable-next-line no-sequences
        this.items.indexOf(item) % 2 === 0 ? 'style-1' : 'style-2',
        this.subjects.indexOf(item) % 2 === 0 ? 'style-1' : 'style-2'
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
          this.editedItem.UpdateBy = 'x'
          await this.$axios.$patch(
            `/grade/${this.editedItem.SubjectID}`,
            this.editedItem
          )
        } else {
          this.editedItem.CreateBy = this.editedItem.UpdateBy = 'student'
          await this.$axios.$post(`/grade`, this.editedItem)
        }
        /* this.$alert.showMessage({
          content: 'บันทึกข้อมูลเรียบร้อย',
          type: 'success',
        }) */
        this.loadGrid()
        this.close()
      } catch (error) {
        console.error(error)
      }
    },
    async deletesuccess() {
      try {
        await this.$axios.$delete(`/grade/${this.editedItem.SubjectID}`)
        /* this.$alert.showMessage({
          content: 'บันทึกเรียบร้อย',
          type: 'success'
        }); */
      } catch (error) {
        console.error(error)
      }
    },
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
