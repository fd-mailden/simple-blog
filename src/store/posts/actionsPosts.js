export const actions = {
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
  profileData({ state }, authorNickname) {
    let authorInfo = state.authors.find(
      (author) => author.nickname === authorNickname
    );
    if (!authorInfo) {
      return console.error("!");
    }
    let authorPosts = state.posts.filter(
      (post) => post.artistNickName === authorNickname
    );

    if (!authorPosts.length) {
      return console.error("!");
    }
    return {
      author: authorInfo,
      posts: authorPosts,
    };
  },

};
