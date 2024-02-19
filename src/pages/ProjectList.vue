<script>
//import axios
import axios from 'axios';
//import project card
import ProjectCard from '../components/ProjectCard.vue';
// import loading component
import Loading from '../components/Loading.vue';
//import store
import store from '../store';
//import ProjectSearch component
import ProjectSearch from '../components/ProjectSearch.vue';

export default {
    name: 'ProjectList',

    //import the project card component
    components: {
        ProjectCard,
        Loading,
        ProjectSearch,
    },

    methods: {
        //make the get request
        getProjects() {
            this.loading = true;
            axios.get(this.store.api.baseURL + this.store.api.apiUrls.projects, { params: { page: this.currentPage, key: this.store.projects.searchKey } }).then((response) => {
                this.projects = response.data.results.data;
                this.lastPage = response.data.results.last_page; // get the last page
                this.responseData = response.data;
            }).catch((error) => {
                console.log(error);
                this.responseData.results.data = [];
                this.errors = error.response.data.message;
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
            //initialize the store
            store,
            responseData: {},
            errors: [],


        };
    },
};
</script>
<template>
    <div class="container">
        <!-- project search component -->
        <div class="py-4">
            <ProjectSearch @search-project="getProjects" />
        </div>
        <!-- error div -->
        <div v-if="errors.length > 0" class="alert alert-danger">
            <p class="m-0">Error: {{ errors }}</p>
        </div>
        <!-- loading div -->
        <Loading v-if="loading" />
        <div v-else>
            <div class="d-flex flex-wrap">
                <div class="col-4 p-3" v-for="project in responseData.results?.data">
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