import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const vuex = new Vuex.Store({
    state: {
        isUserLoggedIn: false,
        count: 0
    },
    getters: {
        getIsUserLoggedIn: state => {
            return state.isUserLoggedIn;
        },
        getCount: state => {
            return state.count;
        }
    },
    mutations: {
        setCount: (state, payload) => {
            state.count = payload;
        },
        setIsUserLoggedIn: (state, payload) => {
            state.isUserLoggedIn = payload;
        }
    },
    actions: {
        setIsUserLoggedIn: (context, payload) => {
            context.commit("setIsUserLoggedIn", payload);
        }
    }
});

export default vuex;
