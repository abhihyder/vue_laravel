<template>
    <div>
        <header class="header-one header-two">
            <div class="header-top-two">
                <div class="container text-center">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="middel-top">
                                <div class="left floatleft">
                                    <p>
                                        <i class="mdi mdi-clock"></i>
                                        {{ currentTime }}
                                    </p>
                                </div>
                            </div>
                            <div class="middel-top clearfix">
                                <ul class="clearfix right floatright">
                                    <li>
                                        <a href="javascript:;"
                                            ><i class="mdi mdi-account"></i
                                        ></a>
                                        <ul v-if="getUserAuthenticate == 'yes'">
                                            <li>
                                                <a href="#">
                                                    {{
                                                        getLoggedInUserData.name
                                                    }}
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="javascript:;"
                                                    @click.prevent="logout()"
                                                >
                                                    Logout
                                                </a>
                                            </li>
                                        </ul>

                                        <ul v-else>
                                            <li>
                                                <router-link
                                                    :to="{ name: 'login' }"
                                                    >Login</router-link
                                                >
                                            </li>
                                            <li>
                                                <router-link
                                                    :to="{ name: 'register' }"
                                                    >Registar</router-link
                                                >
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="javascript:;"
                                            ><i class="mdi mdi-settings"></i
                                        ></a>
                                        <ul>
                                            <li>
                                                <a href="cart.html">My cart</a>
                                            </li>
                                            <li>
                                                <a href="wishlist.html"
                                                    >My wishlist</a
                                                >
                                            </li>
                                            <li>
                                                <a href="checkout.html"
                                                    >Check out</a
                                                >
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <div class="right floatright">
                                    <form action="#" method="get">
                                        <button type="submit">
                                            <i class="mdi mdi-magnify"></i>
                                        </button>
                                        <input
                                            type="text"
                                            placeholder="Search within these results..."
                                        />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container text-center">
                <div class="row">
                    <div class="col-sm-2">
                        <div class="logo">
                            <router-link :to="{ name: 'root' }"
                                ><img src="assets/img/logo2.png" alt="Sellshop"
                            /></router-link>
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <div class="header-middel">
                            <div class="mainmenu">
                                <nav>
                                    <ul>
                                        <li>
                                            <router-link :to="{ name: 'home' }"
                                                >Home</router-link
                                            >
                                            <ul class="dropdown">
                                                <li>
                                                    <a href="index.html"
                                                        >Home version one</a
                                                    >
                                                </li>
                                                <li>
                                                    <router-link
                                                        :to="{ name: 'home' }"
                                                        >Home version
                                                        two</router-link
                                                    >
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <router-link :to="{ name: 'shop' }"
                                                >Shop</router-link
                                            >
                                            <ul class="magamenu">
                                                <li class="banner">
                                                    <a href="shop.html"
                                                        ><img
                                                            src="assets/img/maga1.png"
                                                            alt=""
                                                    /></a>
                                                </li>
                                                <li>
                                                    <h5>men’s wear</h5>
                                                    <ul>
                                                        <li>
                                                            <a
                                                                href="javascript:;"
                                                                >Shirts & Top</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="javascript:;"
                                                                >Shoes</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="javascript:;"
                                                                >Dresses</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="javascript:;"
                                                                >Shemwear</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="javascript:;"
                                                                >Jeans</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="javascript:;"
                                                                >Sweaters</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="javascript:;"
                                                                >Jacket</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="javascript:;"
                                                                >Men Watch</a
                                                            >
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <h5>women’s wear</h5>
                                                    <ul>
                                                        <li>
                                                            <a
                                                                href="javascript:;"
                                                                >Shirts &
                                                                Tops</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="javascript:;"
                                                                >Shoes</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="javascript:;"
                                                                >Dresses</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="javascript:;"
                                                                >Shemwear</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="javascript:;"
                                                                >Jeans</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="javascript:;"
                                                                >Sweaters</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="javascript:;"
                                                                >Jacket</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="javascript:;"
                                                                >Women Watch</a
                                                            >
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="banner">
                                                    <a href="shop.html"
                                                        ><img
                                                            src="assets/img/maga2.png"
                                                            alt=""
                                                    /></a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="javascript:;">Pages</a>
                                            <ul class="dropdown">
                                                <li>
                                                    <a href="wishlist.html"
                                                        >Wishlist</a
                                                    >
                                                </li>
                                                <li>
                                                    <a href="checkout.html"
                                                        >Checkout</a
                                                    >
                                                </li>
                                                <li>
                                                    <a href="cart.html">Cart</a>
                                                </li>
                                                <li>
                                                    <a href="product-grid.html"
                                                        >Product Grid View</a
                                                    >
                                                </li>
                                                <li>
                                                    <a href="product-list.html"
                                                        >Product List View</a
                                                    >
                                                </li>
                                                <li>
                                                    <a
                                                        href="single-product.html"
                                                        >Single Product</a
                                                    >
                                                </li>
                                                <li>
                                                    <a href="error-404.html"
                                                        >404 page</a
                                                    >
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="blog.html">Blog</a>
                                            <ul class="dropdown">
                                                <li>
                                                    <a href="blog-style-1.html"
                                                        >Blog Style One</a
                                                    >
                                                </li>
                                                <li>
                                                    <a href="blog-style-2.html"
                                                        >Blog Style Two</a
                                                    >
                                                </li>
                                                <li>
                                                    <a href="single-blog.html"
                                                        >Single Blog</a
                                                    >
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <router-link :to="{ name: 'about' }"
                                                >About</router-link
                                            >
                                        </li>
                                        <li>
                                            <router-link
                                                :to="{ name: 'contact' }"
                                                >Contact</router-link
                                            >
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <!-- mobile menu start -->
                            <div class="mobile-menu-area">
                                <div class="mobile-menu">
                                    <nav id="dropdown">
                                        <ul>
                                            <li>
                                                <a href="index.html">Home</a>
                                                <ul class="dropdown">
                                                    <li>
                                                        <a href="index.html"
                                                            >Home version one</a
                                                        >
                                                    </li>
                                                    <li>
                                                        <a href="index-2.html"
                                                            >Home version two</a
                                                        >
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="shop.html">Shop</a>
                                                <ul>
                                                    <li>
                                                        <h5>men’s wear</h5>
                                                        <ul>
                                                            <li>
                                                                <a
                                                                    href="javascript:;"
                                                                    >Shirts &
                                                                    Top</a
                                                                >
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="javascript:;"
                                                                    >Shoes</a
                                                                >
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="javascript:;"
                                                                    >Dresses</a
                                                                >
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="javascript:;"
                                                                    >Shemwear</a
                                                                >
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="javascript:;"
                                                                    >Jeans</a
                                                                >
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="javascript:;"
                                                                    >Sweaters</a
                                                                >
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="javascript:;"
                                                                    >Jacket</a
                                                                >
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="javascript:;"
                                                                    >Men
                                                                    Watch</a
                                                                >
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <h5>women’s wear</h5>
                                                        <ul>
                                                            <li>
                                                                <a
                                                                    href="javascript:;"
                                                                    >Shirts &
                                                                    Tops</a
                                                                >
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="javascript:;"
                                                                    >Shoes</a
                                                                >
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="javascript:;"
                                                                    >Dresses</a
                                                                >
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="javascript:;"
                                                                    >Shemwear</a
                                                                >
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="javascript:;"
                                                                    >Jeans</a
                                                                >
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="javascript:;"
                                                                    >Sweaters</a
                                                                >
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="javascript:;"
                                                                    >Jacket</a
                                                                >
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="javascript:;"
                                                                    >Women
                                                                    Watch</a
                                                                >
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="javascript:;">Pages</a>
                                                <ul>
                                                    <li>
                                                        <a href="wishlist.html"
                                                            >Wishlist</a
                                                        >
                                                    </li>
                                                    <li>
                                                        <a href="checkout.html"
                                                            >Checkout</a
                                                        >
                                                    </li>
                                                    <li>
                                                        <a href="cart.html"
                                                            >Cart</a
                                                        >
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="product-grid.html"
                                                            >Product Grid
                                                            View</a
                                                        >
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="product-list.html"
                                                            >Product List
                                                            View</a
                                                        >
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="single-product.html"
                                                            >Single Product</a
                                                        >
                                                    </li>
                                                    <li>
                                                        <a href="error-404.html"
                                                            >404 page</a
                                                        >
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="blog.html">Blog</a>
                                                <ul>
                                                    <li>
                                                        <a
                                                            href="blog-style-1.html"
                                                            >Blog Style One</a
                                                        >
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="blog-style-2.html"
                                                            >Blog Style Two</a
                                                        >
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="single-blog.html"
                                                            >Single Blog</a
                                                        >
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="about.html">About</a>
                                            </li>
                                            <li>
                                                <a href="contact.html"
                                                    >Contact</a
                                                >
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-2">
                        <div class="cart-itmes">
                            <a class="cart-itme-a" href="cart.html">
                                <i class="mdi mdi-cart"></i>
                                {{ getItems }} items :
                                <strong>${{ getPrice }}</strong>
                            </a>
                            <div class="cartdrop">
                                <div class="sin-itme clearfix">
                                    <i class="mdi mdi-close"></i>
                                    <a class="cart-img" href="cart.html"
                                        ><img src="assets/img/cart/1.png" alt=""
                                    /></a>
                                    <div class="menu-cart-text">
                                        <a href="javascript:;">
                                            <h5>men’s black t-shirt</h5>
                                        </a>
                                        <span>Color : Black</span>
                                        <span>Size : SL</span>
                                        <strong>$122.00</strong>
                                    </div>
                                </div>
                                <div class="sin-itme clearfix">
                                    <i class="mdi mdi-close"></i>
                                    <a class="cart-img" href="cart.html"
                                        ><img src="assets/img/cart/2.png" alt=""
                                    /></a>
                                    <div class="menu-cart-text">
                                        <a href="javascript:;">
                                            <h5>men’s black t-shirt</h5>
                                        </a>
                                        <span>Color : Black</span>
                                        <span>Size : SL</span>
                                        <strong>$132.00</strong>
                                    </div>
                                </div>
                                <div class="total">
                                    <span
                                        >total <strong>= $306.00</strong></span
                                    >
                                </div>
                                <a class="goto" href="cart.html">go to cart</a>
                                <a class="out-menu" href="checkout.html"
                                    >Check out</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
export default {
    data() {
        return {
            currentTime: moment().format("ddd - Do MMM YYYY, hh:mm a")
        };
    },
    computed: {
        ...mapGetters([
            "getUserAuthenticate",
            "getLoggedInUserData",
            "getItems",
            "getPrice"
        ])
    },
    methods: {
        logout() {
            axios.post("/logout").then(results => {
                localStorage.setItem("userAuthenticate", "no");
                this.$store.dispatch("setUserAuthenticate");
                this.$store.dispatch("setLoggedInUserData");
                this.$router.push({ name: "login" });
            });
        }
    },
    created() {
        this.$store.dispatch("setUserAuthenticate");
        this.$store.dispatch("setLoggedInUserData");
    }
};
</script>
