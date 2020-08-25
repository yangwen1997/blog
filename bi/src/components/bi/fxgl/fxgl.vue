<template>
    <div id="fxgl" style="height: 100%">
      <div id="header">
        <div><span style="font-family:'Arial Normal', 'Arial';font-weight:400;">分享管理</span></div>
        <div><span style="font-family:'Arial Negreta', 'Arial Normal', 'Arial';font-weight:700;font-size:18px;">分享列表</span></div>
      </div>
      <div id="Footer">
        <div class="input_header">
          <div class="di"><label>项目名称：</label><el-input placeholder="模糊查询" v-model="input" clearable style="width: 200px"></el-input> </div>
          <div  class="di"><label>应用名称：</label><el-input placeholder="模糊查询" v-model="input" clearable style="width: 200px"></el-input></div>
          <div class="di">
            <el-button type="primary" style="width: 100px">查询</el-button>
            <el-button style="width: 100px">重置</el-button>
          </div>
        </div>

        <div class="show_table">
            <el-table :data="tableData" border style="width: 100%">
            <el-table-column fixed prop="id" label="编号"> </el-table-column>
            <el-table-column fixed prop="project" label="项目名称"> </el-table-column>
            <el-table-column fixed prop="viz" label="应用名称"> </el-table-column>

            <el-table-column fixed label="分享链接地址">
             <template slot-scope="scope">
               <el-popover trigger="hover" placement="top">
                  <p>url: {{ scope.row.url }}</p>

                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.url }}</el-tag>
                  </div>
                </el-popover>
            </template>
            </el-table-column>

            <el-table-column fixed prop="shortUrl" label="短链接地址"> </el-table-column>
            <el-table-column fixed prop="out" :formatter="formatBoolean" label="是否存在外链"> </el-table-column>
            <el-table-column fixed prop="shortUrlValid" label="链接有效期"> </el-table-column>
            <el-table-column fixed prop="state" label="链接总状态"> </el-table-column>
            <el-table-column fixed prop="validStatus" label="链接状态" :formatter="formatBoolean"> </el-table-column>
            <el-table-column fixed prop="shareType" label="链接类型"> </el-table-column>
            <el-table-column fixed prop="createBy" label="创建者"> </el-table-column>
            <el-table-column fixed prop="createTime" label="创建时间"> </el-table-column>
            <el-table-column fixed="right"label="操作" width="130">
              <template slot-scope="scope">
                <el-popover placement="top"  trigger="click">
                   <el-button slot="reference" type="text" size="mini" @click="show_login">查看日志</el-button>
                </el-popover>

                <el-popover placement="top" trigger="hover" @show="handleStatus(scope)">
                    <div style="text-align: left;">
                      <el-button class="dialog" type="primary" size="mini" @click="change('重置',scope.$index)" v-show="qy">重置</el-button>
                      <el-button class="dialog" type="primary" size="mini" @click="change('启用',scope.$index)" v-show="jy">启用</el-button>
                      <el-button class="dialog" type="primary" size="mini" @click="change('禁用',scope.$index)" v-show="cz">禁用</el-button>
                    </div>
                  <el-button slot="reference" type="text" size="mini">链接操作</el-button>
                </el-popover>

              </template>
            </el-table-column>
          </el-table>
          <br>
          <br>
            <div class="page">
               <el-pagination background layout="prev, pager, next" :total="1000" @current-change="handleCurrentChange"></el-pagination>
           </div>
        </div>
      </div>
    </div>
</template>

