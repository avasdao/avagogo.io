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
                <main class="mt-5 mx-auto max-w-7xl px-4 sm:mt-8 sm:px-6 lg:mt-10">
                    <div class="lg:grid lg:grid-cols-12 lg:gap-8">
                        <div class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                            <h1>
                                <span class="block text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
                                    #ETHDenver2022 Hackathon
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

                        <a href="/media/ava_gogo_dev_demo.mp4" target="_blank" class="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                            <svg class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden" width="640" height="784" fill="none" viewBox="0 0 640 784" aria-hidden="true">
                                <defs>
                                    <pattern id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e" x="118" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                        <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                                    </pattern>
                                </defs>
                                <rect y="72" width="640" height="640" class="text-gray-50" fill="currentColor" />
                                <rect x="118" width="404" height="784" fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)" />
                            </svg>

                            <div class="mt-12 lg:mt-0 flex flex-col items-center relative mx-auto w-full lg:w-96 rounded-lg shadow-lg lg:max-w-md">
                                <button type="button" class="flex flex-col items-center relative w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    <span class="sr-only">Watch our video to learn more</span>

                                    <img class="w-full" src="/media/hackathon-demo.png" alt="" />

                                    <div class="absolute inset-0 w-full h-full flex items-center justify-center" aria-hidden="true">
                                        <svg class="h-20 w-20 text-indigo-500" fill="currentColor" viewBox="0 0 84 84">
                                            <circle opacity="0.9" cx="42" cy="42" r="42" fill="white" />
                                            <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </a>

                    </div>
                </main>
            </div>
        </div>

        <div class="mb-10 grid grid-cols-1 gap-4 lg:col-span-2">

            <!-- Actions panel -->
            <section aria-labelledby="quick-links-title">
                <div class="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
                    <h2 class="sr-only" id="quick-links-title">Quick links</h2>

                    <div class="rounded-tl-lg rounded-tr-lg sm:rounded-tr-none relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500">
                        <img class="h-24" src="https://i.imgur.com/D0OMVvd.png" />
                        <div class="mt-5">
                            <h3 class="text-lg font-medium">
                                <router-link to="/hackathon/1inch" class="focus:outline-none">
                                    <!-- Extend touch target to entire panel -->
                                    <span class="absolute inset-0" aria-hidden="true"></span>
                                    <h1 class="text-2xl text-indigo-500 font-light">
                                        <span class="text-lg text-indigo-300 font-bold">#1</span> 1inch
                                    </h1>
                                    NFT Marketplace on the 1inch Limit Order Protocol
                                </router-link>
                            </h3>
                            <p class="mt-2 text-base text-gray-500">
                                An adapter for creating limit orders over the 1inch Liquidity Protocol or over any decentralized exchange (DEX), based on their available liquidity.
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
                        <img class="h-24" src="https://i.imgur.com/lpeNThH.png" />
                        <div class="mt-8">
                            <h3 class="text-lg font-medium">
                                <router-link to="/hackathon/aave" class="focus:outline-none">
                                    <!-- Extend touch target to entire panel -->
                                    <span class="absolute inset-0" aria-hidden="true"></span>
                                    <h1 class="text-2xl text-indigo-500 font-light">
                                        <span class="text-lg text-indigo-300 font-bold">#2</span> Aave
                                    </h1>
                                    Best Use Of Aave V3
                                </router-link>
                            </h3>
                            <p class="mt-2 text-base text-gray-500">
                                Best use of Aave v3.
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
                        <img class="h-24" src="https://i.imgur.com/EeqYXlJ.png" />
                        <div class="mt-8">
                            <h3 class="text-lg font-medium">
                                <router-link to="/hackathon/api3" class="focus:outline-none">
                                    <!-- Extend touch target to entire panel -->
                                    <span class="absolute inset-0" aria-hidden="true"></span>
                                    <h1 class="text-2xl text-indigo-500 font-light">
                                        <span class="text-lg text-indigo-300 font-bold">#3</span> API3
                                    </h1>
                                    The Masses Against The Classes
                                </router-link>
                            </h3>
                            <p class="mt-2 text-base text-gray-500">
                                Project that is judged most likely to attract the largest user adoption or show the greatest commercial viability.
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
                        <img class="h-24" src="https://i.imgur.com/SUFpqfa.png" />
                        <div class="mt-8">
                            <h3 class="text-lg font-medium">
                                <router-link to="/hackathon/ceramic" class="focus:outline-none">
                                    <!-- Extend touch target to entire panel -->
                                    <span class="absolute inset-0" aria-hidden="true"></span>
                                    <h1 class="text-2xl text-indigo-500 font-light">
                                        <span class="text-lg text-indigo-300 font-bold">#4</span> Ceramic
                                    </h1>
                                    Build a Self-sovereign, Encrypted, Decentralized Data Hub
                                </router-link>
                            </h3>
                            <p class="mt-2 text-base text-gray-500">
                                This project is focused on building a private and decentralized data storage alternative that solves core structural issues with Web2 – specifically that Web2 platforms (e.g. Facebook) can own and gather user data that powers their 'surveillance capitalism’. With new, cutting-edge Web3 technologies... we can do better.
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
                        <img class="h-24" src="https://i.imgur.com/vk8gv7Q.png" />
                        <div class="mt-8">
                            <h3 class="text-lg font-medium">
                                <router-link to="/hackathon/harmony" class="focus:outline-none">
                                    <!-- Extend touch target to entire panel -->
                                    <span class="absolute inset-0" aria-hidden="true"></span>
                                    <h1 class="text-2xl text-indigo-500 font-light">
                                        <span class="text-lg text-indigo-300 font-bold">#5</span> Harmony
                                    </h1>
                                    Unique Usages for Non-fungible Tokens
                                </router-link>
                            </h3>
                            <p class="mt-2 text-base text-gray-500">
                                We are all familiar with how NFTs can prove ownership and have been used to show membership in a club or ownership of a digital image.

                                But that is not all.

                                What ELSE can an NFT do? How can you use NFTs in a metaverse? What other rights can be imbedded into an NFT? Can you solve joint ownership of an NFT? An NFT timeshare?
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
                        <img class="h-24" src="https://i.imgur.com/nuaKghb.png" />
                        <div class="mt-8">
                            <h3 class="text-lg font-medium">
                                <router-link to="/hackathon/lit" class="focus:outline-none">
                                    <!-- Extend touch target to entire panel -->
                                    <span class="absolute inset-0" aria-hidden="true"></span>
                                    <h1 class="text-2xl text-indigo-500 font-light">
                                        <span class="text-lg text-indigo-300 font-bold">#6</span> Lit Protocol
                                    </h1>
                                    Hub - A Data Self-sovereignty Implementation and SDK
                                </router-link>
                            </h3>
                            <p class="mt-2 text-base text-gray-500">
                                For this bounty, use Lit Protocol and Ceramic Network to create a novel consent and data sharing system for individual users and the applications they use.
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
                        <img class="h-24" src="https://i.imgur.com/FidAkQp.png" />
                        <div class="mt-8">
                            <h3 class="text-lg font-medium">
                                <router-link to="/hackathon/livepeer" class="focus:outline-none">
                                    <!-- Extend touch target to entire panel -->
                                    <span class="absolute inset-0" aria-hidden="true"></span>
                                    <h1 class="text-2xl text-indigo-500 font-light">
                                        <span class="text-lg text-indigo-300 font-bold">#7</span> Livepeer Inc.
                                    </h1>
                                    Best Creator, Gaming or Metaverse App
                                </router-link>
                            </h3>
                            <p class="mt-2 text-base text-gray-500">
                                Technicality, originality, practicality and WOW factor.
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
                        <img class="h-24" src="https://i.imgur.com/ZysMiEx.png" />
                        <div class="mt-8">
                            <h3 class="text-lg font-medium">
                                <router-link to="/hackathon/rarible" class="focus:outline-none">
                                    <!-- Extend touch target to entire panel -->
                                    <span class="absolute inset-0" aria-hidden="true"></span>
                                    <h1 class="text-2xl text-indigo-500 font-light">
                                        <span class="text-lg text-indigo-300 font-bold">#8</span> Rarible DAO
                                    </h1>
                                    Most Beautiful Applications Using Rarible's Protocol
                                </router-link>
                            </h3>
                            <p class="mt-2 text-base text-gray-500">
                                The most beautiful applications using Rarible Protocol’s indexer or exchange, the best NFT minting application using the lazy minting feature, or the most innovative NFT applications using or planning to use the Protocol’s indexer or exchange.
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
                        <img class="h-24" src="https://i.imgur.com/7dHkZrm.png" />
                        <div class="mt-8">
                            <h3 class="text-lg font-medium">
                                <router-link to="/hackathon/tableland" class="focus:outline-none">
                                    <!-- Extend touch target to entire panel -->
                                    <span class="absolute inset-0" aria-hidden="true"></span>
                                    <h1 class="text-2xl text-indigo-500 font-light">
                                        <span class="text-lg text-indigo-300 font-bold">#9</span> Tableland (Textile)
                                    </h1>
                                    Dynamic &amp; Private NFT Metadata with Tableland + Lit Protocol
                                </router-link>
                            </h3>
                            <p class="mt-2 text-base text-gray-500">
                                We are looking for projects that make full use of the Tableland features to build the metadata layer in their projects.
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
                        <img class="h-24" src="https://i.imgur.com/ILF49In.png" />
                        <div class="mt-8">
                            <h3 class="text-lg font-medium">
                                <router-link to="/hackathon/yearn" class="focus:outline-none">
                                    <!-- Extend touch target to entire panel -->
                                    <span class="absolute inset-0" aria-hidden="true"></span>
                                    <h1 class="text-2xl text-indigo-500 font-light">
                                        <span class="text-lg text-indigo-300 font-bold">#10</span> Yearn Finance
                                    </h1>
                                    Most Interesting Data Analysis or Monitoring of Yearn
                                </router-link>
                            </h3>
                            <p class="mt-2 text-base text-gray-500">
                                Create a dashboard or a monitoring tool to be able to check Yearn vaults, strategies, and the underlying protocols. You can get some inspiration from yearn.
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
