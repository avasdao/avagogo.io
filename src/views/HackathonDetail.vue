<template>
    <div class="relative py-16 bg-white overflow-hidden">
        <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
            <div class="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
                <svg class="absolute top-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
                    <defs>
                        <pattern id="74b3fd99-0a6f-4271-bef2-e80eeafdf357" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
                </svg>

                <svg class="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
                    <defs>
                        <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
                </svg>

                <svg class="absolute bottom-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
                    <defs>
                        <pattern id="d3eb07ae-5182-43e6-857d-35c643af9034" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
                </svg>
            </div>
        </div>

        <div class="relative px-4 sm:px-6 lg:px-8">
            <div class="text-lg max-w-prose mx-auto">
                <h1>
                    <span class="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
                        {{sponsor ? sponsor.name : ''}}'s Sponsor Details
                    </span>

                    <span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        {{sponsor ? sponsor.challengeTitle : ''}}
                    </span>
                </h1>

                <p class="mt-8 text-xl text-rose-500 leading-8 font-medium bg-gray-100 border-4 border-gray-300 rounded-xl p-5">
                    {{sponsor ? sponsor.challengeDesc : ''}}

                    <a class="block mt-3 text-sm text-right text-blue-500 hover:underline" :href="sponsor ? sponsor.source : ''" target="_blank">
                        source: {{sponsor ? sponsor.source : ''}}
                    </a>
                </p>
            </div>

            <div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
                <p>
                    {{sponsor.benefitIntro}}
                </p>

                <p>
                    The <strong>KEY BENEFITS</strong> that our solution provides for your products' users are:
                </p>

                <ul role="list">
                    <li>{{sponsor ? sponsor.benefit1 : ''}}</li>
                    <li>{{sponsor ? sponsor.benefit2 : ''}}</li>
                    <li>{{sponsor ? sponsor.benefit3 : ''}}</li>
                </ul>

                <p>
                    {{sponsor.benefitClose}}
                </p>

                <p class="text-3xl text-indigo-700 font-medium text-center">
                    Imagine What The Future Holds For
                    <br />Ava GoGo + {{sponsor ? sponsor.name : ''}}
                </p>

                <div class="mx-auto space-y-2 lg:space-y-0 lg:gap-4 lg:grid lg:grid-cols-3">
                    <a href="javascript://" class="w-full hover:opacity-60">
                        <img :src="require('../assets/screenshots/boards-list.png')" class="rounded-xl border-4 border-gray-300 hover:border-yellow-500" />
                    </a>

                    <a href="javascript://" class="w-full hover:opacity-60">
                        <img :src="require('../assets/screenshots/alpha-start.png')" class="rounded-xl border-4 border-gray-300 hover:border-yellow-500" />
                    </a>

                    <a href="javascript://" class="w-full hover:opacity-60">
                        <img :src="require('../assets/screenshots/early-preview.png')" class="rounded-xl border-4 border-gray-300 hover:border-yellow-500" />
                    </a>
                </div>

                <p>
                    Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
                </p>

                <h2>From beginner to expert in 30 days</h2>

                <p>
                    Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus mauris,
                    ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis diam.
                </p>

                <blockquote>
                    <p>Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi.</p>
                </blockquote>

                <p>
                    Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
                </p>

                <button type="button" class="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span class="sr-only">Watch our video to learn more</span>
                    <img class="w-full rounded-xl" src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="" />
                    <div class="absolute inset-0 w-full h-full flex items-center justify-center" aria-hidden="true">
                        <svg class="h-20 w-20 text-indigo-500" fill="currentColor" viewBox="0 0 84 84">
                            <circle opacity="0.9" cx="42" cy="42" r="42" fill="white" />
                            <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                        </svg>
                    </div>
                    <figcaption>Sagittis scelerisque nulla cursus in enim consectetur quam.</figcaption>
                </button>

                <h2>
                    Our plans for the next 6-months..
                </h2>

                <p>
                    {{sponsor.future ? sponsor.future : 'no plans yet..'}}
                </p>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        //
    },
    data: () => {
        return {
            sponsor: null,
        }
    },
    watch: {
        $route(to, from) {
            console.log('ROUTE CHANGE (watch):', to, from)

            switch(to.path) {
            case '/hackathon/alpha-finance-lab':
                this.sponsor = require('./hackathon/Alpha.json')
                break
            case '/hackathon/benqi':
                this.sponsor = require('./hackathon/BENQI.json')
                break
            case '/hackathon/colony':
                this.sponsor = require('./hackathon/Colony.json')
                break
            case '/hackathon/yield-yak':
                this.sponsor = require('./hackathon/YieldYak.json')
                break
            }
        }
    },
    methods: {
        //
    },
    created: function () {
        const route = this.$route
        // console.log('ROUTE', route)

        const path = route.path
        // console.log('PATH', path)

        switch(path) {
        case '/hackathon/alpha-finance-lab':
            this.sponsor = require('./hackathon/Alpha.json')
            break
        case '/hackathon/benqi':
            this.sponsor = require('./hackathon/BENQI.json')
            break
        case '/hackathon/colony':
            this.sponsor = require('./hackathon/Colony.json')
            break
        case '/hackathon/yield-yak':
            this.sponsor = require('./hackathon/YieldYak.json')
            break
        }
    },
    mounted: function () {
        //
    },
}
</script>
