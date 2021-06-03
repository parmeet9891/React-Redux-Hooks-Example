import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as actionCreators from "./../actions/actionCreators";

const Comments = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [author, setAuthor] = useState("");
  const [authorComment, setComment] = useState("");
  const comments = useSelector((state) => state.commentsReducer.comments);
  const postComments = comments[id] || [];

  //creating refs
  const commentForm = useRef(null);
  const authorText = useRef(null);

  const renderComment = (comment, i) => {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button
            onClick={() => {
              dispatch(actionCreators.removeComment(id, i));
            }}
            className="remove-comment"
          >
            &times;
          </button>
        </p>
      </div>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actionCreators.addComment(id, author, authorComment));
    commentForm.current.reset();
    authorText.current.focus();
  };

  return (
    <div className="comments">
      {postComments.map(renderComment)}
      <form className="comment-form" onSubmit={handleSubmit} ref={commentForm}>
        <input
          type="text"
          placeholder="author"
          ref={authorText}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="comment"
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        <input type="submit" hidden />
      </form>
    </div>
  );
};

export default Comments;
