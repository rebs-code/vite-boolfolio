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
                    <div class="card project-card">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-name">{{ project.name }}</h5>
                            <p class="card-text">{{ project.description }}</p>
                            <div class="d-flex mt-auto">
                                <a href="/" class="btn btn-primary mt-auto mx-auto">View Project</a>
                            </div>
                        </div>
                    </div>
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