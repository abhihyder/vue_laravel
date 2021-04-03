import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const vuex = new Vuex.Store({
    state: {
        userAuthenticate: 'no',
        loggedInUserData: "",
        items: 2,
        price: 154
    },
    getters: {
        getUserAuthenticate: state => {
            return state.userAuthenticate;
        },
        getLoggedInUserData: state => {
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
        setUserAuthenticate: state => {
            state.userAuthenticate = localStorage.getItem("userAuthenticate");
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
        setUserAuthenticate: context => {
            context.commit("setUserAuthenticate");
        },
        setLoggedInUserData: context => {
            context.commit("setLoggedInUserData");
        },
        setItems: context => {
            context.commit("setItems");
        }
    }
});

export default vuex;
