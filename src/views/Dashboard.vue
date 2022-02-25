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
