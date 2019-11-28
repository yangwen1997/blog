<template>
  <div id="app">

    <el-container>

      <!--顶部-->
      <el-header>
          <span>
            <a href="javascript:void(0)" @click.passive="is_login()">用户</a>
           </span>
        <span>
            <a href="javascript:void(0)" @click.passive="clear_login()">注销</a>
        </span>

      </el-header>

      <!--盒子-->
      <el-container>

        <!--左侧边-->
        <el-aside width="260px" style="background-color: rgb(238, 241, 246)">
            <div>
            <h1>AI呼叫系统</h1>
          </div>

          <!--在element-ui中:default-opened参数可以默认打开导航中的第几个，加上才可以进行分组点击-->
          <!--:default-active激活路由事件当分组中的index值为路由时，点击可以实现自动切换-->
          <!--:router="true" 开启路由自动跳转-->
          <el-menu :default-active="this.$router.path" :router="true" mode="vertical"text-color="#CD6600">
            <el-aside width="260px">
              <el-menu-item index="/home"><i class="el-icon-menu"></i>企业中心</el-menu-item>

              <el-submenu index="2">
                <template slot="title"><i class="el-icon-phone"></i>呼叫中心</template>
                <el-menu-item-group>
                  <el-menu-item index="2-1">拨打电话</el-menu-item>
                  <el-menu-item index="2-2">分机管理</el-menu-item>
                  <el-menu-item index="2-3">通话记录</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title"><i class="el-icon-message"></i>费用中心</template>
                <el-menu-item-group>
                  <el-menu-item index="3-1">账户资料</el-menu-item>
                  <el-menu-item index="3-2">消费记录</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="4">
                <template slot="title"><i class="el-icon-s-tools"></i>系统设置</template>
                <el-menu-item-group>
                  <el-menu-item index="4-1">员工管理</el-menu-item>
                  <el-menu-item index="4-2">部门管理</el-menu-item>
                  <el-menu-item index="4-3">客户规则</el-menu-item>
                  <el-menu-item index="/personal_data">个人资料</el-menu-item>
                  <el-menu-item index="/change_password">修改密码</el-menu-item>
                  <el-menu-item index="/logInloging">登录日志</el-menu-item>
                </el-menu-item-group>
              </el-submenu>

            </el-aside>
          </el-menu>
        </el-aside>

        <!--登录注册悬浮窗-->
        <div id="block" :flag="this.flag">

          <!--关闭按钮-->
          <div class="stop">
            <a href="#" @click="show_stop()"><i class="el-icon-close"></i></a>
           </div>

          <!--登录和注销-->
          <div class="show_top">
            <div>
              <a href="#" @click.prevent="log_reg=true">登录</a>
            </div>
            <div>
              <a href="#" @click.prevent="log_reg=false">注册</a>
            </div>
          </div>

          <!--悬浮窗中的内容-->
          <div id="log_reg">
            <!--登录-->
            <div v-if="log_reg">
              <div class="show">
                <el-form ref="log_form" :model="log_form" :rules="log_rules" class="demo-ruleForm">
                  <el-form-item label="账号" prop="user_name">
                    <el-input v-model="log_form.user_name"></el-input>
                  </el-form-item>
                  <el-form-item label="密码" prop="pwd">
                    <el-input type="password" v-model="log_form.pwd"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="login(log_form)">登录</el-button>
                  </el-form-item>
                </el-form>

              </div>
            </div>

            <!--注册-->
            <div v-else>
              <!--注册-->
              <div class="show">
                <el-form :model="reg_form" ref="reg_form" :rules="reg_rules" class="demo-ruleForm">
                <el-form-item label="账号" prop="user_name">
                  <el-input v-model="reg_form.user_name"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pwd">
                    <el-input type="password" v-model="reg_form.pwd"></el-input>
                </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="register(reg_form)">注册</el-button>
                  </el-form-item>
              </el-form>
              </div>

            </div>

          </div>

        </div>

        <!--内容区-->
        <el-main>
          <router-view></router-view>
        </el-main>

      </el-container>

    </el-container>

  </div>
</template>

