import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ViewUI from 'view-design'
import VueClipboard from 'vue-clipboard2'
import 'view-design/dist/styles/iview.css'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(ViewUI)
Vue.use(VueClipboard)

Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
