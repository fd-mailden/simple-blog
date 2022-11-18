import AppMain from '@/pages/AppMain'
import AppTags from '@/pages/AppTags'
import AppAbout from '@/pages/AppAbout'
import {ROUTER} from '@/settings/vue-routs'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: ROUTER.MAIN.path,
        component: AppMain
    },
    {
        path: ROUTER.TAGS.path,
        component: AppTags
    },
    {
        path: ROUTER.ABOUT.path,
        component: AppAbout
    },

]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;