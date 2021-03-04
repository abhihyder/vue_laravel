<template>
    <div>
        <div class="pages-title section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="pages-title-text text-center">
                            <h2>Login</h2>
                            <ul class="text-left">
                                <li>
                                    <router-link :to="{ name: 'home' }"
                                        >Home</router-link
                                    >
                                </li>
                                <li><span> // </span>Login</li>
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
                        <div class="main-input padding60">
                            <div class="log-title">
                                <h3><strong>Login</strong></h3>
                            </div>
                            <div class="login-text">
                                <div class="custom-input">
                                    <p>
                                        If you have an account with us, Please
                                        log in!
                                    </p>
                                    <form @submit.prevent="submitLoginForm()">
                                        <input
                                            type="text"
                                            v-model="form.email"
                                            name="email"
                                            placeholder="Email"
                                        />
                                        <input
                                            type="password"
                                            v-model="form.password"
                                            name="password"
                                            placeholder="Password"
                                        />
                                        <a class="forget" href="javascript:;"
                                            >Forget your password?</a
                                        >
                                        <div class="submit-text">
                                            <button type="submit">login</button>
                                        </div>
                                    </form>
                                </div>
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
    data() {
        return {
            form: {}
        };
    },
    methods: {
        submitLoginForm() {
            axios
                .post("/login", this.form)
                .then(results => {
                    this.$router.push({ name: "home" });
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
};
</script>
