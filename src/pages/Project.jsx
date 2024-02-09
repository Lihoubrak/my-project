import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { HeaderTitle, Pagination, ProjectComponent } from "../components";
import { publicRequest } from "../../Request";
import useLanguage from "../hooks/useLanguage";
import renderProjectComponets from "../utils/renderProjectComponets";

const Project = () => {
  const [posts, setPosts] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);
  const { language } = useLanguage();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await publicRequest.get(
          `/posts?sort[0]=publishedAt&populate=*&filters[category][id][$eq]=3&pagination[page]=${pageIndex}&pagination[pageSize]=3`
        );
        setPosts(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [language, pageIndex]);
  return (
    <Layout>
      <div className="py-10">
        <HeaderTitle headerTitle={"PROJECT"} />
        <div className="sm:px-3">
          <h1 className="font-bold text-xl py-5 ">
            {language === "kh" ? "បញ្ជីគម្រោងទាំងអស់" : "List Project"}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {posts.data &&
              renderProjectComponets(
                posts.data,
                0,
                posts.data.length,
                language
              )}
          </div>
          <Pagination
            language={language}
            setPageIndex={setPageIndex}
            meta={posts.meta?.pagination}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Project;
