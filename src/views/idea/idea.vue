<template>
  <div class="wrap">
    <!-- 导航栏 -->
    <van-nav-bar title="意见反馈" left-arrow @click-left="onClickLeft" />
    <!-- 文本域 -->
    <div class="txt">
      <textarea v-model="textL" cols="30" rows="10" maxlength="500"></textarea>
    </div>
    
      <p class="length">{{textL.length}}/500</p>
    
      
  <van-button type="danger" @click="add">提交</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textL:""
    };
  },
  created() {},
  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    async add(){
      let {data:res} = await this.$axios.feedback(this.textL)

      // console.log(res)
      if(res.code !=200) return this.$toast.fail(res.msg);


      this.$toast.success(res.msg);

      setTimeout(()=>{
        this.$router.go(-1)
      },1000)

    }
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.wrap{
  width: 100%;
  .txt{
    width: 100%;
    display: flex;
    justify-content: center;
    textarea{
      border: 1px solid #dddddd;
      border-radius: .2rem;
      resize: none;
    }
  }
  .length{
    text-align: right;
    margin-right: .6rem;
    margin-top: .2rem;
    color: #d8d5d5;
  }
  .van-button{
    width: 90%;
    margin-left: 5%;
    margin-top: 2rem;
  }

}

</style>
