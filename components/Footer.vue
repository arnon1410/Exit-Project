<template>
  <v-footer dark padless>
    <v-card flat tile class="secondary white--text text-center">
      <v-card-text>
        <v-btn
          v-for="(icon, i) in icons"
          :key="i"
          class="mx-4 white--text"
          :href="icon.link"
          target="_blank"
          icon
        >
          <v-icon size="24px">{{ icon.text }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Thank you for visiting the page.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text ">
        {{ new Date().getFullYear() }} — Education Webside
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      {
        text: "mdi-facebook",
        link: "https://web.facebook.com/groups/nisitkuse",
      },
      {
        text: "mdi-twitter",
        link: "https://mobile.twitter.com/admissionku_csc",
      },
      {
        text: "mdi-github",
        link: "",
      },
      {
        text: "mdi-instagram",
        link: "https://www.instagram.com/arnon_1410/",
      },
    ],
  }),
};
</script>

<style scoped>
.v-card {
  width: 100%;
}
</style>


