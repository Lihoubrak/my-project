import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { HeaderTitle, Pagination } from "../components";
import useIsMobile from "../hooks/useIsMobile";
import { publicRequest } from "../../Request";
import renderBlogComponents from "../utils/renderBlogComponents";
import useLanguage from "../hooks/useLanguage";
const Home = () => {
  const isMobile = useIsMobile();
  const [posts, setPosts] = useState([]);
  const { language } = useLanguage();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await publicRequest.get(
          `/posts?sort[0]=publishedAt&populate=*&filters[category][id][$eq]=1&pagination[page]=1&pagination[pageSize]=10`
        );
        setPosts(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [language]);

  return (
    <Layout>
      <div className="py-10">
        <HeaderTitle headerTitle={"THE BLOG"} />
        <div className="sm:px-3">
          <h1 className="font-bold text-xl py-5">
            {language === "kh" ? "បញ្ជីប្លុកថ្មី" : "Recent blog posts"}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-4">
            {posts.data &&
              posts.data.length > 0 &&
              renderBlogComponents(posts.data, 0, 1, false, isMobile, language)}
            <div className="col-span-2">
              <div className="flex flex-col gap-2">
                {posts.data &&
                  posts.data.length > 0 &&
                  renderBlogComponents(
                    posts.data,
                    1,
                    3,
                    true,
                    isMobile,
                    language
                  )}
              </div>
            </div>
            <div className="col-span-3 mt-10">
              {posts.data &&
                posts.data.length > 0 &&
                renderBlogComponents(
                  posts.data,
                  3,
                  4,
                  true,
                  isMobile,
                  language
                )}
            </div>
          </div>
          <div>
            <h1 className="font-bold text-xl py-5 ">
              {language === "kh" ? "ការបញ្ជីប្លុកទាំងអស់" : "All blog posts"}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {posts.data &&
                posts.data.length > 0 &&
                renderBlogComponents(
                  posts.data,
                  4,
                  posts.data.length,
                  false,
                  isMobile,
                  language
                )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
