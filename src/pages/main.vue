<template>
    <div append="tree">
        <router-view style="flex:1" append="tree"></router-view>
    </div>
</template>
<script>
const eeui = app.requireModule('eeui');

export default {
    name: "Main",
    data() {
        return {

        }
    },
    beforeCreate() {
    },
    methods: {
        startHttpRequest() {
            setTimeout(() => {
                this.$router.push('/A')
            }, 1000)
        }
    },
    created() {

        this.startHttpRequest()
    },
    mounted() {
    }
}
</script>

