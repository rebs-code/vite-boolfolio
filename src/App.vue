<script>
//import header
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'MyPortfolio',

  components: {
    AppHeader,
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
  </div>
</template>

<style scoped lang="scss"></style>
