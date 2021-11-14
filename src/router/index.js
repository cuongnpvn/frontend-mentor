import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Work from "../views/Work.vue";
import Blog from "../views/Blog.vue";
import Resume from "../views/Resume.vue";
import workRoutes from "@/router/routes/index.js";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/work",
    name: "Work",
    component: Work,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/resume",
    name: "Resume",
    component: Resume,
  },
].concat(workRoutes);

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
