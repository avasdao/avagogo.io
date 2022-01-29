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

                            <p v-if="activeCurrency === 'BTC'" class="mt-6 text-3xl font-bold text-yellow-500">
                                BITCOIN
                                <a href="https://blockchair.com/bitcoin/address/31zq7GhbTRFDaLhpyMHMAgrjP8w5c94xA8" target="_blank" class="hidden lg:block text-red-500 text-2xl">31zq7GhbTRFDaLhpyMHMAgrjP8w5c94xA8</a>
                                <a href="https://blockchair.com/bitcoin/address/31zq7GhbTRFDaLhpyMHMAgrjP8w5c94xA8" target="_blank" class="block lg:hidden text-red-500 text-2xl">31zq7GhbTR...P8w5c94xA8</a>
                            </p>

                            <p v-if="activeCurrency === 'AVAX'" class="mt-6 text-3xl font-bold text-purple-500">
                                AVALANCHE
                                <a href="https://explorer.avax.network/address/X-avax16jfzu7p574fwytqct2xle5zvjxvnwa9tp6ak5n" target="_blank" class="hidden lg:block text-red-500 text-2xl">X-avax16jfzu7p574fwytqct2xle5zvjxvnwa9tp6ak5n</a>
                                <a href="https://explorer.avax.network/address/X-avax16jfzu7p574fwytqct2xle5zvjxvnwa9tp6ak5n" target="_blank" class="block lg:hidden text-red-500 text-2xl">X-avax16jf...wa9tp6ak5n</a>
                            </p>

                            <div class="mt-8">
                                <div class="flex items-center">
                                    <h4 class="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-indigo-600">
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

                            <button @click="toggleBtcAvax" class="mt-5 p-3 bg-blue-500 border-4 border-blue-700 rounded-xl text-xl text-gray-50 font-medium">
                                Toggle Bitcoin / Avalanche
                            </button>

                        </div>

                        <div class="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">

                            <img v-if="activeCurrency === 'BTC'" class="h-72" :src="require('../assets/qrcode-btc.png')" />
                            <img v-if="activeCurrency === 'AVAX'" class="h-72" :src="require('../assets/qrcode-avax.png')" />

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
            activeCurrency: null,
        }
    },
    methods: {
        toggleBtcAvax() {
            if (this.activeCurrency === 'BTC') {
                this.activeCurrency = 'AVAX'
            } else {
                this.activeCurrency = 'BTC'
            }
        },
    },
    created: function () {
        this.activeCurrency = 'BTC'
    },
}
</script>
