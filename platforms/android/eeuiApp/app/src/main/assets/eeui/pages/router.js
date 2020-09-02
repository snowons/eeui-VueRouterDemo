import Router from 'vue-router';
Vue.use(Router);
import A from './components/A.vue'
import B from './components/B.vue'
import C from './components/C.vue'

export default new Router({
    routes: [{
        path: '/A',
        component: A
    },
    {
        path: '/B',
        component: B
    },
    {
        path: '/C',
        component: C
    }
    ]
})