<script>
//import axios
import axios from 'axios';
//import project card
import ProjectCard from '../components/ProjectCard.vue';
// import loading component
import Loading from '../components/Loading.vue';

export default {
    name: 'ProjectList',

    //import the project card component
    components: {
        ProjectCard,
        Loading,
    },

    methods: {
        //make the get request
        getProjects() {
            this.loading = true;
            axios.get(this.baseURL + this.apiUrls.projects, { params: { page: this.currentPage, } }).then((response) => {
                this.projects = response.data.results.data;
                this.lastPage = response.data.results.last_page; // get the last page
            }).catch((error) => {
                console.log(error);
            }).finally(() => {
                this.loading = false;
            });
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
        //get the current page from the query parameter
        this.currentPage = this.$route.query.page ?? 1;
        //call the getProjects method
        this.getProjects();
    },
    data() {
        return {
            //loading attribute
            loading: false,
            //initialize the current page
            currentPage: 1,
            //initialize the projects array
            projects: [],
            //initialize the last page
            lastPage: 1,
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
    <div class="container">
        <!-- loading div -->
        <Loading v-if="loading" />
        <div v-else>
            <div class="d-flex flex-wrap">
                <div class="col-4 p-3" v-for="project in projects">
                    <!-- bootstrap card for each projects -->
                    <ProjectCard :project="project" />
                </div>
            </div>
            <nav class="d-flex justify-content-center">
                <ul class="pagination">
                    <li class="page-item" v-if="currentPage > 1">
                        <a class="page-link" href="#" @click="previousPage">Previous</a>
                    </li>
                    <li class="page-item" v-if="projects.length > 0 && currentPage < lastPage">
                        <a class="page-link" href="#" @click="nextPage">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>
<style scoped lang="scss">
.project-card {
    min-height: 300px;
}
</style>