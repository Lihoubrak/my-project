import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { NewletterComponent } from "../components";
import useLanguage from "../hooks/useLanguage";
import renderBlogComponents from "../utils/renderBlogComponents";
import { publicRequest } from "../../Request";
import useIsMobile from "../hooks/useIsMobile";

const Newsletter = () => {
  const { language } = useLanguage();
  const isMobile = useIsMobile();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await publicRequest.get(
          "/posts?sort[0]=publishedAt&populate=*&filters[category][id][$eq]=1&pagination[page]=1&pagination[pageSize]=6"
        );
        setPosts(res.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [language]);
  return (
    <Layout>
      <div className="py-10">
        <NewletterComponent language={language} />
        <div className="sm:px-3">
          <h1 className="font-bold text-xl py-5 ">
            {language === "kh" ? "ការបញ្ជីប្លុកទាំងអស់" : "All blog posts"}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 ">
            {posts &&
              posts.length > 0 &&
              renderBlogComponents(
                posts,
                0,
                posts.length,
                false,
                isMobile,
                language
              )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Newsletter;
