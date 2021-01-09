<template>
  <div class="wrap">
    <div>
      <van-cell title="设置密码" is-link />
      <van-cell title="注销账号" is-link />
      <van-button type="danger" @click="out">退出登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    out() {
      sessionStorage.removeItem("token");
      this.$router.push('/index')
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;

  & > div {
    width: 100%;
    background: #fff;
    .van-button {
      width: 90%;
      margin-left: 5%;
      margin-top: 1.6rem;
      margin-bottom: 0.8rem;
    }
  }
}
</style>
