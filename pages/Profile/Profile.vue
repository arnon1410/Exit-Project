<template>
<div v-if="loggedIn">
  <v-form >
    <v-container>
        <v-row class="mb-6" justify="space-around">
          <v-avatar size="78">
      <img
        src="https://images.news18.com/ibnlive/uploads/2021/07/1627371749_jungkook.jpg"
        alt="๋JK"
      >
    </v-avatar>
      </v-row>
      <v-container style="max-width">
  
        <v-row justify="center">
          <v-col cols="5" md="3">
          
            <v-text-field
              v-model="user.UserName" 
              label="Username"
              placeholder="Username"
            ></v-text-field>
          </v-col>

          <v-col cols="5" md="3">
            <v-text-field 
              v-model="user.StudentID" 
              label="StudentID" 
              placeholder="StudentID"
              >{{user.StudentID}}</v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <v-row justify="center">
        <v-col cols="12" sm="6" md="6">
          <v-text-field
            v-model="user.Email" 
            label="" 
            placeholder="Email"
          >{{user.Email}}</v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" sm="6" md="6">
          <v-text-field 
            v-model="user.Faculty" 
            label="Faculty" 
            placeholder="Faculty"
          >{{user.Faculty}}</v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" sm="6" md="6">
          <v-text-field
            v-model="user.Faculty"  
            label="Major" 
            placeholder="Major"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" sm="6" md="6">
          <v-text-field
            v-model="user.Password"
            :hint="
              !isEditing ? 'Click the icon to edit' : 'Click the icon to save'
            "
            label="Password"
            type="password"
            persistent-hint
          >
            <template #append-outer>
              <v-slide-x-reverse-transition mode="out-in">
                <v-icon
                  :key="`icon-${isEditing}`"
                  :color="isEditing ? 'success' : 'info'"
                  @click="isEditing = !isEditing"
                  v-text="
                    isEditing ? 'mdi-check-outline' : 'mdi-circle-edit-outline'
                  "
                ></v-icon>
              </v-slide-x-reverse-transition>
            </template>
          </v-text-field>
        </v-col>
      </v-row>
      <v-container fluid class="text-center">
        <v-row class="flex" justify="space-between">
          <v-col cols="12">
            <v-btn color="teal darken-2" dark>บันทึก</v-btn>
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
      user: this.$auth.user,
      loggedIn: this.$auth.loggedIn,

      isEditing: false,
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
