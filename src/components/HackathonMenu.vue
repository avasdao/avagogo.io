<template>
    <div class="absolute inset-0 flex">
        <div class="bg-white w-1/2"></div>
        <div class="bg-gray-50 w-1/2"></div>
    </div>

    <div class="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
        <nav class="grid gap-y-10 px-4 py-8 bg-white sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
            <div>
                <h3 class="text-sm font-medium tracking-wide text-gray-500 uppercase">
                    Featured Sponsors
                </h3>

                <ul role="list" class="mt-5 space-y-6">
                    <li class="flow-root">
                        <a @click="loadAlpha" href="javascript://" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-yellow-200">
                            <img class="h-8" src="https://i.imgur.com/A6kPXTc.png" />

                            <span class="ml-4">Alpha Finance Lab</span>
                        </a>
                    </li>

                    <li class="flow-root">
                        <a @click="loadBENQI" href="javascript://" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-yellow-200">
                            <img class="h-8" src="https://i.imgur.com/4r0Sjfq.png" />

                            <span class="ml-4 hidden">BENQI</span>
                        </a>
                    </li>

                    <li class="flow-root">
                        <a @click="loadColony" href="javascript://" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-yellow-200">
                            <img class="h-8" src="https://i.imgur.com/TRh2svH.png" />

                            <span class="ml-4 hidden">Colony</span>
                        </a>
                    </li>

                    <li class="flow-root">
                        <a @click="loadYieldYak" href="javascript://" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-yellow-200">
                            <img class="h-8" src="https://i.imgur.com/tDe10Qs.png" />

                            <span class="ml-4">Yield Yak</span>
                        </a>
                    </li>

                </ul>
            </div>

            <div>
                <h3 class="text-sm font-medium tracking-wide text-gray-500 uppercase">
                    Resources
                </h3>

                <ul role="list" class="mt-5 space-y-6">
                    <li class="flow-root">
                        <a href="https://canvas.avagogo.io" target="_blank" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-yellow-200">
                            <svg class="flex-shrink-0 h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>

                            <span class="ml-4">Lean Canvas</span>
                        </a>
                    </li>

                    <li class="flow-root">
                        <a href="https://github.com/modenero/avagogo" target="_blank" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-yellow-200">
                            <svg class="flex-shrink-0 h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>

                            <span class="ml-4">Source Code</span>
                        </a>
                    </li>

                    <li class="flow-root">
                        <a href="https://github.com/modenero/contracts" target="_blank" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-yellow-200">
                            <svg class="flex-shrink-0 h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path></svg>

                            <span class="ml-4">Smart Contracts</span>
                        </a>
                    </li>

                </ul>
            </div>
        </nav>

        <div class="bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
            <div>
                <h3 class="text-sm font-medium tracking-wide text-gray-500 uppercase">
                    Featured Social Media
                </h3>

                <ul role="list" class="mt-6 space-y-6">
                    <li class="flow-root">
                        <a href="https://twitter.com/AvaGoGoDeFi/status/1489126584468582400?s=20&t=herAyOkbpm9D-UoppHPcQA" target="_blank" class="-m-3 p-3 flex rounded-lg hover:bg-gray-100">
                            <div class="hidden sm:block flex-shrink-0">
                                <img
                                    class="w-32 h-20 object-cover rounded-md"
                                    src="https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80"
                                    alt=""
                                />
                            </div>

                            <div class="w-0 flex-1 sm:ml-8">
                                <h4 class="text-base font-medium text-gray-900 truncate">
                                    Started recording short vid clips of our new mobile app already in TestFlight. Which looks better (mp4 version)?
                                </h4>

                                <p class="mt-1 text-sm text-gray-500">
                                    #MoralisAvalancheHackathon @avalancheavax @MoralisWeb3 #web3 #dapp #defi #boards
                                </p>
                            </div>
                        </a>
                    </li>

                    <li class="flow-root">
                        <a href="https://www.reddit.com/r/AvaGoGoDeFi/comments/sjbw52/team_ava_gogos_official_moralis_avalanche/" target="_blank" class="-m-3 p-3 flex rounded-lg hover:bg-gray-100">
                            <div class="hidden sm:block flex-shrink-0">
                                <img
                                    class="w-32 h-20 object-cover rounded-md"
                                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80"
                                    alt=""
                                />
                            </div>

                            <div class="w-0 flex-1 sm:ml-8">
                                <h4 class="text-base font-medium text-gray-900 truncate">
                                    Team Ava GoGo's "Official" Moralis + Avalanche Hackathon Submission
                                </h4>

                                <p class="mt-1 text-sm text-gray-500">
                                    ummm, so yeah, this turned out to be a "silent" film.
                                    no idea why my Macbook mic didn't record the audio. i swear...
                                </p>
                            </div>
                        </a>
                    </li>

                </ul>
            </div>

            <div class="mt-6 text-sm font-medium">
                <a href="javascript://" class="text-indigo-600 hover:text-indigo-500"> View all posts <span aria-hidden="true">&rarr;</span></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        msg: String
    },
    methods: {
        loadAlpha() {
            this.$emit('close-all')

            this.$router.push('/boards/alpha-finance-lab')
        },

        loadBENQI() {
            this.$emit('close-all')

            this.$router.push('/boards/benqi')
        },

        loadColony() {
            this.$emit('close-all')

            this.$router.push('/boards/colony')
        },

        loadYieldYak() {
            this.$emit('close-all')

            this.$router.push('/boards/yield-yak')
        },

    },
}
</script>
