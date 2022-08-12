import Vue from 'vue'
import App from './App.vue'
import VueParticlesBg from "particles-bg-vue";
import router from './router'


new Vue({
  render: h => h(App),
  router
}).$mount('#app')

Vue.config.productionTip = false
Vue.use(VueParticlesBg);