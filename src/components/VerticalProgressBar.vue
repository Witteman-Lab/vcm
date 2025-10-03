<template>
  <v-container
    class="d-flex flex-column align-center"
    style=""
  >
    <v-container
      style="width: auto; height: auto;"
      fluid
      class="d-flex flex-row"
    >
        <div class="">
          <div style="display: flex; align-items: center; justify-content: flex-start; flex-direction: row;">
            <VerticalProgress :model-value="value1" color="#398064" :height="220" :thickness="90" :rounded="false"/>
          </div>
          <div style="height: 3px; width: 100%; background: black; "></div>
          <v-textarea
            dense
            hide-details
            class="input1 text-center"
            v-model="option1"
            variant="plain"
            ref="input1"
            @click="selectAllText('input1')"
            @change="emitInput1"
            style="width: auto; text-align: center; padding-right: 10px; padding-left: 0px;"
            :style="{color:value1 > 50 ? '#398064' : '#000000', fontWeight:value1>50 ? 'bold' : 'normal'}"
            no-resize
            color="orange orange-darken-4"
          ></v-textarea>
        </div>
        <div>


<!--          <div style="display: flex; align-items: center; justify-content: center; flex-direction: row;">-->
<!--            <VerticalProgress :model-value="value2" color="#cd9367" :height="220" :thickness="90" :rounded="false"/>-->
<!--            <span>Doesn't fit</span>-->
<!--            <span>Fit perfectly</span>-->
<!--          </div>-->


<!--          <div class="bar-with-abs" style="&#45;&#45;bar-h:220px; &#45;&#45;label-gap:16px; &#45;&#45;top-nudge:-2px; &#45;&#45;bottom-nudge:6px;">-->
<!--            <VerticalProgress :model-value="value2" color="#cd9367" :height="220" :thickness="90" :rounded="false"/>-->
<!--            <span class="lbl lbl-top">Fits perfectly</span>-->
<!--            <span class="lbl lbl-bottom">Doesn’t fit</span>-->
<!--          </div>-->
<!--          -->



          <div style="display: flex; align-items: center; justify-content: flex-start; flex-direction: row; position: relative;">
            <VerticalProgress :model-value="value2" color="#cd9367" :height="220" :thickness="90" :rounded="false"/>
            <span style="position: absolute; top: -10px; right: -5px; transform: translate(100%, 0);margin-left: 50px; color: #ffffff; padding-left: 5px; padding-right: 5px; text-align: start;"
            :style="{background:value1 > 50 ? '#398064' : '#ffffff', color:value1 > 50 ? '#ffffff' : '#000000'}">{{topBarInstruction}}</span>

            <span style="padding-left: 5px; padding-right: 5px; position: absolute; bottom: -10px; right: -5px; transform: translate(100%, 0);margin-left: 50px; text-align: start;color: #000000; background: #ffffff"
                  :style="{background:value2 > 50 ? '#cd9367' : '#ffffff', color:value2 > 50 ? '#ffffff' : '#000000'}">{{bottomBarInstruction}}</span>
          </div>

          <div style="height: 3px; width: 100%; background: black"></div>

          <v-textarea
            dense
            hide-details
            class="input2 text-center"
            v-model="option2"
            variant="plain"
            ref="input2"
            @click="selectAllText('input2')"
            @change="emitInput2"
            style="width: auto; text-align: center; padding-right: 10px; padding-left: 0px;"
            :style="{color:value2 > 50 ? '#cd9367' : '#000000', fontWeight:value2>50 ? 'bold' : 'normal'}"
            no-resize
          ></v-textarea>
        </div>

    </v-container>

    <div class="d-flex justify-center" v-if="value1 === 50" >
      <!--      <v-chip variant="outlined" :color="value1 > 50 ? '#398064' : '#cd9367'" style="text-wrap: auto;" size="45">-->
      <!--        <span style="font-weight: bold; padding-bottom: 20px; margin-top: 20px">{{ value1 > 50 ? option1 : option2 }} <span>{{ result }}</span> </span>-->
      <!--      </v-chip>-->
      <span class="badge-vert" style="border-color: #2c3d50; color: #2c3d50">
        <span class="font-weight-regular">{{middleBarTextNormal}}</span>
        <span class="font-weight-bold mr-1">{{middleBarTexBold}}</span>
      </span>


    </div>

    <div class="d-flex justify-center" v-if="value1 !== 50" >
