<template>
  <v-card class="flexcard" style="height: 100%" color="teal lighten-5">
    <v-card-title class="font-weight-black" >{{title}}</v-card-title>
      <v-container fluid grid-list-md>
        <v-row align="center" justify="center">
          <v-col cols="10">
            <v-row align="center" justify="center">
              <v-col cols="12" md="7">
                <v-col>
                  <v-row>
                    <v-card class="text-center ma-2" color="pink lighten-1" width="240" height="240">
                      <v-img
                          :src="require('@/assets/img/udash1.png')"
                          max-width="70px"
                          class="d-block ml-auto mr-auto ma-2">
                      </v-img>
                    <v-card-title class="justify-center">ผลการเรียนสะสม</v-card-title>
                    <v-card-title class="justify-center">{{Totalmultiple.toFixed(2) / pageCredit.toFixed(2)}}</v-card-title>
                    </v-card>
                    <v-card class="text-center ma-2" color="light-blue accent-3" width="240" height="240">
                      <v-img
                          :src="require('@/assets/img/udash2.png')"
                          max-width="70px"
                          class="d-block ml-auto mr-auto ma-2">
                      </v-img>
                    <v-card-title class="justify-center">สถานภาพการศึกษา</v-card-title>
                    <v-card-title class="justify-center">
                      <div id="parent">
                        <p v-if="Totalmultiple.toFixed(2) / pageCredit.toFixed(2) > 2">ปกติ</p>
                        <p v-else>รอพินิจ</p>
                      </div>
                    </v-card-title>
                    </v-card>
                </v-row>
                </v-col>
                <v-col>
                  <v-row>
                    <v-card class="text-center ma-2" color="orange darken-1" width="240" height="240">
                      <v-img
                          :src="require('@/assets/img/udash3.png')"
                          max-width="70px"
                          class="d-block ml-auto mr-auto ma-2">
                      </v-img>
                      <v-card-title class="justify-center">หน่วยกิตสะสม</v-card-title>
                      <v-card-title class="justify-center">{{pageCredit}}/147</v-card-title>
                    </v-card>
                    <v-card class="text-center ma-2" color="amber darken-1" width="240" height="240">
                      <v-img
                          :src="require('@/assets/img/udash4.png')"
                          max-width="70px"
                          class="d-block ml-auto mr-auto ma-2">
                      </v-img>
                      <v-card-title class="justify-center">ชั่วโมงกิจกรรมสะสม</v-card-title>
                      <v-card-title class="justify-center">{{ActivityCount}}/150</v-card-title>
                    </v-card>
                  </v-row>
                </v-col>
              </v-col>
              <v-col cols="12" md="5" class="text-center d-none d-md-flex">
              <v-img :src="require('@/assets/img/dash.png')" class="d-block ml-auto mr-auto" max-width="400px" />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>

      </v-card>
</template>

<script>
import { $array } from 'alga-js'
export default {

  layout: 'Aftermain',
  data: () => ({
    title: 'STUDY PLAN AND STUDENT ACTIVITY CHECKING SYSTEM',
    dialog: false,
    dialogDelete: false,
    items: [],
    subjects: [],
    activity:[],
    editedIndex: -1,
    editedItem: {
      GradID: '',
      Grade: '',
      Term: '',
      Year: '',
      StudentID: '',
      SubjectID: '',
      ActivityID: '',
      ActivityType: '',
      ActivityName: '',
      ActivityCount: '',
      IsActive: '',

    },
    defaultItem: {
      GradID: '',
      Grade: '',
      Term: '',
      Year: '',
      StudentID: '',
      SubjectID: '',

      ActivityID: '',
      ActivityType: '',
      ActivityName: '',
      ActivityCount: '',
      IsActive: '',

    },
    rules: {
      required: (value) => !!value || 'Required.',

    },
    Credit: 0,
    subtotal:'',
    Alltotal:0,
    ActivityCount: 0,

  }), // สิ้นสุด data
  computed: {

    pageCredit() {
      return $array.sum(this.detailsWithSubTotal, 'Credit')
    },
// บรรทัดบนเป็น Filter
    Totalmultiple() {
      return $array.sum(this.detailsWithSubTotal, 'subtotal')

    },
    TotalAllpage() {
      return $array.sum(this.detailsWithSubTotal, 'subtotal2')

    },
     pageActivityCount() {
      return $array.sum(this.detailsWithSubTotal, 'subtotal3')

     },


    detailsWithSubTotal() {
      return this.items.map((detail) => ({
        ...detail,
        subtotal: detail.Grade * detail.Credit,
        subtotal2: detail.Grade / detail.Credit,
        subtotal3: detail.ActivityCount,

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
        this.activity = await this.$axios.$get(`/activity/ByUserID/${this.$auth.user.StudentID}`)
        this.ActivityCount = $array.sum(this.activity, 'ActivityCount')
        
        this.items = await this.$axios.$get(`/grade/ByUserID/${this.$auth.user.StudentID}`);
        if (this.items) {
          // this.subjects = await this.$axios.$get('/subject')
          this.items.forEach((x) => {
            // x.SubjectID = x.subject.SubjectID
            // x.SubjectCode = x.subject.SubjectCode
            // x.SubjectNameTH = x.subject.SubjectNameTH
            x.Credit = x.subject.Credit
            /* x.subjectid = x.subject.SubjectID
          x.SubjectCode = x.subject.SubjectCode
          x.subjectname = x.subject.SubjectNameTH
          x.subjectcredit = x.subject.Credit */
          })
        }
        // if (this.items) {
        //   this.items.forEach((x) => {
        //     this.Credit = this.Credit + +x.subject.Credit
        //   })
        // }

        this.subjects = await this.$axios.$get('/subject')
        this.subjects.forEach(x => {
          x.ShowText = x.SubjectID + ' - ' + x.SubjectNameTH
        },
        );
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
