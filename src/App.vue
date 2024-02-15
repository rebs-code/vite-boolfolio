<script>
//import header
import AppHeader from './components/AppHeader.vue';
//import AppFooter
import AppFooter from './components/AppFooter.vue';
// import AppMain
import AppMain from './components/AppMain.vue';

export default {
  name: 'MyPortfolio',

  components: {
    AppHeader,
    AppFooter,
    AppMain,
  },

  data() {
    return {
      text: 'Template VueJS',
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
