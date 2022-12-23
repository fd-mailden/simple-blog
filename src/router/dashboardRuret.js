import { DASHBOARD_ROUTS } from "@/settings/dashboard-routs";
import { LAYOUT_NAMES } from "@/settings/rout-constants";

export const dashboard = [
  {
    path: DASHBOARD_ROUTS.DASHBOARD_MAIN.path,
    component: () => import("@/pages/dashboard/AppDashboard"),
    meta: { layout: LAYOUT_NAMES.DASHBOARD },
  },
  {
    path: DASHBOARD_ROUTS.PROFILE.path,
    component: () => import("@/pages/dashboard/AppProfile.vue"),
    meta: { layout: LAYOUT_NAMES.DASHBOARD },
  },
  {
    path: DASHBOARD_ROUTS.WRITE_POST.path,
    component: () => import("@/pages/dashboard/AppWritePost.vue"),
    meta: { layout: LAYOUT_NAMES.DASHBOARD },
  },
  {
    path: DASHBOARD_ROUTS.ALL_POSTS.path,
    component: () => import("@/pages/dashboard/AppDashboardPosts.vue"),
    meta: { layout: LAYOUT_NAMES.DASHBOARD },
  },
  {
    path: DASHBOARD_ROUTS.SETTINGS.path,
    component: () => import("@/pages/dashboard/AppDashboard"),
    meta: { layout: LAYOUT_NAMES.DASHBOARD },
  },
  {
    path: DASHBOARD_ROUTS.HELP.path,
    component: () => import("@/pages/dashboard/AppDashboard"),
    meta: { layout: LAYOUT_NAMES.DASHBOARD },
  },
];
