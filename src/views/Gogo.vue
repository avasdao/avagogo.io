<template>
    <main class="bg-white">
        <div class="bg-gray-50">
            <div class="relative">
                <div class="max-w-7xl mx-auto px-4 sm:px-6">
                    <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                        <div class="flex justify-start lg:w-0 lg:flex-1">
                            <a href="javascript://">
                                <span class="sr-only">Workflow</span>
                                <img class="h-12 w-auto sm:h-16" :src="require('../assets/logo.png')" alt="" />
                            </a>
                        </div>
                        <div class="-mr-2 -my-2 md:hidden">
                            <button
                                type="button"
                                class="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
                                aria-expanded="false"
                            >
                                <span class="sr-only">Open menu</span>
                                <!-- Heroicon name: outline/menu -->
                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                        <nav class="hidden md:flex space-x-10">
                            <div class="relative">
                                <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
                                <button
                                    type="button"
                                    class="text-gray-500 group bg-gray-50 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                                    aria-expanded="false"
                                >
                                    <span>Solutions</span>
                                    <!--
                      Heroicon name: solid/chevron-down

                      Item active: "text-gray-600", Item inactive: "text-gray-400"
                    -->
                                    <svg class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </button>

                                <!--
                    'Solutions' flyout menu, show/hide based on flyout menu state.

                    Entering: "transition ease-out duration-200"
                      From: "opacity-0 translate-y-1"
                      To: "opacity-100 translate-y-0"
                    Leaving: "transition ease-in duration-150"
                      From: "opacity-100 translate-y-0"
                      To: "opacity-0 translate-y-1"
                  -->
                                <div class="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 hidden">
                                    <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                        <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                            <a href="javascript://" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                                <!-- Heroicon name: outline/chart-bar -->
                                                <svg class="flex-shrink-0 h-6 w-6 text-cyan-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                                    />
                                                </svg>
                                                <div class="ml-4">
                                                    <p class="text-base font-medium text-gray-900">
                                                        Analytics
                                                    </p>
                                                    <p class="mt-1 text-sm text-gray-500">
                                                        Get a better understanding of where your traffic is coming from.
                                                    </p>
                                                </div>
                                            </a>

                                            <a href="javascript://" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                                <!-- Heroicon name: outline/cursor-click -->
                                                <svg class="flex-shrink-0 h-6 w-6 text-cyan-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                                                    />
                                                </svg>
                                                <div class="ml-4">
                                                    <p class="text-base font-medium text-gray-900">
                                                        Engagement
                                                    </p>
                                                    <p class="mt-1 text-sm text-gray-500">
                                                        Speak directly to your customers in a more meaningful way.
                                                    </p>
                                                </div>
                                            </a>

                                            <a href="javascript://" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                                <!-- Heroicon name: outline/shield-check -->
                                                <svg class="flex-shrink-0 h-6 w-6 text-cyan-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                                    />
                                                </svg>
                                                <div class="ml-4">
                                                    <p class="text-base font-medium text-gray-900">
                                                        Security
                                                    </p>
                                                    <p class="mt-1 text-sm text-gray-500">
                                                        Your customers&#039; data will be safe and secure.
                                                    </p>
                                                </div>
                                            </a>

                                            <a href="javascript://" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                                <!-- Heroicon name: outline/view-grid -->
                                                <svg class="flex-shrink-0 h-6 w-6 text-cyan-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                                    />
                                                </svg>
                                                <div class="ml-4">
                                                    <p class="text-base font-medium text-gray-900">
                                                        Integrations
                                                    </p>
                                                    <p class="mt-1 text-sm text-gray-500">
                                                        Connect with third-party tools that you&#039;re already using.
                                                    </p>
                                                </div>
                                            </a>

                                            <a href="javascript://" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                                <!-- Heroicon name: outline/refresh -->
                                                <svg class="flex-shrink-0 h-6 w-6 text-cyan-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                                </svg>
                                                <div class="ml-4">
                                                    <p class="text-base font-medium text-gray-900">
                                                        Automations
                                                    </p>
                                                    <p class="mt-1 text-sm text-gray-500">
                                                        Build strategic funnels that will drive your customers to convert
                                                    </p>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                                            <div class="flow-root">
                                                <a href="javascript://" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                                                    <!-- Heroicon name: outline/play -->
                                                    <svg class="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span class="ml-3">Watch Demo</span>
                                                </a>
                                            </div>

                                            <div class="flow-root">
                                                <a href="javascript://" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                                                    <!-- Heroicon name: outline/phone -->
                                                    <svg class="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="2"
                                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                        />
                                                    </svg>
                                                    <span class="ml-3">Contact Sales</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a href="javascript://" class="text-base font-medium text-gray-500 hover:text-gray-900">
                                Pricing
                            </a>
                            <a href="javascript://" class="text-base font-medium text-gray-500 hover:text-gray-900">
                                Docs
                            </a>

                            <div class="relative">
                                <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
                                <button
                                    type="button"
                                    class="text-gray-500 group bg-gray-50 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                                    aria-expanded="false"
                                >
                                    <span>More</span>
                                    <!--
                      Heroicon name: solid/chevron-down

                      Item active: "text-gray-600", Item inactive: "text-gray-400"
                    -->
                                    <svg class="text-gray-400 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </button>

                                <!--
                    'More' flyout menu, show/hide based on flyout menu state.

                    Entering: "transition ease-out duration-200"
                      From: "opacity-0 translate-y-1"
                      To: "opacity-100 translate-y-0"
                    Leaving: "transition ease-in duration-150"
                      From: "opacity-100 translate-y-0"
                      To: "opacity-0 translate-y-1"
                  -->
                                <div class="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0 hidden">
                                    <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                        <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                            <a href="javascript://" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                                <!-- Heroicon name: outline/support -->
                                                <svg class="flex-shrink-0 h-6 w-6 text-cyan-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                                                    />
                                                </svg>
                                                <div class="ml-4">
                                                    <p class="text-base font-medium text-gray-900">
                                                        Help Center
                                                    </p>
                                                    <p class="mt-1 text-sm text-gray-500">
                                                        Get all of your questions answered in our forums or contact support.
                                                    </p>
                                                </div>
                                            </a>

                                            <a href="javascript://" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                                <!-- Heroicon name: outline/bookmark-alt -->
                                                <svg class="flex-shrink-0 h-6 w-6 text-cyan-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                <div class="ml-4">
                                                    <p class="text-base font-medium text-gray-900">
                                                        Guides
                                                    </p>
                                                    <p class="mt-1 text-sm text-gray-500">
                                                        Learn how to maximize our platform to get the most out of it.
                                                    </p>
                                                </div>
                                            </a>

                                            <a href="javascript://" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                                <!-- Heroicon name: outline/calendar -->
                                                <svg class="flex-shrink-0 h-6 w-6 text-cyan-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                <div class="ml-4">
                                                    <p class="text-base font-medium text-gray-900">
                                                        Events
                                                    </p>
                                                    <p class="mt-1 text-sm text-gray-500">
                                                        See what meet-ups and other events we might be planning near you.
                                                    </p>
                                                </div>
                                            </a>

                                            <a href="javascript://" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                                <!-- Heroicon name: outline/shield-check -->
                                                <svg class="flex-shrink-0 h-6 w-6 text-cyan-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                                    />
                                                </svg>
                                                <div class="ml-4">
                                                    <p class="text-base font-medium text-gray-900">
                                                        Security
                                                    </p>
                                                    <p class="mt-1 text-sm text-gray-500">
                                                        Understand how we take your privacy seriously.
                                                    </p>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                                            <div>
                                                <h3 class="text-sm tracking-wide font-medium text-gray-500 uppercase">
                                                    Recent Posts
                                                </h3>
                                                <ul role="list" class="mt-4 space-y-4">
                                                    <li class="text-base truncate">
                                                        <a href="javascript://" class="font-medium text-gray-900 hover:text-gray-800">
                                                            Boost your conversion rate
                                                        </a>
                                                    </li>

                                                    <li class="text-base truncate">
                                                        <a href="javascript://" class="font-medium text-gray-900 hover:text-gray-800">
                                                            How to use search engine optimization to drive traffic to your site
                                                        </a>
                                                    </li>

                                                    <li class="text-base truncate">
                                                        <a href="javascript://" class="font-medium text-gray-900 hover:text-gray-800">
                                                            Improve your customer experience
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="mt-5 text-sm">
                                                <a href="javascript://" class="font-medium text-cyan-700 hover:text-cyan-600">View all posts <span aria-hidden="true">&rarr;</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                        <div class="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
                            <a href="javascript://" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                                Sign in
                            </a>
                            <a href="javascript://" class="whitespace-nowrap bg-cyan-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex items-center justify-center text-base font-medium text-white hover:bg-cyan-700">
                                Sign up
                            </a>
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
                <div class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden hidden">
                    <div class="rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
                        <div class="pt-5 pb-6 px-5">
                            <div class="flex items-center justify-between">
                                <div>
                                    <img class="h-10 w-auto" :src="require('../assets/logo.png')" alt="Workflow" />
                                </div>
                                <div class="-mr-2">
                                    <button
                                        type="button"
                                        class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
                                    >
                                        <span class="sr-only">Close menu</span>
                                        <!-- Heroicon name: outline/x -->
                                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div class="mt-6">
                                <nav class="grid gap-y-8">
                                    <a href="javascript://" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                        <!-- Heroicon name: outline/chart-bar -->
                                        <svg class="flex-shrink-0 h-6 w-6 text-cyan-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                            />
                                        </svg>
                                        <span class="ml-3 text-base font-medium text-gray-900">
                                            Analytics
                                        </span>
                                    </a>

                                    <a href="javascript://" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                        <!-- Heroicon name: outline/cursor-click -->
                                        <svg class="flex-shrink-0 h-6 w-6 text-cyan-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                                            />
                                        </svg>
                                        <span class="ml-3 text-base font-medium text-gray-900">
                                            Engagement
                                        </span>
                                    </a>

                                    <a href="javascript://" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                        <!-- Heroicon name: outline/shield-check -->
                                        <svg class="flex-shrink-0 h-6 w-6 text-cyan-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                            />
                                        </svg>
                                        <span class="ml-3 text-base font-medium text-gray-900">
                                            Security
                                        </span>
                                    </a>

                                    <a href="javascript://" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                        <!-- Heroicon name: outline/view-grid -->
                                        <svg class="flex-shrink-0 h-6 w-6 text-cyan-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                            />
                                        </svg>
                                        <span class="ml-3 text-base font-medium text-gray-900">
                                            Integrations
                                        </span>
                                    </a>

                                    <a href="javascript://" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                        <!-- Heroicon name: outline/refresh -->
                                        <svg class="flex-shrink-0 h-6 w-6 text-cyan-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                        </svg>
                                        <span class="ml-3 text-base font-medium text-gray-900">
                                            Automations
                                        </span>
                                    </a>
                                </nav>
                            </div>
                        </div>
                        <div class="py-6 px-5 space-y-6">
                            <div class="grid grid-cols-2 gap-y-4 gap-x-8">
                                <a href="javascript://" class="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Pricing
                                </a>

                                <a href="javascript://" class="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Docs
                                </a>

                                <a href="javascript://" class="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Blog
                                </a>

                                <a href="javascript://" class="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Contact Sales
                                </a>

                                <a href="javascript://" class="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Help Center
                                </a>

                                <a href="javascript://" class="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Guides
                                </a>

                                <a href="javascript://" class="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Events
                                </a>

                                <a href="javascript://" class="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Security
                                </a>
                            </div>
                            <div>
                                <a href="javascript://" class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-cyan-600 hover:bg-cyan-700">
                                    Sign up
                                </a>
                                <p class="mt-6 text-center text-base font-medium text-gray-500">
                                    Existing customer?
                                    <a href="javascript://" class="text-cyan-600 hover:text-cyan-500">
                                        Sign in
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Header section -->
            <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div class="text-center">
                    <h1 class="text-base font-semibold text-cyan-600 uppercase tracking-wide">
                        TOKENOMICS
                    </h1>

                    <p class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                        Stake. Vote. Spend Your $GOGO
                    </p>

                    <p class="max-w-xl mx-auto mt-5 text-xl text-gray-500">
                        Start earning $GOGO today!
                        We're looking for team members to join the fastest growing community in DeFi.
                    </p>
                </div>
            </div>
        </div>

        <!-- Split brand panel -->
        <div class="relative bg-white">
            <div class="absolute inset-0" aria-hidden="true">
                <div class="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-cyan-600 to-green-400"></div>
            </div>
            <div class="relative max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:px-8">
                <div class="bg-white py-16 px-4 sm:py-24 sm:px-6 lg:px-0 lg:pr-8">
                    <div class="max-w-lg mx-auto lg:mx-0">
                        <h2 class="text-base font-semibold tracking-wide text-cyan-600 uppercase">
                            Full-featured
                        </h2>
                        <p class="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">Everything you need to talk with your customers</p>
                        <dl class="mt-12 space-y-10">
                            <div class="relative">
                                <dt>
                                    <div class="absolute h-12 w-12 bg-gradient-to-r from-cyan-600 to-green-400 rounded-md flex items-center justify-center">
                                        <!-- Heroicon name: outline/view-list -->
                                        <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                        </svg>
                                    </div>
                                    <p class="ml-16 text-lg leading-6 font-medium text-gray-900">List view</p>
                                </dt>
                                <dd class="mt-2 ml-16 text-base text-gray-500">
                                    Nunc a, lacinia sed risus neque, arcu, rhoncus. Id mauris justo facilisis aliquam platea vestibulum condimentum morbi.
                                </dd>
                            </div>

                            <div class="relative">
                                <dt>
                                    <div class="absolute h-12 w-12 bg-gradient-to-r from-cyan-600 to-green-400 rounded-md flex items-center justify-center">
                                        <!-- Heroicon name: outline/view-boards -->
                                        <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                                            />
                                        </svg>
                                    </div>
                                    <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Boards</p>
                                </dt>
                                <dd class="mt-2 ml-16 text-base text-gray-500">
                                    Purus lobortis volutpat posuere id integer nunc tellus. Non mauris malesuada feugiat massa mi pellentesque cum est. Pharetra a varius urna rhoncus, tempor rutrum.
                                </dd>
                            </div>

                            <div class="relative">
                                <dt>
                                    <div class="absolute h-12 w-12 bg-gradient-to-r from-cyan-600 to-green-400 rounded-md flex items-center justify-center">
                                        <!-- Heroicon name: outline/calendar -->
                                        <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Calendar</p>
                                </dt>
                                <dd class="mt-2 ml-16 text-base text-gray-500">
                                    Purus lobortis volutpat posuere id integer nunc tellus. Non mauris malesuada feugiat massa mi pellentesque cum est. Pharetra a varius urna rhoncus, tempor rutrum.
                                </dd>
                            </div>

                            <div class="relative">
                                <dt>
                                    <div class="absolute h-12 w-12 bg-gradient-to-r from-cyan-600 to-green-400 rounded-md flex items-center justify-center">
                                        <!-- Heroicon name: outline/users -->
                                        <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </div>
                                    <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Teams</p>
                                </dt>
                                <dd class="mt-2 ml-16 text-base text-gray-500">
                                    Tincidunt sollicitudin interdum nunc sit risus at bibendum vitae. Urna, quam ut sit justo non, consectetur et varius.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <div class="bg-gradient-to-r from-cyan-600 to-green-400 py-16 px-4 sm:py-24 sm:px-6 lg:bg-none lg:flex lg:items-center lg:justify-end lg:px-0 lg:pl-8">
                    <div class="max-w-lg mx-auto w-full space-y-8 lg:mx-0">
                        <div>
                            <h2 class="sr-only">Price</h2>
                            <p class="relative grid grid-cols-2">
                                <span class="flex flex-col text-center">
                                    <span class="text-5xl font-extrabold text-white tracking-tight">$99</span>
                                    <span class="mt-2 text-base font-medium text-cyan-100">Setup fee</span>
                                    <span class="sr-only">plus</span>
                                </span>
                                <span class="pointer-events-none absolute h-12 w-full flex items-center justify-center" aria-hidden="true">
                                    <!-- Heroicon name: outline/plus -->
                                    <svg class="h-6 w-6 text-cyan-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                                    </svg>
                                </span>
                                <span>
                                    <span class="flex flex-col text-center">
                                        <span class="text-5xl font-extrabold text-white tracking-tight">$4</span>
                                        <span class="mt-2 text-base font-medium text-cyan-100">Per month</span>
                                    </span>
                                </span>
                            </p>
                        </div>
                        <ul role="list" class="rounded overflow-hidden grid gap-px sm:grid-cols-2">
                            <li class="bg-cyan-700 bg-opacity-50 py-4 px-4 flex items-center text-base text-white">
                                <!-- Heroicon name: outline/check -->
                                <svg class="h-6 w-6 text-cyan-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span class="ml-3">Unlimited projects</span>
                            </li>

                            <li class="bg-cyan-700 bg-opacity-50 py-4 px-4 flex items-center text-base text-white">
                                <!-- Heroicon name: outline/check -->
                                <svg class="h-6 w-6 text-cyan-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span class="ml-3">No per user fees</span>
                            </li>

                            <li class="bg-cyan-700 bg-opacity-50 py-4 px-4 flex items-center text-base text-white">
                                <!-- Heroicon name: outline/check -->
                                <svg class="h-6 w-6 text-cyan-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span class="ml-3">Unlimited storage</span>
                            </li>

                            <li class="bg-cyan-700 bg-opacity-50 py-4 px-4 flex items-center text-base text-white">
                                <!-- Heroicon name: outline/check -->
                                <svg class="h-6 w-6 text-cyan-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span class="ml-3">24/7 support</span>
                            </li>

                            <li class="bg-cyan-700 bg-opacity-50 py-4 px-4 flex items-center text-base text-white">
                                <!-- Heroicon name: outline/check -->
                                <svg class="h-6 w-6 text-cyan-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span class="ml-3">Cancel any time</span>
                            </li>

                            <li class="bg-cyan-700 bg-opacity-50 py-4 px-4 flex items-center text-base text-white">
                                <!-- Heroicon name: outline/check -->
                                <svg class="h-6 w-6 text-cyan-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span class="ml-3">14 days free</span>
                            </li>
                        </ul>
                        <a href="javascript://" class="w-full bg-white border border-transparent rounded-md py-4 px-8 flex items-center justify-center text-lg leading-6 font-medium text-cyan-700 hover:bg-cyan-50 md:px-10">
                            Get started today
                        </a>
                        <a href="javascript://" class="block text-center text-base font-medium text-cyan-100 hover:text-white">
                            Try Workflow Lite for free
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Logo cloud -->
        <div class="bg-cyan-100 bg-opacity-25">
            <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div class="lg:grid lg:grid-cols-2 lg:gap-8">
                    <h2 class="max-w-md mx-auto text-3xl font-extrabold text-cyan-900 text-center lg:max-w-xl lg:text-left">
                        The world's most innovative companies use Workflow
                    </h2>
                    <div class="mt-8 flow-root lg:mt-0 self-center">
                        <div class="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
                            <div class="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                                <img class="h-12" src="https://tailwindui.com/img/logos/workcation-logo-cyan-900.svg" alt="Workcation" />
                            </div>

                            <div class="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                                <img class="h-12" src="https://tailwindui.com/img/logos/tuple-logo-cyan-900.svg" alt="Tuple" />
                            </div>

                            <div class="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                                <img class="h-12" src="https://tailwindui.com/img/logos/level-logo-cyan-900.svg" alt="Level" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- FAQs -->
        <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-extrabold text-gray-900 text-center">
                Frequently asked questions
            </h2>
            <div class="mt-12">
                <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
                    <div>
                        <dt class="text-lg leading-6 font-medium text-gray-900">
                            What&#039;s the best thing about Switzerland?
                        </dt>
                        <dd class="mt-2 text-base text-gray-500">
                            I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                        </dd>
                    </div>

                    <div>
                        <dt class="text-lg leading-6 font-medium text-gray-900">
                            How do you make holy water?
                        </dt>
                        <dd class="mt-2 text-base text-gray-500">
                            You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                        </dd>
                    </div>

                    <div>
                        <dt class="text-lg leading-6 font-medium text-gray-900">
                            Why do you never see elephants hiding in trees?
                        </dt>
                        <dd class="mt-2 text-base text-gray-500">
                            Because they&#039;re so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                        </dd>
                    </div>

                    <div>
                        <dt class="text-lg leading-6 font-medium text-gray-900">
                            What do you call someone with no body and no nose?
                        </dt>
                        <dd class="mt-2 text-base text-gray-500">
                            Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                        </dd>
                    </div>

                    <div>
                        <dt class="text-lg leading-6 font-medium text-gray-900">
                            Why can&#039;t you hear a pterodactyl go to the bathroom?
                        </dt>
                        <dd class="mt-2 text-base text-gray-500">
                            Because the pee is silent. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                        </dd>
                    </div>

                    <div>
                        <dt class="text-lg leading-6 font-medium text-gray-900">
                            Why did the invisible man turn down the job offer?
                        </dt>
                        <dd class="mt-2 text-base text-gray-500">
                            He couldn&#039;t see himself doing it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                        </dd>
                    </div>
                </dl>
            </div>
        </div>

        <!-- CTA section -->
        <div class="bg-gradient-to-r from-cyan-600 to-green-400">
            <div class="max-w-2xl mx-auto py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
                <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
                    <span class="block">Boost your productivity.</span>
                    <span class="block text-cyan-900">Start using Workflow today.</span>
                </h2>
                <p class="mt-4 text-lg leading-6 text-cyan-100">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.</p>
                <a href="javascript://" class="mt-8 w-full bg-cyan-50 border border-transparent rounded-md py-3 px-5 inline-flex items-center justify-center text-base font-medium text-cyan-700 hover:bg-cyan-100 sm:w-auto">
                    Sign up for free
                </a>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    components: {
        //
    },
    data: () => {
        return {
            //
        }
    },
    methods: {
        //
    },
    created: function () {
        //
    },
    mounted: function () {
        //
    },
}
</script>
