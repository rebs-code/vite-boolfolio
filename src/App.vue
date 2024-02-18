<script>
//import header
import AppHeader from './components/AppHeader.vue';
//import AppFooter
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'MyPortfolio',

  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<template>
  <div id="app">
    <AppHeader />
    <!-- <AppMain :projects="projects" /> -->
    <router-view />
    <AppFooter />
  </div>
</template>
