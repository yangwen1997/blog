# author yangwenlong

外呼云通讯 页面

  build   : vue 的一些基本配置
  config  : vue 的一些基本配置
  node_modules  : 项目中的安装包
  src     : 项目的入口文件
    assets : 静态资源文件夹，在这个文件里面的静态资源可以打包到模块中
    router : 路由
    components  : 模板
    App.vue : 项目基类组件模板
    main.js : 项目入口js文件
    view  : 组件文件夹
      home  : 主页
        company : 公司数据页面
      logInloging       ： 登录日志模板组件
      personal_data     ： 个人资料模板组件
      change_password   ： 修改密码模板组件
      
  static  : 静态资源文件，在这个里面存的静态资源在打包时会打包到dist文件夹下，默认不使用
  test    : 单元测试
  package.json : 项目中已经安装过的包，以及webpack中生产环境和开发环境的配置



v-if 和v-else在使用data中的变量时不可以加this. 直接使用变量名即可
