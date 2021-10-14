<template>
<div v-if="loggedIn">
  <v-form ref="form" lazy-validation>
    <v-container>
        <v-row class="mb-6" justify="space-around">
          <v-avatar size="78">
      <img
        src="data:image/jpeg;base64,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"
        alt="๋KU"
      >
    </v-avatar>
      </v-row>
      <v-container style="max-width">
        <v-row justify="center">
          <v-col cols="5" md="3">
            <v-text-field 
              v-model="userprofile.StudentID" 
              label="StudentID" 
              placeholder="StudentID"
              @keydown.enter="UpdateUser">
              </v-text-field>

          </v-col>

          <v-col cols="5" md="3">
            <v-text-field
              v-model="userprofile.UserName" 
              label="Username"
              placeholder="Username"
              @keydown.enter="UpdateUser"> 
            </v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <v-row justify="center">
        <v-col cols="12" sm="6" md="6">
          <v-text-field
            v-model="userprofile.Email" 
            label="Email" 
            placeholder="Email"
            @keydown.enter="UpdateUser">
          </v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" sm="6" md="6">
          <v-text-field 
            v-model="userprofile.Faculty" 
            label="Faculty" 
            placeholder="Faculty"
            @keydown.enter="UpdateUser">
          </v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" sm="6" md="6">
          <v-text-field
            v-model="userprofile.Major"  
            label="Major" 
            placeholder="Major"
            @keydown.enter="UpdateUser">
          </v-text-field>
        </v-col>
      </v-row>
       <!--<v-row justify="center">
       <v-col cols="12" sm="6" md="6">
          <v-text-field
            v-model="userprofile.Password"
            label="Password"
            type="password"
            persistent-hint
            @keydown.enter="UpdateUser">
          </v-text-field>
        </v-col>
      </v-row>-->
      <v-container fluid class="text-center">
        <v-row class="flex" justify="space-between">
          <v-col cols="12">
            <v-btn color="teal darken-2" dark  @click="UpdateUser">บันทึก</v-btn>
            <v-btn color="error">ยกเลิก</v-btn>
          </v-col>
        </v-row>

      </v-container>
    </v-container>
  </v-form>
  </div>
</template>

<script>
export default {
  layout: 'Aftermain',
  data() {
    return {
      loggedIn: this.$auth.loggedIn,
      userprofile:{
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
    }
  },
  
  created() {
    this.loadData();
  },

  methods: {
    loadData() {
      Object.assign(this.userprofile, this.$auth.user);
    },
    async UpdateUser() {
      if (!this.$refs.form.validate()) return;
        try {
          this.userprofile.UpdateBy = this.$auth.user.StudentID;
          await this.$axios.$patch(`/users/${this.$auth.user.StudentID}`, this.userprofile)
          this.$router.push('/Dashboard')

        } catch {
          this.$store.dispatch('snackbar/setSnackbar', {color: 'red', text: 'There was an issue signing up.  Please try again.'})
        }
    }
  }


}
</script>