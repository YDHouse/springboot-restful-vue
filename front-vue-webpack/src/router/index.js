import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import NaverLogin from '@/components/NaverLogin'
import NaverLogin2 from '@/components/NaverLogin2'
// import NaverLogin3 from '@/components/NaverLogin3'
import NaverLoginCallBack from '@/components/NaverLoginCallBack'
import TestVue from '@/components/TestVue'
import TestVue2 from '@/components/TestVue2'

Vue.use(Router)

export default new Router({
  mode: 'history',
  hash: false,
  routes: [
    {
      path: '*',
      redirect: '/',
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/login',
      name: 'NaverLogin2',
      component: NaverLogin2,
    },
    {
      path: '/loginCallBackNaver',
      name: 'NaverLoginCallBack',
      component: NaverLoginCallBack,
    },
    {
      path: '/testVue',
      name: 'TestVue',
      component: TestVue,
    },
    {
      path: '/testVue2',
      name: 'TestVue2',
      component: TestVue2,
    },
  ],
})
