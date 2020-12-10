<template>
  <div class="main clearfix">
    <div class="menu-con">
      <!-- <Menu /> -->
    </div>
    <div class="content">
      <h1>index</h1>
      <el-button type="primary" @click="goHome">home</el-button>
      <div class="mt10">
        <el-button type="primary" @click="goMessage">message</el-button>
      </div>
    </div>


  </div>
</template>

<script>
// import Menu from "@/components/menu.vue";
export default {
  data() {
    return {};
  },

  components: {
    // Menu,
  },

  computed: {},

  mounted() {},

  methods: {
    goHome() {
      this.$router.push({ name: "home", params: { userId: 123 } });
    },
    goMessage() {
      this.$router.push({ path: "/message" });
    },
  },
};
</script>
<style lang='scss' scoped>
.main {
  .mt10 {
    margin-top: 10px;
  }
  .menu-con,
  .content {
    float: left;
  }
  .menu-con {
    height: 100%;
  }
}
</style>