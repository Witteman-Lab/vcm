<template>
    <div class="container">
        <div style="transform: rotate(-90deg);transform-origin: 70% 90%">
            <progress-bar :options="parameters" :value="value"/>
        </div>
        <span style="text-align: center">hello</span>
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
            parameters: Object,
            optionGraphLabel: String
        }
    }
</script>

<style scoped>

</style>
