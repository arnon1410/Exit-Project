<template>
  <section id="pricing" class="pb-8">
    <v-container fluid>
      <v-row align="center" justify="center" >
        <v-col cols="4" >
          <v-card>
            <h2 class="text-center pt-6 font-weight-light display-1">Sign Up</h2>
            <v-divider class="my-6"></v-divider>
                    <v-card-text>
               <v-form ref="form" lazy-validation>
                  <v-row>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field 
                          v-model="registrationinfo.StudentID" 
                          :rules="[rules.required]" 
                          label="Student ID" 
                          maxlength="10" 
                          outlined 
                          required 
                          @keydown.enter="registaionUser">
                        </v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field 
                          v-model="registrationinfo.Name" 
                          :rules="[rules.required]" 
                          label="Name" 
                          maxlength="20" 
                          outlined 
                          required 
                          @keydown.enter="registaionUser">
                        </v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field 
                        v-model="registrationinfo.Email" 
                        :rules="emailRules" 
                        label="E-mail" 
                        outlined required 
                        @keydown.enter="registaionUser">
                      </v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field 
                          v-model="registrationinfo.UserName"  
                          :rules="[rules.required]" 
                          label="Username" 
                          outlined 
                          required 
                          @keydown.enter="registaionUser">
                        </v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field 
                          v-model="registrationinfo.Password" 
                          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" 
                          :rules="[rules.required, rules.min]" 
                          :type="show1 ? 'text' : 'password'" 
                          name="input-10-1" 
                          label="Password" 
                          hint="At least 8 characters" 
                          counter 
                          outlined 
                          @click:append="show1 = !show1" 
                          @keydown.enter="registaionUser"></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="6" md="6">
                        <v-text-field 
                          v-model="registrationinfo.Faculty" 
                          :rules="[rules.required]" 
                          label="Faculty" 
                          maxlength="20" 
                          outlined 
                          required 
                          @keydown.enter="registaionUser">
                        </v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field 
                          v-model="registrationinfo.Major" 
                          :rules="[rules.required]" 
                          label="Major" 
                          maxlength="20" 
                          outlined 
                          required 
                          @keydown.enter="registaionUser">
                        </v-text-field>
                      </v-col>
                      <v-spacer></v-spacer>
                        <!--<v-col class="d-flex ml-auto" cols="6" sm="3" xsm="6">
                           <v-btn x-large block :disabled="!valid" color="success" @click="validate">Register</v-btn>
                      </v-col>-->
                      </v-row>
                  </v-form>
              </v-card-text>
              <v-card-actions class="text-center">
                      <v-btn rounded outlined dark color="green"  depressed large> forget password </v-btn> 
                      <v-spacer />
                      <v-btn rounded dark color="primary" class="login-button" depressed large  @click="registaionUser">Sign up</v-btn>
                    </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <div class="svg-border-rounded text-light">
      <!-- <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 144.54 17.34"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path
          d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"
        />
      </svg> -->
      <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="currentColor"
      >
        <path
            d="M0,64L80,90.7C160,117,320,171,480,181.3C640,192,800,160,960,138.7C1120,117,1280,107,1360,101.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </div>
  </section>
</template>

<script>
export default {
  
  data: () => ({
      loading: false,
      dialog: true,
      tab: 0,
      tabs: [
          {name:"Login", icon:"mdi-account"},
          {name:"Register", icon:"mdi-account-outline"}
      ],
      valid: false,
      registrationinfo:{
        StudentID: "",
        Name: "",
        Email: "",
        UserName: "",
        Password: "",
        Faculty:"",
        Major:"",
        IsActive:true,
        CreateBy:"",
        UpdateBy:"",
      },
      verify: "",
      loginPassword: "",
      loginEmail: "",
      loginEmailRules: [
        v => !!v || "Required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      emailRules: [
        v => !!v || "Required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],

      show1: false,
      
      rules: {
        required: value => !!value || "Required.",
        min: v => (v && v.length >= 8) || "Min 8 characters"
      }
      
      
  }),
  methods: {
    async registaionUser() {
      if (!this.$refs.form.validate()) return;
        try {

          await this.$axios.post('/users', this.registrationinfo)
          this.$router.push('/')

        } catch {
          this.$store.dispatch('snackbar/setSnackbar', {color: 'red', text: 'There was an issue signing up.  Please try again.'})
        }
    }
  }
}
</script>

<style lang="scss">
$main_color: #283e79;

ul {
  font-size: 13px;
  line-height: 1.5em;
  margin: 5px 0 15px;
  padding: 0;

  li {
    list-style: none;
    position: relative;
    padding: 0 0 0 20px;
  }

  li {
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 5px;
      width: 10px;
      height: 10px;
      background-color: $main_color;
      border-radius: 50%;
      -moz-border-radius: 50%;
      -webkit-eeborder-radius: 50%;
    }
  }
}
</style>

<style scoped>

.header {
  background-color: #283e79;
  color: white;
}

.circle1 {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  background-color: #f0f8ff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle2 {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background-color: #e0effc;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.svg-border-rounded svg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  color: #f4f7f5;
  z-index: -1;
}

#pricing {
  z-index: 0;
}

.content {
  z-index: 1;
}

svg {
  overflow: hidden;
}

section {
  position: relative;
}
</style>

