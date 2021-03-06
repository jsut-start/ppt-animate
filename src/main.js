// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import shutterAnimate from '@/components/shutterAnimate'
import eraseAnimation from '@/components/eraseAnimation'
import boxworkAnimation from '@/components/boxworkAnimation'
import ladderShapedAnimation from '@/components/ladderShapedAnimation'
Vue.config.productionTip = false;
Vue.use(shutterAnimate);
Vue.use(eraseAnimation);
Vue.use(boxworkAnimation);
Vue.use(ladderShapedAnimation);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
