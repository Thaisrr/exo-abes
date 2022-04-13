import {createRouter, createWebHistory} from "vue-router";
import Library from "../pages/Library.vue";
import Form from "../pages/Form.vue";

const router = createRouter({
   history: createWebHistory(),
    routes: [
        {path: '/games', name: 'library', component: Library},
        {path: '/add/:id?', name: 'form', component: Form},
        // ? paramétre optionnel
    ]
})

export default router;