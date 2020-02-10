import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import message from './el-ui/el-ui'

Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$toasts = message

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
