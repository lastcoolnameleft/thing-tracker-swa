import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MainView from "../views/MainView.vue";
import MarkView from "../views/MarkView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: MainView,
    },
    {
      path: "/mark",
      name: "mark",
      component: MarkView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/faq",
      name: "faq",
      component: () => import("../views/FAQ.vue"),
    },
    {
      path: "/duck/:duck_id",
      name: "duck",
      component: () => import("../views/Duck.vue"),
    },
  ],
});

export default router;
