<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-dark bg-primary shadow-sm mb-3">
            <div class="container">
                <router-link class="navbar-brand" to="/home">
                    Laravel
                </router-link>

                <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto"></ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <!-- Authentication Links -->
                        <li class="nav-item">
                            <router-link class="nav-link text-white" :to="{name:'home'}">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link text-white" :to="{name:'about'}">About</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link text-white" :to="{name:'contact'}">Contact</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {};
</script>
