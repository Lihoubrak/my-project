import React from "react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
const Pagination = ({ language, setPageIndex, meta, setPage }) => {
  const isEnglish = language === "en";
  const handleClickPage = (number) => {
    if (setPage) {
      setPage(number);
    } else {
      setPageIndex(number);
      if (number != 1) {
        if (setPage) {
          setPage(number);
        }
      }
    }
  };

  const handlePrevClick = () => {
    if (meta?.page > 1) {
      if (setPage) {
        setPage(meta?.page - 1);
      } else {
        setPageIndex(meta?.page - 1);
      }
    }
  };

  const handleNextClick = () => {
    if (meta?.page < meta.pageCount) {
      if (setPage) {
        setPage(meta?.page + 1);
      } else {
        setPageIndex(meta?.page + 1);
      }
    }
  };

  const generatePageNumbers = () => {
    const pageCount = meta?.pageCount || 0;
    const currentPage = meta?.page || 1;

    const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

    // If there are less than 7 pages, display all pages
    if (pageCount <= 7) {
      return pages;
    }

    // If current page is 4 or less, display pages 1 to 5 and add ellipsis
    if (currentPage <= 4) {
      return [...pages.slice(0, 5), "...", pageCount];
    }

    // If current page is 4 or less from the end, display last 5 pages and add ellipsis
    if (currentPage >= pageCount - 3) {
      return [1, "...", ...pages.slice(pageCount - 5, pageCount)];
    }

    // Display current page and its neighbors, add ellipsis
    return [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      pageCount,
    ];
  };

  return (
    <div className="flex flex-col items-center pt-10 sm:flex-row sm:justify-between">
      <div
        className="flex items-center cursor-pointer text-gray-400 gap-4 "
        onClick={handlePrevClick}
      >
        <IoMdArrowBack />
        <p>{isEnglish ? "Previous" : "មុន"}</p>
      </div>
      <ul className="flex items-center text-gray-400 gap-4 py-5 sm:py-0">
        {generatePageNumbers().map((num, index) => (
          <li
            key={index}
            className={`sm:px-3 py-1 px-2 cursor-pointer  rounded ${
              num === meta?.page ? "font-bold bg-[#f1e9fd]" : ""
            }`}
            onClick={() => handleClickPage(num)}
          >
            {num === "..." ? num : num}
          </li>
        ))}
      </ul>
      <div
        className="flex items-center text-gray-400 cursor-pointer gap-4"
        onClick={handleNextClick}
      >
        <p>{isEnglish ? "Next" : "បន្ទាប់"}</p>
        <IoMdArrowForward />
      </div>
    </div>
  );
};

export default Pagination;
