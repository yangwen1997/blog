<template>
    <div id="fxglrz">
      <div id="header">
        <div class="hea">分享管理 / 分享日志</div>
        <div class="hea">
          <span style="font-family:'Arial Negreta', 'Arial Normal', 'Arial';font-weight:700;font-size:18px;">分享链接地址:</span>
          <span style="font-family:'Arial Normal', 'Arial';font-weight:400;">https://xxx.xxx.xxx</span>
        </div>
        <div class="hea">
          <span style="font-family:'Arial Negreta', 'Arial Normal', 'Arial';font-weight:700;font-size:18px;">分享链接短链接地址：</span>
          <span style="font-family:'Arial Normal', 'Arial';font-weight:400;">https://xxx.xxx.xxx</span>
        </div>
      </div>
      <div id="Footer">
        <div class="ax_default"><p><span style="text-rendering: optimizeLegibility;">日志记录模块保留，具体字段后续根据实际情况更新扩展</span></p></div>
        <div style="margin-top: 50px; align-content: center;">
        <!--          表格-->
          <el-table :data="tableData" border  style="width: 100%">
            <el-table-column prop="date"  label="IP地址" ></el-table-column>
            <el-table-column prop="name" label="用户ID"></el-table-column>
            <el-table-column prop="name" label="姓名工号"></el-table-column>
            <el-table-column prop="name" label="浏览器名称"></el-table-column>
            <el-table-column prop="name" label="浏览器版本"></el-table-column>
            <el-table-column prop="name" label="操作系统名称"></el-table-column>
            <el-table-column prop="name" label="操作系统版本"></el-table-column>
            <el-table-column prop="name" label="设备型号"></el-table-column>
            <el-table-column prop="name" label="设备类型"></el-table-column>
            <el-table-column prop="name" label="开始时间"></el-table-column>
          </el-table>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "fxglrz",
        data(){
          return {
            tableData:[{
          date: '2016-05-02',
          name: '王小虎',
          // address: '上海市普陀区金沙江路 1518 弄'
        }]
          }
        }
    }
</script>

<style lang="scss" scoped>
  #fxglrz{
    height: 100%;
  }
  #header{
    width: 90%;
    height: 150px;
    margin: 20px 5px 30px 100px;
    border: 1px solid black;

  }
  #Footer{
    width: 90%;
    height: 60%;
    margin: 20px 5px 30px 100px;
    padding: 5px;
  }
  .hea{
    height: 20%;
    margin: 10px 0 0 10px;
  }
  .ax_default{
      width: 400px;
      height: 30px;
      background-color: red;
      -webkit-transform: translate(100%, 10px);
      transform: translate(100%, 10px);
      -webkit-font-kerning: normal;
      font-size: 14px;
      font-style: normal;
      font-weight: 200;
      text-align: center;
      line-height: 2;
  }


</style>
