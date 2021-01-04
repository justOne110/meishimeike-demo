<template>
  <div class="wrap">
    <header>
      <div class="tap">
        <div class="tapTop">
          <div>
            <img :src="user.avatar" alt="" />
          </div>
          <div>
            <span>{{user.nickname}}</span>
            <span @click="goInfo"></span>
          </div>
        </div>
        <div class="tapBottom">
          <div>
            <p>0</p>
            <p>我的特色课</p>
            <p>已购买的特色课程</p>
          </div>
          <div @click="coach">
            <p>0</p>
            <p>一对一辅导</p>
            <p>我的一对一老师辅导</p>
          </div>
          <div>
            <p>0.00</p>
            <p>剩余的学习币</p>
            <p>查看剩余的学习币</p>
          </div>
        </div>
        <div class="make-class">去约课</div>
      </div>
    </header>
    <div>
      <div class="tip">
        <div>
          <img src="../../assets/tip.png" alt="" />
        </div>
        <div>
          <p>邀请好友注册APP，享多重好礼</p>
          <p>限时特惠，多邀多得</p>
        </div>
        <div>&gt;</div>
      </div>

      <ul>
        <li>
          <p>课程相关</p>
          <div>
            <div @click="goPay">
              <div><img src="../../assets/关注的老师.png" alt="" /></div>
              <p>关注的老师</p>
            </div>
            <div>
              <div><img src="../../assets/关注的老师.png" alt="" /></div>
              <p>我的收藏</p>
            </div>
          </div>
        </li>
        <li>
          <p>订单相关</p>
          <div>
            <div>
              <div><img src="../../assets/dd.png" alt="" /></div>
              <p>课程订单</p>
            </div>
            <div>
              <div><img src="../../assets/dd.png" alt="" /></div>
              <p>会员订单</p>
            </div>
            <div>
              <div><img src="../../assets/dd.png" alt="" /></div>
              <p>约课订单</p>
            </div>
          </div>
        </li>
        <li>
          <p>我的账号</p>
          <div>
            <div>
              <div><img src="../../assets/vip.png" alt="" /></div>
              <p>优惠券</p>
            </div>
            <div>
              <div><img src="../../assets/vip.png" alt="" /></div>
              <p>学习卡</p>
            </div>
            <div>
              <div><img src="../../assets/vip.png" alt="" /></div>
              <p>会员</p>
            </div>
          </div>
        </li>
        <li>
          <p>自助服务</p>
          <div>
            <div>
              <div><img src="../../assets/tx.png" alt="" /></div>
              <p>我的消息</p>
            </div>
            <div>
              <div><img src="../../assets/tx.png" alt="" /></div>
              <p>意见反馈</p>
            </div>
            <div>
              <div><img src="../../assets/tx.png" alt="" /></div>
              <p>在线客服</p>
            </div>
            <div>
              <div><img src="../../assets/tx.png" alt="" /></div>
              <p>设置</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        user:[],// 用户信息
    };
  },
  created() {},
  mounted() {
      this.getUser()
  },
  methods: {
      // 获取用户信息
      async getUser(){
        let {data:res} = await this.$axios.getuser()
        console.log(res)
        this.user = res.data
      },
      // 一对一辅导
      coach(){
          this.$router.push('/log')
      },
      // 进入info也
      goInfo(){
          this.$router.push('/info')
      },
      goPay(){
        this.$router.push('/pay')
      }
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  padding-bottom: .8rem;
  header {
    width: 100%;
    height: 4.8rem;
    background: url(../../assets/bg.png) no-repeat top;
    background-size: 100%;
    padding: 0 0.4rem;
    box-sizing: border-box;
    position: relative;
    .tap {
    border-radius: .2rem;

      width: 7rem;
      height: 3.8rem;
      background: #fff;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      box-shadow: 0 0 5px #dddddd;
      .make-class {
        position: absolute;
        right: 0;
        top: 0.5rem;
        width: 1.4rem;
        height: 0.6rem;
        line-height: 0.6rem;
        color: #fff;
        border-top-left-radius: 0.24rem;
        border-bottom-left-radius: 0.24rem;
        text-align: center;
        font-size: 0.3rem;
        background: rgb(212, 69, 3);
      }
      .tapTop {
        display: flex;
        align-items: center;
        margin: 0.4rem 0 0 0.4rem;
        div:nth-of-type(1) {
          width: 20%;
          img {
            width: 1rem;
            height: 1rem;
          }
        }
        div:nth-of-type(2) {
          flex: 1;
          display: flex;
          align-items: center;
          font-size: 0.4rem;
          span:nth-of-type(2) {
            margin-left: 0.2rem;
            width: 0.3rem;
            height: 0.3rem;
            display: block;
            background: url(../../assets/bi.png);
            background-size: 100% 100%;
          }
        }
      }
      .tapBottom {
        width: 100%;
        display: flex;
        justify-content: space-around;
        div {
          margin-top: 0.3rem;
          p {
            width: 100%;
            text-align: center;
            // font-size: .2rem;
          }
          p:nth-of-type(1) {
            font-size: 0.4rem;
            color: red;
          }
          p:nth-of-type(2) {
            font-size: 0.3rem;
            margin-bottom: 0.1rem;
          }

          p:nth-of-type(3) {
            font-size: 0.02rem;
            color: #dddddd;
          }
        }
        div:nth-of-type(2) {
          border-left: solid 1px #dddddd;
          border-right: solid 1px #f0eaea;
        }
      }
    }
  }
  .tip {
    border-radius: 0.6rem;
    padding: 0.1rem 0;
    box-sizing: border-box;
    width: 90%;
    margin-left: 5%;
    // background: #000;
    background: linear-gradient(to right, #ee4806, #c26e2a);
    font-size: 0.4rem;
    display: flex;
    align-items: center;
    div:nth-of-type(1) {
      width: 20%;
      text-align: center;
      img {
        width: 0.6rem;
        height: 0.6rem;
      }
    }
    div:nth-of-type(2) {
      flex: 1;
      p {
        font-size: 0.2rem;
        color: #fff;
      }
    }
    div:nth-of-type(3) {
      width: 10%;
      font-size: 0.6rem;
      color: #fff;
    }
  }
  ul {
    width: 100%;
    padding: 0 0.2rem;
    box-sizing: border-box;
    font-size: 0.4rem;
    li {
      padding: 0.2rem 0;
      background: #fff;
      border-bottom: solid 1px #dddddd;
   
      div{
          display: flex;
                div {
        margin-top: 0.3rem;
        width: 25%;
        height: 1.4rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        box-sizing: border-box;
        align-items: center;
        margin-bottom: 0.3rem;
        div {
          img {
            width: 0.6rem;
            height: 0.6rem;
          }
        }
        p {
          font-size: 0.3rem;
          color: #000;
        }
      }
      }

    }
  }
}
</style>
