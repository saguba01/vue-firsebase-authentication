import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import FirebaseModel from '@/model/Firebase'

Vue.config.productionTip = false

Vue.prototype.$Firebase = FirebaseModel.Firebase
Vue.prototype.$Analytics = FirebaseModel.Analytics
Vue.prototype.$GoogleAuth = FirebaseModel.GoogleAuth

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
