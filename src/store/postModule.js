import { POSTS } from "@/consts/posts";
import { AUTHORS } from "@/consts/authors";

export const postModule = {
  state: () => ({
    posts: POSTS,
    authors: AUTHORS,
    currentPost: {},
    currentAuthor: {},
  }),
  mutations: {
    setCurrentPost(state, post) {
      state.currentPost = post;
    },
    setCurrentAuthor(state, author) {
      state.currentAuthor = author;
    },
  },
  getters: {},
  actions: {
    getPostInfo({ state, commit }, postId) {
      let currentPost = state.posts.find((post) => post.id == postId);
      if (!currentPost) return null;
      commit("setCurrentPost", currentPost);
      let currentAuthor = state.authors.find(
        (author) => author.id == currentPost.id
      );
      if (!currentAuthor) return null;
      commit("setCurrentAuthor", currentAuthor);
    },
  },

  namespaced: true,
};
