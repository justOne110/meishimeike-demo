<template>
  <div class="wrap">
    <div class="top">
      <div>
        <img src="../../assets/下载.png" alt="" />
      </div>
      <div>
        <input
          v-model="mobile"
          type="number"
          placeholder="请输入手机号"
          maxlength="11"
        />
        <button v-if="timeFlag == true" @click="getCode">获取验证码</button>
        <button
          disabled
          v-if="timeFlag == false"
          @click="getCode"
          style="background: #f0f0f0; color: #dddddd"
        >
          获取验证码({{ time }})
        </button>
      </div>
      <div>
        <input v-model="code" type="text" placeholder="请输入验证码" />
      </div>

      <div>
        <span>*未注册的手机号将自动注册</span>
        <span @click="goLogin">使用密码登录</span>
      </div>
    </div>
    <div class="foot">
      <button @click="login">登录</button>
    </div>
    <!-- {{ time }} -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobile: "18210591945",
      time: 60,
      timeFlag: true,
      code: "",
    };
  },
  computed: {},
  created() {},
  mounted() {
    // 调用获取验证码
  },
  methods: {
    // 跳转到登录页
    goLogin() {
      this.$router.push("/login");
    },
    // 获取验证码
    async getCode() {
      console.log(123456);
      // 手机号正则
      let reg_tel = /^(13[0-9]|14[01456879]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-3,5-9])\d{8}$/;
      if (!reg_tel.test(this.mobile) || this.mobile == "") {
        // console.log("手机号格式不正确");
        this.$toast.fail("手机号格式不正确");
        return false;
      }

      // 调用获取验证码接口
      let { data: res } = await this.$axios.getcode(this.mobile);
      console.log(res);
      // 获取失败后
      if (res.code !== 200) return this.$toast.fail(res.msg);
      // 获取成功后

      this.timeFlag = false;
      let timr = setInterval(() => {
        this.time--;
        if (this.time <= 0) {
          clearInterval(timr);
          this.time = 60;
          this.timeFlag = true;
        }
      }, 1000);
    },
    // 登录
    async login() {
      let { data: res } = await this.$axios.login(this.mobile, this.code);
      console.log(res);

      // 存储token
      sessionStorage.setItem('token', res.data.remember_token);

      //跳转页面
      this.$router.push("/my");
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  background: #fff;
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
      input:nth-of-type(1) {
        height: 0.53rem;
        width: 80%;
        height: 100%;
        border: 0;
        font-size: 0.26rem;
      }
      button {
        font-size: 0.22rem;
        flex: 1;
        background: #ffffff;
        border: 0;
        color: #eb6100;
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
