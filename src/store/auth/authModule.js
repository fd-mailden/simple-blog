import { notify } from "@kyvg/vue3-notification";

export const authModule = {
  state: {
    isAuth: true,
  },
  mutations: {
    setIsAuth(state, isAuth) {
      state.isAuth = isAuth;

    },
  },
  getters: {
    getIsAuth(state){
      return state.isAuth
    }
  },
  actions: {
    authorization({ commit }, { login, password, callback }) {
      if (login === "root@gmain.com" && password === "123") {
        commit("setIsAuth", true);
        callback();
        notify({
          type: "success",
          title: "Welcome back!",
        });
      } else {
        notify({
          type: "error",
          title: "Invalid Login or Password",
        });
      }
    },
  },
  namespaced: true,
};
