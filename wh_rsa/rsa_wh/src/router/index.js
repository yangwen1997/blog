import Vue from 'vue'
import Router from 'vue-router'
import  Home from '@/view/homes/home'
import  longin from '@/view/homes/longin'
import  company_data from '@/view/homes/company_data'
import change_password from '@/view/change_password'
import logInloging from '@/view/logInloging'
import personal_data from '@/view/personal_data'
import per_info from '@/view/per_info'
import my_engine from '@/view/my_engine'


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
      {
        path:'/',
        name:'longin',
        component:longin,
      },
      {
      path: '/home',
      name: 'home',
      component: Home,
      redirect : company_data,
      children : [{
         path: '/company_data',
         name: 'company_data',
         component: company_data,
      },

      ]
    },
      {
      //  修改密码
      path: '/change_password',
      name: 'change_password',
      component: change_password
    },
      {
      //  登录日志
      path: '/logInloging',
      name: 'logInloging',
      component: logInloging
    },
      {
      //  个人资料
      path: '/personal_data',
      name: 'personal_data',
      component: personal_data,
      redirect:per_info,
      children:[
        {
          path: '/personal_data/per_info',
          name: 'per_info',
          component: per_info,

        },
        {
          path: '/personal_data/my_engine',
          name: 'my_engine',
          component: my_engine
        }
      ],
    }
  ]
})
