<template>
  <v-container>
    <v-card-title>ตรวจสอบผลการเรียน</v-card-title>
    <v-data-table
      :headers="headers"
      :items="filteritems"
      :item-class="itemRowBackground"
      item-key="GradeID"
      class="elevation-1"
      sort-by=""
    >
    <template #header>
					<tr class="grey lighten-3">
						<th v-for="header in headers" :key="header.text">
							<div v-if="filters.hasOwnProperty(header.value)">
								<v-autocomplete
									v-model="filters[header.value]"
									flat
									hide-details
									multiple
									attach
									chips
									dense
									clearable
									:items="columnValueList(header.value)"
								>
                <template #selection="{ item, index }">
                      <v-chip v-if="index < 5">
											 <span>
                        {{ item }}
                      </span>
										</v-chip>
										<span v-if="index === 5" class="grey--text caption" >
                      (+{{ filters[header.value].length - 5 }} others)
                      </span>
									</template>
								</v-autocomplete>
							</div>
						</th>
					</tr>
				</template>


      <template #top>
        <v-toolbar flat>
          <v-autocomplete
            v-model="editedItem.Year"
            :items="Years"
            item-text="text"
            item-value="value"
            label="ปีการศึกษา"
            class="pa-2"
            single-line
            hide-details
          ></v-autocomplete>
          <v-spacer></v-spacer>
          <v-autocomplete
            v-model="editedItem.Term"
            :items="term"
            label="เทอม"
            class="pa-2"
            single-line
            hide-details
          ></v-autocomplete>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" width="600px">
            <template #activator="{ on, attrs }">
              <v-btn color="primary" class="mx-3" v-bind="attrs" 
                :disabled="editedItem.Year === '' || editedItem.Term === ''"
                v-on="on">
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
                      <v-col cols="6">
                        <v-autocomplete
                          v-model="editedItem.SubjectID"
                          :rules="[rules.required]"
                          :items="subjects"
                          placeholder=""
                          item-text="ShowText"
                          item-value="SubjectID"
                          label="เลือกรายวิชา"
                          hide-details
                          hide-no-data
                          hide-selected
                          clearable
                          @change="OnSelectedSubject"
                        ></v-autocomplete>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="6">
                        <v-text-field
                          v-model="Credit"
                          label="หน่วยกิต"
                          readonly
                        ></v-text-field>
                      </v-col>
                      <v-col cols="6">
                        <v-autocomplete
                          v-model="editedItem.Grade"
                          :rules="[rules.required]"
                          :items="Grades"
                          placeholder=""
                          label="เกรด"
                          hide-details
                          hide-no-data
                          hide-selected
                          clearable
                        ></v-autocomplete>
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
                >ยืนยันการลบข้อมูล
                {{ editedItem.SubjectNameTH }}
                ?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="gray darken-1" text @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn color="red darken-1" text @click="ConfirmDelete"
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
                        <th></th>
                        <th class="title text-center">{{ pageCredit }}</th>
                        <th class="title"></th>
                        <th class="title text-center">{{ Totalmultiple }}</th>
                        <th class="title text-center">{{ Totalmultiple.toFixed(2) / pageCredit.toFixed(2) }}</th>
                    </tr>
                </template>

                <template slot="body.append">
                    <tr class="green--text">
                        <th class="title">สถานภาพ</th>
                       
                        <th class="title text-center" v-if="Totalmultiple.toFixed(2) / pageCredit.toFixed(2) > 2">ปกติ</th>
                        <th class="title text-center" v-else>รอพินิจ</th>
   
                        <th class="title text-right">สะสม</th>
                        <th class="title text-center">{{ TotalCredit }}</th>
                        <th class="title"></th>
                        <th class="title text-center">{{ TotalmultipleAll }}</th>
                        <th class="title text-center">{{ TotalmultipleAll.toFixed(2) / TotalCredit.toFixed(2)  }}</th>
                    </tr>
                </template>

      <template #[`item.actions`]="{ item }">
      <v-row>
        <v-icon color="orange" medium @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon color="red" medium @click="deleteItem(item)">
          mdi-delete
        </v-icon>
      </v-row>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>

import { $array } from 'alga-js'

