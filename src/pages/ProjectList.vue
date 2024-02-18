<script>
//import axios
import axios from 'axios';
//import project card
import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: 'ProjectList',

    //import the project card component
    components: {
        ProjectCard,
    },

    methods: {
        //make the get request
        getProjects() {
            axios.get(this.baseURL + this.apiUrls.projects).then((response) => {
                this.projects = response.data.data;
                console.log(this.projects);
            }).catch((error) => {
                console.log(error);
            })
        },
    },

    //call the getProjects method when the component is created
    created() {
        this.getProjects();
    },

    data() {
        return {
            //initialize the projects array
            projects: [],
            //initialize the baseURL and apiUrls
            baseURL: 'http://127.0.0.1:8000/',
            apiUrls: {
                'projects': 'api/projects',
            }
        };
    },
};
</script>
<template>
    <header class="app-main bg-light">
        <div class="container">
            <div class="row">
                <div class="col-4 p-3" v-for="project in projects" :key="project.id">
                    <!-- bootstrap card for each projects -->
                    <ProjectCard :project="project" />
                </div>
            </div>

        </div>
    </header>
</template>
<style scoped lang="scss">
.project-card {
    min-height: 300px;
}
</style>