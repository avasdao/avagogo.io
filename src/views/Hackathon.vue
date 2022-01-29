<template>
    <main class="mx-auto max-w-5xl">

        <div class="relative bg-white overflow-hidden">
            <div class="hidden lg:block lg:absolute lg:inset-0" aria-hidden="true">
                <svg class="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8" width="640" height="784" fill="none" viewBox="0 0 640 784">
                    <defs>
                        <pattern id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047" x="118" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect y="72" width="640" height="640" class="text-gray-50" fill="currentColor" />
                    <rect x="118" width="404" height="784" fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)" />
                </svg>
            </div>

            <div class="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
                <div>
                    <nav class="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6" aria-label="Global">
                        <div class="flex items-center flex-1">
                            <div class="flex items-center justify-between w-full md:w-auto">
                                <a href="javascript://">
                                    <span class="sr-only">Ava Nakamoto</span>
                                    <img class="h-10 w-auto sm:h-16" :src="require('../assets/logo.png')" alt="" />
                                </a>
                                <div class="-mr-2 flex items-center md:hidden">
                                    <button
                                        @click="showMobileMenu = !showMobileMenu"
                                        type="button"
                                        class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                        aria-expanded="false"
                                    >
                                        <span class="sr-only">Open main menu</span>
                                        <!-- Heroicon name: outline/menu -->
                                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div class="hidden md:block md:ml-10 md:space-x-10">
                                <a href="https://github.com/modenero/avagogo" target="_blank" class="font-medium text-gray-500 hover:text-gray-900">
                                    Source Code
                                </a>

                                <a href="https://github.com/modenero/contracts" target="_blank" class="font-medium text-gray-500 hover:text-gray-900">
                                    Smart Contracts
                                </a>

                                <router-link to="/team" class="font-medium text-gray-500 hover:text-gray-900">
                                    Our Team
                                </router-link>

                                <router-link to="/contact" class="font-medium text-gray-500 hover:text-gray-900">
                                    Contact
                                </router-link>
                            </div>
                        </div>
                        <div class="hidden md:block text-right">
                            <span class="inline-flex rounded-md shadow-md ring-1 ring-black ring-opacity-5">
                                <a href="javascript://" class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50">
                                    Open App Demo
                                </a>
                            </span>
                        </div>
                    </nav>

                    <!--
                Mobile menu, show/hide based on menu open state.

                Entering: "duration-150 ease-out"
                  From: "opacity-0 scale-95"
                  To: "opacity-100 scale-100"
                Leaving: "duration-100 ease-in"
                  From: "opacity-100 scale-100"
                  To: "opacity-0 scale-95"
              -->
                    <div v-if="showMobileMenu" class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                        <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div class="px-5 pt-4 flex items-center justify-between">
                                <div>
                                    <img class="h-10 w-auto" :src="require('../assets/logo.png')" alt="" />
                                </div>
                                <div class="-mr-2">
                                    <button
                                        @click="showMobileMenu = !showMobileMenu"
                                        type="button"
                                        class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                    >
                                        <span class="sr-only">Close main menu</span>
                                        <!-- Heroicon name: outline/x -->
                                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div class="px-2 pt-2 pb-3 space-y-1">
                                <a href="https://github.com/modenero/avagogo" target="_blank" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                                    Source Code
                                </a>

                                <a href="https://github.com/modenero/contracts" target="_blank" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                                    Smart Contracts
                                </a>

                                <router-link to="/team" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                                    Our Team
                                </router-link>

                                <router-link to="/contact" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                                    Contact
                                </router-link>
                            </div>

                            <a href="javascript://" class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100">
                                Open App Demo
                            </a>
                        </div>
                    </div>
                </div>

                <main class="mt-5 mx-auto max-w-7xl px-4 sm:mt-10 sm:px-6 lg:mt-16">
                    <div class="lg:grid lg:grid-cols-12 lg:gap-8">
                        <div class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                            <h1>
                                <span class="block text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
                                    Moralis + Avalanche Hackathon
                                </span>
                                <span class="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                                    <span class="block text-gray-900">Ava GoGo is</span>
                                    <span class="block text-indigo-600">DeFi Made Easy!</span>
                                </span>
                            </h1>

                            <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                Ava's exclusive suite of <a href="https://github.com/modenero/contracts" class="text-blue-500 font-bold hover:underline" target="_blank">smart contracts</a> are introducing a new era in <strong>DeFi For Everyone.</strong>
                            </p>

                            <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                Research and copy the investment strategies of the world's leading DeFi traders.
                            </p>

                            <p class="mt-3 text-base text-yellow-700 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                Do you have what it takes to BUIDL?
                                Request an invite to our team's Slack channel.
                            </p>

                            <div class="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                                <div class="mt-3 sm:flex">
                                    <label for="email" class="sr-only">Email</label>
                                    <input
                                        type="email"
                                        v-model="email"
                                        class="block w-full py-3 text-base rounded-md placeholder-gray-500 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:flex-1 border-gray-300"
                                        placeholder="Please enter your email here"
                                    />
                                    <button
                                        @click="sendRequest"
                                        type="submit"
                                        class="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                                    >
                                        Request invitation
                                    </button>
                                </div>

                                <p class="mt-3 text-sm text-gray-500">
                                    We care about the protection of your data. Read our
                                    <router-link to="/privacy" class="font-medium text-gray-900 underline">
                                        Privacy Policy
                                    </router-link>.
                                </p>
                            </div>
                        </div>
                        <div class="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                            <svg class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden" width="640" height="784" fill="none" viewBox="0 0 640 784" aria-hidden="true">
                                <defs>
                                    <pattern id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e" x="118" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                        <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                                    </pattern>
                                </defs>
                                <rect y="72" width="640" height="640" class="text-gray-50" fill="currentColor" />
                                <rect x="118" width="404" height="784" fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)" />
                            </svg>
                            <div class="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                                <button type="button" class="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    <span class="sr-only">Watch our video to learn more</span>
                                    <img class="w-full" src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="" />
                                    <div class="absolute inset-0 w-full h-full flex items-center justify-center" aria-hidden="true">
                                        <svg class="h-20 w-20 text-indigo-500" fill="currentColor" viewBox="0 0 84 84">
                                            <circle opacity="0.9" cx="42" cy="42" r="42" fill="white" />
                                            <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>

        <div class="grid grid-cols-1 gap-4 lg:col-span-2">

            <!-- Actions panel -->
            <section aria-labelledby="quick-links-title">
                <div class="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
                    <h2 class="sr-only" id="quick-links-title">Quick links</h2>

                    <div class="rounded-tl-lg rounded-tr-lg sm:rounded-tr-none relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500">
                        <img class="h-16" src="https://i.imgur.com/A6kPXTc.png" />
                        <div class="mt-5">
                            <h3 class="text-lg font-medium">
                                <router-link to="/hackathon/alpha-finance-lab" class="focus:outline-none">
                                    <!-- Extend touch target to entire panel -->
                                    <span class="absolute inset-0" aria-hidden="true"></span>
                                    Best Alpha Finance Lab dApp
                                </router-link>
                            </h3>
                            <p class="mt-2 text-sm text-gray-500">
                                Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.
                            </p>
                        </div>
                        <span class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"
                                />
                            </svg>
                        </span>
                    </div>

                    <div class="sm:rounded-tr-lg relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500">
                        <img class="h-16" src="https://i.imgur.com/4r0Sjfq.png" />
                        <div class="mt-8">
                            <h3 class="text-lg font-medium">
                                <router-link to="/hackathon/benqi" class="focus:outline-none">
                                    <!-- Extend touch target to entire panel -->
                                    <span class="absolute inset-0" aria-hidden="true"></span>
                                    Best BENQI dApp
                                </router-link>
                            </h3>
                            <p class="mt-2 text-sm text-gray-500">
                                Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.
                            </p>
                        </div>
                        <span class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"
                                />
                            </svg>
                        </span>
                    </div>

                    <div class="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500">
                        <img class="h-16" src="https://i.imgur.com/JdaZao2.png" />
                        <div class="mt-8">
                            <h3 class="text-lg font-medium">
                                <router-link to="/hackathon/chainlink" class="focus:outline-none">
                                    <!-- Extend touch target to entire panel -->
                                    <span class="absolute inset-0" aria-hidden="true"></span>
                                    Best Use of Chainlink Tech
                                </router-link>
                            </h3>
                            <p class="mt-2 text-sm text-gray-500">
                                Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.
                            </p>
                        </div>
                        <span class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"
                                />
                            </svg>
                        </span>
                    </div>

                    <div class="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500">
                        <img class="h-16" src="https://i.imgur.com/TRh2svH.png" />
                        <div class="mt-8">
                            <h3 class="text-lg font-medium">
                                <router-link to="/hackathon/colony" class="focus:outline-none">
                                    <!-- Extend touch target to entire panel -->
                                    <span class="absolute inset-0" aria-hidden="true"></span>
                                    The First Index on Avalanche
                                </router-link>
                            </h3>
                            <p class="mt-2 text-sm text-gray-500">
                                Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.
                            </p>
                        </div>
                        <span class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"
                                />
                            </svg>
                        </span>
                    </div>

                    <div class="sm:rounded-bl-lg relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500">
                        <img class="h-16" src="https://i.imgur.com/EpG8l4a.png" />
                        <div class="mt-8">
                            <h3 class="text-lg font-medium">
                                <router-link to="/hackathon/covalent" class="focus:outline-none">
                                    <!-- Extend touch target to entire panel -->
                                    <span class="absolute inset-0" aria-hidden="true"></span>
                                    Best Use of the Covalent API
                                </router-link>
                            </h3>
                            <p class="mt-2 text-sm text-gray-500">
                                Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.
                            </p>
                        </div>
                        <span class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"
                                />
                            </svg>
                        </span>
                    </div>

                    <div class="rounded-bl-lg rounded-br-lg sm:rounded-bl-none relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500">
                        <img class="h-16" src="https://i.imgur.com/tDe10Qs.png" />
                        <div class="mt-8">
                            <h3 class="text-lg font-medium">
                                <router-link to="/hackathon/yield-yak" class="focus:outline-none">
                                    <!-- Extend touch target to entire panel -->
                                    <span class="absolute inset-0" aria-hidden="true"></span>
                                    Best Yield Yak Front-End Integration
                                    <br />+ Use of Interest-Bearing Assets
                                </router-link>
                            </h3>
                            <p class="mt-2 text-sm text-gray-500">
                                Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.
                            </p>
                        </div>
                        <span class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"
                                />
                            </svg>
                        </span>
                    </div>
                </div>
            </section>
        </div>



        <!-- This example requires Tailwind CSS v2.0+ -->
        <div class="flow-root mt-10 px-20">
            <ul role="list" class="-mb-8">
                <li>
                    <div class="relative pb-8">
                        <span class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                        <div class="relative flex space-x-3">
                            <div>
                                <span class="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white">
                                    <!-- Heroicon name: solid/user -->
                                    <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                                    </svg>
                                </span>
                            </div>
                            <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                <div>
                                    <p class="text-sm text-gray-500">Applied to <a href="javascript://" class="font-medium text-gray-900">Front End Developer</a></p>
                                </div>
                                <div class="text-right text-sm whitespace-nowrap text-gray-500">
                                    <time datetime="2020-09-20">Sep 20</time>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                <li>
                    <div class="relative pb-8">
                        <span class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                        <div class="relative flex space-x-3">
                            <div>
                                <span class="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
                                    <!-- Heroicon name: solid/thumb-up -->
                                    <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path
                                            d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"
                                        />
                                    </svg>
                                </span>
                            </div>
                            <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                <div>
                                    <p class="text-sm text-gray-500">Advanced to phone screening by <a href="javascript://" class="font-medium text-gray-900">Bethany Blake</a></p>
                                </div>
                                <div class="text-right text-sm whitespace-nowrap text-gray-500">
                                    <time datetime="2020-09-22">Sep 22</time>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                <li>
                    <div class="relative pb-8">
                        <span class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                        <div class="relative flex space-x-3">
                            <div>
                                <span class="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
                                    <!-- Heroicon name: solid/check -->
                                    <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                </span>
                            </div>
                            <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                <div>
                                    <p class="text-sm text-gray-500">Completed phone screening with <a href="javascript://" class="font-medium text-gray-900">Martha Gardner</a></p>
                                </div>
                                <div class="text-right text-sm whitespace-nowrap text-gray-500">
                                    <time datetime="2020-09-28">Sep 28</time>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                <li>
                    <div class="relative pb-8">
                        <span class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                        <div class="relative flex space-x-3">
                            <div>
                                <span class="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
                                    <!-- Heroicon name: solid/thumb-up -->
                                    <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path
                                            d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"
                                        />
                                    </svg>
                                </span>
                            </div>
                            <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                <div>
                                    <p class="text-sm text-gray-500">Advanced to interview by <a href="javascript://" class="font-medium text-gray-900">Bethany Blake</a></p>
                                </div>
                                <div class="text-right text-sm whitespace-nowrap text-gray-500">
                                    <time datetime="2020-09-30">Sep 30</time>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                <li>
                    <div class="relative pb-8">
                        <div class="relative flex space-x-3">
                            <div>
                                <span class="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
                                    <!-- Heroicon name: solid/check -->
                                    <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                </span>
                            </div>
                            <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                <div>
                                    <p class="text-sm text-gray-500">Completed interview with <a href="javascript://" class="font-medium text-gray-900">Katherine Snyder</a></p>
                                </div>
                                <div class="text-right text-sm whitespace-nowrap text-gray-500">
                                    <time datetime="2020-10-04">Oct 4</time>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

    </main>
</template>

<script>
export default {
    props: {
        msg: String
    },
    data: function () {
        return {
            email: null,
            showMobileMenu: null,
        }
    },
    methods: {
        async sendRequest() {
            if (!this.email) {
                return alert('Please provide your email address.')
            }

            const url = 'https://api.telr.io/v1/slack/invite'

            const data = {
                action: 'Requesting invitation to #telr slack channel.',
                fullName: 'Ava GoGo Hackathon',
                contact: this.email,
            }

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            console.log('RESPONSE', response)
            if (response) {
                this.email = ''

                alert(`Your request was sent successfully!`)
            }

        },

    },
    created: function () {
        this.showMobileMenu = false
    },
}
</script>
