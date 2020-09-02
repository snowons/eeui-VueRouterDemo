<script>
import Main from './main.vue'
import router from './router.js'
new Vue(Vue.util.extend({
    el: '#root',
    router
}, Main))
</script>
