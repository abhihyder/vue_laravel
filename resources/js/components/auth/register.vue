<template>
    <div>
        <div class="pages-title section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="pages-title-text text-center">
                            <h2>Register</h2>
                            <ul class="text-left">
                                <li>
                                    <router-link :to="{ name: 'home' }"
                                        >Home</router-link
                                    >
                                </li>
                                <li><span> // </span>Register</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- pages-title-end -->
        <!-- login content section start -->
        <section class="pages login-page section-padding">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-sm-6">
                        <div class="main-input padding60 new-customer">
                            <div class="log-title">
                                <h3><strong>register</strong></h3>
                            </div>
                            <div class="custom-input">
                                <form @submit.prevent="submitRegisterForm()">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name here.."
                                    />
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="Email Address.."
                                    />
                                    <input
                                        type="text"
                                        name="number"
                                        placeholder="Phone Number.."
                                    />
                                    <input
                                        type="text"
                                        name="address"
                                        placeholder="Password"
                                    />
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Confirm Password"
                                    />
                                    <label class="first-child">
                                        <input
                                            type="radio"
                                            name="rememberme"
                                            value="forever"
                                        />
                                        Sign up for our newsletter!
                                    </label>
                                    <div class="submit-text coupon">
                                        <button type="submit">Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    // mounted() {
    //     console.log('Component mounted.')
    // }
    methods: {
        submitRegisterForm() {
            console.log("Form submited");
        }
    }
};
</script>
