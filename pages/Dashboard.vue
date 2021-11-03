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
                    <v-card  class="text-center ma-2" color="pink lighten-1" width="240" height="240">
                      <v-img
                          :src="require('@/assets/img/udash1.png')"
                          max-width="70px"
                          class="d-block ml-auto mr-auto ma-2">
                      </v-img>
                    <v-card-title class="justify-center">ผลการเรียนสะสม</v-card-title>
                    <v-card-title class="justify-center">{{grade}}</v-card-title>
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
                        <p v-if="grade === ''">รอพินิจ</p>
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
                      <v-card-title class="justify-center">{{credit}}/147</v-card-title>
                    </v-card>
                    <v-card class="text-center ma-2" color="amber darken-1" width="240" height="240">
                      <v-img
                          :src="require('@/assets/img/udash4.png')"
                          max-width="70px"
                          class="d-block ml-auto mr-auto ma-2">
                      </v-img>
                      <v-card-title class="justify-center">ชั่วโมงกิจกรรมสะสม</v-card-title>
                      <v-card-title class="justify-center">{{activitytime}}/150</v-card-title>
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

export default {
  middleware: 'auth',
  layout: 'Aftermain',
  data () {
    return {
      title: 'Dashboard'
    };
  },
  }
</script>
