import { POSTS } from "@/consts/posts";
import { AUTHORS } from "@/consts/authors";
import { actions } from "@/store/posts/actionsPosts";
import { getters } from "@/store/posts/gettersPosts";
import { mutations } from "@/store/posts/mutationsPosts";

export const postModule = {
  state: () => ({
    posts: POSTS,
    authors: AUTHORS,
    currentPost: {},
    currentAuthor: {},
    searchedPost: POSTS,
    searchQuery: "",
    tagSearch: "",
  }),
  mutations,
  getters,
  actions,
  namespaced: true,
};
