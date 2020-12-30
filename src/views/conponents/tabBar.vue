<template>
  <div>
    <van-tabbar v-model="active" router>
      <van-tabbar-item icon="home-o" to="/index">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/class">课程</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/log">约课记录</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/practice">练习</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
        active:0
    };
  },
  created() {},
  mounted() {},
  methods: {},
  computed: {},
};
</script>

<style scoped>
</style>

