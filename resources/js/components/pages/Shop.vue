<template>
    <div>
        <div class="pages-title section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="pages-title-text text-center">
                            <h2>Shop</h2>
                            <ul class="text-left">
                                <li>
                                    <router-link :to="{ name: 'home' }"
                                        >Home</router-link
                                    >
                                </li>
                                <li><span> // </span>Shop</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- pages-title-end -->
        <!-- shop content section start -->
        <div class="pages products-page section-padding text-center">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="right-products">
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="section-title clearfix">
                                        <ul>
                                            <li>
                                                <ul class="nav-view">
                                                    <li>
                                                        <router-link
                                                            to="/product-grid"
                                                        >
                                                            <i
                                                                class="mdi mdi-view-module"
                                                            ></i>
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <router-link
                                                            to="/product-list"
                                                        >
                                                            <i
                                                                class="mdi mdi-view-list"
                                                            ></i>
                                                        </router-link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="sort-by floatright">
                                                Showing 1-12 of 89 Results
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="grid-content">
                                    <div class="col-xs-12 col-sm-6 col-md-3">
                                        <div class="single-product">
                                            <div class="product-img">
                                                <div class="pro-type">
                                                    <span>new</span>
                                                </div>
                                                <a href="javascript:;"
                                                    ><img
                                                        src="assets/img/products/9.jpg"
                                                        alt="Product Title"
                                                /></a>
                                                <div class="actions-btn">
                                                    <a
                                                        href="javascript:;"
                                                        @click.prevent="
                                                            setItems
                                                        "
                                                        ><i
                                                            class="mdi mdi-cart"
                                                        ></i
                                                    ></a>
                                                    <a
                                                        href="javascript:;"
                                                        data-toggle="modal"
                                                        data-target="#quick-view"
                                                        ><i
                                                            class="mdi mdi-eye"
                                                        ></i
                                                    ></a>
                                                    <a href="javascript:;"
                                                        ><i
                                                            class="mdi mdi-heart"
                                                        ></i
                                                    ></a>
                                                </div>
                                            </div>
                                            <div class="product-dsc">
                                                <p>
                                                    <a href="javascript:;"
                                                        >men’s Black t-shirt</a
                                                    >
                                                </p>
                                                <div class="ratting">
                                                    <i class="mdi mdi-star"></i>
                                                    <i class="mdi mdi-star"></i>
                                                    <i class="mdi mdi-star"></i>
                                                    <i
                                                        class="mdi mdi-star-half"
                                                    ></i>
                                                    <i
                                                        class="mdi mdi-star-outline"
                                                    ></i>
                                                </div>
                                                <span>$65.20</span>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- single product end -->
                                    <div class="col-xs-12 col-sm-6 col-md-3">
                                        <div class="single-product">
                                            <div class="product-img">
                                                <div class="pro-type sell">
                                                    <span>sell</span>
                                                </div>
                                                <a href="javascript:;"
                                                    ><img
                                                        src="assets/img/products/2.jpg"
                                                        alt="Product Title"
                                                /></a>
                                                <div class="actions-btn">
                                                    <a
                                                        href="javascript:;"
                                                        @click.prevent="
                                                            setItems
                                                        "
                                                        ><i
                                                            class="mdi mdi-cart"
                                                        ></i
                                                    ></a>
                                                    <a
                                                        href="javascript:;"
                                                        data-toggle="modal"
                                                        data-target="#quick-view"
                                                        ><i
                                                            class="mdi mdi-eye"
                                                        ></i
                                                    ></a>
                                                    <a href="javascript:;"
                                                        ><i
                                                            class="mdi mdi-heart"
                                                        ></i
                                                    ></a>
                                                </div>
                                            </div>
                                            <div class="product-dsc">
                                                <p>
                                                    <a href="javascript:;"
                                                        >men’s White t-shirt</a
                                                    >
                                                </p>
                                                <div class="ratting">
                                                    <i class="mdi mdi-star"></i>
                                                    <i class="mdi mdi-star"></i>
                                                    <i class="mdi mdi-star"></i>
                                                    <i
                                                        class="mdi mdi-star-half"
                                                    ></i>
                                                    <i
                                                        class="mdi mdi-star-outline"
                                                    ></i>
                                                </div>
                                                <span>$65.20</span>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- single product end -->
                                    <div class="col-xs-12 col-sm-6 col-md-3">
                                        <div class="single-product">
                                            <div class="product-img">
                                                <div class="pro-type">
                                                    <span>-15</span>
                                                </div>
                                                <a href="javascript:;"
                                                    ><img
                                                        src="assets/img/products/8.jpg"
                                                        alt="Product Title"
                                                /></a>
                                                <div class="actions-btn">
                                                    <a
                                                        href="javascript:;"
                                                        @click.prevent="
                                                            setItems
                                                        "
                                                        ><i
                                                            class="mdi mdi-cart"
                                                        ></i
                                                    ></a>
                                                    <a
                                                        href="javascript:;"
                                                        data-toggle="modal"
                                                        data-target="#quick-view"
                                                        ><i
                                                            class="mdi mdi-eye"
                                                        ></i
                                                    ></a>
                                                    <a href="javascript:;"
                                                        ><i
                                                            class="mdi mdi-heart"
                                                        ></i
                                                    ></a>
                                                </div>
                                            </div>
                                            <div class="product-dsc">
                                                <p>
                                                    <a href="javascript:;"
                                                        >men’s Black t-shirt</a
                                                    >
                                                </p>
                                                <div class="ratting">
                                                    <i class="mdi mdi-star"></i>
                                                    <i class="mdi mdi-star"></i>
                                                    <i class="mdi mdi-star"></i>
                                                    <i
                                                        class="mdi mdi-star-half"
                                                    ></i>
                                                    <i
                                                        class="mdi mdi-star-outline"
                                                    ></i>
                                                </div>
                                                <span>$65.20</span>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- single product end -->
                                    <div class="col-xs-12 col-sm-6 col-md-3">
                                        <div class="single-product">
                                            <div class="product-img">
                                                <a href="javascript:;"
                                                    ><img
                                                        src="assets/img/products/24.jpg"
                                                        alt="Product Title"
                                                /></a>
                                                <div class="actions-btn">
                                                    <a
                                                        href="javascript:;"
                                                        @click.prevent="
                                                            setItems
                                                        "
                                                        ><i
                                                            class="mdi mdi-cart"
                                                        ></i
                                                    ></a>
                                                    <a
                                                        href="javascript:;"
                                                        data-toggle="modal"
                                                        data-target="#quick-view"
                                                        ><i
                                                            class="mdi mdi-eye"
                                                        ></i
                                                    ></a>
                                                    <a href="javascript:;"
                                                        ><i
                                                            class="mdi mdi-heart"
                                                        ></i
                                                    ></a>
                                                </div>
                                            </div>
                                            <div class="product-dsc">
                                                <p>
                                                    <a href="javascript:;"
                                                        >men’s Grey t-shirt</a
                                                    >
                                                </p>
                                                <div class="ratting">
                                                    <i class="mdi mdi-star"></i>
                                                    <i class="mdi mdi-star"></i>
                                                    <i class="mdi mdi-star"></i>
                                                    <i
                                                        class="mdi mdi-star-half"
                                                    ></i>
                                                    <i
                                                        class="mdi mdi-star-outline"
                                                    ></i>
                                                </div>
                                                <span>$66.20</span>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- single product end -->
                                    <div class="col-xs-12 col-sm-6 col-md-3">
                                        <div class="single-product">
                                            <div class="product-img">
                                                <a href="javascript:;"
                                                    ><img
                                                        src="assets/img/products/13.jpg"
                                                        alt="Product Title"
                                                /></a>
                                                <div class="actions-btn">
                                                    <a href="javascript:;"
                                                        ><i
                                                            class="mdi mdi-cart"
                                                        ></i
                                                    ></a>
                                                    <a
                                                        href="javascript:;"
                                                        data-toggle="modal"
                                                        data-target="#quick-view"
                                                        ><i
                                                            class="mdi mdi-eye"
                                                        ></i
                                                    ></a>
                                                    <a href="javascript:;"
                                                        ><i
                                                            class="mdi mdi-heart"
                                                        ></i
                                                    ></a>
                                                </div>
                                            </div>
                                            <div class="product-dsc">
                                                <p>
                                                    <a href="javascript:;"
                                                        >men’s White t-shirt</a
                                                    >
                                                </p>
                                                <div class="ratting">
                                                    <i class="mdi mdi-star"></i>
                                                    <i class="mdi mdi-star"></i>
                                                    <i class="mdi mdi-star"></i>
                                                    <i
                                                        class="mdi mdi-star-half"
                                                    ></i>
                                                    <i
                                                        class="mdi mdi-star-outline"
                                                    ></i>
                                                </div>
                                                <span>$95.20</span>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- single product end -->
                                    <div class="col-xs-12 col-sm-6 col-md-3">
                                        <div class="single-product">
                                            <div class="product-img">
                                                <a href="javascript:;"
                                                    ><img
                                                        src="assets/img/products/11.jpg"
                                                        alt="Product Title"
                                                /></a>
                                                <div class="actions-btn">
                                                    <a href="javascript:;"
                                                        ><i
                                                            class="mdi mdi-cart"
                                                        ></i
                                                    ></a>
                                                    <a
                                                        href="javascript:;"
                                                        data-toggle="modal"
                                                        data-target="#quick-view"
                                                        ><i
                                                            class="mdi mdi-eye"
                                                        ></i
                                                    ></a>
                                                    <a href="javascript:;"
                                                        ><i
                                                            class="mdi mdi-heart"
                                                        ></i
                                                    ></a>
                                                </div>
                                            </div>
                                            <div class="product-dsc">
                                                <p>
                                                    <a href="javascript:;"
                                                        >men’s Black t-shirt</a
                                                    >
                                                </p>
                                                <div class="ratting">
                                                    <i class="mdi mdi-star"></i>
                                                    <i class="mdi mdi-star"></i>
                                                    <i class="mdi mdi-star"></i>
                                                    <i
                                                        class="mdi mdi-star-half"
                                                    ></i>
                                                    <i
                                                        class="mdi mdi-star-outline"
                                                    ></i>
                                                </div>
                                                <span>$45.20</span>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- single product end -->
                                    <div class="col-xs-12 col-sm-6 col-md-3">
                                        <div class="single-product">
                                            <div class="product-img">
                                                <a href="javascript:;"
                                                    ><img
                                                        src="assets/img/products/14.jpg"
                                                        alt="Product Title"
                                                /></a>
                                                <div class="actions-btn">
                                                    <a href="javascript:;"
                                                        ><i
                                                            class="mdi mdi-cart"
                                                        ></i
                                                    ></a>
                                                    <a
                                                        href="javascript:;"
                                                        data-toggle="modal"
                                                        data-target="#quick-view"
                                                        ><i
                                                            class="mdi mdi-eye"
                                                        ></i
                                                    ></a>
                                                    <a href="javascript:;"
                                                        ><i
                                                            class="mdi mdi-heart"
                                                        ></i
                                                    ></a>
                                                </div>
                                            </div>
                                            <div class="product-dsc">
                                                <p>
                                                    <a href="javascript:;"
                                                        >men’s Black t-shirt</a
                                                    >
                                                </p>
                                                <div class="ratting">
                                                    <i class="mdi mdi-star"></i>
                                                    <i class="mdi mdi-star"></i>
                                                    <i class="mdi mdi-star"></i>
                                                    <i
                                                        class="mdi mdi-star-half"
                                                    ></i>
                                                    <i
                                                        class="mdi mdi-star-outline"
                                                    ></i>
                                                </div>
                                                <span>$85.20</span>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- single product end -->
                                    <div class="col-xs-12 col-sm-6 col-md-3">
                                        <div class="single-product">
                                            <div class="product-img">
                                                <div class="pro-type">
                                                    <span>new</span>
                                                </div>
                                                <a href="javascript:;"
                                                    ><img
                                                        src="assets/img/products/25.jpg"
                                                        alt="Product Title"
                                                /></a>
                                                <div class="actions-btn">
                                                    <a href="javascript:;"
                                                        ><i
                                                            class="mdi mdi-cart"
                                                        ></i
                                                    ></a>
                                                    <a
                                                        href="javascript:;"
                                                        data-toggle="modal"
                                                        data-target="#quick-view"
                                                        ><i
                                                            class="mdi mdi-eye"
                                                        ></i
                                                    ></a>
                                                    <a href="javascript:;"
                                                        ><i
                                                            class="mdi mdi-heart"
                                                        ></i
                                                    ></a>
                                                </div>
                                            </div>
                                            <div class="product-dsc">
                                                <p>
                                                    <a href="javascript:;"
                                                        >men’s Gray t-shirt</a
                                                    >
                                                </p>
                                                <div class="ratting">
                                                    <i class="mdi mdi-star"></i>
                                                    <i class="mdi mdi-star"></i>
                                                    <i class="mdi mdi-star"></i>
                                                    <i
                                                        class="mdi mdi-star-half"
                                                    ></i>
                                                    <i
                                                        class="mdi mdi-star-outline"
                                                    ></i>
                                                </div>
                                                <span>$55.20</span>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- single product end -->
                                    <div class="col-xs-12 col-sm-6 col-md-3">
                                        <div class="single-product">
                                            <div class="product-img">
                                                <a href="javascript:;"
                                                    ><img
                                                        src="assets/img/products/10.jpg"
                                                        alt="Product Title"
                                                /></a>
                                                <div class="actions-btn">
                                                    <a href="javascript:;"
                                                        ><i
                                                            class="mdi mdi-cart"
                                                        ></i
                                                    ></a>
                                                    <a
                                                        href="javascript:;"
                                                        data-toggle="modal"
                                                        data-target="#quick-view"
                                                        ><i
                                                            class="mdi mdi-eye"
                                                        ></i
                                                    ></a>
                                                    <a href="javascript:;"
                                                        ><i
                                                            class="mdi mdi-heart"
                                                        ></i
                                                    ></a>
                                                </div>
                                            </div>
                                            <div class="product-dsc">
                                                <p>
                                                    <a href="javascript:;"
                                                        >men’s Black t-shirt</a
                                                    >
                                                </p>
                                                <div class="ratting">
                                                    <i class="mdi mdi-star"></i>
                                                    <i class="mdi mdi-star"></i>
                                                    <i class="mdi mdi-star"></i>
                                                    <i
                                                        class="mdi mdi-star-half"
                                                    ></i>
                                                    <i
                                                        class="mdi mdi-star-outline"
                                                    ></i>
                                                </div>
                                                <span>$55.20</span>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- single product end -->
                                    <div class="col-xs-12 col-sm-6 col-md-3">
                                        <div class="single-product">
                                            <div class="product-img">
                                                <div class="pro-type sell">
                                                    <span>sell</span>
                                                </div>
                                                <a href="javascript:;"
                                                    ><img
                                                        src="assets/img/products/2.jpg"
                                                        alt="Product Title"
                                                /></a>
                                                <div class="actions-btn">
                                                    <a href="javascript:;"
                                                        ><i
                                                            class="mdi mdi-cart"
                                                        ></i
                                                    ></a>
                                                    <a
                                                        href="javascript:;"
                                                        data-toggle="modal"
                                                        data-target="#quick-view"
                                                        ><i
                                                            class="mdi mdi-eye"
                                                        ></i
                                                    ></a>
                                                    <a href="javascript:;"
                                                        ><i
                                                            class="mdi mdi-heart"
                                                        ></i
                                                    ></a>
                                                </div>
                                            </div>
                                            <div class="product-dsc">
                                                <p>
                                                    <a href="javascript:;"
                                                        >men’s White t-shirt</a
                                                    >
                                                </p>
                                                <div class="ratting">
                                                    <i class="mdi mdi-star"></i>
                                                    <i class="mdi mdi-star"></i>
                                                    <i class="mdi mdi-star"></i>
                                                    <i
                                                        class="mdi mdi-star-half"
                                                    ></i>
                                                    <i
                                                        class="mdi mdi-star-outline"
                                                    ></i>
                                                </div>
                                                <span>$65.20</span>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- single product end -->
                                    <div class="col-xs-12 col-sm-6 col-md-3">
                                        <div class="single-product">
                                            <div class="product-img">
                                                <div class="pro-type">
                                                    <span>-15</span>
                                                </div>
                                                <a href="javascript:;"
                                                    ><img
                                                        src="assets/img/products/10.jpg"
                                                        alt="Product Title"
                                                /></a>
                                                <div class="actions-btn">
                                                    <a href="javascript:;"
                                                        ><i
                                                            class="mdi mdi-cart"
                                                        ></i
                                                    ></a>
                                                    <a
                                                        href="javascript:;"
                                                        data-toggle="modal"
                                                        data-target="#quick-view"
                                                        ><i
                                                            class="mdi mdi-eye"
                                                        ></i
                                                    ></a>
                                                    <a href="javascript:;"
                                                        ><i
                                                            class="mdi mdi-heart"
                                                        ></i
                                                    ></a>
                                                </div>
                                            </div>
                                            <div class="product-dsc">
                                                <p>
                                                    <a href="javascript:;"
                                                        >men’s Black t-shirt</a
                                                    >
                                                </p>
                                                <div class="ratting">
                                                    <i class="mdi mdi-star"></i>
                                                    <i class="mdi mdi-star"></i>
                                                    <i class="mdi mdi-star"></i>
                                                    <i
                                                        class="mdi mdi-star-half"
                                                    ></i>
                                                    <i
                                                        class="mdi mdi-star-outline"
                                                    ></i>
                                                </div>
                                                <span>$65.20</span>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- single product end -->
                                    <div class="col-xs-12 col-sm-6 col-md-3">
                                        <div class="single-product">
                                            <div class="product-img">
                                                <a href="javascript:;"
                                                    ><img
                                                        src="assets/img/products/26.jpg"
                                                        alt="Product Title"
                                                /></a>
                                                <div class="actions-btn">
                                                    <a href="javascript:;"
                                                        ><i
                                                            class="mdi mdi-cart"
                                                        ></i
                                                    ></a>
                                                    <a
                                                        href="javascript:;"
                                                        data-toggle="modal"
                                                        data-target="#quick-view"
                                                        ><i
                                                            class="mdi mdi-eye"
                                                        ></i
                                                    ></a>
                                                    <a href="javascript:;"
                                                        ><i
                                                            class="mdi mdi-heart"
                                                        ></i
                                                    ></a>
                                                </div>
                                            </div>
                                            <div class="product-dsc">
                                                <p>
                                                    <a href="javascript:;"
                                                        >men’s Gray t-shirt</a
                                                    >
                                                </p>
                                                <div class="ratting">
                                                    <i class="mdi mdi-star"></i>
                                                    <i class="mdi mdi-star"></i>
                                                    <i class="mdi mdi-star"></i>
                                                    <i
                                                        class="mdi mdi-star-half"
                                                    ></i>
                                                    <i
                                                        class="mdi mdi-star-outline"
                                                    ></i>
                                                </div>
                                                <span>$66.20</span>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- single product end -->
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="pagnation-ul">
                                        <ul class="clearfix">
                                            <li>
                                                <a href="javascript:;"
                                                    ><i
                                                        class="mdi mdi-menu-left"
                                                    ></i
                                                ></a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">1</a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">2</a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">3</a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">4</a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">5</a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">...</a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">10</a>
                                            </li>
                                            <li>
                                                <a href="javascript:;"
                                                    ><i
                                                        class="mdi mdi-menu-right"
                                                    ></i
                                                ></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- shop content section end -->
        <!-- quick view start -->
        <div
            class="product-details quick-view modal animated zoomInUp"
            id="quick-view"
        >
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="d-table">
                            <div class="d-tablecell">
                                <div class="modal-dialog">
                                    <div class="main-view modal-content">
                                        <div
                                            class="modal-footer"
                                            data-dismiss="modal"
                                        >
                                            <span>x</span>
                                        </div>
                                        <div class="row">
                                            <div
                                                class="col-xs-12 col-sm-5 col-md-4"
                                            >
                                                <div class="quick-image">
                                                    <div
                                                        class="single-quick-image text-center"
                                                    >
                                                        <div class="list-img">
                                                            <div
                                                                class="product-img tab-content"
                                                            >
                                                                <div
                                                                    class="simpleLens-container tab-pane fade in"
                                                                    id="q-sin-1"
                                                                >
                                                                    <div
                                                                        class="pro-type"
                                                                    >
                                                                        <span
                                                                            >new</span
                                                                        >
                                                                    </div>
                                                                    <a
                                                                        class="simpleLens-image"
                                                                        data-lens-image="img/products/z1.jpg"
                                                                        href="javascript:;"
                                                                        ><img
                                                                            src="assets/img/products/z1.jpg"
                                                                            alt=""
                                                                            class="simpleLens-big-image"
                                                                    /></a>
                                                                </div>
                                                                <div
                                                                    class="simpleLens-container tab-pane active fade in"
                                                                    id="q-sin-2"
                                                                >
                                                                    <div
                                                                        class="pro-type sell"
                                                                    >
                                                                        <span
                                                                            >sell</span
                                                                        >
                                                                    </div>
                                                                    <a
                                                                        class="simpleLens-image"
                                                                        data-lens-image="img/products/z2.jpg"
                                                                        href="javascript:;"
                                                                        ><img
                                                                            src="assets/img/products/z2.jpg"
                                                                            alt=""
                                                                            class="simpleLens-big-image"
                                                                    /></a>
                                                                </div>
                                                                <div
                                                                    class="simpleLens-container tab-pane fade in"
                                                                    id="q-sin-3"
                                                                >
                                                                    <div
                                                                        class="pro-type"
                                                                    >
                                                                        <span
                                                                            >-15%</span
                                                                        >
                                                                    </div>
                                                                    <a
                                                                        class="simpleLens-image"
                                                                        data-lens-image="img/products/z3.jpg"
                                                                        href="javascript:;"
                                                                        ><img
                                                                            src="assets/img/products/z3.jpg"
                                                                            alt=""
                                                                            class="simpleLens-big-image"
                                                                    /></a>
                                                                </div>
                                                                <div
                                                                    class="simpleLens-container tab-pane fade in"
                                                                    id="q-sin-4"
                                                                >
                                                                    <div
                                                                        class="pro-type"
                                                                    >
                                                                        <span
                                                                            >new</span
                                                                        >
                                                                    </div>
                                                                    <a
                                                                        class="simpleLens-image"
                                                                        data-lens-image="img/products/z4.jpg"
                                                                        href="javascript:;"
                                                                        ><img
                                                                            src="assets/img/products/z4.jpg"
                                                                            alt=""
                                                                            class="simpleLens-big-image"
                                                                    /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="quick-thumb">
                                                        <ul
                                                            class="product-slider"
                                                        >
                                                            <li>
                                                                <a
                                                                    data-toggle="tab"
                                                                    href="#q-sin-1"
                                                                >
                                                                    <img
                                                                        src="assets/img/products/s1.jpg"
                                                                        alt="quick view"
                                                                    />
                                                                </a>
                                                            </li>
                                                            <li class="active">
                                                                <a
                                                                    data-toggle="tab"
                                                                    href="#q-sin-2"
                                                                >
                                                                    <img
                                                                        src="assets/img/products/s2.jpg"
                                                                        alt="small image"
                                                                    />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    data-toggle="tab"
                                                                    href="#q-sin-3"
                                                                >
                                                                    <img
                                                                        src="assets/img/products/s3.jpg"
                                                                        alt="small image"
                                                                    />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    data-toggle="tab"
                                                                    href="#q-sin-4"
                                                                >
                                                                    <img
                                                                        src="assets/img/products/s4.jpg"
                                                                        alt="small image"
                                                                    />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                class="col-xs-12 col-sm-7 col-md-8"
                                            >
                                                <div class="quick-right">
                                                    <div class="list-text">
                                                        <h3>
                                                            men’s White t-shirt
                                                        </h3>
                                                        <span
                                                            >Summer men’s
                                                            fashion</span
                                                        >
                                                        <div
                                                            class="ratting floatright"
                                                        >
                                                            <p>( 27 Rating )</p>
                                                            <i
                                                                class="mdi mdi-star"
                                                            ></i>
                                                            <i
                                                                class="mdi mdi-star"
                                                            ></i>
                                                            <i
                                                                class="mdi mdi-star"
                                                            ></i>
                                                            <i
                                                                class="mdi mdi-star-half"
                                                            ></i>
                                                            <i
                                                                class="mdi mdi-star-outline"
                                                            ></i>
                                                        </div>
                                                        <h5>
                                                            <del>$79.30</del>
                                                            $69.30
                                                        </h5>
                                                        <p>
                                                            There are many
                                                            variations of
                                                            passages of Lorem
                                                            Ipsum available, but
                                                            the majority have be
                                                            suffered alteration
                                                            in some form, by
                                                            injected humour, or
                                                            randomised words
                                                            which donot look
                                                            even slightly
                                                            believable. If you
                                                            are going to use a
                                                            passage of Lorem
                                                            Ipsum, you neede be
                                                            sure there isn't
                                                            anything
                                                            embarrassing hidden
                                                            in the middle of
                                                            text. Lorem Ipsum is
                                                            simply dummy text of
                                                            the printing and
                                                            typesetting
                                                            industry.
                                                        </p>
                                                        <div class="all-choose">
                                                            <div
                                                                class="s-shoose"
                                                            >
                                                                <h5>Color</h5>
                                                                <div
                                                                    class="color-select clearfix"
                                                                >
                                                                    <span></span>
                                                                    <span
                                                                        class="outline"
                                                                    ></span>
                                                                    <span></span>
                                                                    <span></span>
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="s-shoose"
                                                            >
                                                                <h5>size</h5>
                                                                <div
                                                                    class="size-drop"
                                                                >
                                                                    <div
                                                                        class="btn-group"
                                                                    >
                                                                        <button
                                                                            type="button"
                                                                            class="btn"
                                                                        >
                                                                            XL
                                                                        </button>
                                                                        <button
                                                                            type="button"
                                                                            class="btn dropdown-toggle"
                                                                            data-toggle="dropdown"
                                                                            aria-haspopup="true"
                                                                            aria-expanded="false"
                                                                        >
                                                                            <span
                                                                                class=""
                                                                                ><i
                                                                                    class="mdi mdi-chevron-down"
                                                                                ></i
                                                                            ></span>
                                                                        </button>
                                                                        <ul
                                                                            class="dropdown-menu"
                                                                        >
                                                                            <li>
                                                                                <a
                                                                                    href="javascript:;"
                                                                                    >Xl</a
                                                                                >
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    href="javascript:;"
                                                                                    >SL</a
                                                                                >
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    href="javascript:;"
                                                                                    >S</a
                                                                                >
                                                                            </li>
                                                                            <li>
                                                                                <a
                                                                                    href="javascript:;"
                                                                                    >L</a
                                                                                >
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="s-shoose"
                                                            >
                                                                <h5>qty</h5>
                                                                <form
                                                                    action="#"
                                                                    method="POST"
                                                                >
                                                                    <div
                                                                        class="plus-minus"
                                                                    >
                                                                        <a
                                                                            class="dec qtybutton"
                                                                            >-</a
                                                                        >
                                                                        <input
                                                                            type="text"
                                                                            value="02"
                                                                            name="qtybutton"
                                                                            class="plus-minus-box"
                                                                        />
                                                                        <a
                                                                            class="inc qtybutton"
                                                                            >+</a
                                                                        >
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                        <div class="list-btn">
                                                            <a
                                                                href="javascript:;"
                                                                >add to cart</a
                                                            >
                                                            <a
                                                                href="javascript:;"
                                                                >wishlist</a
                                                            >
                                                            <a
                                                                href="javascript:;"
                                                                data-toggle="modal"
                                                                data-target="#quick-view"
                                                                >zoom</a
                                                            >
                                                        </div>
                                                        <div
                                                            class="share-tag clearfix"
                                                        >
                                                            <ul
                                                                class="blog-share floatleft"
                                                            >
                                                                <li>
                                                                    <h5>
                                                                        share
                                                                    </h5>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="javascript:;"
                                                                        ><i
                                                                            class="mdi mdi-facebook"
                                                                        ></i
                                                                    ></a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="javascript:;"
                                                                        ><i
                                                                            class="mdi mdi-twitter"
                                                                        ></i
                                                                    ></a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="javascript:;"
                                                                        ><i
                                                                            class="mdi mdi-linkedin"
                                                                        ></i
                                                                    ></a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="javascript:;"
                                                                        ><i
                                                                            class="mdi mdi-vimeo"
                                                                        ></i
                                                                    ></a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="javascript:;"
                                                                        ><i
                                                                            class="mdi mdi-dribbble"
                                                                        ></i
                                                                    ></a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="javascript:;"
                                                                        ><i
                                                                            class="mdi mdi-instagram"
                                                                        ></i
                                                                    ></a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    methods: {
        ...mapActions(["setItems"])
    },
    beforeCreate(){
        console.log('Befor create shop')
    },
    created(){
        console.log('created shop')
    },
    beforeMount(){
        console.log('beforeMount shop')
    },
    mounted(){
        console.log('mounted shop')
    },
     beforUpdate() {
        console.log("befor update shope");
    },
    updated(){
        console.log("updated shop");
    },
    beforeDestroy(){
        console.log('Befor destroy shop')
    },
    destroyed(){
        console.log('destroyed shop')
    }
};
</script>
