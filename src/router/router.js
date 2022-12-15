import { ROUTER } from "@/settings/vue-routs";
import { createRouter, createWebHistory } from "vue-router";
import { LAYOUT_NAMES } from "@/settings/rout-constants";

const routes = [
  {
    path: ROUTER.MAIN.path,
    component: () => import("@/pages/AppMain"),
    meta: {
      layout: LAYOUT_NAMES.DEFAULT,
    },
  },
  {
    path: ROUTER.TAGS.path,
    component: () => import("@/pages/AppTags"),
    meta: {
      layout: LAYOUT_NAMES.DEFAULT,
    },
  },
  {
    path: ROUTER.TAG.path,
    component: () => import("@/pages/AppTagLayout"),
    meta: {
      layout: LAYOUT_NAMES.DEFAULT,
    },
  },
  {
    path: ROUTER.ABOUT.path,
    component: () => import("@/pages/AppAbout"),
    meta: {
      layout: LAYOUT_NAMES.DEFAULT,
    },
  },
  {
    path: ROUTER.POST.path,
    component: () => import("@/pages/SinglePost"),
    meta: {
      layout: LAYOUT_NAMES.DEFAULT,
    },
  },
  {
    path: ROUTER.LOGIN.path,
    component: () => import("@/pages/AppLogin"),
    meta: {
      layout: LAYOUT_NAMES.LOGIN,
    },
  },
  {
    path: ROUTER.PROFILE.path,
    component: () => import("@/pages/AppProfile"),
    meta: {
      layout: LAYOUT_NAMES.DEFAULT,
    },
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
