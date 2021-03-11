import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const vuex = new Vuex.Store({
    state: {
        loggedInUserData: "",
        items: 2,
        price: 154
    },
    getters: {
        getloggedInUserData: state => {
            return state.loggedInUserData;
        },
        getItems: state => {
            return state.items;
        },
        getPrice: state => {
            return state.price;
        }
    },
    mutations: {
        setItems: state => {
            state.items += 1;
        },
        setLoggedInUserData: state => {
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
        setLoggedInUserData: context => {
            context.commit("setLoggedInUserData");
        },
        setItems: context => {
            context.commit("setItems");
        },

    }
});

export default vuex;
