import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { BLogAndProjectDetail, NewletterComponent } from "../components";
import { useParams } from "react-router-dom";
import { publicRequest } from "../../Request";
import renderBlogComponents from "../utils/renderBlogComponents";
import useIsMobile from "../hooks/useIsMobile";
import useLanguage from "../hooks/useLanguage";
import { convertToKhmerDate } from "../utils/convertToKhmerDate";
import renderProjectComponets from "../utils/renderProjectComponets";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const [projects, setProjects] = useState(null);
  const [project, setProject] = useState(null);
  const [posts, setPosts] = useState([]);
  const { language } = useLanguage();
  const isMobile = useIsMobile();
  const locale = language === "kh" ? "km-KH" : "en";
  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const res = await publicRequest.get(`/posts/${projectId}?populate=*`);
        const projectData = res.data.data;
        setProjects(projectData);
        setProject(projectData.attributes.localizations.data);
      } catch (error) {
        console.error("Error fetching ProjectData data:", error);
      }
    };

    const fetchAllPosts = async () => {
      try {
        const res = await publicRequest.get(
          "/posts?sort[0]=publishedAt&populate=*&filters[category][id][$eq]=3"
        );

        setPosts(res.data.data);
      } catch (error) {
        console.error("Error fetching all posts data:", error);
      }
    };
    window.scrollTo(0, 0);
    fetchProjectData();
    fetchAllPosts();
  }, [projectId, language]);
  return (
    <Layout>
      <div className="grid  grid-cols-1 sm:grid-cols-4 sm:mx-4 sm:mt-10 sm:gap-4 ">
        <div className="col-span-4 sm:col-span-1  ">
          <h1 className="font-bold text-xl mb-4 mt-10 sm:mt-0">
            {language === "kh" ? "បញ្ជីគម្រោងថ្មី" : "Recent project posts"}
          </h1>
          <div className="flex flex-col gap-4 ">
            {renderProjectComponets(posts, 0, 3, language)}
          </div>
        </div>

        <div className="col-span-3 ">
          {project?.[0]?.attributes?.locale === locale ? (
            <BLogAndProjectDetail
              titlePost={project?.[0]?.attributes?.titlePost}
              destPost={project?.[0]?.attributes?.destPost}
            />
          ) : (
            <BLogAndProjectDetail
              titlePost={projects?.attributes?.titlePost}
              destPost={projects?.attributes?.destPost}
            />
          )}
        </div>
      </div>
      <NewletterComponent language={language} />
    </Layout>
  );
};

export default ProjectDetail;
