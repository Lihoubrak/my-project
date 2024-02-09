import React, { useEffect, useRef } from "react";
const BLogAndProjectDetail = ({ datePost, titlePost, destPost }) => {
  const contentContainerRef = useRef(null);
  useEffect(() => {
    if (contentContainerRef.current) {
      const hasCodeElement = contentContainerRef.current.querySelector("pre");
      if (hasCodeElement) {
        hasCodeElement.style.backgroundColor = "lightgray";
      }
    }
  }, [destPost]);
  return (
    <div className="sm:px-4 bg-white pt-10 sm:pt-2 dark:bg-gray-800  dark:text-white">
      <p className="text-purple-600 font-bold text-xl mb-4 sm:ml-6">
        {datePost}
      </p>
      <h1 className="font-bold text-xl mb-4 dark:text-white sm:ml-6 ">
        {titlePost}
      </h1>
      <div
        ref={contentContainerRef}
        className="text-gray-700 text-sm dark:text-white sm:ml-6"
        dangerouslySetInnerHTML={{ __html: destPost }}
      />
    </div>
  );
};

export default BLogAndProjectDetail;
