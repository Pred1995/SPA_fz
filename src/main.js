import Vue from 'vue'
import App from './App'
import router from './router'
import vuetify from './plugins/vuetify' // path to vuetify export
import store from "./store";

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  render: h => h(App)
})
