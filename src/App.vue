<template>
  <v-container fluid>
    <v-layout>
      <v-app-bar height="120" app color="white" elevation="12" fixed>
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
        <slider-range :language="language" :uid="uid" :returnUrl="returnUrl"></slider-range>
      </v-main>
    </v-layout>
  </v-container>
</template>

<script>
import SliderRange from "./components/SliderRange.vue";

const languageItems = ["en", "fr"]; // Define language items as a constant

export default {
  components: {
    SliderRange,
  },
  data() {
    return {
      language: "",
      returnUrl: "",
      uid: "",
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
      localStorage.setItem("language", newLanguage);
      const urlParams = new URLSearchParams(window.location.search);
      urlParams.set("lang", newLanguage);
      window.history.replaceState(
        {},
        "",
        `${window.location.pathname}?${urlParams}`
      );
    },
    returnUrl(newReturnUrl) {
      localStorage.setItem("returnUrl", newReturnUrl);
      const urlParams = new URLSearchParams(window.location.search);
      urlParams.set("returnUrl", newReturnUrl);
      window.history.replaceState(
        {},
        "",
        `${window.location.pathname}?${urlParams}`
      );
    },
    uid(newUid) {
      localStorage.setItem("uid", newUid);
      const urlParams = new URLSearchParams(window.location.search);
      urlParams.set("uid", newUid);
      window.history.replaceState(
        {},
        "",
        `${window.location.pathname}?${urlParams}`
      );
    },
  },
  created() {
    // Retrieve language from local storage on component creation
    const urlParams = new URLSearchParams(window.location.search);
    this.language =
      urlParams.get("lang") || localStorage.getItem("language") || "en";

    this.returnUrl =
      urlParams.get("returnUrl") || localStorage.getItem("returnUrl") || "";
    this.uid = urlParams.get("uid") || localStorage.getItem("uid") || "";
  },
};
</script>

<style scoped lang="scss">
.logo-image {
  cursor: pointer; /* Apply the pointer cursor style */
}
</style>
