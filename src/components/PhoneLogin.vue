<!--
 * @Author: xiangjingjing
 * @Description: In User Settings Edit
 * @FilePath: \project\src\components\login.vue     
-->
<template>
  <div class="login">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item prop="phone">
        <el-input type="password" v-model="ruleForm.phone" placeholder="请输入用户名">
          <i slot="prefix" class="el-icon-phone"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-row :gutter="16">
          <el-col :span="16">
            <el-input type="password" v-model="ruleForm.code" placeholder="请输入验证码" show-password>
              <i slot="prefix" class="el-icon-tickets"></i>
            </el-input>
          </el-col>
          <el-col :span="8">
            <el-button type="primary" @click="handleSendCode" :disabled="disabled">{{codeText}}</el-button>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-button class="btn" type="primary" @click="handleLogin">登 录</el-button>
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
    countDown: {
      type: Number,
      default: 60,
    },
  },

  data() {
    let checkPhone = (rule, value, callback) => {
      if (value) {
        let reg = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/;
        if (reg.test(value)) {
          callback();
        } else {
          callback(new Error("请输入正确的手机号码"));
        }
      } else {
        callback(new Error("手机号码不能为空"));
      }
    };
    return {
      rules: {
        phone: [{ validator: checkPhone, trigger: "change" }],
        code: [
          {
            required: true,
            message: "验证码不能为空",
            trigger: "blur",
          },
        ],
      },
      disabled: false,
      codeText: "发送短信验证码",
      time: 0,
    };
  },

  computed: {},

  created() {},

  mounted() {
    this.time = this.countDown;
  },

  methods: {
    handleSendCode() {
      this.$refs["ruleForm"].validateField("phone", (errormessage) => {
        console.log(errormessage);
        if (errormessage) {
          this.$message.error(errormessage);
        } else {
          // 倒计时功能
          this.disabled = true;
          let timer = setInterval(() => {
            this.time--;
            this.codeText = `${this.time}s后重新发送`;
            // this.disabled = true;
            if (this.time === 0) {
              this.codeText = "发送短信验证码";
              this.disabled = false;
              this.time = this.countDown;
              clearInterval(timer);
            }
          }, 1000);
          this.$emit("send");
        }
      });
    },
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
