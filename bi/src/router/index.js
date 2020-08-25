import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import fxgl from '../components/bi/fxgl/fxgl'
import fxglrz from '../components/bi/fxgl/fxglrz'
import wlgl from '../components/bi/wlgl/wlgl'

Vue.use(Router);

export default new Router({
  // mode:'hi',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
        {
          path: "/fxglrz",
          name: 'fxglrz',
          component:fxglrz
        },
        {
          path: "/fxgl",
          name: 'fxgl',
          component:fxgl
        },
        {
          path: "/wlgl",
          name: 'wlgl',
          component:wlgl
        },
      ]
    }
  ]
})
