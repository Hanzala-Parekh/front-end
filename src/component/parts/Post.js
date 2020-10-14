import React from "react";
import Postitem from "./Postitem";
import Pagination from "./Pagination";

const Post = () => {
  return (
    <div className="col-lg-8">
      <div className="blog-box list-style"></div>
      <Postitem />
      <Postitem />
      <Postitem />
      <Postitem />

      <Pagination />
    </div>
  );
};

export default Post;
