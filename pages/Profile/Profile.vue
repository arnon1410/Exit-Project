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
              v-model="user.StudentID" 
              label="StudentID" 
              placeholder="StudentID"
              @keydown.enter="UpdateUser">
              ></v-text-field>

          </v-col>

          <v-col cols="5" md="3">
            <v-text-field
              v-model="user.UserName" 
              label="Username"
              placeholder="Username"
              @keydown.enter="UpdateUser"> 
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <v-row justify="center">
        <v-col cols="12" sm="6" md="6">
          <v-text-field
            v-model="user.Email" 
            label="Email" 
            placeholder="Email"
             @keydown.enter="UpdateUser">
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" sm="6" md="6">
          <v-text-field 
            v-model="user.Faculty"
            label="Faculty" 
            placeholder="Faculty"
             @keydown.enter="UpdateUser">
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" sm="6" md="6">
          <v-text-field
            v-model="user.Major"  
            label="Major" 
            placeholder="Major"
             @keydown.enter="UpdateUser">
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" sm="6" md="6">
          <v-text-field
            v-model="user.Password"
            label="Password"
            type="password"
            persistent-hint
             @keydown.enter="UpdateUser">
          ></v-text-field>
        </v-col>
      </v-row>
      <v-container fluid class="text-center">
        <v-row class="flex" justify="space-between">
          <v-col cols="12">
            <v-btn color="teal darken-2" dark >บันทึก</v-btn>
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
  
}
</script>
