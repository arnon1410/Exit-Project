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
                    <v-card-title class="justify-center">{{TotalAllpage.toFixed(2)}}</v-card-title>
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
                        <p v-if="TotalAllpage === ''">รอพินิจ</p>
                        <p v-else>ปกติ</p>
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
                      <v-card-title class="justify-center">{{pageActivityCount}}/150</v-card-title>
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
    dialog: false,
    dialogDelete: false,

    items: [],
    subjects: [],
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
    Credit: '',
    subtotal:'',
    Alltotal:0,
    ActivityCount: '',

  }), // สิ้นสุด data
  computed: {

    pageCredit() {
      return $array.sum(this.detailsWithSubTotal, 'Credit')
    },
// บรรทัดบนเป็น Filter
    Totalpage() {
      return $array.sum(this.detailsWithSubTotal, 'subtotal')
      
    },
    TotalAllpage() {
      return $array.sum(this.detailsWithSubTotal, 'subtotal2')
      
    },
    pageActivityCount() {
      return $array.sum(this.activity, 'ActivityCount')
      
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
        this.activity = await this.$axios.$get('/activity')
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
