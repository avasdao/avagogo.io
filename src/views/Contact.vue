<template>
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
                            Are you a BUIDLer?
                        </h2>
                        <p class="mt-4 text-lg text-gray-500 sm:mt-3">
                            We’d love to hear from you!
                            You are welcome to connect with our team on Slack.
                            Send us a request using the form below, or email us.
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
                                <router-link to="/privacy" class="font-medium text-gray-900 underline">
                                    Privacy Policy
                                </router-link>.
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
                    <span class="block text-white">Looking for a new direction?</span>
                    <span class="block text-grape-900">Join Our Award Winning Team!</span>
                </h2>

                <a href="javascript:alert('Please join our Slack for the latest opportunities.')" class="mt-8 w-full inline-flex items-center justify-center py-3 px-5 bg-white border border-transparent rounded-md shadow-md text-base font-medium text-grape-600 hover:bg-grape-50 sm:w-auto">
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
