<template>
  <div class="header">
    <div>企业管理</div>
    <div class="user">用户名</div>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {};
  },

  computed: {},

  created() {},

  mounted() {},

  methods: {},
};
</script>
<style lang='scss' scoped>
.header {
  height: 60px;
  line-height: 60px;
  padding: 0 30px;
  background-color: #ccc;
  display: flex;
  > div {
    flex: 1;
    -webkit-justify-content: space-between;
    justify-content: space-between;
  }
  .user {
    text-align: right;
  }
}
</style>