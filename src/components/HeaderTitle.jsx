import React from "react";

const HeaderTitle = ({ headerTitle }) => {
  return (
    <div className="text-center py-5 sm:p-3">
      <h1 className="font-bold text-2xl sm:text-8xl border-t-2 border-b-2 text-gray-700 dark:text-white">
        {headerTitle}
      </h1>
    </div>
  );
};

export default HeaderTitle;
