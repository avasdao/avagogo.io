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

                        <Sidebar />

                    </div>
                </div>

                <Funds />
            </div>

            <Managers />
        </div>
    </div>
</template>

<script>
/* Import modules. */
import { inject } from 'vue'

/* Import components. */
import Navbar from '@/components/Navbar.vue'
import Funds from '@/components/Funds.vue'
import Managers from '@/components/Managers.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
    components: {
        Navbar,
        Funds,
        Managers,
        Sidebar,
    },
    data: () => {
        return {
            $moralis: null,
        }
    },
    computed: {
        /**
         * Is Authenticated
         */
        isAuthenticated() {
            console.log('STORE (state):', this.$store.state)

            if (!this.$store.state || typeof this.$store.state === 'undefined') {
                return false
            }

            if (!this.$store.state.user || typeof this.$store.state.user === 'undefined') {
                return false
            }

            return Object.keys(this.$store.state.user).length > 0
        },
        /**
         * User
         */
        user() {
            if (!this.$store.state || typeof this.$store.state === 'undefined') {
                return false
            }

            if (!this.$store.state.user || typeof this.$store.state.user === 'undefined') {
                return false
            }

            return this.$store.state.user
        },
    },
    methods: {
        /**
         * Set User
         */
        setUser(_user) {
            /* Set user. */
            this.$store.commit('setUser', _user)
        },

        /**
         * Login
         */
        async login () {
            // const user = await this.$moralis.Web3.authenticate()
            const user = await this.$moralis.Web3
                .authenticate({ signingMessage: 'Welcome to Ava GoGo. Please authenticate your account -- ' })
                .catch(err => {
                    console.error(err)

                    if (err && err.code && err.code === 4100) {
                        alert('Please sign-in to your Web3 wallet to continue.')
                    } else if (err && err.message) {
                        alert(err.message)
                    }
                })

            /* Save user. */
            this.setUser(user)
        },

        /**
         * Logout
         */
        async logout() {
            await this.$moralis.User.logOut()
                .catch(err => {
                    console.error(err)
                })
            this.setUser({})
        },

        /**
         * Handle Current User
         */
        handleCurrentUser() {
            const user = this.$moralis.User.current()
            // console.log('MORALIS USER', user)

            if (user) {
                this.setUser(user)
            }
        },

    },
    created: function () {
        // const store = useStore()
        this.$moralis = inject('$moralis')

    },
    mounted: function () {
        /* Handle current user. */
        this.handleCurrentUser()
    },
}
</script>
