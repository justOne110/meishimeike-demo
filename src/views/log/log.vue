<template>
  <div class="wrap">
    <!-- 标题栏 -->
    <van-nav-bar title="约课记录" />

    <!-- 标签页 -->
    <van-tabs v-model="activeName">
      <van-tab title="待上课" name="1">
          <van-empty
          v-if="this.flag == 1"
            class="custom-image"
            image="https://img-blog.csdnimg.cn/20210102161524530.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTg5MTE0Ng==,size_16,color_FFFFFF,t_70"
            description="还没有待上课记录啊"
          />
        
      </van-tab>
      <van-tab title="已上课" name="2">
                <van-empty
          v-if="this.flag == 1"
            class="custom-image"
            image="https://img-blog.csdnimg.cn/20210102161524530.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTg5MTE0Ng==,size_16,color_FFFFFF,t_70"
            description="还没有上课记录啊"
          />
      </van-tab>
      <van-tab title="已取消" name="3">
                <van-empty
          v-if="this.flag == 1"
            class="custom-image"
            image="https://img-blog.csdnimg.cn/20210102161524530.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTg5MTE0Ng==,size_16,color_FFFFFF,t_70"
            description="还没有取消上课记录啊"
          />
      </van-tab>

        <button class="btn" v-if="flag == 1">立即约课</button>

    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: 1,
      flag: 1,

    };
  },
  created() {},
  mounted() {
    this.makeClass();
  },
  methods: {
    async makeClass() {
      let { data: res } = await this.$axios.makeClass(this.activeName);
      console.log(res);
      if (res.data.list == "") {
        this.flag = 1;
      }
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>

.wrap{
    width: 100%;
    .btn{
        transform: translateX(140%);
        width: 2rem;
        height: .6rem;
        background: rgb(209, 116, 9);
        color: #ffffff;
        font-size: .3rem;
        border: none;

    }
}
</style>
