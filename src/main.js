import Vue from 'vue'
import App from './App.vue'
// import VueSlider from 'vue-slider-component'
import ProgressBar from 'vuejs-progress-bar'
Vue.use(ProgressBar);
//Vue.config.productionTip = false
require("./scss/main.scss");
// Vue.component('VueSlideBar', VueSlider)
new Vue({
  render: h => h(App),
}).$mount('#app')
