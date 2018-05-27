<template>
    <div class="index">
        <Row type="flex" justify="center" align="middle">
            <Col span="24">
                <HelloWorld></HelloWorld>
            </Col>
        </Row>
    </div>
</template>

<script>
    import HelloWorld from '@/components/HelloWorld.vue';
    export default {
        name: 'HomeView',
        components: {HelloWorld},
        data() {
            return {
            }
        },
        computed: {

        },
        methods: {

        }
    };
</script>

<style scoped>
</style>