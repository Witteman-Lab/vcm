<template>
  <v-container style="width: 300px;" fluid class="vertical-progress-container">
    <v-progress-linear
      v-model="power"
      color="amber"
      height="80"
      class="progressBar"
    ></v-progress-linear>
    <div class="space_between_div"></div>
    <v-progress-linear
      v-model="skill"
      color="blue-grey"
      height="80"
      class="progressBar"
    >
    </v-progress-linear>
  </v-container>
</template>
  
  <script>
export default {
  data: () => ({
    skill: 50,
    power: 78,
  }),
};
</script>

<style scoped lang="scss">
.vertical-progress-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: rotate(-90deg);
}
.space_between_div {
        margin: auto;
        padding: 20% 0;
    }
</style>

