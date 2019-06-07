<template>
    <div>
        <progress-bar :options="parameters" :value="value"/>
        <span style="text-align: center">{{optionGraphLabel}}</span>
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
