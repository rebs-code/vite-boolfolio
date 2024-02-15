<script>
//import header
import AppHeader from './components/AppHeader.vue';
//import AppFooter
import AppFooter from './components/AppFooter.vue';
// import AppMain
import AppMain from './components/AppMain.vue';
//import axios
import axios from 'axios';

export default {
  name: 'MyPortfolio',

  components: {
    AppHeader,
    AppFooter,
    AppMain,
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
  <div id="app">
    <AppHeader />
    <AppMain />
    <AppFooter />
  </div>
</template>

<style scoped lang="scss"></style>
