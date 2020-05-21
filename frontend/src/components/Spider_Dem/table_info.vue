<template>
    <div>
      <h2>{{this.$route.query.data.ch_table}}</h2>
      <div class="wrap">

          <el-table :data="tableData" border style="width: 100%; font-size: 18px; font-family: monospace">
            <el-table-column prop="dataType" label="存储方式" width="180"></el-table-column>
            <el-table-column prop="field" label="字段名" width="180"></el-table-column>
            <el-table-column prop="fieldType" label="字段类型"></el-table-column>
            <el-table-column prop="length" label="长度"></el-table-column>
            <el-table-column prop="notes" label="注释"></el-table-column>
          </el-table>

      </div>
    </div>
</template>

<script>
    export default {
        name: "table_info",
        data(){
          return{
            tableData:this.$route.query.data.dates.info,
          }
        }
    }
</script>

<style scoped>
  .wrap{
    width: 1000px;
    margin: auto;

  }

</style>
