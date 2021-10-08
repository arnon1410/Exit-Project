//รวมหน้าlanding ต่างๆ เข้าด้วยกัน
<template>
  <v-app>
    <navigation />
    <v-main class="pt-0">
      <home />
      <about />
      <download />
      <pricing />
      <contact />
    </v-main>
    <foote />
  </v-app>
</template>

<script>
import navigation from "~/components/Navigation.vue";
import foote from "~/components/Footer.vue";
import home from "~/components/HomeSection.vue";
import about from "~/components/AboutSection.vue";
import download from "~/components/DownloadSection.vue";
import pricing from "~/components/PricingSection.vue";
import contact from "~/components/ContactSection.vue";

export default {
  name: "App",
  components: {
    navigation,
    foote,
    home,
    about,
    download,
    pricing,
    contact,
  },

  data: () => ({
    fab: null,
    color: "",
    flat: null,
  }),  
  watch: {
    fab(value) {
      if (value) {
        this.color = "secondary";
        this.flat = false;
      } else {
        this.color = "transparent";
        this.flat = true;
      }
    }
  }
}
</script>

<style scoped>
.v-main {
  /*background-image: url("~@/assets/img/bgMain.png");*/
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
</style>

