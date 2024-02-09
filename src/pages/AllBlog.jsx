import React, { useContext, useEffect, useState } from "react";
import Layout from "../layout/Layout";
import renderBlogComponents from "../utils/renderBlogComponents";
import { HeaderTitle, Pagination } from "../components";
import useIsMobile from "../hooks/useIsMobile";
import useLanguage from "../hooks/useLanguage";
import { publicRequest } from "../../Request";
import { motion } from "framer-motion";
const AllBlog = () => {
  const isMobile = useIsMobile();
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const { language } = useLanguage();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await publicRequest.get(
          `/posts?sort[0]=publishedAt&populate=*&filters[category][id][$eq]=1&pagination[page]=${page}&pagination[pageSize]=10`
        );
        setPosts(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [language, page]);

  return (
    <Layout>
      <div className="py-10 ">
        <HeaderTitle headerTitle={"THE BLOG"} />
        <div className="sm:px-3 ">
          <h1 className="font-bold text-xl py-5 ">
            {language === "kh" ? "បញ្ជីប្លុកទាំងអស់" : "All blog posts"}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 ">
            {posts.data &&
              posts.data.length > 0 &&
              renderBlogComponents(
                posts.data,
                0,
                posts.data.length,
                false,
                isMobile,
                language
              )}
          </div>
          <Pagination
            language={language}
            setPage={setPage}
            meta={posts.meta?.pagination}
          />
        </div>
      </div>
    </Layout>
  );
};

export default AllBlog;
