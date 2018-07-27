// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import WechatTitle from 'vue-wechat-title'//切换title
import '@/styles/index.scss'
import {ajax as Ajax} from '@/config/config.js'

Vue.config.productionTip = false

Vue.use(WechatTitle)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  methods: {
    Ajax,
  }
})

//路由切换改变title，Vue.js单页应用在iOS系统下部分APP的webview中，标题不能通过document.title = xxx 的方式修改,所以引入vue-wechat-title
// router.beforeEach((to,from,next) => {
//   if(to.meta.title){
//     document.title = to.meta.title;
//   }
//   next();
// })