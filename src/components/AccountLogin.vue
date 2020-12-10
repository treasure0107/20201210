<!--
 * @Author: your name
 * @Description: In User Settings Edit
 * @FilePath: \project\src\components\login.vue
-->
<template>
  <div class="login">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item prop="name">
        <el-input type="password" v-model="ruleForm.name" placeholder="请输入用户名">
          <i slot="prefix" class="el-icon-user"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="ruleForm.password" placeholder="请输入密码" show-password>
          <i slot="prefix" class="el-icon-lock"></i>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="btn" type="primary" @click="handleLogin ">登 录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "accountLogin",
  components: {},
  props: {
    ruleForm: {
      type: Object,
      required: true,
    },
    rules: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {};
  },

  computed: {},

  created() {},

  mounted() {},

  methods: {
    handleLogin() {
      this.$refs["ruleForm"].validate((valid) => {
        console.log("valid", valid);
        if (valid) {
          this.$emit("sumbit");
      
        } else {
          this.$emit("handleError");
        }
      });
    },
  },
};
</script>
<style lang='scss' scoped>
.login {
  width: 600px;
  padding: 60px;
  border: 1px solid #ccc;
  background-color: #fff;
  .btn {
    width: 100%;
  }
}
</style>
