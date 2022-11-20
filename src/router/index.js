import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requireAuth: false,
    },
  },
  {
    path: "/create",
    name: "Create",
    component: () => import("../views/Create.vue"),
  },
  {
    path: "/portfolios",
    name: "Portfolios",
    component: () => import("../views/Portfolios.vue"),
  },
  {
    path: "/portfolio/:id",
    props: true,
    name: "Portfolio",
    component: () => import("../views/Portfolio.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
