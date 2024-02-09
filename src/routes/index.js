import { configRouter } from "../configs/route";
import About from "../pages/About";
import AllBlog from "../pages/AllBlog";
import Blog from "../pages/Blog";
import Home from "../pages/Home";
import Newsletter from "../pages/Newsletter";
import Project from "../pages/Project";
import ProjectDetail from "../pages/ProjectDetail";
const publicRoutes = [
  { path: configRouter.home, component: Home },
  { path: configRouter.blog, component: Blog },
  { path: configRouter.projects, component: Project },
  { path: configRouter.about, component: About },
  { path: configRouter.newsletter, component: Newsletter },
  { path: configRouter.allBlog, component: AllBlog },
  { path: configRouter.projectDetail, component: ProjectDetail },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
