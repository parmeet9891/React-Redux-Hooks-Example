import posts from "./../data/posts";

const initalState = {
  posts,
};

function postsReducer(state = initalState, action) {
  switch (action.type) {
    case "INCREMENT_LIKES":
      const i = action.index;
      //I am trying to do a deep copy of posts
      let stringified = JSON.stringify(state.posts);
      let copyofPosts = JSON.parse(stringified);
      copyofPosts[i].likes += 1;
      return { ...state, posts: copyofPosts };
    default:
      return state;
  }
}

export default postsReducer;
