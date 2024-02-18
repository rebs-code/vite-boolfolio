import { createRouter, createWebHistory } from 'vue-router';
//import components using their path and name
import AppHome from './pages/AppHome.vue';
import PostList from './pages/PostList.vue';

//create a new router instance
const router = createRouter({
    history: createWebHistory(),
    //array of routes
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/blog',
            name: 'posts',
            component: PostList
        },
    ]
});

//export the router instance
export { router };