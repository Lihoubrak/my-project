import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { BLogAndProjectDetail, NewletterComponent } from "../components";
import { useParams } from "react-router-dom";
import { publicRequest } from "../../Request";
import renderBlogComponents from "../utils/renderBlogComponents";
import useIsMobile from "../hooks/useIsMobile";
import useLanguage from "../hooks/useLanguage";
import { convertToKhmerDate } from "../utils/convertToKhmerDate";

const Blog = () => {
  const { blogId } = useParams();
  const [blogs, setBlogs] = useState(null);
  const [blog, setBlog] = useState(null);
  const [posts, setPosts] = useState([]);
  const { language } = useLanguage();
  const isMobile = useIsMobile();
  const locale = language === "kh" ? "km-KH" : "en";

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const res = await publicRequest.get(`/posts/${blogId}?populate=*`);
        const blogData = res.data.data;
        setBlogs(blogData);
        setBlog(blogData.attributes.localizations.data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    const fetchAllPosts = async () => {
      try {
        const res = await publicRequest.get(
          "/posts?sort[0]=publishedAt&populate=*&filters[category][id][$eq]=1"
        );
        setPosts(res.data.data);
      } catch (error) {
        console.error("Error fetching all posts data:", error);
      }
    };
    window.scrollTo(0, 0);
    fetchBlogData();
    fetchAllPosts();
  }, [blogId, language]);
  return (
    <Layout>
      <div className="grid  grid-cols-1 sm:grid-cols-4 sm:mx-4 sm:mt-10 sm:gap-4 ">
        {!isMobile ? (
          <div className="col-span-4 sm:col-span-1  ">
            <h1 className="font-bold text-xl mb-4 mt-10 sm:mt-0">
              {language === "kh" ? "បញ្ជីប្លុកថ្មី" : "Recent blog posts"}
            </h1>
            <div className="flex flex-col gap-4 ">
              {renderBlogComponents(posts, 4, 7, false, isMobile, language)}
            </div>
          </div>
        ) : null}
        <div className="col-span-3 ">
          {blog?.[0]?.attributes?.locale === locale ? (
            <BLogAndProjectDetail
              datePost={
                language === "kh"
                  ? convertToKhmerDate(blog?.[0]?.attributes?.datePost)
                  : blog?.[0]?.attributes?.datePost
              }
              titlePost={blog?.[0]?.attributes?.titlePost}
              destPost={blog?.[0]?.attributes?.destPost}
            />
          ) : (
            <BLogAndProjectDetail
              datePost={
                language === "kh"
                  ? convertToKhmerDate(blogs?.attributes?.datePost)
                  : blogs?.attributes?.datePost
              }
              titlePost={blogs?.attributes?.titlePost}
              destPost={blogs?.attributes?.destPost}
            />
          )}
        </div>
      </div>
      <NewletterComponent language={language} />
    </Layout>
  );
};

export default Blog;
