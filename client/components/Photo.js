import React from "react";
import { Link } from "react-router-dom";
import CSSTransitionGroup from "react-addons-css-transition-group";
import * as actionCreators from "./../actions/actionCreators";
import { useDispatch, useSelector } from "react-redux";

const Photo = (props) => {
  const { post, i } = props;
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.commentsReducer.comments);

  const incrementLikes = () => {
    dispatch(actionCreators.increment(i));
  };

  return (
    <figure className="grid-figure">
      <div className="grid-photo-wrap">
        <Link to={`/view/${post.code}`}>
          <img
            src={post.display_src}
            alt={post.caption}
            className="grid-photo"
          />
        </Link>
        <CSSTransitionGroup
          transitionName="like"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          <span key={post.likes} className="likes-heart">
            {post.likes}
          </span>
        </CSSTransitionGroup>
      </div>
      <figcaption>
        <p>{post.caption}</p>
        <div onClick={incrementLikes} className="control-buttons">
          <button className="likes">&hearts; {post.likes}</button>
          <Link className="button" to={`/view/${post.code}`}>
            <span className="comment-count">
              <span className="speech-bubble"></span>
              {comments[post.code] ? comments[post.code].length : 0}
            </span>
          </Link>
        </div>
      </figcaption>
    </figure>
  );
};

export default Photo;
