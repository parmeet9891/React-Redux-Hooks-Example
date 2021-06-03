import React from "react";
import { Link, withRouter } from "react-router-dom";
import PhotoGrid from "./PhotoGrid";

const Main = () => {
  return (
    <div>
      <h1>
        <Link to="/">Reduxtagram</Link>
      </h1>
      <PhotoGrid />
    </div>
  );
};

export default withRouter(Main);
