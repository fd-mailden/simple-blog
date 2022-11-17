import AppMain from '@/pages/AppMain'
import AppTags from '@/pages/AppTags'
import AppAbout from '@/pages/AppAbout'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: AppMain
    },
    {
        path: '/tags',
        component: AppTags
    },
    {
        path: '/about',
        component: AppAbout
    },

]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;