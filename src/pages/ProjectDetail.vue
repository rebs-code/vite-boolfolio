<script>
//import axios
import axios from 'axios';
//import store
import store from '../store/';

export default {
    name: 'ProjectDetail',
    data() {
        return {
            project: {},
            store,
        };
    },

    methods: {
        getProject() {
            axios.get(this.store.api.baseURL + this.store.api.apiUrls.projects + '/' + this.$route.params.slug)
                .then(response => {
                    this.project = response.data;
                })
                .catch(error => {
                    console.log('There was an error:', error);
                });
        }
    },
    created() {
        this.getProject();
    }
};
</script>
<template>
    <div class="container">
        <div>
            <h2>{{ project.name }}</h2>
            <p>{{ project.description }}</p>
        </div>
        <hr>
        <!-- comment section -->
        <section id="comments">
            <h5>Comments</h5>
            <ul v-if="project.comments.length">
                <li v-for="comment in project.comments" :key="comment.id">
                    <p>{{ comment.content }}</p>
                </li>
            </ul>
            <!-- bootstrap alert if no comments -->
            <div class="alert alert-info" role="alert" v-else>
                No comments yet
            </div>
        </section>
        <hr>
        <section>
            <h5>Add Comment</h5>
            <!-- <form>
                <div class="form-group">
                    <label for="comment">Comment</label>
                    <textarea class="form-control" id="comment" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form> -->
        </section>
        <router-link to="/projects">Go back to projects</router-link>
    </div>
</template>
<style lang="scss" scoped></style>
