// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/main.css'
import store from './store'

Vue.use(ElementUI)
Vue.config.productionTip = false

// 自定义指令
Vue.directive('document-click', {
  bind (ele, binding, vnode) {
    // console.log(binding.value)
    document.addEventListener('click', binding.value, false)
  },
  inserted () {

  }

})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
