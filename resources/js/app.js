
import Vue from 'vue';

require("./bootstrap");

import routes from './routes';

import HeaderComponent from "./components/layouts/Header";
import FooterComponent from "./components/layouts/Footer";


const app = new Vue({
    el: "#app",
    components: {
        "header-component": HeaderComponent,
        "footer-component": FooterComponent,
    },
    router: routes,
});
