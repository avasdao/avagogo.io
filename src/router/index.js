import { createRouter, createWebHistory } from 'vue-router'

import Admin from '../views/Admin'
import Home from '../views/Home'

const routes = [
    {
        path: '/',
        component: Home,
    },

    // ADMIN SCREENS
    {
        path: '/admin',
        component: Admin,
    },

    // CORE SCREENS
    {
        path: '/contact',
        component: () => import(/* webpackChunkName: "core" */ '../views/Contact.vue')
    },
    {
        path: '/download',
        component: () => import(/* webpackChunkName: "core" */ '../views/Download.vue')
    },
    {
        path: '/gogo',
        component: () => import(/* webpackChunkName: "core" */ '../views/GOGO.vue')
    },
    {
        path: '/gov',
        component: () => import(/* webpackChunkName: "core" */ '../views/Gov.vue')
    },
    {
        path: '/legal',
        component: () => import(/* webpackChunkName: "core" */ '../views/Legal.vue')
    },
    {
        path: '/privacy',
        component: () => import(/* webpackChunkName: "core" */ '../views/Privacy.vue')
    },
    {
        path: '/sponsors',
        component: () => import(/* webpackChunkName: "core" */ '../views/Sponsors.vue')
    },
    {
        path: '/team',
        component: () => import(/* webpackChunkName: "core" */ '../views/Team.vue')
    },

    // PORTALS SCREENS
    {
        path: '/portals',
        component: () => import(/* webpackChunkName: "portals" */ '../views/Portals.vue')
    },
    {
        path: '/portals/1inch',
        component: () => import(/* webpackChunkName: "portals" */ '../views/PortalsDetail.vue')
    },
    {
        path: '/portals/aave',
        component: () => import(/* webpackChunkName: "portals" */ '../views/PortalsDetail.vue')
    },
    {
        path: '/portals/api3',
        component: () => import(/* webpackChunkName: "portals" */ '../views/PortalsDetail.vue')
    },
    {
        path: '/portals/ceramic',
        component: () => import(/* webpackChunkName: "portals" */ '../views/PortalsDetail.vue')
    },
    {
        path: '/portals/harmony',
        component: () => import(/* webpackChunkName: "portals" */ '../views/PortalsDetail.vue')
    },
    {
        path: '/portals/lit',
        component: () => import(/* webpackChunkName: "portals" */ '../views/PortalsDetail.vue')
    },
    {
        path: '/portals/livepeer',
        component: () => import(/* webpackChunkName: "portals" */ '../views/PortalsDetail.vue')
    },
    {
        path: '/portals/rarible',
        component: () => import(/* webpackChunkName: "portals" */ '../views/PortalsDetail.vue')
    },
    {
        path: '/portals/tableland',
        component: () => import(/* webpackChunkName: "portals" */ '../views/PortalsDetail.vue')
    },
    {
        path: '/portals/yearn',
        component: () => import(/* webpackChunkName: "portals" */ '../views/PortalsDetail.vue')
    },

    // DEFI SCREENS
    {
        path: '/dashboard',
        component: () => import(/* webpackChunkName: "defi" */ '../views/Dashboard.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior() {
        return { top: 0 }
    },
})

export default router
