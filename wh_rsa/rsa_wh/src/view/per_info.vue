<template>
  <div>
    <div class="form_content">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="登录账号" prop="name">
        <el-input v-model="ruleForm.account"></el-input>
      </el-form-item>
        <el-form-item label="姓名" prop="name">
        <el-input v-model="ruleForm.account"></el-input>
      </el-form-item>
        <el-form-item label="部门" prop="name">
        <el-input v-model="ruleForm.account"></el-input>
      </el-form-item>
        <el-form-item label="联系电话" prop="name">
        <el-input v-model="ruleForm.account"></el-input>
      </el-form-item>
        <el-form-item label="邮箱" prop="name">
        <el-input v-model="ruleForm.account"></el-input>
      </el-form-item>
        <el-form-item label="性别" prop="name">
        <el-input v-model="ruleForm.account"></el-input>
      </el-form-item>
        <el-form-item>
        <el-button type="primary" @click="submitForm()">提交</el-button>
        <el-button @click="resetForm()">重置</el-button>
      </el-form-item>
      </el-form>
    </div>
  </div>
</template>


<script>
  export default {
    name :"per_info",
    data(){
      return {
        ruleForm:{
          account : "",
        },
        //rules 时输入框限制的规则
        rules:{},
      }
    },
    methods :{
      // 提交
      submitForm(){
        console.log(this.ruleForm)
      },
      resetForm(){
        // 重置
        console.log(this.ruleForm)
      }
    },
  }
</script>

<style lang="scss" scoped>
  .form_content{
    width: 50%;
    margin-top: 8%;
    margin-left: 27.5%;
    .el-form-item{
      width : 500px;
    }
  }
</style>
