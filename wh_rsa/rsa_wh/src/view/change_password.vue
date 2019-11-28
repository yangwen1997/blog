<template>
      <div id="change_pwd">
        <!--顶部区域-->
        <div class="pwd">
            <h1>修改分机密码</h1>
        </div>

        <div class="from_pwd">
          <el-form ref="form" :model="form" label-width="100px">
            <el-form-item label="分机号">
              <el-input v-model="form.fphone"></el-input>
            </el-form-item>
            <el-form-item label="显示号码">
              <el-input v-model="form.showphone"></el-input>
            </el-form-item>
            <el-form-item label="分机密码">
              <el-input v-model="form.pwd"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">确认修改</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
</template>

<script>
    export default {
        name: "change_password",
         data() {
      return {
        form: {
          fphone: '',
          showphone :'',
          pwd:"",
        }
      }
    },
    methods: {
      onSubmit() {
        // 判断密码逻辑代码
        console.log(this.form.fphone);
        console.log(this.form.showphone);
        console.log(this.form.pwd);
        if (this.form.fphone.length > 6){
          alert("账号过长")
        }

      }
    }
    }
</script>

<style scoped>
  .pwd{
    margin-left: 20%;
    margin-top: 3%;
    /*padding: 10px;*/
    text-align: left;
    font-size:25px;
  }
  h1{
    color: #999999;
  }
  .from_pwd{
    /*display: inline-flex;*/
    width: 20%;
    margin-left: 20%;
    margin-top: 5%;

  }
  #change_pwd{
    padding: 20px;
  }
</style>
