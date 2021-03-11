import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const vuex = new Vuex.Store({
    state: {
        loggedInUserData: "",
        count: 0
    },
    getters: {
        getloggedInUserData: state => {
            return state.loggedInUserData;
        },
        getCount: state => {
            return state.count;
        }
    },
    mutations: {
        setCount: (state, payload) => {
            state.count = payload;
        },
        setloggedInUserData: (state, payload) => {
            axios
                .get("/user/auth_check")
                .then(results => {
                    state.loggedInUserData = results.data;
                })
                .catch(error => {
                    state.loggedInUserData = "";
                });
        }
    },
    actions: {
        setloggedInUserData: context => {
            context.commit("setloggedInUserData");
        }
    }
});

export default vuex;
