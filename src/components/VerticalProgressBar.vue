<template>
    <div>
        <progress-bar
                      :options="options"
                      :value="value"/>
    </div>
</template>

<script>

    export default {
        name: "VerticalProgressBar",
        data() {
            return {
                options: {
                    text: {
                        color: '#FFFFFF',
                        shadowEnable: true,
                        shadowColor: '#000000',
                        fontSize: 14,
                        fontFamily: 'Helvetica',
                        dynamicPosition: false,
                        hideText: false
                    },
                    progress: {
                        color: '#2dbd2d',
                        backgroundColor: '#C0C0C0'
                    },
                    layout: {
                        height: 35,
                        width: 140,
                        verticalTextAlign: 61,
                        horizontalTextAlign: 43,
                        zeroOffset: 0,
                        strokeWidth: 30,
                        progressPadding: 0,
                        type: 'line'
                    }
                }
            }
        },
        props: {
            value: Number
        }
    }
</script>

<style scoped>

</style>
