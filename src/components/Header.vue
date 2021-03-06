<template>
    <header v-if="showHeader" class="relative bg-white">
        <div class="absolute inset-0 shadow z-30 pointer-events-none" aria-hidden="true"></div>

        <div class="relative z-20">
            <div class="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
                <div>
                    <router-link to="/" class="flex">
                        <span class="sr-only">Ava Nakamoto</span>
                        <img class="h-10 w-auto sm:h-16" :src="require('../assets/logo.png')" alt="Ava Nakamoto" />
                    </router-link>
                </div>

                <div class="-mr-2 -my-2 md:hidden">
                    <button
                        @click="showMobileMenu = !showMobileMenu"
                        type="button"
                        class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-yellow-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        aria-expanded="false"
                    >
                        <span class="sr-only">Open menu</span>
                        <!-- Heroicon name: outline/menu -->
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                <div class="hidden md:flex-1 md:flex md:items-center md:justify-between">
                    <nav class="flex space-x-10">
                        <a href="https://docs.avagogo.io" target="_blank" class="text-base font-medium text-gray-500 hover:text-yellow-500 uppercase">
                            Docs
                        </a>

                        <a @click="gogo" href="javascript://" class="text-base font-medium text-gray-500 hover:text-yellow-500">
                            $GOGO
                        </a>

                        <div>
                            <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
                            <button
                                @click="toggleExtras"
                                type="button"
                                class="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-indigo-500"
                                aria-expanded="false"
                            >
                                <span class="uppercase">Investors</span>
                                <!--
                    Heroicon name: solid/chevron-down

                    Item active: "text-gray-600", Item inactive: "text-gray-400"
                  -->
                                <svg class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </button>

                            <!--
                  'More' flyout menu, show/hide based on flyout menu state.

                  Entering: "transition ease-out duration-200"
                    From: "opacity-0 -translate-y-1"
                    To: "opacity-100 translate-y-0"
                  Leaving: "transition ease-in duration-150"
                    From: "opacity-100 translate-y-0"
                    To: "opacity-0 -translate-y-1"
                -->
                            <div v-if="showMenu" class="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg bg-white">
                                <ExtrasMenu @close-all="closeAll" />
                            </div>
                        </div>
                    </nav>

                    <div class="flex items-center md:ml-12">
                        <span class="inline-flex border-4 border-yellow-400 bg-yellow-100 hover:bg-yellow-600 rounded-xl shadow-md ring-1 ring-black ring-opacity-5">
                            <router-link to="/download" class="inline-flex items-center px-4 py-2 border border-transparent text-xl font-medium text-yellow-800 hover:text-yellow-100">
                                Download App
                            </router-link>
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <!--
        Mobile menu, show/hide based on mobile menu state.

        Entering: "duration-200 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
      -->
        <div v-if="showMobileMenu" class="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div class="pt-5 pb-6 px-5 sm:pb-8">
                    <div class="flex items-center justify-between">
                        <div>
                            <img class="h-10 w-auto" :src="require('../assets/logo.png')" alt="Ava Nakamoto" />
                        </div>
                        <div class="-mr-2">
                            <button
                                @click="showMobileMenu = !showMobileMenu"
                                type="button"
                                class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                            >
                                <span class="sr-only">Close menu</span>
                                <!-- Heroicon name: outline/x -->
                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="mt-6 sm:mt-8">
                        <nav>
                            <div class="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                                <a href="javascript://" class="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50">
                                    <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                                        <!-- Heroicon name: outline/chart-bar -->
                                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                            />
                                        </svg>
                                    </div>
                                    <div class="ml-4 text-base font-medium text-gray-900">
                                        Analytics
                                    </div>
                                </a>

                                <a href="javascript://" class="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50">
                                    <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                                        <!-- Heroicon name: outline/cursor-click -->
                                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                                            />
                                        </svg>
                                    </div>
                                    <div class="ml-4 text-base font-medium text-gray-900">
                                        Engagement
                                    </div>
                                </a>

                                <a href="javascript://" class="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50">
                                    <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                                        <!-- Heroicon name: outline/shield-check -->
                                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                            />
                                        </svg>
                                    </div>
                                    <div class="ml-4 text-base font-medium text-gray-900">
                                        Security
                                    </div>
                                </a>

                                <a href="javascript://" class="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50">
                                    <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                                        <!-- Heroicon name: outline/view-grid -->
                                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                            />
                                        </svg>
                                    </div>
                                    <div class="ml-4 text-base font-medium text-gray-900">
                                        Integrations
                                    </div>
                                </a>
                            </div>
                            <div class="mt-8 text-base">
                                <a href="javascript://" class="font-medium text-indigo-600 hover:text-indigo-500"> View all products <span aria-hidden="true">&rarr;</span></a>
                            </div>
                        </nav>
                    </div>
                </div>

                <div class="py-6 px-5">
                    <div class="grid grid-cols-2 gap-4">
                        <a href="javascript://" class="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                            Source Code
                        </a>

                        <a href="javascript://" class="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                            Smart Contracts
                        </a>

                        <router-link to="/team" class="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                            Our Team
                        </router-link>

                        <router-link to="/contact" class="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                            Contact
                        </router-link>

                        <a href="javascript://" class="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                            Blog
                        </a>

                        <a href="javascript://" class="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                            Contact Sales
                        </a>
                    </div>

                    <div class="mt-6">
                        <span @click="download" class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                            Download
                            <!-- Open Dashboard -->
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
/* Import modules. */
// import moment from 'moment'

/* Import components. */
import ExtrasMenu from '@/components/ExtrasMenu'

export default {
    components: {
        ExtrasMenu,
    },
    data: () => {
        return {
            showHeader: null,
            showMenu: null,
            showMobileMenu: null,
            showHackathon: null,
        }
    },
    watch: {
        $route(to) {
            // console.log('HEADER $route (to):', to, from)

            /* Manage header view. */
            if (to.path === '/dashboard') {
                this.showHeader = false
            } else {
                this.showHeader = true
            }
        }
    },
    methods: {
        closeAll() {
            this.showMenu = false
            this.showHackathon = false
        },

        download() {
            this.closeAll()
            this.$router.push('/download')
        },

        gogo() {
            this.closeAll()
            this.$router.push('/gogo')
        },

        // download() {
        //     this.showMobileMenu = false
        //     this.$router.push('/download')
        // },

        toggleExtras() {
            this.showHackathon = false
            this.showMenu = !this.showMenu
        },

        toggleHackathon() {
            this.showMenu = false
            this.showHackathon = !this.showHackathon
        },
    },
    created: function () {
        /* Set route. */
        const route = this.$route
        console.log('ROUTE', route)

        /* Set path. */
        const path = route.path
        console.log('PATH', path)

        /* Manage header view. */
        if (path === '/dashboard') {
            this.showHeader = false
        } else {
            this.showHeader = true
        }

        this.showMenu = false
        this.showMobileMenu = false
        this.showHackathon = false
    },
}
</script>
