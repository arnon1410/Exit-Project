export const state = () => ({
  content: "",
  type: ""
});
    
  export const mutations = {
    SET_SNACKBAR(state, snackbar) {
      state.snackbars = state.snackbars.concat(snackbar);
    },
    showMessage(state, payload) {
      state.content = payload.content;
      state.type = payload.type;
    }
  }
    
  export const actions = {
    setSnackbar({commit}, snackbar) {
      snackbar.showing = true;
      snackbar.color = snackbar.color || 'success';
      commit('SET_SNACKBAR', snackbar);
    },
  }