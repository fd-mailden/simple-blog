export const  mutations = {
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
  setTagSearch(state, text) {
    state.tagSearch = text;
  },
}
