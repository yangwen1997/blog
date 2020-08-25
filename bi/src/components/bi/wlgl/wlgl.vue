<template>
    <div id="wlgl">
        <div id="header">
        <div><span style="font-family:'Arial Normal', 'Arial';font-weight:400;">外链管理</span></div>
        <div><span style="font-family:'Arial Negreta', 'Arial Normal', 'Arial';font-weight:700;font-size:18px;">外链列表</span></div>
      </div>
      <div id="Footer">

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
            <el-table-column fixed prop="shortUrlValid" label="链接类型"> </el-table-column>
            <el-table-column fixed prop="shareType" label="创建时间"> </el-table-column>
            <el-table-column fixed prop="out" label="链接有效期" :formatter="formatBoolean"> </el-table-column>
            <el-table-column fixed prop="createBy" label="链接状态"> </el-table-column>
            <el-table-column fixed prop="createTime" label="页面名称"> </el-table-column>
            <el-table-column fixed prop="validStatus" label="页面所属系统"> </el-table-column>
            <el-table-column fixed prop="validStatus" label="页面所属模块"> </el-table-column>
            <el-table-column fixed="right"label="操作" width="130">
              <template slot-scope="scope">
                <el-popover placement="top"  trigger="click">
                    <div style="text-align: left;">
                      <el-button size="mini" type="text" @click="visible = false">取消</el-button>
                      <el-button type="primary" size="mini" @click="visible = false">确定</el-button>
                    </div>
                   <el-button slot="reference" type="text" size="mini" >删除</el-button>
                </el-popover>

                <el-popover placement="top" trigger="hover">
                    <div style="text-align: left;">
                      <el-button class="dialog" type="primary" size="mini" @click="change('重置',scope.$index)" v-show="qy">重置</el-button>
                      <el-button class="dialog" type="primary" size="mini" @click="change('启用',scope.$index)" v-show="jy">启用</el-button>
                      <el-button class="dialog" type="primary" size="mini" @click="change('禁用',scope.$index)" v-show="cz">禁用</el-button>
                    </div>
                  <el-button slot="reference" type="text" size="mini" >链接操作</el-button>
                </el-popover>

              </template>
            </el-table-column>
          </el-table>
        </div>


      </div>
      <br>
      <br>
       <div class="page">
         <el-pagination background layout="prev, pager, next" :total="1000" @current-change="handleCurrentChange"></el-pagination>
       </div>

    </div>
</template>

<script>
    export default {
        name: "wlgl",
        data(){
          return{
            tableData:[
                {
                "id": 9,
                "project": "推广_平台业绩",
                "viz": "电话量分析-部门-折线图",
                "url": "http://172.16.74.196:8080/share.html#share/dashboard",
                "shortUrl": null,
                "shortUrlValid": null,
                "shareType": "禁用",
                "out": false,
                "createBy": "潘智",
                "createTime": "2020-05-19 00:05:13",
                "validStatus": true
                },
                {
            "id": 9,
            "project": "推广_平台业绩",
            "viz": "电话量分析-部门-折线图",
            "url": "http://172.16.74.196:8080/share.html#share/dashboard?shareInfo=DA1C3E7DAF7EC46FDC39861F361C78B7517FC6CEF4F1ED425FFF75A2CB7527D3ABD4F0725AF12462EE9485E57D5234018E0408F809FA2D83913B32DDF9D5546FF8E455747E4CCD3F924E1140E9CDBC3F14102182C8418C24EAC233BA1397B799994CB87445B6708EEF4456B8120F7F4C3E61136AC05A74E8CBF291648DE019346AC56887DEF3383D9DCAC73082F7E2F3C4EBD7B6793FC56F7B20F28242736BE5E2FF4F26C5F92B4EE8F049B1D6C23B562F0A83D64491B5843D2F07EA86D48F1AE63FC1A22E9D1AD36385CA946243AECD9B76D52624A2C619FF15A33ACFD986A62AEC97CBDE11D9776ED6F0C8A3686924E45FADF6B59342C822F0DB6E6443671C8BFA2CE2F652269B847DC4AF9C8CCF90E698AA9CB1B8874E95425AA76A46BFD9BD862EE87E58F583574F2CEC25EDD379&type=dashboard",
            "shortUrl": null,
            "shortUrlValid": null,
            "shareType": "启用",
            "out": false,
            "createBy": "潘智",
            "createTime": "2020-05-19 00:05:13",
            "validStatus": true
            },
                {
            "id": 9,
            "project": "推广_平台业绩",
            "viz": "电话量分析-部门-折线图",
            "url": "http://172.16.74.196:8080/share.html#share/dashboard?shareInfo=DA1C3E7DAF7EC46FDC39861F361C78B7517FC6CEF4F1ED425FFF75A2CB7527D3ABD4F0725AF12462EE9485E57D5234018E0408F809FA2D83913B32DDF9D5546FF8E455747E4CCD3F924E1140E9CDBC3F14102182C8418C24EAC233BA1397B799994CB87445B6708EEF4456B8120F7F4C3E61136AC05A74E8CBF291648DE019346AC56887DEF3383D9DCAC73082F7E2F3C4EBD7B6793FC56F7B20F28242736BE5E2FF4F26C5F92B4EE8F049B1D6C23B562F0A83D64491B5843D2F07EA86D48F1AE63FC1A22E9D1AD36385CA946243AECD9B76D52624A2C619FF15A33ACFD986A62AEC97CBDE11D9776ED6F0C8A3686924E45FADF6B59342C822F0DB6E6443671C8BFA2CE2F652269B847DC4AF9C8CCF90E698AA9CB1B8874E95425AA76A46BFD9BD862EE87E58F583574F2CEC25EDD379&type=dashboard",
            "shortUrl": null,
            "shortUrlValid": null,
            "shareType": "失效",
            "out": false,
            "createBy": "潘智",
            "createTime": "2020-05-19 00:05:13",
            "validStatus": true
            },
            ],
            qy:true,
            jy:true,
            cz:true,
            centerDialogVisible:false,
          }
        },
      methods:{
        formatBoolean:function (row, column, cellValue){
          return cellValue.toString()
        },
           change(tag,index){
          // 点击链接操作后弹出的是提示框还是确认框
             console.log(index);
          debugger;
          this.index =index;

          // document.querySelector('.el-icon-close').click();
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
        handleCurrentChange(val){
            //分页按钮
            console.log(val)
          },
      }
    }
</script>

<style lang="scss" scoped>
#wlgl{
  height: 100%;
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
  border: 1px solid black;
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
 .page{
    width: 90%;
    height: 50px;
    /*background-color: red;*/
    transform: translate(80px, -20px);

    .el-pagination{
      transform: translate(35%,10px);
    };
  }
</style>
