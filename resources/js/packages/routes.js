import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Contact from "../components/pages/Contact";
import Shop from "../components/pages/Shop";
import ProductGrid from "../components/pages/ProductGrid";
import ProductList from "../components/pages/ProductList";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";

Vue.use(VueRouter);

const routes = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            component: Home,
            name: "root"
        },
        {
            path: "/home",
            component: Home,
            name: "home"
        },
        {
            path: "/about",
            component: About,
            name: "about"
        },
        {
            path: "/shop",
            component: Shop,
            name: "shop"
        },
        {
            path: "/product-grid",
            component: ProductGrid,
            name: "product-grid"
        },
        {
            path: "/product-list",
            component: ProductList,
            name: "product-list"
        },
        {
            path: "/contact",
            component: Contact,
            name: "contact"
        },
        {
            path: "/login",
            component: Login,
            name: "login"
            // beforeEnter: (to, from, next) => {
            //     let isAuthenticated = localStorage.getItem("userAuthenticate")
            //         ? localStorage.getItem("userAuthenticate")
            //         : "no";
            //     if (isAuthenticated == "yes")
            //         next({ name: "Login" });
            //     else next();
            // }
        },
        {
            path: "/register",
            component: Register,
            name: "register"
        }
    ]
});

// routes.beforeEach((to, from, next) => {
//     let isAuthenticated = localStorage.getItem("userAuthenticate")
//         ? localStorage.getItem("userAuthenticate")
//         : "no";
//     if (to.name == "Login" && isAuthenticated == "yes")
//         next({ name: "Login" });
//     else next();
// });

export default routes;
