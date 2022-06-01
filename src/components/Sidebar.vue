<template>
    <div class="space-y-8 sm:space-y-0 sm:flex sm:justify-between sm:items-center xl:block xl:space-y-8">

        <div class="flex flex-col items-center">
            <div class="text-xl font-medium text-gray-900">
                Total Value Locked
            </div>

            <div class="text-2xl text-gray-500 hover:text-gray-900 font-medium">
                $1,337.88
            </div>
        </div>

        <div v-if="isAuthenticated">
            {{ user.get('ethAddress') }}
        </div>

        <div v-if="isAuthenticated" class="flex flex-col sm:flex-row xl:flex-col">
            <button
                type="button"
                class="inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 xl:w-full"
            >
                Add New Strategy
            </button>

            <button
                 @click="logout"
                type="button"
                class="mt-3 inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-100 bg-red-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 xl:ml-0 xl:mt-3 xl:w-full"
            >
                Sign Out
            </button>
        </div>

        <div v-else class="flex flex-col sm:flex-row xl:flex-col">
            <button
                @click="login"
                type="button"
                class="inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 xl:w-full"
            >
                Connect Your Wallet
            </button>
        </div>
    </div>

    <!-- Meta info -->
    <div class="mt-5 flex flex-col space-y-6 sm:flex-row sm:space-y-0 sm:space-x-8 xl:flex-col xl:space-x-0 xl:space-y-6">
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
</template>

<script>
/* Import modules. */
// import { inject } from 'vue'

export default {
    props: {
        msg: String,
    },
    methods: {
        /**
         * Login
         */
        async login () {
            // // const user = await this.$moralis.Web3.authenticate()
            // const user = await this.$moralis.Web3
            //     .authenticate({ signingMessage: 'Welcome to Ava GoGo. Please authenticate your account -- ' })
            //     .catch(err => {
            //         console.error(err)
            //
            //         if (err && err.code && err.code === 4100) {
            //             alert('Please sign-in to your Web3 wallet to continue.')
            //         } else if (err && err.message) {
            //             alert(err.message)
            //         }
            //     })

            /* Save user. */
            // this.setUser(user)
        },

        /**
         * Logout
         */
        async logout() {
            // await this.$moralis.User.logOut()
            //     .catch(err => {
            //         console.error(err)
            //     })
            // this.setUser({})
        },

    },
    created: function () {
        // const store = useStore()
        // this.$moralis = inject('$moralis')

    },
    mounted: function () {
        /* Handle current user. */
        // this.handleCurrentUser()
    },
}
</script>
