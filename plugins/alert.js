export default ({ app, store }, inject) => {
    inject("alert", {
      showMessage({ content = "", type = "" }) {
        store.commit("showMessage", { content, type });
      }
    });
  };