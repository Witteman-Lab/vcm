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
          <VerticalProgress :model-value="value1" color="#398064" :height="220" :thickness="90" :rounded="false"/>
          <v-textarea
            dense
            hide-details
            class="input1 text-center"
            v-model="option1"
            variant="plain"
            ref="input1"
            @click="selectAllText('input1')"
            @change="emitInput1"
            style="width: auto; text-align: center; padding-right: 10px; padding-left: 10px;"
          ></v-textarea>
        </div>
        <div>
          <VerticalProgress :model-value="value2" color="#cd9367" :height="220" :thickness="90" :rounded="false"/>
          <v-textarea
            dense
            hide-details
            class="input2 text-center"
            v-model="option2"
            variant="plain"
            ref="input2"
            @click="selectAllText('input2')"
            @change="emitInput2"
            style="width: auto; text-align: center; padding-right: 10px; padding-left: 10px;"
          ></v-textarea>
        </div>

    </v-container>


    <div class="d-flex justify-center" v-show="value1 !== 50" >
<!--      <v-chip variant="outlined" :color="value1 > 50 ? '#398064' : '#cd9367'" style="text-wrap: auto;" size="45">-->
<!--        <span style="font-weight: bold; padding-bottom: 20px; margin-top: 20px">{{ value1 > 50 ? option1 : option2 }} <span>{{ result }}</span> </span>-->
<!--      </v-chip>-->

      <span class="badge-vert" :style="{borderColor: value1 > 50 ? '#398064':'#cd9367'}">
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
</style>

