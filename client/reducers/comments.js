import comments from "./../data/comments";

const initalState = {
  comments,
};

function performDeepCopy(userComments) {
  let stringified = JSON.stringify(userComments);
  let copy = JSON.parse(stringified);
  return copy;
}

function commentsReducer(state = initalState, action) {
  if (typeof action.postId !== "undefined") {
    let copyOfComments;
    switch (action.type) {
      case "ADD_COMMENT":
        copyOfComments = performDeepCopy(state.comments);
        copyOfComments[action.postId].push({
          user: action.author,
          text: action.comment,
        });
        return { ...state, comments: copyOfComments };
      case "REMOVE_COMMENT":
        copyOfComments = performDeepCopy(state.comments);
        copyOfComments[action.postId].splice(action.index, 1);
        return { ...state, comments: copyOfComments };
      default:
        return state;
    }
  }
  return state;
}

export default commentsReducer;
