import React from "react";
import { Link } from "react-router-dom";
import { ProjectComponent } from "../components";
import { motion } from "framer-motion";

const renderProjectComponets = (posts, startIndex, endIndex, language) => {
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
    const imageProject =
      "http://localhost:1337" + post.attributes.imageUrl.data.attributes.url;
    return (
      <motion.div
        variants={variants}
        initial="initial"
        whileInView="animate"
        custom={post.id}
        viewport={{ once: true }}
        key={post.id}
        className="col-span-1"
      >
        {language === "kh" ? (
          localizations.map((localizedPost, index) => (
            <Link to={`/project/detail/${localizedPost.id}`} key={index}>
              <ProjectComponent
                titleProject={localizedPost.attributes.titlePost}
                destProject={localizedPost.attributes.desc}
                imageProject={imageProject}
              />
            </Link>
          ))
        ) : (
          <Link to={`/project/detail/${post.id}`} key={post.id}>
            <ProjectComponent
              titleProject={post.attributes.titlePost}
              destProject={post.attributes.desc}
              imageProject={imageProject}
            />
          </Link>
        )}
      </motion.div>
    );
  });
};

export default renderProjectComponets;
