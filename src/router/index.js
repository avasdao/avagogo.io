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

    // HACKATHON SCREENS
    {
        path: '/hackathon',
        component: () => import(/* webpackChunkName: "core" */ '../views/Hackathon.vue')
    },
    {
        path: '/hackathon/alpha-finance-lab',
        component: () => import(/* webpackChunkName: "core" */ '../views/HackathonDetail.vue')
    },
    {
        path: '/hackathon/benqi',
        component: () => import(/* webpackChunkName: "core" */ '../views/hackathon/BENQI.vue')
    },
    {
        path: '/hackathon/colony',
        component: () => import(/* webpackChunkName: "core" */ '../views/hackathon/Colony.vue')
    },
    {
        path: '/hackathon/yield-yak',
        component: () => import(/* webpackChunkName: "core" */ '../views/hackathon/YieldYak.vue')
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
})

export default router
