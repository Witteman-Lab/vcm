<template>
  <v-container fluid>
    <v-layout>
      <v-app-bar
        height="120"
        app
        color="white"
        elevation="12"
        fixed
      >
        <div class="w-25 ml-5">
          <v-img
            height="100"
            src="./assets/logo.svg"
            class="logo-image"
            @click="handleLogoClick"
          ></v-img>
        </div>
        <v-spacer></v-spacer>
        <div class="mt-5 mr-10">
          <v-select
            variant="outlined"
            flat
            :items="languageItems"
            v-model="language"
            menu-icon=""
            base-color="#398064"
            color="#398064"
          ></v-select>
        </div>
      </v-app-bar>

      <v-main>
        <slider-range :language="language"></slider-range>
      </v-main>
    </v-layout>
  </v-container>
</template>

<script>
import SliderRange from "./components/SliderRange.vue";

const languageItems = ["EN", "FR"]; // Define language items as a constant

export default {
  components: {
    SliderRange,
  },
  data() {
    return {
      language: "",
      languageItems, // Use the constant for language items
    };
  },
  methods: {
    handleLogoClick() {
      window.location.reload();
    },
  },
  watch: {
    language(newLanguage) {
      // Call the setLanguage method whenever the language changes
      localStorage.setItem("language", newLanguage);
    },
  },
  created() {
    // Retrieve language from local storage on component creation
    this.language = localStorage.getItem("language") || "EN";
  },
};
</script>

<style scoped lang="scss">
.logo-image {
  cursor: pointer; /* Apply the pointer cursor style */
}
</style>
