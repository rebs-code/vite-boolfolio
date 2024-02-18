<script>
//import axios
import axios from 'axios';

export default {
    name: 'ProjectList',

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
    <div>Project List</div>
</template>
<style lang="scss" scoped></style>