import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NaverLogin from '@/components/NaverLogin'
// import NaverLogin2 from '@/components/NaverLogin2'
import TestVue from '@/components/TestVue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/login',
      name: 'NaverLogin',
      component: NaverLogin,
    },
    {
      path: '/test',
      name: 'TestVue',
      component: TestVue,
    },
  ],
})
