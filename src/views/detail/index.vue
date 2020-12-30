<template>
  <div class="wrap">
    <!-- 导航栏 -->
    <van-nav-bar title="课程详情" left-arrow>
      <template #right>
        <van-icon name="share-o" size="18" />
      </template>
    </van-nav-bar>
    <!--  -->
    <div class="title">
      <p>{{ teatherInfo.title }}</p>
      <p>免费</p>
      <p>共{{ teatherInfo.status }}课时|{{ teatherInfo.sales_num }}人已报名</p>
    </div>
    <!-- {{ id }} -->
    <!-- {{teather}} -->
    <div class="course">
      <p>教学团队</p>
      <div>
        <img :src="teather.avatar" alt="" />
        <p>{{ teather.teacher_name }}</p>
      </div>
    </div>

    <div class="description">
      <p>课程介绍</p>
      <p v-html="teatherInfo.course_details"></p>
    </div>
    <div class="outline">
      <p>课程大纲</p>
      <p v-html="teatherInfo.course_details"></p>
    </div>

    <div class="comment">
      <p>课程评论</p>
      <!-- {{comment}} -->
      <div v-for="(item, index) in comment" :key="index">
        <div>
          <img :src="item.avatar" alt="" />
        </div>
        <div>
          <p>
            <span>{{ item.nickname }}</span>
            <span>
              <van-rate
                v-model="item.grade"
                :size="15"
                gutter="0.5px"
                color="#ffd21e"
                void-icon="star"
                void-color="#eee"
              />
            </span>
            <span style="color:#666666">
              2020-12-31 11:26
            </span>
          </p>
          <p >{{ item.content }}</p>
        </div>
      </div>
    </div>
    <van-button type="danger">立即报名</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // id: 0,
      teatherInfo: [],
      teather: [],
      comment: [], // 评论
    };
  },
  created() {},
  mounted() {
    // 接受路由传参
    let id = this.$route.query.id;
    // alert(id)
    // 课程介绍
    this.getDetail(id);
    // 评论
    this.getPl(id);
  },
  methods: {
    // 课程介绍
    async getDetail(id) {
      let { data: res } = await this.$axios.goDetail(id);
      // if(res.code ==200 ){
      this.teatherInfo = res.data.info;
      this.teather = res.data.teachers[0];
      // }
      console.log(res);
    },
    // 评论
    async getPl(id) {
      let { data: res } = await this.$axios.getPl(id);
      this.comment = res.data.list;
      console.log(res);
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.wrap {
  background: #f0f0f0;
  width: 100%;
  .title {
    background: #fff;
    font-size: 0.4rem;
    padding: 0.36rem;
    p:nth-of-type(1) {
      font-size: 0.33rem;
      padding-right: 1rem;
    }
    p:nth-of-type(2) {
      font-size: 0.4rem;
      line-height: 0.83rem;
      color: red;
    }
    p:nth-of-type(3) {
      font-size: 0.3rem;
      color: #666;
      line-height: 0.8rem;
    }
  }
  .course {
    padding: 0.1rem 0.2rem;
    background: #ffffff;
    margin-top: 0.4rem;
    & > p {
      font-size: 0.5rem;
    }
    & > div {
      width: 20%;
      display: flex;
      flex-direction: column;
      padding: 0.2rem 0;
      justify-content: center;
      align-items: center;
      img {
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
      }
      p {
        margin-top: 0.1rem;
        font-size: 0.3rem;
      }
    }
  }
  .description {
    padding: 0.1rem 0.2rem;
    background: #ffffff;
    margin-top: 0.4rem;
    p:nth-of-type(1) {
      font-size: 0.5rem;
    }
    p:nth-of-type(2) {
      font-size: 0.3rem;
      padding: 0.4rem 0.1rem;
    }
  }
  .outline {
    padding: 0.1rem 0.2rem;
    background: #ffffff;
    margin-top: 0.4rem;
    p:nth-of-type(1) {
      font-size: 0.5rem;
    }
    p:nth-of-type(2) {
      font-size: 0.27rem;
      color: #666;
      padding: 0.4rem 0.1rem;
    }
  }
  .comment {
    margin-top: 0.4rem;
    padding: 0.12rem 0.26rem;
    background: #ffff;
    margin-bottom: 1rem;
    & > p {
      font-size: 0.5rem;
    }
    & > div {
      padding: .2rem 0 ;
      display: flex;
      // justify-content: center;
      align-items: center;
      div:nth-of-type(1) {
        width: 15%;
        img {
          width: 0.6rem;
          height: 0.6rem;
          border-radius: 50%;
          
        }
      }
      div:nth-of-type(2){
        flex: 1;
        p:nth-of-type(1){
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: .3rem;
        }
      }
      p:nth-of-type(2){
        padding: 0.2rem 0;
        font-size: .2rem;
        color: rgb(165, 160, 160);
      }
    }
  }
  .van-button{
    width: 100%;
    position: fixed;
    bottom: 0;
    background: rgb(214, 92, 11) !important;
  }
}
</style>
