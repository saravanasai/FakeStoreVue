import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import StoreView from "@/views/StoreView.vue";


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/store",
    name: "store",
    component:StoreView
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
