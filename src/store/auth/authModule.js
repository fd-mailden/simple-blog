import { notify } from "@kyvg/vue3-notification";
import { USER_DATA } from "@/consts/userData";

export const authModule = {
  state: {
    isAuth: true,
    userInfo: USER_DATA,
  },
  mutations: {
    setIsAuth(state, isAuth) {
      state.isAuth = isAuth;
    },
    setUserInfo(state, user) {
      state.userInfo = user;
    },
  },
  getters: {
    getIsAuth(state) {
      return state.isAuth;
    },
    getUserPosts(state) {
      return state.userInfo.posts;
    },
  },
  actions: {
    authorization({ commit }, { login, password, callback }) {
      if (login === "root@gmain.com" && password === "123") {
        commit("setIsAuth", true);
        commit("setUserInfo", USER_DATA);
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