<script>
    import '../../../axios/axios-0.18.0.min'
    export default {
        name: "fxgl",
        data(){
          return {
            input:"",
            th_list:["编号","项目名称","应用名称","分享链接地址","短链接地址","是否存在外链","链接有效期","链接状态",
            "链接类型","创建者","创建时间","操作"],
            tableData:[],
            date_dict:{
              "启用":"是否要禁用该分享链接？",
              "禁用":"是否要重新启用该分享链接？",
              "失效":"是否要重置该分享链接有效期？",
              "alert":"链接已经过期，无法生成短链接，若仍要生成请先重置链接有效期",
            },
            SHOW_MSG:"",
            index:null,
            foucs_msg:null,
            centerDialogVisible:false,
            qy:true,
            jy:true,
            cz:true,
          }
        },
      methods:{
        handleCurrentChange(val){
            //分页按钮
            console.log(val);
            var start = (val-1) *10;
            var end = start + 10;
            let url = "http://nmnsgbqb.com:809/share/info?endIndex=" + end.toString() + "&startIndex=" + start.toString();
            this.axios.get(url).then((response) => {
            for(var i=0; i<response.data.data.length;i++){
              //获取当前时间
              var currentTime = new Date();
              var customTime= response.data.data[i]["shortUrlValid"];

              if(customTime){
                 //替换字符，变成标准格式进行比较
                 customTime= customTime.replace("-","/");
                 customTime= new Date(Date.parse(customTime));

                 //如果存在根据状态进行判断是否已经启用
                 if(currentTime<customTime){
                   if(response.data.data[i]["validStatus"].toString() == 'true'){
                      response.data.data[i]["state"] = '启用'
                    }else {
                      response.data.data[i]["state"] = '禁用'
                    }
                 }else{
                   response.data.data[i]["state"] = '失效'
                    }
              }else{
                 response.data.data[i]["state"] = '启用'
                }
            }
            this.tableData = response.data.data

})

          },
        handleStatus(index){
          // hover事件监听
          debugger;
          condole.log(index)

        },


        formatBoolean:function (row, column, cellValue){
          return cellValue.toString()
        },
        show_login(){
            //跳转到日志详情页
            this.$router.push({path:'/fxglrz'})
        },
        change(tag){
          // 点击链接操作后弹出的是提示框还是确认框
          debugger;
          this.index

          document.querySelector('.el-icon-close').click();
          if(tag == '启用'){
            this.$confirm('是否要重新启用该分享链接？','提示',{
               confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(()=>{
                this.td_dict[this.index][6] = '启用';
                document.querySelectorAll('.tdindex')[this.index].querySelectorAll('td')[6].innerHTML = '启用';
                this.qy = false; this.jy=true;this.cz=true;
              this.$message({
                type: 'success',
                message: '重启成功!'
              })
            }).catch(()=>{
               this.$message({
                type: 'success',
                message: '取消成功!'
              })
            })
          }else if(tag == '禁用'){
            this.$confirm('是否要禁用该分享链接','提升',{
               confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(()=>{
               this.td_dict[this.index][6] = '禁用';
                document.querySelectorAll('.tdindex')[this.index].querySelectorAll('td')[6].innerHTML = '禁用';
                this.qy = true; this.jy=false;this.cz=true;
                 this.$message({
                type: 'success',
                message: '禁用成功!'
              })
            }).catch(()=>{this.$message({
                type: 'success',
                message: '取消成功!'
              })})
          }else if(tag=='重置'){
            this.$confirm('链接已经过期，无法生成短链接，若仍要生成请先重置链接有效期,是否要重置该分享链接有效期？','提示',{
               confirmButtonText: '确定',
               cancelButtonText: '取消',
               type: 'warning'
            }).then(()=>{
                this.td_dict[this.index][6] = '启用';
                document.querySelectorAll('.tdindex')[this.index].querySelectorAll('td')[6].innerHTML = '启用';
                this.qy = false; this.jy=true;this.cz=true;
                this.$message({
                  type: 'success',
                  message: '重置成功!'
                })
            }
              ).catch(()=>{this.$message({
                type: 'success',
                message: '取消成功!'
              })})
            }




        },

        buton(index){


          let tag = document.querySelectorAll('.tdindex')[index].querySelectorAll('td')[6].innerHTML;
          this.index = index;
          if(tag=='启用'){
              this.qy = false; this.jy=true;this.cz=true;
          }else if(tag=='禁用'){
            this.qy = true; this.jy=false;this.cz=true;
          }else if(tag=='重置'){
            this.qy = true; this.jy=false;this.cz=false;
          }
            this.centerDialogVisible = true

        }
      },
      mounted() {
          this.axios.get('http://nmnsgbqb.com:809/share/info?endIndex=10&startIndex=0').then((response) => {
          for(var i=0; i<response.data.data.length;i++){
            //获取当前时间
            var currentTime = new Date();
            var customTime= response.data.data[i]["shortUrlValid"];

            if(customTime){
               //替换字符，变成标准格式进行比较
               customTime= customTime.replace("-","/");
               customTime= new Date(Date.parse(customTime));

               //如果存在根据状态进行判断是否已经启用
               if(currentTime<customTime){
                 if(response.data.data[i]["validStatus"].toString() == 'true'){
                    response.data.data[i]["state"] = '启用'
                  }else {
                    response.data.data[i]["state"] = '禁用'
                  }
               }else{
                 response.data.data[i]["state"] = '失效'
                  }
            }else{
               response.data.data[i]["state"] = '启用'
              }
          }
          this.tableData = response.data.data

})
      }
    }
</script>

<style lang="scss" scoped>
#fxgl{
  overflow-x: hidden;
}
#header{
    width: 99%;
    height: 150px;
    margin: 5px 5px 30px 10px;
    border: 1px solid black;
    div{
      padding: 20px;
    }
}
#Footer{
  width: 99%;
  margin: 5px 5px 30px 10px;
  height: 70%;
  /*border: 1px solid black;*/
  .input_header{
    width: 100%;
    height: 100px;
    div:nth-child(1){
      transform: translate(100px,20px);
    }
    .di:nth-child(2){
      transform: translate(600px,-20px);
    }
    .di:nth-child(3){
      transform: translate(1100px,-60px);
    }
  }
}
table{
  width: 100%;
  /*background-color: #4A4A4A;*/
  margin-left: 5px;
  /*border: 1px solid black;*/
  border-collapse:collapse;
  table-layout: fixed;
  position: relative;
  .foucs_div{
    border-radius: 4px;
    padding: 10px;
    z-index: 999;
    font-size: 12px;
    line-height: 1.2;
    min-width: 10px;
    word-wrap: break-word;
    background: #FFFFFF;
    color: #606266;
    position: absolute;
    width: 50%;
    margin-left: 300px;
  }

  .foc_div{
    width:100px;
    margin-left: 1300px;
    background-color: red;

  }
}
td,th{
  border: 1px solid black;
  text-align: center;
  }
td{
  white-space:pre-line;
  overflow: hidden;
  text-overflow: clip;
  height: 50px;
  z-index: 1;
  font-size: 14px;
  color: #606266;
  span{
    white-space: nowrap;
    font-size: 14px;

  }
}
.page{
  width: 90%;
  height: 50px;
  /*background-color: red;*/
  transform: translate(80px, -20px);

  .el-pagination{
    transform: translate(35%,10px);
  };
}
.show_div{

  margin: auto;
  width: 350px;
  height: 130px;
  border: 1px solid gray;
  /*float: bottom;*/
  z-index: 999;
  div{
    margin-left: 150px;
  }
}
</style>
