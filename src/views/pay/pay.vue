<template>
  <div>
    <van-nav-bar
      title="我的关注"
      left-arrow
      @click-left="onClickLeft"
    />

  <van-empty
  class="custom-image"
  image="https://img-blog.csdnimg.cn/20210102215702486.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTg5MTE0Ng==,size_16,color_FFFFFF,t_70"
  description="暂无关注"
/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list:[]
    };
  },
  // beforeRouteEnter (to, from, next) {
  //   // ...
  // },
  created() {},
  mounted() {
    this.payTeacher()
  },
  methods: {
    // 返回上一页
    onClickLeft(){
      this.$router.go(-1)
    },

    // 获取数据
    async payTeacher(){
      let {data:res} = await this.$axios.payTeacher()
      console.log(res)
      this.list = res.data
    }
  },
  computed: {},
};
</script>

<style scoped>
</style>
