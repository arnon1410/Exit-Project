export const mutations = {
    set_drawer(state, newVal) {
      state.drawer = newVal
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

export const state = () => ({
  drawer: false,
  busy: false,
  loggedIn: false,
  strategy: "local",
  user: false
});


