import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import QccSpiderDem from "../components/Spider_Dem/dataMange";
import SpiderDem from "../components/Spider_Dem/SpiderDem";
import TableInfo from "../components/Spider_Dem/table_info"

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: '',
      component:HelloWorld,
      children: [
        {
          path: "/Spider",
          name: 'SpiderDem',
          component:SpiderDem
        },
        {
         path: "/dataMange",
          name: 'dataMange',
          component:QccSpiderDem
        },
        {
          path: "/TableInfo",
          name: 'TableInfo',
          component:TableInfo
        }
    ]
       },

  ]
})
