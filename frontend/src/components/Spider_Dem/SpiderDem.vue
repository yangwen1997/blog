<template>
    <div id="sdxy">
      <div class="headerTop" :style="{backgroundImage:'url('+ this.$route.query.img +')'}">
             <h2>{{this.$route.query.compantName}}爬虫程序数据演示</h2>

            <el-select v-model="value" placeholder="请选择" class="top_select">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>

             <el-input v-model="input" placeholder="请输入需要查询的公司名称"></el-input>
             <el-button type="success" class="search" @click="a()">搜索</el-button>
        </div>
      <br>
      <br>

        <!--左侧结果栏-->
        <div></div>
        <!--右侧样例-->
      <br>
      <br>
      <hr style="width: 99%; font-size: 15px; color:red; font-weight: bold"/>
      <div style="margin-left: 30px">
        <h3 style="font-size: 25px;text-align: left;transform: translateY(30px)">查询结果：</h3>
        <h3 style="font-size: 25px;margin-left: 10%;">样例结果展示：</h3>
      </div>
      <!--<div>-->
        <div class="casedatas">
            <pre v-for="(item,index) in casedata">
            {{index}} : {{item}}
          </pre>
        </div>
       <div class="result" v-if="resultTAG">
          <pre v-for="(item,index) in results">
           {{index}} : {{item}}
          </pre>
      </div>
      <!--</div>-->
      <div class="loading" v-if="loads">
        <div></div>
        正在查询，请稍后。。。
      </div>

    </div>
</template>

<script>

  import {post}from '../../axios/api'
    export default {
        name: "SpiderDem",
      data(){
          return{
              input: '',
           options: [
             {
          value: '全部信息查询',
          label: '全部信息查询'
        }, {
          value: '基本信息查询',
          label: '基本信息查询'
        }, {
          value: '股东信息查询',
          label: '股东信息查询'
        }
          ],
            value: '',
            casedata :{
              "公司名":"阿里巴巴（中国）网络技术有限公司",
              "注册资本":"512233.000000万美元",
              "实缴资本":"59690.0万美元",
              "统一社会信用代码":"91330100716105852F"
              },
              resultTAG :true,
              results:null,
              loads:false,
              urls: this.$route.query.url
          }
      },
      methods:{
          async a(){
            const url = this.urls;
            let formData = new FormData();

            this.userid = this.input;
            formData.append("company_name",this.userid);
            debugger;
            formData.append("ApiType",this.value);

             this.loads = true;
            let resp = await post(url,formData);
            this.loads = false;

            console.log(resp.data);
            if (resp.data.data){
              this.results = resp.data.data
            }else{
              this.results = resp.data.err_msg
            }
          },
        }
    }
</script>

<style scoped lang="scss">
  #sdxy{
    margin-top: -28px;
    padding: 0;
    width: 100%;
    line-height: 100%;
    background-color: #ECF0F5;


  }
  .headerTop{
    height: 25em;
    margin: 0;
    padding: 0;
    width: 99.9%;
    margin-left: 1px;
    h2{
      transform: translate(-15px,70px);
      color:#FFFFFF;
      font-size: 35px;
    }
    .el-input{
      width: 500px;
      transform: translate(0,120px);
    }
    .search{

      transform: translate(0,120px)

    }
    .top_select{
      margin-left: -70px;
      transform: translate(0,120px);
    }
  }
  .icon-close{
      margin-right: 30px;
      margin-top: 10px;
      float: right;
      z-index: 300;
     i{
       font-size: 15px;
        color:#FFFFFF; ;
     }
    }
  .casedatas{
    /*float: left;*/
    margin-left: 46%;
    color: #BC402C;
    font-size: 16px;
    position: absolute;
    width: 42%;
  }
  .result{
    float: left;
    margin-left: 10px;
    overflow:auto;
    height: 400px;
    color: #6364A7;
    font-size: 16px;
    line-height: 30px;
    width: 50%;
    padding: 10px;
  }
   pre{
      width:100%;
      text-align: justify;
      word-break: break-all;
      word-wrap: break-word;
      white-space: pre-wrap;
  };
  .loading{
    width: 400px;
    height: 300px;
    margin: 0 auto;
    opacity: 0.99;
    /*background-color: lawngreen;*/
    padding-top: 1px; //防止上边框和盒子中的选择图形上边框重叠引起的问题
    transform: translateX(-100px);
    div{
      border-radius: 50%;
      width:50px;
      height: 50px;
      border-top:10px solid red;
      border-left:10px solid slategrey;
      border-right: 10px solid chocolate;
      border-bottom: 10px solid navy;
      margin-left: 150px;
      margin-top: 90px;

       animation:turn 1s linear infinite;
            @keyframes turn{
      0%{-webkit-transform:rotate(0deg);}
      25%{-webkit-transform:rotate(90deg);}
      50%{-webkit-transform:rotate(180deg);}
      75%{-webkit-transform:rotate(270deg);}
      100%{-webkit-transform:rotate(360deg);}
    }
    };
  }
</style>
