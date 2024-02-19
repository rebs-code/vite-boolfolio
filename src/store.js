//import reactive from "vue";
import { reactive } from "vue";
//create store object
const store = reactive({
    api: {
        baseURL: 'http://127.0.0.1:8000/',
        apiUrls: {
            'projects': 'api/projects',
        },
    },
    projects: {
        searchKey: '',
    },
});

export default store;