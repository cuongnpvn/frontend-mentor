import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Work from "../views/Work.vue";
import Blog from "../views/Blog.vue";
import Resume from "../views/Resume.vue";
import Accordion from "../views/work/Accordion.vue";
import TipCalculator from "../views/work/TipCalculator.vue";
import Todo from "../views/work/Todo.vue";
import IPTracking from "../views/work/IPTracking.vue";
import Country from "../views/work/Country/Country.vue";
import CountryInfo from "../views/work/Country/CountryInfo.vue";

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
  {
    path: "/work/accordion",
    name: "Accordion",
    component: Accordion,
  },
  {
    path: "/work/tipcalculator",
    name: "TipCalculator",
    component: TipCalculator,
  },
  {
    path: "/work/todo",
    name: "Todo",
    component: Todo,
  },
  {
    path: "/work/iptracking",
    name: "IPTracking",
    component: IPTracking,
  },
  {
    path: "/work/country",
    name: "Country",
    component: Country,
  },
  {
    path: "/work/country/:code",
    name: "CountryInfo",
    component: CountryInfo,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
