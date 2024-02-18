<script>
export default {
    name: 'AppHeadAppMain',

    //pass the projects as a prop
    props: {
        projects: {
            type: Object
        }
    },
};
</script>
<template>
    <header class="app-main bg-light">
        <div class="container">
            <div class="row">
                <div class="col-4 p-3" v-for="project in projects" :key="project.id">
                    <!-- bootstrap card for each projects -->

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