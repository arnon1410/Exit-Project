<template>
  <v-snackbar
    v-model="show"
    :color="color"
    :top="top"
    :timeout="timeout"
    height="20"
  >
    <div class="text-center text-h6">
      {{ message }}
    </div>
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      top: true,
      message: "",
      color: "",
      timeout: 2000
    };
  },
  created() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === "snackbar/showMessage") {
        this.message = state.snackbar.content;
        switch (state.snackbar.type) {
          case "success":
            this.color = "green darken-1";
            break;
          case "error":
            this.color = "red lighten-1";
            break;
          case "info":
            this.color = "blue lighten-1";
            break;
          case "warning":
            this.color = "amber darken-1";
            break;
        }
        this.show = true;
      }
    });
  }
};
</script>