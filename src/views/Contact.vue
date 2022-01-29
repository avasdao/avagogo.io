<template>
    <div class="bg-white">
        <header class="relative z-10">
            <div class="bg-gray-50">
                <nav class="relative max-w-7xl mx-auto flex items-center justify-between pt-8 px-6 xl:px-8" aria-label="Global">
                    <div class="flex items-center justify-between w-full lg:w-auto">
                        <a href="#">
                            <span class="sr-only">Workflow</span>
                            <img class="h-10 w-auto sm:h-16" :src="require('../assets/logo.png')" alt="" />
                        </a>
                        <div class="-mr-2 flex items-center lg:hidden">
                            <button
                                type="button"
                                class="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-grape-500"
                                aria-expanded="false"
                            >
                                <span class="sr-only">Open main menu</span>
                                <!-- Heroicon name: outline/menu -->
                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="hidden space-x-10 lg:flex lg:ml-10">
                        <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-600">Work</a>

                        <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-600">Services</a>

                        <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-600">About</a>

                        <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-600">Blog</a>
                    </div>
                    <div class="hidden lg:flex lg:items-center lg:space-x-6">
                        <a href="#" class="py-2 px-6 bg-white border border-transparent rounded-md shadow-md text-base font-medium text-grape-600 hover:bg-gray-50">
                            Contact
                        </a>
                    </div>
                </nav>
            </div>

            <!--
          Mobile menu, show/hide based on menu open state.

          Entering: "duration-150 ease-out"
            From: "opacity-0 scale-95"
            To: "opacity-100 scale-100"
          Leaving: "duration-100 ease-in"
            From: "opacity-100 scale-100"
            To: "opacity-0 scale-95"
        -->
            <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top lg:hidden hidden">
                <div class="rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div class="px-5 pt-4 flex items-center justify-between">
                        <div>
                            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=purple&shade=600" alt="" />
                        </div>
                        <div class="-mr-2">
                            <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-grape-500">
                                <span class="sr-only">Close menu</span>
                                <!-- Heroicon name: outline/x -->
                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="pt-5 pb-6">
                        <div class="px-2 space-y-1">
                            <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Work</a>

                            <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Services</a>

                            <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">About</a>

                            <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Blog</a>
                        </div>
                        <div class="mt-6 px-5">
                            <a href="#" class="block text-center w-full py-2 px-4 border border-transparent rounded-md shadow bg-grape-500 text-white font-medium hover:bg-grape-600">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <main>
            <!-- Header -->
            <div class="py-24 bg-gray-50 sm:py-32">
                <div class="max-w-md mx-auto pl-4 pr-8 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8">
                    <h1 class="text-4xl leading-10 font-extrabold tracking-tight text-gray-900 text-center sm:text-5xl sm:leading-none lg:text-6xl">Get in touch</h1>
                    <p class="mt-6 max-w-3xl mx-auto text-xl leading-normal text-gray-500 text-center">
                        Convallis feugiat et aliquet pellentesque dictum nisi, velit. Egestas fermentum adipiscing risus quam ac consectetur mattis turpis tristique.
                    </p>
                </div>
            </div>

            <!-- Contact Section -->
            <div class="relative bg-white">
                <div class="lg:absolute lg:inset-0">
                    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                        <img class="h-56 w-full object-cover lg:absolute lg:h-full" src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80" alt="" />
                    </div>
                </div>
                <div class="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
                    <div class="lg:pr-8">
                        <div class="max-w-md mx-auto sm:max-w-lg lg:mx-0">
                            <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
                                Let's work together
                            </h2>
                            <p class="mt-4 text-lg text-gray-500 sm:mt-3">
                                We’d love to hear from you! Send us a message using the form opposite, or email us. We’d love to hear from you! Send us a message using the form opposite, or email us.
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
                                    <a href="javascript://" class="font-medium text-gray-900 underline">Privacy Policy</a>.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <!-- CTA Section -->
            <div class="bg-grape-400">
                <div class="max-w-md mx-auto text-center py-16 px-4 sm:max-w-2xl sm:py-24 sm:px-6 lg:px-8 lg:py-32">
                    <h2 class="text-3xl font-extrabold sm:text-4xl">
                        <span class="block text-white">Looking for a new career?</span>
                        <span class="block text-grape-900">We’re hiring.</span>
                    </h2>
                    <a href="#" class="mt-8 w-full inline-flex items-center justify-center py-3 px-5 bg-white border border-transparent rounded-md shadow-md text-base font-medium text-grape-600 hover:bg-grape-50 sm:w-auto">
                        <span>See open positions</span>
                        <!-- Heroicon name: solid/external-link -->
                        <svg class="ml-3 h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                    </a>
                </div>
            </div>
        </main>

    </div>
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
