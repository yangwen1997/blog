<template>
  <div class="company_data">
    <div class="top">
      <div class="one" v-for="(item,index) in this.date" :key="index">
        <span class="span_one">{{item.name}}</span><br><br>
        <span class="span_two">{{item.value}}</span>
      </div>
    </div>
    <div class="small">
      <canvas id="myChart"></canvas>
    </div>
  </div>
</template>


<script>

  import Chart from 'chart.js'

  export default {
    name : "company_data",
    data (){
     return {
       date:[
         {name:"呼出数", value:"599"},
         {name:"接通数", value:"322"},
         {name:"接通率", value:"59%"},
         {name:"通话总时长", value:"6597分钟"},
         {name:"历史总呼出数/总时长", value:"5999 / 4567979分钟"}
       ]
     }
        },
    methods:{
      fillData(){
        //获取画布
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: ['公司数据'],
                // backgroundColor: 'red',
                borderColor: 'yellow',
                data: [0, 10, 5, 2, 20, 30, 45]
            },
              {
                label: ['部门数据'],
                // backgroundColor: 'red',
                borderColor: 'red',
                data: [10, 20, 30, 5, 40, 25, 15]
            },
            ],

    },

    // Configuration options go here
    options: {}
});
      }
    },
    mounted : function () {
    this.fillData()

  }}

</script>

<style lang="scss" scoped>
  .company_data{
    /*background-color: lightgrey;*/
  }
  .top{
    display: flex;
    flex-wrap: nowrap;
    padding-left: 200px;
    /*padding: 5px;*/

    div{
      width: 210px;
      height: 100px;
      border: 0.2px solid #999999;
      .span_one{
        display: flex;
        margin-left: 5px;
        color: #223041;
      }
      .span_two{
        display: inline-flex;
        transform:translateY(-50%);/**上移元素**/
        -ms-transform:translateY(-50%);
        -webkit-transform:translateY(-50%);
         height: 50px;
        color: #999999;
      }
    }


  }
  .small{
    width: 50%;
    height: 50%;
    margin-top: 50px;
    margin-left: 300px;
    #myChart{
      width:200px ;
      height: 200px;
    }
  }
</style>
