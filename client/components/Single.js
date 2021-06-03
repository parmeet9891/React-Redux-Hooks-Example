import React from "react";
import Photo from "./Photo";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Comments from "./Comments";

const Single = () => {
  const { id } = useParams();
  //get values from store
  const posts = useSelector((state) => state.postsReducer.posts);
  //get current post
  const i = posts.findIndex((post) => post.code === id);
  const post = posts[i];

  return (
    <div className="single-photo">
      <Photo i={i} post={post} />
      <Comments />
    </div>
  );
};
export default Single;
