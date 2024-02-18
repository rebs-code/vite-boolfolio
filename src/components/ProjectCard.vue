<script>
export default {
    name: 'ProjectCard',
    props: {
        project: {
            type: Object
        }
    }
};

</script>

<template>
    <div class="card project-card">
        <div class="card-body d-flex flex-column">
            <h5 class="card-name">{{ project.name }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <div class="d-flex mt-auto">
                <a href="/" class="btn btn-primary mt-auto mx-auto">View Project</a>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.project-card {
    min-height: 300px;
}
</style>