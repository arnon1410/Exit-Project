export const mutations = {
    set_drawer(state, newVal) {
      state.drawer = newVal
    },
    SET_SNACKBAR(state, snackbar) {
      state.snackbars = state.snackbars.concat(snackbar);
    },
    showMessage(state, payload) {
      state.content = payload.content;
      state.type = payload.type;
    }
}
export const getters = {
  authenticated(state) {
      return state.loggedIn;
  },
  user(state) {
      return state.user;
  }
};

export const actions = {
  setSnackbar({commit}, snackbar) {
    snackbar.showing = true;
    snackbar.color = snackbar.color || 'success';
    commit('SET_SNACKBAR', snackbar);
  },
}

export const state = () => ({
  content: "",
  type: "",
  drawer: false,
  busy: false,
  loggedIn: false,
  strategy: "local",
  user: false
});


