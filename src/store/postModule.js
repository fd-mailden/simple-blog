import { POSTS } from "@/consts/posts";
import { AUTHORS } from "@/consts/authors";

export const postModule = {
  state: () => ({
    posts: POSTS,
    authors: AUTHORS,
    currentPost: {},
    currentAuthor: {},
    searchedPost: POSTS,
    searchQuery: "",
  }),
  mutations: {
    setCurrentPost(state, post) {
      state.currentPost = post;
    },
    setCurrentAuthor(state, author) {
      state.currentAuthor = author;
    },
    setSearchedPost(state, posts) {
      state.searchedPost = posts;
    },
    setSearchQuery(state, text) {
      state.searchQuery = text;
    },
  },
  getters: {
    getLastPosts(state) {
      let newPosts = [...state.posts];
      return newPosts.splice(-3);
    },
    searchPosts(state) {
      if (!state.searchQuery) {
        return state.posts;
      }
      return state.posts.filter((post) =>
        post.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
  },

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

    searchingPosts({ state, commit }, title) {
      if (!state.searchQuery) {
        commit("setSearchedPost", state.posts);
      }

      let newPosts = state.posts.filter((post) =>
        post.title.toLowerCase().includes(title.toLowerCase())
      );
      if (newPosts.length > 0) {
        commit("setSearchedPost", newPosts);
      }
    },
  },

  namespaced: true,
};