<script>

  import {getPersonInfo,post} from './axios/api'
  export default {
  name: 'App',
  data(){
    return {
      flag: false,
      log_reg : true,
      log_form:{
          user_name: ' ',
          pwd: ' ',
        },
      log_rules : {
       user_name: [{
          required: true, message: '请输入账号', trigger: 'blur'
        },
       { min: 3, max: 18, message: '长度在 6 到 12 个字符', trigger: 'blur' }
       ],
        pwd :[
           {required: true, message:"请输入密码",trigger:'blue'},
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ]
      },

      reg_form:{
        user_name : "bbbb",
        pwd:"",
      },
      reg_rules : {
        user_name : [{
          min: 4, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur'
        },
          {required: true, message:"请输入账号",trigger:'blue'}
        ],
        pwd :[
          {required: true, message:"请输入密码",trigger:'blue'},
          { min: 6, max: 12, message: '长度在6到12 个字符', trigger: 'blur' }
        ]
      },

    }
  },
  methods:{
    is_login: ()=>{
      //判断用户是否登录
      var user_session_id = localStorage.getItem("user_session_id");
      if (user_session_id){
        console.log(user_session_id)
      }else{
         var div_css = document.getElementById("block");
         div_css.style.setProperty('display',"block")
      }
    },
    async login (log_form){
      // 登录
      console.log("成功进入登录函数");
        var user = log_form.user_name;
        var pwd = log_form.pwd;

          // 服务端的路由
          const urls = "/login";

          //需要携带的参数
          const data  = {
            "user": user,
            "pwd":pwd,
          };
          let res = await post(urls, data);
          localStorage.setItem("user_session_id",res.data.session);
          this.show_stop()

    },
    async register(reg_form){
      // 注册
      const user = reg_form.user_name;
      const pwd = reg_form.pwd;
      const url = "/register";
      if(user === ' ' || pwd === ''){
        alert("请输入正确的账号和密码")
      }else{
          const data={
          "user":user,
          "pwd":pwd,
        };
        let res = await post(url,data);
        localStorage.setItem("user_session_id",res.data.session);
        this.show_stop()
      }


    },
    show_stop : ()=>{
       var div_css = document.getElementById("block");
           div_css.style.setProperty('display',"none")
    },
    clear_login : ()=>{
      // 注销操作
      let clearTag = localStorage.getItem('user_session_id');
      if(clearTag){
        localStorage.clear()
      }else{
        console.log("当前没有登录")
      }
    },
  },
  mounted() {

    console.log(this.form);
    //数据已经创建,但是只存在内存中,并未写入磁盘
    var div_css = document.getElementById("block");
    if(this.flag){
      div_css.style.setProperty('display',"block")
    }else{
      div_css.style.setProperty('display',"none")
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  background-color:#FFFFFF;

  /*顶部区域*/
  .el-header{

    background-color: #171717;
    /*color: red;*/
    /* flex中不换行*/
    flex-wrap: nowrap;
    /*把布局变为flex并且设置行内也可以使用*/
    display: inline-flex;
    /*改变x轴的方向从右向左，默认是从左向右*/
    flex-direction: row-reverse;

    span{
      padding: 10px;
      width: 100px;
      font-size: 16px;
      /*对router-link标签进行样式的设置*/
      a{
        /*text-decoration: none;*/
         color: #A8A8A8;
      }
    }
      margin: 0;
      padding: 0;

  }
  /*左侧*/
  .el-aside{
    margin: 0;
    padding: 0;
    height:875px ;
    background-color: #292929;
  }
  /*主要内容区*/
  .el-main{
    margin: 0;
    padding: 0;
    background:#FFFFFF;
    height: 100%;

  }
  #block{
    height:650px;
    width:600px;
    background:#EEEEE0;
    /*float: left;*/
    position:absolute;
    margin-left: 35%;
    margin-top: 70px;
    opacity: 100;
    z-index: 1;
    .show_top{
      margin-top: 50px;
      margin-left: 100px;
      display: flex;
      flex-wrap: nowrap;
      div{
        width: 180px;
        font-size: 30px;
        font-style: italic;
        font-weight: bold;
        a{color: #7D26CD;}
      }
    }
    /*display: block;*/

  }
}
.show{
  width: auto;
  height: 300px;
  margin-left: 50px;
  margin-top: 100px;
  .el-form{
    /*background-color: #AEEEEE;*/
    .el-form-item{
      width: 80%;
      margin-left: 30px;
    }
    .el-button{
              margin-top: 60px;
              margin-right: 87px;
              /*position: absolute;*/
              ;
    }
  }
}
.stop{
        margin-left: 93%;
        margin-top: 15px;
        position: absolute;

      }
</style>

