<template>
<div>
  <v-card class="flexcard" height="300" color="teal lighten-4">
    <v-img
              :src="require('@/assets/img/bgDrawer.jpg')"
              class="white--text align-center"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="300px"
            >
              <v-card-title class="justify-center">{{title}}</v-card-title>
            </v-img>
  </v-card>

  <v-container id="features" fluid  class="mt-2">
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="space-around">
            <v-col
              v-for="(feature, i) in features"
              :key="i"
              cols="12"
              sm="3"
              class="text-center"

            >
              <v-hover v-slot:default="{ hover }">
                <v-card
                  :color="feature.colors"
                  class="card"
                  outlined
                  height="220"
                  :elevation="hover ? 10 : 4"
                  :class="{ up: hover }"
                >
                  <v-img
                    :src="feature.img"
                    max-width="90px"
                    class="d-block ml-auto mr-auto"
                    :class="{ 'zoom-efect': hover }"
                  ></v-img>
                  <v-card-title class="justify-center">{{ feature.title }}</v-card-title>
                  <!-- <h1 class="font-weight-regular">{{ feature.title }}</h1> -->
                  <v-btn
                      v-on="feature in features"
                      :key="feature"
                      :to="feature.to"
                      outlined
                      dark
                      fab
                    >
                      <v-icon class="text-center" large>{{ feature.icon }}</v-icon>
                  </v-btn>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
</div>
</template>
<script>
export default {
  middleware: 'auth',
  layout: 'Aftermain',
   data: () => ({
      title: 'STUDY PLAN AND STUDENT ACTIVITY CHECKING SYSTEM',
      dialog: false,
      videoId: "Vx40Otu_jYs",
      features: [
        {
          img: require("@/assets/img/udash3.png"),
          title: "การจัดการรายวิชา",
          icon: 'mdi-arrow-right-bold',
          colors: "#00c0ef",
          to: '/Admin/ManageSubject',
        },
        {
          img: require("@/assets/img/udash4.png"),
          title: "การจัดการกิจกรรม",
          icon: 'mdi-arrow-right-bold',
          colors: '#00a65a',
          to: '/Admin/ManageActivity',
        },
        {
          img: require("@/assets/img/Ad3.png"),
          title: "การจัดการผู้ใช้",
          icon: 'mdi-arrow-right-bold',
          colors: '#f39c12',
          to: '/Admin/ManageUser',
        },
        {
          img: require("@/assets/img/Ad4.png"),
          title: "บัญชีผู้ใช้",
          icon: 'mdi-arrow-right-bold',
          colors: '#d9534f',
          to: '/Profile/Profile',
        },
      ],
    }),
  }
</script>

