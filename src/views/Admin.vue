<template>
    <main class="max-w-5xl mx-auto">
        <div class="my-5 p-3 bg-indigo-100 border-2 border-indigo-300 rounded-xl">
            <h1 class="text-3xl font-bold">
                Administration Center
            </h1>

            <p class="w-2/3 my-3">
                Welcome to the management portal for Ava GoGo.
                To begin, please connect your browser to a Web3 provider, eg. Metamask.
            </p>

            <button @click="auth" class="mt-3 p-3 text-lg font-medium border-2 border-blue-300 bg-blue-100 rounded-xl hover:bg-blue-500 hover:text-blue-200">
                Start Web3 Auth
            </button>
        </div>

    </main>
</template>

<script>
export default {
    components: {
        //
    },
    data: () => {
        return {
            //
        }
    },
    methods: {
        auth() {
            alert('connect Metamask')
        },

    },
    created: function () {
        //
    },
    mounted: function () {
        //
    },
}
</script>
