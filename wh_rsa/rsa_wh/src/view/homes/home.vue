<template>
  <div id="home">

    <!--顶部-->
    <div class="top">
      <span class="HomeIco"><img :src="home_ico" alt=""></span>

      <div class="hint_base">
        <span>尊敬的：test1</span><br><br>
        <span>欢迎回来，祝你乘风破浪，宏图大展，裕业有孚。</span>
      </div>

      <div class="seat_base">
        <span>坐席数量</span><br><br>
        <span>6 / 20</span>
      </div>

      <div class="end_time">
        <span>服务到期时间</span><br><br>
        <span>2022-10-14</span>
      </div>
    </div>

    <!--一级标题-->
    <div class="one_title">
      <!--标题-->
      <span class="title">今日数据

      <span class="two_title">
          <span> <a href="" >公司数据</a></span>
        <span><a href="">部门数据</a></span>

      </span>
      </span>

    </div>

    <div>
      <!--组件占位符-->
      <router-view>

      </router-view>
    </div>

  </div>
</template>


<script>
  export default {
    name:"home",
     data(){
      return{
        home_ico: require("../../assets/img/home_ico.png"),
      }
    }
  }
</script>

<style lang="scss" scoped>
  #home{
    /*background-color: #999999;*/
  }
  .top{

    height: 130px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    color: #0F0F0F;
    background-color: #7CCD7C;
    /*图标*/
    .HomeIco{
      img{
        margin-top: 30px;
        margin-left:30px;
      }
    }
    .hint_base{
      margin-top: 30px;
      text-align: left;
      transform:translateX(50px);/**右移元素**/
      -ms-transform:translateX(50px);
      -webkit-transform:translateX(50px);
      /*margin-top: 20px;*/
      /*height: 90px;*/

    }
    .seat_base{
       /*text-align: left;*/
       transform:translateX(200px);/**右移元素**/
       -ms-transform:translateX(200px);
       -webkit-transform:translateX(200px);
       margin-top: 20px;
       width:200px;
       border: solid #dddddd;
      height: 90px;
       /*margin-top: 5px;*/
      span{
        text-align: center;
      }
    }
    .end_time{
        width: 200px;
        text-align: center;
        transform:translateX(400px);/**右移元素**/
        -ms-transform:translateX(400px);
        -webkit-transform:translateX(400px);
        margin-top: 18px;
        border: solid #dddddd;
         height: 93px;
    }
  }
  .one_title{
    height: 100px;
    .title{
      /*text-align: left;*/
      display: flex;
      flex-wrap: nowrap;
      margin-top: 35px;
      margin-left: 20px;
      font-size: 40px;
      color:purple;
      /*text-shadow: 1px 1px 1px blueviolet;*/
      font-style: italic;
      font-weight: initial;
    .two_title{
      margin-left: 150px;
      margin-top: 5px;
      width: auto;
      /*font-size: 200px;*/
      span{
        font-size: 30px;
        padding: 5px;

      }
    }
    }
  }
</style>
