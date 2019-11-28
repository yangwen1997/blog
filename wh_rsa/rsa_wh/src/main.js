// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import '../static/css/global.css'
import router from './router'

Vue.config.productionTip = false;

//引入 element-ui 并导入样式
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
//将elementui挂载到vue中
Vue.use(ElementUI);

//配置全局导航守卫,如果没有登录在切换路由时需要先登录
// router.beforeEach((to,form,next)=>{
//    console.log(to);
//    console.log(form);
//    if(to.path == '/'){
//   //如果是这两个的话就让它正常的显示
//     next();
//     }else{
//       const session = localStorage.getItem("user_session_id");
//       console.log(session);
//       if(session){
//         next()
//
//       }else{
//         next('/')
//       }
//    }
// });

new Vue({
  el: '#app',
  router,
  render : h=>h(App),

});
