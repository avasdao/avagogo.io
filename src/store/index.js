import { createStore } from 'vuex'

export default createStore({
    // state () {
    //     return {
    //         user: {}
    //     }
    // },
    state: {
        user: {}
    },
    actions: {
        //
    },
    mutations: {
        setUser (state, payload) {
            state.user = payload
        }
    },
    modules: {
        //
    },
})
