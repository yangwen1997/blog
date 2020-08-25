<template>
    <div id="basePage" style="height: 100%">
        <el-container style="height: 100%">
          <el-aside width="200px" style="height: 100%">
            <!-- 左侧菜单栏目-->
            <el-menu :default-active="activeIndex" text-color="#4A4A4A" @select="handleSelect">

              <el-submenu index="1">

                <template slot="title">BI后台系统</template>
                      <el-menu-item index="1-2">分享管理</el-menu-item>
                      <el-menu-item index="1-3">指标管理</el-menu-item>
                      <el-menu-item index="1-4">外链管理</el-menu-item>
                      <el-menu-item index="1-5">设置</el-menu-item>
              </el-submenu>

            </el-menu>
          </el-aside>
          <el-main style="height: 100%"><router-view/></el-main>
      </el-container>
    </div>
</template>

<script>
  export default {
     name:"HelloWorld",
    data(){
       return{
          activeIndex:"1",
       }
    },
    methods:{
      handleSelect(val,path){
        console.log(val);
         if (val == '1-2'){
          this.$router.push({path:'/fxgl'})

         }else if(val == '1-3'){
           this.$router.push({path:'/wlgl'})
         }

      }
    }
  }
</script>


<style lang="scss" scoped>
  .el-aside{
    background-color: #F2F2F2;
    border-right: 1px solid black;
    border-top: 1px solid black;
    ul{
      transform: translateY(50px);
      background-color: #F2F2F2;
      li{
        color: #4A4A4A;
        background-color: #F2F2F2;
      }
    }
    .el-menu{
      background-color: #F2F2F2;
    }

  }

</style>
