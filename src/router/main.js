import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Member from "../views/Member.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/member",
    name: "Member",
    component: Member,
  },
];

const router = createRouter({
  history: createWebHistory(),
  mode: "history",
  routes,
});

export default router;
