<template>
    <div style="transform: rotate(-90deg);transform-origin: 70% 90%">
        <progress-bar :options="parameters" :value="value"/>
    </div>
</template>

<script>

    export default {
        name: "VerticalProgressBar",
        data() {
            return {}
        },
        props: {
            value: Number,
            parameters: Object
        }
    }
</script>

<style scoped>

</style>