<!--      <v-chip variant="outlined" :color="value1 > 50 ? '#398064' : '#cd9367'" style="text-wrap: auto;" size="45">-->
<!--        <span style="font-weight: bold; padding-bottom: 20px; margin-top: 20px">{{ value1 > 50 ? option1 : option2 }} <span>{{ result }}</span> </span>-->
<!--      </v-chip>-->

      <span class="badge-vert" :style="{borderColor: value1 > 50 ? '#398064' : '#cd9367',
  color:       value1 > 50 ? '#398064' : '#cd9367'}">
        <span class="font-weight-bold mr-1">{{ value1 > 50 ? option1 : option2 }}</span>
      <span class="font-weight-regular">{{ result }}</span>
      </span>

    </div>

  </v-container>

</template>

<script>
import { ref, watch, getCurrentInstance } from "vue";
import VerticalProgress from "./VerticalProgress.vue";

export default {
  components: {
    VerticalProgress
  },
  /**
   * Props:
   * - value1: The first input value (Type: Number, Required: true)
   * - value2: The second input value (Type: Number, Required: true)
   * - result: The result string (Type: String, Required: true)
   */
  props: {
    value1: {
      type: Number,
      required: true,
    },
    value2: {
      type: Number,
      required: true,
    },
    result: {
      type: String,
      required: true,
    },
    leftBarText: {
      type: String,
      required: true,
    },
    rightBarText: {
      type: String,
      required: true,
    },
    topBarInstruction: {
      type: String,
      required: true,
    },
    bottomBarInstruction: {
      type: String,
      required: true,
    },
    middleBarTextNormal: {
      type: String,
      required: true,
    },
    middleBarTexBold: {
      type: String,
      required: true,
    }
  },
  setup(props) {
    const value1 = ref(props.value1);
    const value2 = ref(props.value2);
    const option1 = ref(props.leftBarText);
    const option2 = ref(props.rightBarText);
    // Watch the prop values for changes and update the refs accordingly
    watch(
      () => props.value1,
      (newValue) => {
        value1.value = newValue;
      }
    );
    watch(
      () => props.value2,
      (newValue) => {
        value2.value = newValue;
      }
    );

    watch(
      () => props.leftBarText,
      (newVal) => {
        option1.value = newVal;
      }
    );

    watch(
      () => props.rightBarText,
      (newVal) => {
        option2.value = newVal;
      }
    );


    // Get the current Vue component instance
    const instance = getCurrentInstance();
    // Emit input1 value to the parent component
    const emitInput1 = () => {
      instance.emit("input1", option1.value);
    };
    // Emit input2 value to the parent component
    const emitInput2 = () => {
      instance.emit("input2", option2.value);
    };
    return { value1, value2, option1, option2, emitInput1, emitInput2 };
  },
  methods: {
    /**
     * Method: selectAllText
     * Description: Selects all text in the referenced element.
     * @param {string} refName - The name of the ref referencing the element.
     */
    selectAllText(refName) {
      if (this.$refs[refName]) {
        this.$refs[refName].select();
      }
    },
  },
};
</script>

<style scoped lang="scss">
.hidden {
  visibility: hidden;
}
.vertical-progress-container {
  //transform: rotate(-90deg);
}
.input1:deep(input) {
  color: #398064;
}
.input2:deep(input) {
  color: #cd9367;
}

.badge-vert {
  border: 1px solid; /* contour vert */
  border-radius: 9999px; /* arrondi "pilule" */
  padding: .25rem .6rem; /* marge interne */
  display: inline-block; /* garde la forme */
  line-height: 1.2;
  /* si le texte va à la ligne, garde un rendu propre */
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;


}



//
///* Conteneur qui épouse la barre et sert de repère aux labels */
//.bar-with-abs{
//  position: relative;
//  width: max-content;         /* s'ajuste à la largeur de la barre */
//  height: var(--bar-h);       /* = hauteur de la barre VerticalProgress */
//  display: flex;
//  align-items: flex-end;      /* aligne le pied de la barre */
//  justify-content: center;
//}
//
///* Styles communs aux deux libellés */
//.bar-with-abs .lbl{
//  position: absolute;
//  left: calc(100% + var(--label-gap)); /* place le texte à droite de la barre */
//  white-space: nowrap;
//  line-height: 1.1;
//}
//
///* Libellé du haut */
//.bar-with-abs .lbl-top{
//  top: 0;
//  transform: translateY(var(--top-nudge)); /* petit ajustement fin si besoin */
//}
//
///* Libellé du bas (au niveau du pied de la barre) */
//.bar-with-abs .lbl-bottom{
//  bottom: 10px;
//  transform: translateY(var(--bottom-nudge)); /* pousse légèrement vers la ligne noire */
//}
//
///* Optionnel : responsive – augmente l'espace à droite de la barre sur grand écran */
//@media (min-width: 960px){
//  .bar-with-abs{ --label-gap: 24px; }
//}


</style>

