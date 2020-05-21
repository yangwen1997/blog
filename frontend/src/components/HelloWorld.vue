<template>
  <el-container>
    <!--左侧导航菜单-->
    <el-aside style="width: 225px;">
      <el-menu :default-active="activeIndex" text-color="grey" @select="handleSelect"
               style="width: 230px;">

        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-orange"></i>
            <span slot="title">实时数据查询演示</span>
          </template>

          <el-menu-item-group>
            <el-submenu index="1-2">
            <span slot="title">企查查程序</span>
            <el-menu-item index="1-2-1">企查查基本信息演示</el-menu-item>
          </el-submenu >
            <el-submenu index="1-3">
            <span slot="title">水滴信用程序</span>
            <el-menu-item index="1-3-1" >水滴信用基本信息演示</el-menu-item>
          </el-submenu>
            <el-submenu index="1-4">
            <span slot="title">百度信用程序</span>
            <el-menu-item index="1-4-1">百度信用基本信息演示</el-menu-item>
          </el-submenu>
            <el-submenu index="1-5">
            <span slot="title">天眼查</span>
            <el-menu-item index="1-5-1">天眼查基本信息演示</el-menu-item>
          </el-submenu>
          </el-menu-item-group>


        </el-submenu>

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">数据表管理信息</span>
          </template>

          <el-menu-item-group>
            <el-menu-item index="2-1">爬虫数据表信息</el-menu-item>
            <el-menu-item index="2-2">大数据表字段信息</el-menu-item>
            <el-menu-item index="2-3">裁判文书表信息</el-menu-item>
          </el-menu-item-group>


        </el-submenu>

        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">商标信息管理</span>
          </template>

          <el-menu-item-group>
            <el-submenu index="1-2">
            <span slot="title">企查查程序</span>
            <el-menu-item index="1-2-1">企查查基本信息演示</el-menu-item>
          </el-submenu >
            <el-submenu index="1-3">
            <span slot="title">水滴信用程序</span>
            <el-menu-item index="1-3-1" >水滴信用基本信息演示</el-menu-item>
          </el-submenu>
            <el-submenu index="1-4">
            <span slot="title">百度信用程序</span>
            <el-menu-item index="1-4-1">百度信用基本信息演示</el-menu-item>
          </el-submenu>
            <el-submenu index="1-5">
            <span slot="title">天眼查</span>
            <el-menu-item index="1-5-1">天眼查基本信息演示</el-menu-item>
          </el-submenu>
          </el-menu-item-group>


        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">专利信息管理</span>
          </template>

          <el-menu-item-group>
            <el-submenu index="1-2">
            <span slot="title">企查查程序</span>
            <el-menu-item index="1-2-1">企查查基本信息演示</el-menu-item>
          </el-submenu >
            <el-submenu index="1-3">
            <span slot="title">水滴信用程序</span>
            <el-menu-item index="1-3-1" >水滴信用基本信息演示</el-menu-item>
          </el-submenu>
            <el-submenu index="1-4">
            <span slot="title">百度信用程序</span>
            <el-menu-item index="1-4-1">百度信用基本信息演示</el-menu-item>
          </el-submenu>
            <el-submenu index="1-5">
            <span slot="title">天眼查</span>
            <el-menu-item index="1-5-1">天眼查基本信息演示</el-menu-item>
          </el-submenu>
          </el-menu-item-group>


        </el-submenu>

      </el-menu>

    </el-aside>

    <!---->
    <el-container>
      <!--顶部不变-->
      <el-header style="height: 90px">
        <a href="#" class="logo"> 爬虫监控平台程序</a>
       </el-header>

      <!--组件视图-->
      <el-main ><router-view></router-view></el-main>

    </el-container>

</el-container>
</template>

<script>
  export default {
    name:"HelloWorld",
     data() {
      return {
        isCollapse: true,
        activeIndex:"1",
        compantName:""
      };
    },
     methods: {
       handleSelect(val,path){
        if (val == '1-2-1'){
          this.compantName = "企查查";
          let img = require('../assets/spider/qcc_.png');
          this.$router.push({path:'/Spider',query:{"compantName":this.compantName,"img":img}})
        }else if(val == '1-3-1'){
          this.compantName = "水滴信用";
           let img = require('../assets/spider/sdxy.png');
          this.$router.push({path:'/Spider',query:{
            "compantName":this.compantName,
              "url":["/crawler/sdxy_basic","/crawler/sdxy_data_search"],
              "img":img
          }
          })
        }else if(val == '1-4-1'){
          this.compantName = "百度信用";
          let img = require('../assets/spider/bdxy.jpg');

          this.$router.push({path:'/Spider',query:{"compantName":this.compantName,
              "url":["/crawler/bdxy_basic"],
              "img":img
          }})
        }else if(val == '1-5-1'){
          this.compantName = "天眼查";
          let img = require('../assets/spider/tyc.jpg');
          this.$router.push({path:'/Spider',query:{"compantName":this.compantName,"img":img}})
        }else if(val == '2-1'){
          let table_Name = '爬虫数据表信息'
           this.$router.push({path:'/dataMange',query:{"table_Name":table_Name}})
        }else if(val == '2-2'){
          let table_Name = '大数据表字段信息'
           this.$router.push({path:'/dataMange',query:{"table_Name":table_Name}})
        }else if(val == '2-3'){
          let table_Name = '裁判文书表信息'
           this.$router.push({path:'/dataMange',query:{"table_Name":table_Name}})
        }


        console.log(val)

        // debugger;
      },
    }
  }
</script>

<style lang="scss" scoped>

  .el-aside{
    padding: 50px 0 0 0;
    overflow: hidden;
    background-color: #222d32;
    width: 250px;
    margin-top: 90px;
    text-align: left;
    display: block;
    position: relative;
    .el-menu{
      min-height: 800px;
      background-color:#222d32;
    }
  }
  .el-header{
    background-color: #6B7F8C;
    text-align: center;
    margin: 0;
    padding: 0;
    .logo{
      width: 230px;
      font-family: cursive;
      overflow: hidden;
      font-size: 35px;
      line-height: 75px;
      color: #fff
    }
    a{
        cursor: pointer;
      }
    margin-left: -300px;

  }
  .el-main{
    right: 0;
    padding: 0;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;

  }

</style>
