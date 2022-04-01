import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Member from "../views/Member.vue";
import AddIndividu from "../components/AddIndividu.vue"
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/members",
    name: "Member",
    component: Member,
  },
  {
    path: "/addIndividu",
    name: "AddIndividu",
    component: AddIndividu,
  },
];

const router = createRouter({
  history: createWebHistory(),
  mode: "history",
  routes,
});

export default router;
