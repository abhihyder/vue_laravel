import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

Vue.use(VueRouter);

const routes = new VueRouter({
    mode: 'history',
    routes :[
        {
            path: '/home',
            component: Home,
            name:'home'
        },
        {
            path: '/about',
            component: About,
            name:'about'
        },
        {
            path: '/contact',
            component: Contact,
            name:'contact'
        },
    ]
  });

  export default routes;