<script>
//import axios
import axios from 'axios';

export default {
    name: 'ProjectDetail',
    data() {
        return {
            project: {},
            //initialize the baseURL and apiUrls
            baseURL: 'http://127.0.0.1:8000/',
            apiUrls: {
                'projects': 'api/projects',
            }

        };
    },

    methods: {
        getProject() {
            axios.get(this.baseURL + this.apiUrls.projects + '/' + this.$route.params.slug)
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
