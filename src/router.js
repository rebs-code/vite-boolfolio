import { createRouter, createWebHistory } from 'vue-router';
//import components using their path and name
import AppHome from './pages/AppHome.vue';
import ProjectList from './pages/ProjectList.vue';
import AppAbout from './pages/AppAbout.vue';

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
            path: '/projects',
            name: 'projects',
            component: ProjectList
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout
        }
    ]
});

//export the router instance
export { router };