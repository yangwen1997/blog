<template>
  <div class="personal_data">
      <!--标题切换区-->
    <div class="titTop">

      <el-menu :default-active="this.$router.path" class="el-menu-demo" mode="vertical" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :router="true">
        <el-menu-item index="/personal_data/per_info" style="margin-left: 1px">个人资料</el-menu-item>
        <el-menu-item index="/personal_data/my_engine">我的分机</el-menu-item>
      </el-menu>

    </div>

    <!--内容区-->
    <div class="titConent">
      <keep-alive>
        <!--keep-live 标签表示第一次创建组件之后下次回来时从缓存中加载，不会重新创建-->
              <router-view>
              </router-view>
      </keep-alive>

    </div>
  </div>
</template>

<script>
  export default {
    name : "personal_data"
  }
</script>

<style lang="scss" scoped>
  .titTop{
    width: 100%;
    /*margin-left: 10%;*/
    .el-menu{
        margin: 0;
       padding-right: 10%;
      .el-menu-item{
        margin-top: 2%;
        margin-left: 15%;
        display: inline-flex;
        flex-wrap: nowrap;
        height: 100px;
        /*padding-left: 10%;*/
      }
    }
  }
</style>
