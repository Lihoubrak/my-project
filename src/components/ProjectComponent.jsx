import React from "react";

const ProjectComponent = ({ titleProject, destProject, imageProject }) => {
  return (
    <div>
      <img
        src={imageProject}
        alt="Hotel Management Dashboard Design"
        className="w-full object-cover rounded h-72"
      />
      <div>
        <h1 className="font-bold text-xl mb-2 mt-2">{titleProject}</h1>
        <p className="text-gray-700 line-clamp-3 text-sm dark:text-white">
          {destProject}
        </p>
        <div className="flex gap-3 mt-2">
          <button className="bg-blue-500 text-sm text-white p-1 rounded">
            Design
          </button>
          <button className="bg-green-500 text-sm text-white p-1 rounded">
            Research
          </button>
          <button className="bg-purple-500 text-sm text-white p-1 rounded">
            Presentation
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;
