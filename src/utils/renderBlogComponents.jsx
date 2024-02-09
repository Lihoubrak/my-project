import React from "react";
import { Link } from "react-router-dom";
import { BlogComponent } from "../components";
import { convertToKhmerDate } from "./convertToKhmerDate";
import { motion } from "framer-motion";
const renderBlogComponents = (
  posts,
  startIndex,
  endIndex,
  isHorizontal = true,
  isMobile,
  language
) => {
  if (!Array.isArray(posts)) {
    return null;
  }
  const variants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.05 * index,
      },
    }),
  };
  return posts.slice(startIndex, endIndex).map((post) => {
    const localizations = post.attributes.localizations.data;
    const imageUrl =
      "http://localhost:1337" + post.attributes.imageUrl.data.attributes.url;
    return (
      <motion.div
        variants={variants}
        initial="initial"
        whileInView="animate"
        custom={post.id}
        viewport={{ once: true }}
        key={post.id}
      >
        {language === "kh" ? (
          localizations.map((localizedPost, index) => (
            <Link to={`/blog/detail/${localizedPost.id}`} key={index}>
              <BlogComponent
                datePost={convertToKhmerDate(localizedPost.attributes.datePost)}
                titlePost={localizedPost.attributes.titlePost}
                destPost={localizedPost.attributes.desc}
                imageUrl={imageUrl}
                isHorizontal={isMobile ? false : isHorizontal}
              />
            </Link>
          ))
        ) : (
          <Link to={`/blog/detail/${post.id}`} key={post.id}>
            <BlogComponent
              datePost={post.attributes.datePost}
              titlePost={post.attributes.titlePost}
              destPost={post.attributes.desc}
              imageUrl={imageUrl}
              isHorizontal={isMobile ? false : isHorizontal}
            />
          </Link>
        )}
      </motion.div>
    );
  });
};

export default renderBlogComponents;
