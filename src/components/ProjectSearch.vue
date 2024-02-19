<script>
import store from '../store/';
export default {
    name: 'ProjectSearch',
    data() {
        return {
            store,
        };
    },

    emits: ['searchProject'],

    methods: {
        search() {
            console.log(this.store.projects.searchKey);
            this.$emit('searchProject');
        },
    },
};
</script>
<template>
    <section id="project-search">
        <div class="container">
            <form class="d-flex" role="search" @submit.prevent="search">
                <input class="form-control me-2" id="search-key" type="text" placeholder="Search"
                    v-model="store.projects.searchKey">
                <button class="btn btn-outline-primary" type="submit">Search</button>
            </form>
        </div>
    </section>
</template>
<style lang="scss" scoped></style>
