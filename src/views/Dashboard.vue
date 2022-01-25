<template>
    <div class="fixed top-0 left-0 w-1/2 h-full bg-white" aria-hidden="true"></div>

    <div class="fixed top-0 right-0 w-1/2 h-full bg-gray-50" aria-hidden="true"></div>

    <div class="relative min-h-full flex flex-col">
        <Navbar />

        <!-- 3 column wrapper -->
        <div class="flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex">
            <!-- Left sidebar & main wrapper -->
            <div class="flex-1 min-w-0 bg-white xl:flex">
                <!-- Account profile -->
                <div class="xl:flex-shrink-0 xl:w-64 xl:border-r xl:border-gray-200 bg-white">
                    <div class="pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0">
                        <div class="flex items-center justify-between">
                            <div class="flex-1 space-y-8">
                                <div class="space-y-8 sm:space-y-0 sm:flex sm:justify-between sm:items-center xl:block xl:space-y-8">
                                    <!-- Profile -->
                                    <div class="flex items-center space-x-3">
                                        <div class="flex-shrink-0 h-12 w-12">
                                            <img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80" alt="" />
                                        </div>
                                        <div class="space-y-1">
                                            <div class="text-sm font-medium text-gray-900">
                                                TOTAL VALUE LOCKED
                                            </div>
                                            <a href="#" class="group flex items-center space-x-2.5">
                                                <svg class="h-5 w-5 text-gray-400 group-hover:text-gray-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                                                        clip-rule="evenodd"
                                                    />
                                                </svg>
                                                <span class="text-sm text-gray-500 group-hover:text-gray-900 font-medium">$1,337.88</span>
                                            </a>
                                        </div>
                                    </div>
                                    <!-- Action buttons -->
                                    <div class="flex flex-col sm:flex-row xl:flex-col">
                                        <button
                                            type="button"
                                            class="inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 xl:w-full"
                                        >
                                            Add New Strategy
                                        </button>
                                        <button
                                            type="button"
                                            class="mt-3 inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 xl:ml-0 xl:mt-3 xl:w-full"
                                        >
                                            Invite Team
                                        </button>
                                    </div>
                                </div>
                                <!-- Meta info -->
                                <div class="flex flex-col space-y-6 sm:flex-row sm:space-y-0 sm:space-x-8 xl:flex-col xl:space-x-0 xl:space-y-6">
                                    <div class="flex items-center space-x-2">
                                        <!-- Heroicon name: solid/badge-check -->
                                        <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path
                                                fill-rule="evenodd"
                                                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                        <span class="text-sm text-gray-500 font-medium">Pro Member</span>
                                    </div>
                                    <div class="flex items-center space-x-2">
                                        <!-- Heroicon name: solid/collection -->
                                        <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                                        </svg>
                                        <span class="text-sm text-gray-500 font-medium">8 Projects</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Strategies />
            </div>

            <Traders />
        </div>
    </div>
</template>

<script>
/* Import modules. */
import { ethers } from 'ethers'

/* Import components. */
import Navbar from '@/components/Navbar.vue'
import Strategies from '@/components/Strategies.vue'
import Traders from '@/components/Traders.vue'

export default {
    components: {
        Navbar,
        Strategies,
        Traders,
    },
    methods: {
        async web3Auth() {
            /* Close mobile menu. */
            this.showMobileMenu = false

            /* Validate embedded Web3 objects. */
            if (!window.ethereum && !window.bitcoin) {
                /* Validate embedded ethereum object. */
                if (window.bitcoin) {
                    console.info('Found Bitcoin provider.')
                } else if (window.ethereum) {
                    console.info('Found Ethereum provider.')
                } else {
                    return console.error('No Web3 provider found.')
                }
            }

            /* Initialize provider. */
            const provider = new ethers
                .providers
                .Web3Provider(window.ethereum, 'any')

            /* Prompt user for account connections. */
            await provider
                .send('eth_requestAccounts', [])
                .catch(err => {
                    console.error('ERROR: ETH REQUEST ACCOUNTS', err)
                })

            /* Set signer. */
            const signer = provider.getSigner()
            // console.log('SIGNER', signer)

            /* Request account. */
            this.account = await signer
                .getAddress()
                .catch(err => {
                    console.error('ERROR: NO SIGNER', err)
                })
            console.log('Account:', this.account)

            if (!this.account) {
                return alert('Oops! Please unlock your Metamask or Web3 wallet to continue.')
            }

            // All properties on a domain are optional
            const domain = {
                name: 'BITPAWNS',
                version: '1',
                chainId: 0x2711, // FIXME: This must be dynamically detected.
                // verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC'
            }

            /* Initialize a named list of all type definitions. */
            const types = {
                Account: [
                    { name: 'name', type: 'string' },
                    { name: 'email', type: 'string' },
                ],
                Session: [
                    { name: 'site', type: 'string' },
                    { name: 'action', type: 'string' },
                    { name: 'account', type: 'Account' },
                    { name: 'ip_address', type: 'string' },
                    { name: 'notes', type: 'string' },
                ],
            }

            /* Build data package. */
            const pkg = {
                site: 'BITPAWNS Admin Center',
                action: 'User Authorization',
                account: {
                    name: 'Anonymous',
                    email: 'n/a'
                },
                ip_address: '192.168.1.1',
                notes: 'none',
            }

            let signature

            signature = await signer
                ._signTypedData(domain, types, pkg)
                .catch(err => {
                    console.error('ERROR: CANNOT SIGNED TYPED DATA', err)
                })

            /* Validate signature. */
            if (!signature) {
                // TODO: Add UI popup for user.

                const message = `BITPAWNS Admin Center is requesting Web3 authorization to sign-in Anonymous (n/a) from [192.168.1.1].`

                signature = await signer
                    .signMessage(message)
                    .catch(err => {
                        console.error('ERROR: SIGNING MESSAGE', err)
                    })
            }
            console.log('SIGNATURE', signature)

            /* Validate signature. */
            if (signature) {
                /* Go to admin page. */
                this.$router.push('/admin')
            }

        },


    },
}
</script>
