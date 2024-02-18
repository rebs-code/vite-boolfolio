<script>
export default {
    name: 'AppHeader',
};
</script>
<template>
    <header class="app-header bg-info">
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex justify-content-between align-items-center">
                    <h1 class="text-uppercase">My Portfolio</h1>
                    <!-- navigation links -->
                    <nav class="nav">
                        <router-link to="/" class="nav-link">Home</router-link>
                        <router-link to="/about" class="nav-link">About</router-link>
                        <router-link to="/projects" class="nav-link">Projects</router-link>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>
<style scoped lang="scss"></style>