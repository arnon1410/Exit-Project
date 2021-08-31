<template>
  <section id="download">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col sm="5" class="hidden-xs-only">
              <v-img :src="require('@/assets/img/ill2.svg')" class="d-block ml-auto mr-auto" max-width="350px" />
            </v-col>
            <v-col cols="11" sm="6" class="white--text text-left">
                  <v-card color="#385F73" width="500" class="elevation-4 text-left" dark >
                    <v-card-title class="text-h5-center">Sign in</v-card-title>
                    <v-card-text>
                      <v-form>
                        <v-text-field 
                          v-model="email" 
                          dark 
                          label="Email" 
                          outlined type="text">
                        </v-text-field>
                        <v-text-field
                          outlined
                          label="password" 
                          :type="show ?'text': 
                          'password'"
                          :append-icon="show ?'mdi-eye':'mdi-eye-off'"   
                          @click:append="show=!show">
                        </v-text-field> 
                      </v-form>
                    </v-card-text>
                    <v-card-actions class="text-center">
                      <v-btn rounded outlined dark color="green" depressed large @click="$vuetify.goTo('#contact')"> forget password </v-btn> 
                      <v-spacer />
                      <v-btn rounded dark color="primary" class="login-button"  depressed large @click="signin" > Sign In </v-btn>
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
export default {
  data() {
    return {
      show:false,
      email: "",
      password: ""
    }
  },
    methods: {
    signin() {
      const UserData = {
        email: this.email,
        password: this.password
      };
      this.submitToServer(UserData);
      this.$router.push('/dashboard');
    },
    submitToServer(data){
      console.log(data);
    },
  }


  
     }
</script>
<style scoped>
#download {
  background-image: url("~@/assets/img/bgDownload.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 600px;
}

#download .container,
#download .row {
  height: 100%;
}
</style>