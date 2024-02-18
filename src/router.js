import { createRouter, createWebHistory } from 'vue-router';
//import components using their path and name
import AppHome from './pages/AppHome.vue';
import ProjectList from './pages/ProjectList.vue';
import AppAbout from './pages/AppAbout.vue';
import NotFound from './components/NotFound.vue';
import ProjectDetail from './pages/ProjectDetail.vue';

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
            path: '/projects/:slug',
            name: 'single-project',
            component: ProjectDetail
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout
        },
        //catch all 404 - define at the end
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFound
        },
    ]
});

//export the router instance
export { router };