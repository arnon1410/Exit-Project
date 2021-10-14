<template>
  <section id="contact" class="pb-8" >
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col sm="6" class="hidden-xs-only">
              <v-img :src="require('@/assets/img/forget.png')" class="d-block ml-auto mr-auto" max-width="350px" />
            </v-col>
            <v-col cols="11" sm="6" class="white--text text-left">
                  <v-card color="#006664" width="500" class="elevation-4 text-left" dark >
                    <v-card-title class="text-h5-center justify-center">Forget-password ?</v-card-title>
                        <v-card-subtitle class="text-center justify-center"> Enter the email associated with your account and we'll send an email with instructions to reset your password </v-card-subtitle>
                    <v-card-text>
                      <v-form>
                        <v-text-field
                         v-model="email"
                          dark
                          label="Email"
                          outlined type="text">
                        </v-text-field>

                      </v-form>
                    </v-card-text>
                    <v-card-actions class="text-center">

                      <v-spacer />
                      <v-btn rounded dark color="primary" class="login-button" depressed large @click="forget"  > Send </v-btn>
                    </v-card-actions>
                  </v-card>

            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
// import {db} from '@/main'

export default {
  data: () => ({
    icons: ["fa-facebook", "fa-twitter", "fa-linkedin", "fa-instagram"],
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "O campo nome é obrigatório",
      (v) => (v && v.length >= 6) || "O nome precisa ter mais de 6 caracteres",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "O campo email é obrigatório",
      (v) => /.+@.+\..+/.test(v) || "O E-mail precisa ser válido",
    ],
    textArea: "",
    textAreaRules: [
      (v) => !!v || "O campo de texto é obrigatório",
      (v) => (v && v.length >= 10) || "Mínimo de 10 caracteres",
    ],
    lazy: false,
    snackbar: {
      enabled: false,
      text: '',

    }
  }),
  methods: {
    forget() {
      const UserData = {
        email: this.email,
      };
      this.submitToServer(UserData);
      this.$router.push('/Forget');
    },
    submitToServer(data){
      console.log(data);
    },

  }
};
</script>

<style scoped>
#contact {
  background-color: #f4f7f5;
}

.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}

</style>


