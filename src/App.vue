<script>
export default {
  name: 'DefaultTemplate',

  data() {
    return {
      text: 'Template VueJS',
    };
  },
};
</script>

<template>
  <h1 class="text-uppercase">{{ text }}</h1>
</template>

<style scoped lang="scss"></style>
