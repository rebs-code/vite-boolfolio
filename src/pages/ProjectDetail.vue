<script>
//import axios
import axios from 'axios';
//import store
import store from '../store/';

export default {
    name: 'ProjectDetail',
    data() {
        return {
            project: {},
            store,
        };
    },

    methods: {
        getProject() {
            axios.get(this.store.api.baseURL + this.store.api.apiUrls.projects + '/' + this.$route.params.slug)
                .then(response => {
                    this.project = response.data;
                })
                .catch(error => {
                    console.log('There was an error:', error);
                });
        }
    },
    created() {
        this.getProject();
    }
};
</script>
<template>
    <div class="container">
        <h2>{{ project.name }}</h2>
        <p>{{ project.description }}</p>
        <router-link to="/projects">Go back to projects</router-link>
    </div>
</template>
<style lang="scss" scoped></style>
