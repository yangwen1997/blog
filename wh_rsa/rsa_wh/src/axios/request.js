import axios from 'axios';  //引入axios
import qs from "qs";      //引入qs依赖
// import app from '../main'    可以根据项目需求进行引入



const service = axios.create({
  headers:{
    "Access-Control-Allow-Origin":"*",
    "accept": "*/*",
    'Content-Type': "application/json;charset=utf-8"
  },
  timeout:5000,
  baseURL: "/api",
  withCredentials : true
});

//对发出的请求进行拦截配置

service.interceptors.request.use(
  config=>{
    // app.$vux.loading.show({
    //   text:'数据加载中.....'
    // });

    config.method === 'post' ?
      config.data= qs.stringify({...config.data}) :
      config.params = {...config.params};

    return config;
  },error => {
    // app.$vux.toast.show({
    //   type:"warn",
    //   text:error
    // });
    Promise.reject(error)
  }
);

export default service;
