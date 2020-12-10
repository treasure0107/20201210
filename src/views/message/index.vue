<!--
 * @Author: xiangjingjing
 * @Description: In User Settings Edit
 * @FilePath: \project\src\views\message\index.vue
-->

<template>
  <div>
    <h1>message</h1>
    <div>
      <h1>账号登录组件</h1>
      <accountLogin :ruleForm="ruleForm" :rules="rules" @sumbit="sumbit" @handleError="handleError" />
    </div>
    <div>
      <h1>手机验证码登录组件</h1>
      <phoneLogin :ruleForm="phoneForm" @send="send" @sumbit="sumbit" @handleError="handleError" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        password: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur",
          },
          {
            min: 2,
            max: 6,
            required: true,
            message: "用户名在2-6个字符之间",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur",
          },
          {
            required: true,
            min: 6,
            max: 16,
            message: "密码在2-6个字符之间",
            trigger: "blur",
          },
        ],
      },
      phoneForm: {
        phone: "",
        code: "",
      },
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    sumbit() {
      this.$message.success("登录成功");
    },
    handleError() {
      this.$message.error("表单信息填写有错误");
    },
    send() {
      this.$message.info("发送验证码成功");
    },
  },
};
</script>
<style lang='scss' scoped>
</style>