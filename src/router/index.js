import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        component: Home
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

    // BOARDS SCREENS
    {
        path: '/boards',
        component: () => import(/* webpackChunkName: "boards" */ '../views/Boards.vue')
    },
    {
        path: '/boards/1inch',
        component: () => import(/* webpackChunkName: "boards" */ '../views/BoardsDetail.vue')
    },
    {
        path: '/boards/aave',
        component: () => import(/* webpackChunkName: "boards" */ '../views/BoardsDetail.vue')
    },
    {
        path: '/boards/api3',
        component: () => import(/* webpackChunkName: "boards" */ '../views/BoardsDetail.vue')
    },
    {
        path: '/boards/ceramic',
        component: () => import(/* webpackChunkName: "boards" */ '../views/BoardsDetail.vue')
    },
    {
        path: '/boards/harmony',
        component: () => import(/* webpackChunkName: "boards" */ '../views/BoardsDetail.vue')
    },
    {
        path: '/boards/lit',
        component: () => import(/* webpackChunkName: "boards" */ '../views/BoardsDetail.vue')
    },
    {
        path: '/boards/livepeer',
        component: () => import(/* webpackChunkName: "boards" */ '../views/BoardsDetail.vue')
    },
    {
        path: '/boards/rarible',
        component: () => import(/* webpackChunkName: "boards" */ '../views/BoardsDetail.vue')
    },
    {
        path: '/boards/tableland',
        component: () => import(/* webpackChunkName: "boards" */ '../views/BoardsDetail.vue')
    },
    {
        path: '/boards/yearn',
        component: () => import(/* webpackChunkName: "boards" */ '../views/BoardsDetail.vue')
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
