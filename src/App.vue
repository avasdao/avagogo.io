<template>
    <Header />

    <router-view />

    <Footer />
</template>

<script>
/* Import components. */
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default {
    components: {
        Footer,
        Header,
    },
}
</script>

<style>
/*  */
</style>
