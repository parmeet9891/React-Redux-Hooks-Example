import React, { useEffect, useState } from "react";
import Photo from "./Photo";
import { useSelector } from "react-redux";

export default function PhotoGrid() {
  const posts = useSelector((state) => state.postsReducer.posts);
  return (
    <div className="photo-grid">
      {posts &&
        posts.map((post, index) => {
          return <Photo post={post} i={index} key={index} />;
        })}
    </div>
  );
}
