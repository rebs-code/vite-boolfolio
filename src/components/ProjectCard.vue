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
                <router-link :to="{ name: 'single-project', params: { slug: project.slug } }" class="btn btn-primary">
                    View Project
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.project-card {
    min-height: 300px;
}
</style>