export default {
  layout: 'Aftermain',
  data: () => ({
    totalmultiple: 0,
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: 'ปีการศึกษา',
        align: 'center',
        value: 'Year',
        sortable: false,
        class: 'teal darken-2 white--text',
      },
      {
        text: 'เทอม',
        align: 'center',
        value: 'Term',
        sortable: false,
        class: 'teal darken-2 white--text',
      },
      {
        text: 'รหัสวิชา',
        align: 'center',
        value: 'SubjectID',
        sortable: false,
        class: 'teal darken-2 white--text',
      },
      {
        text: 'ชื่อวิชา',
        align: 'center',
        value: 'SubjectNameTH',
        sortable: false,
        class: 'teal darken-2 white--text',
      },
      {
        text: 'หน่วยกิต',
        align: 'center',
        value: 'Credit',
        sortable: false,
        class: 'teal darken-2 white--text',
      },
      { 
      text: 'เกรด',
      align: 'center', 
      value: 'Grade', 
      sortable: false, 
      class: 'teal darken-2 white--text' 
      },
      {
      text: 'ผลคูณเกรดและหน่วยกิต',
      align: 'center', 
      value: 'subtotal', 
      sortable: false, 
      class: 'teal darken-2 white--text' 
      },
      {
      text: 'GPA',
      align: 'center', 
      value: 'actions', 
      sortable: false, 
      class: 'teal darken-2 white--text' 
      },
    ],
    filters: {
      GradeID: [],
      SubjectID: [],
      SubjectNameTH: [],
      Credit: [],
      Grade: [],
      Term: [],
      Year: [],
    },
    items: [],
    subjects: [],
    editedIndex: -1,
    editedItem: {
      GradeID: '',
      Grade: '',
      Term: '',
      Year: '',
      StudentID: '',
      SubjectID: '',
    

      
    },
    defaultItem: {
      GradeID: '',
      Grade: '',
      Term: '',
      Year: '',
      StudentID: '',
      SubjectID: '',

    },
    rules: {
      required: (value) => !!value || 'Required.',
      
    },
    Credit: '',
    subtotal:'',
    Alltotal:0,
    Years: [{text: 'ชั้นปีที่ 1', value: 1}, {text: 'ชั้นปีที่ 2', value: 2}, {text: 'ชั้นปีที่ 3', value: 3}, {text: 'ชั้นปีที่ 4', value: 4}, {text: 'ชั้นปีที่ 5', value: 5}, {text: 'ชั้นปีที่ 6', value: 6}, {text: 'ชั้นปีที่ 7', value: 7}],
    term: [{text: 'เทอม 1', value: 1}, {text: 'เทอม 2', value: 2}, {text: 'เทอม 3', value: 3}],
    Grades: [
      {text: 'A', value: 4}, 
      {text: 'B+', value: 3.5}, 
      {text: 'B', value: 3}, 
      {text: 'C+', value: 2.5}, 
      {text: 'C', value: 2}, 
      {text: 'D+', value: 1.5},  
      {text: 'D', value: 1}, 
      {text: 'F', value: 0},],

  }), // สิ้นสด data
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'เพิ่มรายวิชา' : 'แก้ไขรายวิชา'
    },

    filteritems() {
      return this.items.filter((d) => {
					return Object.keys(this.filters).every((f) => {
						return this.filters[f].length < 1 || this.filters[f].includes(d[f]);
					});
				}).map((detail) => ({
        ...detail,
        subtotal: detail.Grade * detail.Credit,
        subtotal2: detail.Grade / detail.Credit,
        source: detail, 
        // หารผลรวม
      }));
      
    },

    pageCredit() {
      return $array.sum(this.filteritems, 'Credit')
    },
    TotalCredit() {
      return $array.sum(this.items, 'Credit')
    },
// บรรทัดบนเป็น Filter
    Totalmultiple() {
      return $array.sum(this.filteritems, 'subtotal')
    },
    TotalmultipleAll() {
      return $array.sum(this.detailsWithSubTotal, 'subtotal')
    },
    SumGPA() {
      return $array.sum(this.filteritems, 'subtotal2')
      
    },
    SumGPAAll() {
      return $array.sum(this.detailsWithSubTotal, 'subtotal2')
      
    },
    detailsWithSubTotal() {
      return this.items.map((detail) => ({
        ...detail,
        subtotal: detail.Grade * detail.Credit,
        subtotal2: detail.Grade / detail.Credit,
        source: detail, 
        // หารผลรวม
      }));

  
    }
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
        if (this.items) {
          this.items.forEach((x) => {
            x.SubjectID = x.subject.SubjectID
            x.SubjectCode = x.subject.SubjectCode
            x.SubjectNameTH = x.subject.SubjectNameTH
            x.Credit = x.subject.Credit
          })
        }

        this.subjects = await this.$axios.$get('/subject')
        this.subjects.forEach(x => {
          x.ShowText = x.SubjectID + ' - ' + x.SubjectNameTH
        });

      } catch (error) {
        console.error(error)
      }
    },

    OnSelectedSubject(subjectID) {
      if (subjectID)
        this.Credit = this.subjects.filter(x=>x.SubjectID === subjectID)[0].Credit
      else
        this.Credit = ''
    },
    columnValueList(val) {
				return this.items.map((d) => d[val]);
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

      this.Credit = item.Credit
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
      })

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
          this.editedItem.subject = this.subjects.filter(x => x.SubjectID === this.editedItem.SubjectID)[0];
          this.editedItem.UpdateBy = this.$auth.user.StudentID;
          await this.$axios.$patch(
            `/grade/${this.editedItem.GradeID}`,
            this.editedItem
          )
        } else {
          this.editedItem.users = this.$auth.user;
          this.editedItem.subject = this.subjects.filter(x => x.SubjectID === this.editedItem.SubjectID)[0];
          this.editedItem.CreateBy = this.editedItem.UpdateBy = this.$auth.user.StudentID;
          await this.$axios.$post(`/grade`, this.editedItem)
        }
        this.loadGrid()
        this.close()
      } catch (error) {
        console.error(error)
      }
    },
    async ConfirmDelete() {
      try {
        await this.$axios.$delete(`/grade/${this.editedItem.GradeID}`)
        this.loadGrid()
        this.closeDelete()
      } catch (error) {
        console.error(error)
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
