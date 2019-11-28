<template>
  <div id="logInloging">
    <!--<span>-->
    <h1>登录日志</h1>
    <!--</span>-->
    <!--<div></div>-->
    <div class="content_input">


        <span>
          <label>用户姓名</label>
          <el-input
            placeholder="请输入姓名"
            prefix-icon="el-icon-search"
            v-model="input_name">
        </el-input>
        </span>

      <span>
          <label>登录时间</label>
          <el-input
            placeholder="请输入登录时间"
            prefix-icon="el-icon-search"
            v-model="longTime">
        </el-input>
        </span>

      <span>
          <label>登录区域</label>
          <el-input
            placeholder="请输入"
            prefix-icon="el-icon-search"
            v-model="fun">
        </el-input>
        </span>
      <span>
        <el-button type="primary" icon="el-icon-search" @click="search()">搜索</el-button>
      </span>

    </div>

    <div class="content_data">
      <template>
        <el-table :data="tableData"
          border
          style="width: 100%">
          <el-table-column prop="userName" label="用户名">
          </el-table-column>

          <el-table-column prop="Name" label="姓名">
          </el-table-column>

           <el-table-column prop="logTime" label="登录时间">
          </el-table-column>

           <el-table-column prop="logIp" label="登录IP">
          </el-table-column>

          <el-table-column prop="logAira" label="登录区域信息">
          </el-table-column>

        </el-table>
      </template>

    </div>
  </div>
</template>

<script>
  export default {
    name:"logInloging",
    data(){
      return {
        tableData:[
          {"userName":"王欢","Name":"小王","logTime":"2017","logIp":"127.0.0.1","logAira":"上海"},
          {"userName":"王欢","Name":"小王","logTime":"2017","logIp":"127.0.0.1","logAira":"上海"},
          {"userName":"王欢","Name":"小王","logTime":"2017","logIp":"127.0.0.1","logAira":"上海"},
          {"userName":"王欢","Name":"小王","logTime":"2017","logIp":"127.0.0.1","logAira":"上海"},
          {"userName":"王欢","Name":"小王","logTime":"2017","logIp":"127.0.0.1","logAira":"上海"},
           {"userName":"小李","Name":"小王","logTime":"2017","logIp":"127.0.0.1","logAira":"上海"},
        ],
        input_name:"",
        longTime:"",
        fun:"",
      }

    },
    methods : {
      search() {
        //  搜索功能

        var search_lt = [];
        if (this.input_name && this.longTime && this.fun) {
          search_lt.push(this.input_name);
          search_lt.push(this.longTime);
          search_lt.push(this.fun);
        }else if(this.input_name && this.longTime){
          search_lt.push(this.input_name);
          search_lt.push(this.longTime);
        }


      }
    }
  }
</script>

<style lang="scss" scoped>
  html,body{
    background-color: beige;
  }
#logInloging{
  height: 100%;
  text-align: left;

}
  h1{
    font-size: 25px;
    color: #999999;
    margin-left: 3%;
    margin-top: 3%;

  }
  .content_input{
    margin-left: 10%;
    display: inline-flex;
    flex-wrap: nowrap;
    /*text-align: left;*/
    label{
      /*text-align: center;*/
      font-size: 15px;
      width: 100px;
      margin-top: 3%;
    }
    span{
      display: inline-flex;
      flex-wrap: nowrap;
      padding: 2%;
    }
  }
  .content_data{
    margin-left: 10%;
    width: 80%;
    /*text-align: center;*/
  }


</style>
