<template>
    <div class="bg-white">
        <main>
            <!-- Hero section -->
            <div class="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-24">
                <Intro />

                <div class="sm:mx-auto sm:max-w-3xl sm:px-6">
                    <div class="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                        <div class="hidden sm:block">
                            <div class="absolute inset-y-0 left-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full"></div>
                            <svg class="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0" width="404" height="392" fill="none" viewBox="0 0 404 392">
                                <defs>
                                    <pattern id="837c3e70-6c3a-44e6-8854-cc48c737b659" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                        <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                                    </pattern>
                                </defs>
                                <rect width="404" height="392" fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" />
                            </svg>
                        </div>
                        <div class="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
                            <img class="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none" src="https://tailwindui.com/img/component-images/task-app-rose.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <Mission />

            <Launch />

            <Sponsors />
        </main>

        <Footer />
    </div>
</template>

<script>
/* Import components. */
import Intro from '@/components/Intro'
import Footer from '@/components/Footer'
import Mission from '@/components/Mission'
import Sponsors from '@/components/Sponsors'
import Launch from '@/components/Launch'

export default {
    components: {
        Intro,
        Footer,
        Mission,
        Sponsors,
        Launch,
    },
    methods: {
        openApp() {
            this.$router.push('/dashboard')
        },

    },
}
</script>
