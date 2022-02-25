<template>
    <div class="bg-gray-100">
        <div class="pt-12 sm:pt-16 lg:pt-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center">
                    <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
                        Back Our Winning Team!
                    </h2>
                    <p class="mt-4 text-xl text-gray-600">
                        We're looking for a short-list of ambitious sponsors to carry us over the top.
                    </p>
                </div>
            </div>
        </div>
        <div class="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
            <div class="relative">
                <div class="absolute inset-0 h-1/2 bg-gray-100"></div>

                <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
                        <div class="flex-1 bg-white px-6 py-8 lg:p-12">
                            <h3 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                                Hackathon Sponsors Address
                            </h3>

                            <p v-if="activeAccount === 'AVAX'" class="mt-6 text-3xl font-bold text-pink-500">
                                AVALANCHE
                                <a href="https://snowtrace.io/address/0xdc1c3eb7ad2a1abf0cbb1b115b67ddd4cfae5b66" target="_blank" class="hidden lg:block text-pink-500 text-2xl">0xDC1C3Eb7AD2a1ABF0CBb1B115B67ddd4cfAe5B66</a>
                                <a href="https://snowtrace.io/address/0xdc1c3eb7ad2a1abf0cbb1b115b67ddd4cfae5b66" target="_blank" class="block lg:hidden text-pink-500 text-2xl">0xDC1C3Eb7...cfAe5B66</a>
                            </p>

                            <p v-if="activeAccount === 'BSC'" class="mt-6 text-3xl font-bold text-yellow-500">
                                BINANCE SMART CHAIN
                                <a href="https://www.bscscan.com/address/0xDC1C3Eb7AD2a1ABF0CBb1B115B67ddd4cfAe5B66" target="_blank" class="hidden lg:block text-yellow-500 text-2xl">0xDC1C3Eb7AD2a1ABF0CBb1B115B67ddd4cfAe5B66</a>
                                <a href="https://www.bscscan.com/address/0xDC1C3Eb7AD2a1ABF0CBb1B115B67ddd4cfAe5B66" target="_blank" class="block lg:hidden text-yellow-500 text-2xl">0xDC1C3Eb7...cfAe5B66</a>
                            </p>

                            <p v-if="activeAccount === 'MATIC'" class="mt-6 text-3xl font-bold text-purple-500">
                                POLYGON
                                <a href="https://polygonscan.com/address/0xDC1C3Eb7AD2a1ABF0CBb1B115B67ddd4cfAe5B66" target="_blank" class="hidden lg:block text-purple-500 text-2xl">0xDC1C3Eb7AD2a1ABF0CBb1B115B67ddd4cfAe5B66</a>
                                <a href="https://polygonscan.com/address/0xDC1C3Eb7AD2a1ABF0CBb1B115B67ddd4cfAe5B66" target="_blank" class="block lg:hidden text-purple-500 text-2xl">0xDC1C3Eb7...cfAe5B66</a>
                            </p>

                            <small class="mt-3 block font-medium">
                                PLEASE NOTE:
                            </small>
                            <small class="block font-light text-xs">
                                All of the above (network) addresses are identical.
                            </small>
                            <small class="block font-light text-xs">
                                Toggle clickable links to open their respective block explorers.
                            </small>

                            <div class="mt-8">
                                <div class="flex items-center">
                                    <h4 class="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-red-600">
                                        Why Should You Sponsor Our Team?
                                    </h4>
                                    <div class="flex-1 border-t-2 border-gray-200"></div>
                                </div>

                                <ul role="list" class="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                                    <li class="flex items-start lg:col-span-1">
                                        <div class="flex-shrink-0">
                                            <!-- Heroicon name: solid/check-circle -->
                                            <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                        <p class="ml-3 text-sm text-gray-700">
                                            First access to minted $GOGO tokens
                                        </p>
                                    </li>

                                    <li class="flex items-start lg:col-span-1">
                                        <div class="flex-shrink-0">
                                            <!-- Heroicon name: solid/check-circle -->
                                            <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                        <p class="ml-3 text-sm text-gray-700">
                                            Exclusive grand prize rewards
                                        </p>
                                    </li>

                                    <li class="flex items-start lg:col-span-1 hidden">
                                        <div class="flex-shrink-0">
                                            <!-- Heroicon name: solid/check-circle -->
                                            <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                        <p class="ml-3 text-sm text-gray-700">
                                            Entry to annual conference
                                        </p>
                                    </li>

                                    <li class="flex items-start lg:col-span-1 hidden">
                                        <div class="flex-shrink-0">
                                            <!-- Heroicon name: solid/check-circle -->
                                            <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                        <p class="ml-3 text-sm text-gray-700">
                                            Official member t-shirt
                                        </p>
                                    </li>
                                </ul>
                            </div>

                            <button @click="toggleAccounts" class="mt-5 p-3 bg-blue-500 border-4 border-blue-700 rounded-xl text-xl text-gray-50 font-medium">
                                Toggle Avalanche / Binance / Polygon
                            </button>

                        </div>

                        <div class="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">

                            <img v-if="activeAccount === 'AVAX'" class="h-72 border-4 border-pink-500 rounded-xl" :src="require('../assets/qrcode-avax.png')" />
                            <img v-if="activeAccount === 'BSC'" class="h-72 border-4 border-yellow-500 rounded-xl" :src="require('../assets/qrcode-bsc.png')" />
                            <img v-if="activeAccount === 'MATIC'" class="h-72 border-4 border-purple-500 rounded-xl" :src="require('../assets/qrcode-matic.png')" />

                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        msg: String
    },
    data: () => {
        return {
            activeAccount: null,
        }
    },
    methods: {
        toggleAccounts() {
            if (this.activeAccount === 'AVAX') {
                this.activeAccount = 'BSC'
            } else if (this.activeAccount === 'BSC') {
                this.activeAccount = 'MATIC'
            } else {
                this.activeAccount = 'AVAX'
            }

            console.log('Account', this.activeAccount)
        },
    },
    created: function () {
        this.activeAccount = 'AVAX'
    },
}
</script>
