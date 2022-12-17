export const authModule = {
  state: {
    isAuth: false,
    authError: {
      isError: false,
      errMessage: "",
    },
  },
  mutations: {
    setIsAuth(state, isAuth) {
      state.isAuth = isAuth;
    },
    setAuthError(state, error) {
      state.authError = error;
    },
  },
  getters: {},
  actions: {
    authorization({ commit }, formData) {
      if (formData.login === "root@gmain.com" && formData.pass === "123") {
        commit("setIsAuth", true);
      } else {
        commit("setAuthError", {
          isError: false,
          errMessage: "Invalid Login or Password",
        });
      }
    },
  },
  namespaced: true,
};
