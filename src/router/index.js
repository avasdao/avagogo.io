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
        path: '/gogo',
        component: () => import(/* webpackChunkName: "core" */ '../views/Gogo.vue')
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
        component: () => import(/* webpackChunkName: "core" */ '../views/hackathon/Alpha.vue')
    },
    {
        path: '/hackathon/benqi',
        component: () => import(/* webpackChunkName: "core" */ '../views/hackathon/BENQI.vue')
    },
    {
        path: '/hackathon/chainlink',
        component: () => import(/* webpackChunkName: "core" */ '../views/hackathon/Chainlink.vue')
    },
    {
        path: '/hackathon/colony',
        component: () => import(/* webpackChunkName: "core" */ '../views/hackathon/Colony.vue')
    },
    {
        path: '/hackathon/covalent',
        component: () => import(/* webpackChunkName: "core" */ '../views/hackathon/Covalent.vue')
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
