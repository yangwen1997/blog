<template>
    <div>

        <div class="wrap">
          <ul>
            <li v-for="item in items" :key="item.id"><a href="javascript:void(0)" @click="table_info()">{{item.ch_table}}</a></li>
          </ul>
        </div>

    </div>
</template>

<script>
    import {post}from '../../axios/api'
    export default {
        name: "QccSpiderDem",
        data(){
          return {
             items : [],
             question: this.$route.query.table_Name,
             dict:{
               "爬虫数据表信息":["企业信息","spider_info"],
               "大数据表字段信息":["商标信息","max_data"],
               "裁判文书表信息":["裁判文书","cpws"],
             },
             datdName:"",
             local:"",
             url:'dbmanage/dbpage',
            formData:new FormData(),
          }
        },
        watch:{
         $route: {
               handler(val, oldVal){
                  //监听动态改变
                  console.log(this.question);
                  this.question = this.$route.query.table_Name;
                  this.get_info()
              },
              deep: true // 深度观察监听
            }
        },
        methods :{
          async get_info(){
               //放弃 if else if 的写法，使用高级节省效率的写法获取需要查询的信息字段及本地存储的storage
               this.datdName = this.dict[this.question][0];
               this.local = this.dict[this.question][1];

               //向后台发送数据请求结果
               this.formData.append("datdName", this.datdName);
               let resp = await post(this.url,  this.formData);
               console.log(resp);
               this.items = resp.data.msg;

               //如果本地缓存中没有存入缓存
              if (localStorage.getItem( this.local)){

              }else {
                  localStorage.setItem( this.local,resp.data.msg)
              }

          },
          table_info(){
            let table_name_info = this.dict[this.question][0];
            let local = this.dict[this.question][1];
            this.$router.push({path:'/TableInfo',query:{"table_name_info":table_name_info,"local":local}})
          }
        },
      async mounted(){
               this.datdName = this.dict[this.question][0];
               this.local = this.dict[this.question][1];

                this.formData.append("datdName", this.datdName);
                let resp = await post(this.url,  this.formData);
                console.log(resp);
                this.items = resp.data.msg;
                if (localStorage.getItem( this.local)){

                }else {
                    localStorage.setItem( this.local,resp.data.msg)
                }
        },
    }
</script>

<style scoped lang="scss">
.wrap{
    width: 1200px;
    margin: 0 auto 10px;
    background-color: #fff;
    overflow-x: hidden;
    transform: translateY(10px);
    -ms-transform: translateY(10px);
    -moz-transform: translateY(10px);
    -webkit-transform: translateY(10px);
    -o-transform: translateY(10px);

  ul{
    width: 96%;
    margin: 17px 5px 5px 28px;
    border-left: 1px solid #dadada;
    border-top: 1px solid #dadada;
    overflow: hidden;

    li{
      width: 190px;
      height: 91px;
      float: left;
      border-right: 1px solid #dadada;
      border-bottom: 1px solid #dadada;
      list-style: none
    }
  }
}
</style>
