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
            axios.get(this.baseURL + this.apiUrls.projects, { params: { page: this.currentPage, } }).then((response) => {
                this.projects = response.data.results.data;
                console.log(this.projects);
            }).catch((error) => {
                console.log(error);
            })
        },

        //get the next page
        nextPage() {
            this.currentPage++;
            this.getProjects();
        },

        //get the previous page
        previousPage() {
            this.currentPage--;
            this.getProjects();
        }
    },

    //call the getProjects method when the component is created
    created() {
        this.getProjects();
    },

    computed: {
        //check if there is a next page
        hasNextPage() {
            let totalPages = Math.ceil(this.projects.length / this.perPage);
            return this.currentPage < totalPages;
        }
    },

    data() {
        return {
            currentPage: 1,
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
            <nav>
                <ul class="pagination
                justify-content-center">
                    <li class="page-item" v-if="currentPage > 1">
                        <a class="page-link" href="#" @click="previousPage">Previous</a>
                    </li>
                    <li class="page-item" v-if="projects.length > 0">
                        <a class="page-link" href="#" @click="nextPage">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>
<style scoped lang="scss">
.project-card {
    min-height: 300px;
}
</style>