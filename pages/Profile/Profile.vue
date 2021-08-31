<template>
  <v-form>
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
              label="Username"
              placeholder="Username"
            ></v-text-field>
          </v-col>

          <v-col cols="5" md="3">
            <v-text-field label="ID" placeholder="ID"></v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <v-row justify="center">
        <v-col cols="12" sm="6" md="6">
          <v-text-field
            label="Email address"
            placeholder="Email address"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" sm="6" md="6">
          <v-text-field label="Faculty" placeholder="Faculty"></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" sm="6" md="6">
          <v-text-field label="Major" placeholder="Major"></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" sm="6" md="6">
          <v-text-field
            v-model="model"
            :hint="
              !isEditing ? 'Click the icon to edit' : 'Click the icon to save'
            "
            label="Password"
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
</template>

<script>
export default {
  layout: 'Aftermain',
  data() {
    return {
      isEditing: false,
      model: null
    }
  }
}
</script>
