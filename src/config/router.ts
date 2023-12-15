import { createRouter, createWebHistory } from "vue-router";
import Main from "~/pages/Main.vue";
import About from "~/pages/About.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
    meta: {}
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {}
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
