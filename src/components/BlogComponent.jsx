import React from "react";
import BlogContent from "./BlogContent";

const BlogComponent = ({
  datePost,
  titlePost,
  destPost,
  imageUrl,
  isHorizontal,
}) => {
  return (
    <div
      className={`rounded overflow-hidden ${isHorizontal ? "flex gap-x-4 " : ""}`}
    >
      <img
        src={imageUrl}
        alt=""
        className={`w-full ${!isHorizontal ? "sm:w-96 sm:h-[240px] md:w-full md:h-[240px]" : "max-w-[300px]"} object-cover`}
      />
      <BlogContent
        datePost={datePost}
        titlePost={titlePost}
        destPost={destPost}
        isHorizontal
      />
    </div>
  );
};

export default BlogComponent;
