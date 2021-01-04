<template>
  <div class="wrap">
    <van-nav-bar
      title="修改个人信息"
      right-text="保存"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />

    <!-- <van-cell  value="内容" /> -->

    <van-cell>
      <!-- 使用 title 插槽来自定义标题 -->
      <template #title>
        <input type="text" v-model="name" />
      </template>
    </van-cell>

    <!-- {{name}} -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
    };
  },
  created() {},
  mounted() {
    this.name = this.$route.query.name;
  },
  methods: {
    // 返回上一页
    onClickLeft() {
      this.$router.go(-1);
    },
    // 保存
    onClickRight() {
      console.log(1234567890);
      this.setInfo()
    },
    async setInfo(){
      let {data:res} = await this.$axios.setInfos({nickname:this.name})

      console.log(res)
      if(res.code == 200) this.$router.go(-1)
    }
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.wrap {
  min-height: 17rem;
  background: #f0f2f5;
  .van-cell {
    margin-top: 0.4rem;
    padding: 0.2rem;
    input {
      border: 0;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
