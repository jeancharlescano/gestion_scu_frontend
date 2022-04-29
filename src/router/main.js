import { createWebHistory, createRouter } from "vue-router";
import Login from "../views/Login.vue"
import Home from "../views/Home.vue";
import Member from "../views/Member.vue";
import AddIndividu from "../components/AddIndividu.vue"
import Information from "../views/Information.vue"
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
  {
    path: "/information",
    name: "Information",
    component: Information,
  },
  {
    path:"/login",
    name: "Login",
    component: Login,
  }

];

const router = createRouter({
  history: createWebHistory(),
  mode: "history",
  routes,
});

export default router;
