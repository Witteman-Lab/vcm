<template>
    <div id="container" class="container vertical rounded clearfix">
        <div id="graph">
            <!-- Container for the graphs -->
            <div id="graphs" class="clearfix">

                <!-- Graph 1 -->
                <div class="progress-bar" id="option1">
                    <div class="progress-track">
                        <div id="bar1" class="progress-fill">
                        </div>
                    </div>
                    <!--<p id="option1_text">-->
                        <!--<span id="option1_value" class="editableText"></span>-->
                        <!--<span></span>-->
                    <!--</p>-->
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Graphics",
        components: {},
        props:{},
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
    .clearfix:after {
          content: ".";
          display: block;
          height: 0;
          clear: both;
          visibility: hidden;
      }
    .clearfix {
        overflow: none !important;
    }
    /*
 * GRAPH
 */
    div#graph {
        width: 100%;
        float: right;
        margin: 0 auto;
    }
    /* VERTICAL */
    .vertical .progress-bar {
        float: left;
        height: 200px;
        width: 30%;
        margin: 0 10%;
    }
    .vertical .progress-track {
        position: relative;
        height: 100%;
        background: #f0f0f0;
    }
    .vertical .progress-fill {
        position: relative;
        width: 100%;
        height: 50%;
    }

    /*!* HORIZONTAL *!*/
    /*.horizontal .progress-bar {*/
        /*width: 100%;*/
        /*margin: 20px 0 0 0;*/
    /*}*/
    /*.horizontal .progress-bar p {*/
        /*margin: 5px 0 0 0;*/
    /*}*/

    /*.horizontal .progress-track {*/
        /*width: 100%;*/
        /*height: 50px;*/
        /*background: #f0f0f0;*/
        /*margin: 10px 0 0 0;*/
    /*}*/

    /*.horizontal .progress-fill {*/
        /*position: relative;*/
        /*height: 100%;*/
    /*}*/

    #bar1 {
        background-color: #410e73;
        top: 50%;
    }
    /*#bar2 {*/
        /*background-color: #a8a873;*/
        /*top: 50%;*/
    /*}*/

    .vertical div#graphs {
        width: 50%;
        margin: 0 auto;
    }

    .rounded .progress-track,
    .rounded .progress-fill {
        box-shadow: inset 0 0 5px rgba(0,0,0,.2);
        border-radius: 3px;
    }
    /*.options{*/
        /*color:#f5853f;*/
        /*font-weight: bold;*/
        /*text-decoration: underline;*/
    /*}*/
    /*#option1_text {*/
        /*color: #410e73;*/
    /*}*/
    /*#option2_text {*/
        /*color: #a8a873;*/
    /*}*/
    /*#option1_text, #option2_text {*/
        /*text-align: center;*/
        /*font-size: 11px;*/
        /*font-weight: bold;*/
        /*line-height: 14px;*/
    /*}*/

</style>
