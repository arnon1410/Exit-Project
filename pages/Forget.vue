<template lang="html">
<v-app id="bgground">

<v-row align="center" justify="center">
  <v-col cols="12" sm="8" md="4" align="center">
   <v-img src="/assets/img/bgtest.png"></v-img>
    <v-card width="500" class="elevation-4 text-left" color="teal darken" shaped>
      <v-card-title>Reset password</v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field v-model="password" label="Password" prepend-icon="mdi-key" type="password"></v-text-field>
          <v-text-field v-model="password_confirm" label="Confirm Password" prepend-icon="mdi-key" type="password"></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions class="text-center">
        <v-spacer />
        <v-btn color="teal darken-2" depressed large > Reset Password </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</v-row>
 </v-app>


</template>

<script>
export default {
  data() {
    return {
      password: '',
      password_confirm: ''

    }
  },
}
</script>
<style scoped>
#bgground {
  background-image: url("~@/assets/img/fg.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 600px;
}

#bgground .container,
#bgground .row {
  height: 100%;
}
</style>




