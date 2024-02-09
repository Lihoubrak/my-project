import React from "react";
const BlogContent = ({ datePost, titlePost, destPost }) => {
  return (
    <div className="min-h-48  pt-1 dark:bg-gray-800 dark:text-white flex flex-col gap-2 justify-between bg-white">
      <div>
        <p className="text-purple-600 font-bold text-sm mb-2">{datePost}</p>
        <h1 className="font-bold text-xl mb-2 dark:text-white">{titlePost}</h1>
        <p className="text-gray-700 line-clamp-3 text-sm dark:text-white">
          {destPost}
        </p>
      </div>
      {/* buttons */}
      <div className="flex gap-2  dark:text-white">
        <button className="bg-blue-500 text-white text-sm px-2 py-1 rounded">
          Design
        </button>
        <button className="bg-green-500 text-white text-sm px-2 py-1 rounded">
          Research
        </button>
        <button className="bg-purple-500 text-white text-sm px-2 py-1 rounded">
          Presentation
        </button>
      </div>
    </div>
  );
};

export default BlogContent;
