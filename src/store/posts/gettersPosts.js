export const getters = {
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
  getTagSearchedPost(state) {
    if (!state.tagSearch) {
      return state.posts;
    }
    return state.posts.filter((post) =>
      post.tags.includes(state.tagSearch.toLowerCase())
    );
  },
};
