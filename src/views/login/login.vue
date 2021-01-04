<template>
  <div class="wrap">
    <div class="top">
      <div>
        <img src="../../assets/下载.png" alt="" />
      </div>
      <div>
        <input v-model="mobile" type="text" placeholder="请输入手机号" />
      </div>
      <div>
        <input v-model="pass" placeholder="请输入密码" type="password" />
      </div>

      <div>
        <span>找回密码</span>
        <span @click="goZc">注册验证/登录</span>
      </div>
    </div>
    <div class="foot">
      <button @click="login">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobile: "18210591945  ",
      pass: "",
    };
  },
  created() {},
  mounted() {},
  methods: {
    // 跳转到注册页
    goZc() {
      this.$router.push("/zc");
    },
    // 登录
    async login() {
      let { data: res } = await this.$axios.passLogin(this.mobile, this.pass);
      console.log(res)
      
      // 存储token
      sessionStorage.setItem('token', res.data.remember_token);

      //跳转页面
      this.$router.push("/my");
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  padding: 0 0.48rem;
  box-sizing: border-box;
  .top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div:nth-of-type(1) {
      width: 80%;
      img {
        width: 100%;
        margin: 1.3rem auto;
      }
    }
    div:nth-of-type(2) {
      width: 100%;
      height: 1rem;
      border-bottom: 0.01rem solid #dddddd;
      display: flex;
      align-items: center;
      input {
        height: 0.53rem;
        width: 100%;
        height: 100%;
        border: 0;
        font-size: 0.26rem;
      }
    }
    div:nth-of-type(3) {
      width: 100%;
      height: 1rem;
      border-bottom: 0.01rem solid #dddddd;
      display: flex;
      input {
        height: 0.53rem;
        width: 100%;
        height: 100%;
        border: 0;
        font-size: 0.26rem;
      }
    }
    div:nth-of-type(4) {
      width: 100%;
      line-height: 1rem;
      display: flex;
      justify-content: space-between;
      font-size: 0.22rem;
      color: #b7b7b7;
    }
  }
  .foot {
    width: 100%;
    button {
      width: 100%;
      line-height: 1rem;
      font-size: 0.3rem;
      border: 0;
      color: #ffffff;
      border-radius: 0.4rem;
      background: linear-gradient(to right, rgb(216, 125, 6), #ee6306);
    }
  }
}
</style>
