<template>
  <div class="wrap">
    <!-- 搜索框 -->
    <van-search
      @click="goSearch"
      v-model="value"
      shape="round"
      background="#10498E"
      placeholder="请输入搜索关键词"
    />
    <!-- 轮播图 -->
    <div class="banner">
      <bannerSwiper />
    </div>
    <!-- 三个小方块 -->
    <div>
      <ul class="guit">
        <li>
          <img src="../../assets/book.png" alt="" />
          <p>特色课</p>
        </li>
        <li>
          <img src="../../assets/一对一.png" alt="" />
          <p>一对一辅导</p>
        </li>
        <li>
          <img src="../../assets/学习日历.png" alt="" />
          <p>学习日历</p>
        </li>
      </ul>
    </div>
    <p class="super">
      <span>名师阵容</span>
    </p>
    <!-- 名师阵容 -->
    <TeachList :superT="teatherT" />

    <!-- <div class="teacherList">
      <div v-for="(item,index) in superT" :key="index">
        <img :src="item.teacher_avatar" alt="" />
        <div>
          <p>{{item.teacher_name}}</p>
          <p>{{item.introduction}}</p>
        </div>
      </div>
    </div> -->
    <p class="super">
      <span>精品课程</span>
    </p>
    <course :course="course" />
    <p class="super">
      <span>推荐课程</span>
    </p>
    <course :course="recoCourse" />

    <!-- <div class="class">
        <div v-for="(item,index) in course" :key="index">
            <p>{{item.title}}</p>
            <p>共{{item.total_periods}}课时</p>
            <p>
                <img :src="item.teachers_list[0].teacher_avatar" alt="">
                <span>{{item.teachers_list[0].teacher_name}}</span>
            </p>
            <p>
                <span>{{item.sales_num}}人已报名</span>
                <span v-if="item.price==0">免费</span>
                <span style="color:red" v-else><img src="../../assets/price.png">1.00</span>
            </p>
        </div>
 
    </div> -->

    <!-- 明星讲师 -->
    <p class="super">
      <span>明星讲师</span>
    </p>
    <TeachList :superT="superT" />
  </div>
</template>

<script>
// 引入轮播组件
import bannerSwiper from "../conponents/bannerSwuper";
// 名师列表
import TeachList from "../conponents/teachList.vue";
// 课程
import course from "../conponents/course";

export default {
  components: {
    bannerSwiper, // 轮播
    TeachList, // 讲师
    course, // 课程
  },
  data() {
    return {
      superT: [], // 名师阵容
      teatherT: [], // 明星讲师
      course: [], // 精品课程
      recoCourse: [], // 推荐课程
      value: "",
    };
  },
  created() {},
  mounted() {
    //banner
    this.getBanner();
    this.getList();
  },
  methods: {
    // bannner
    async getBanner() {
      let { data: res } = await this.$axios.banner();
      console.log(res);
    },

    // 列表数据
    async getList() {
      let { data: res } = await this.$axios.getList();
      console.log(res);
      this.teatherT = res.data[0].list;
      this.course = res.data[1].list;
      this.recoCourse = res.data[2].list;
      this.superT = res.data[3].list;
    },

    // 进入搜索页
    goSearch() {
      this.$router.push("/search");
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  //   height: 100%;
  background: #f0f0f0;
  padding-bottom: 5rem;
  .banner {
    width: 100%;
    height: 5.3rem;
  }
  .guit {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.26rem;
    margin-bottom: 。5rem;
    transform: translateY(-20%);

    // margin-top: -.4rem;
    // z-index: 999;
    li {
      width: 2rem;
      height: 2rem;
      border-radius: 0.3rem;
      background: #ffffff;
      font-size: 0.3rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      // background: #0088dd;
      img {
        width: 0.5rem;
      }
      p {
        margin-top: 0.4rem;
      }
    }
  }
  .super {
    font-size: 0.4rem;
    padding-left: 0.2rem;
    box-sizing: border-box;
    span {
      border-left: solid 0.06rem red;
    }
  }
  //   .teacherList {
  //     padding: 0.1rem 0.2rem 0.5rem;
  //     font-size: 0.4rem;
  //     & > div {
  //       display: flex;
  //       background: #ffffff;
  //       height: 2rem;
  //       padding: 0 0.4rem;
  //       box-sizing: border-box;
  //       margin-top: 0.2rem;
  //       border-radius: 0.1rem;
  //       justify-content: center;
  //       align-items: center;
  //       img {
  //         width: 1rem;
  //         height: 1rem;
  //         margin-right: 0.32rem;
  //         border-radius: 50%;
  //       }
  //       & > div {
  //         flex: 1;
  //         p:nth-of-type(1) {
  //           font-size: 0.4rem;
  //         }
  //         p:nth-of-type(2) {
  //           font-size: 0.3rem;
  //           color: #b7b7b7;
  //           @include ellipsisBasic;//使用此混合样式，默认显示1行
  //         }
  //       }
  //     }
  //   }
  // .class{
  //     width: 100%;
  //     padding: .4rem;
  //     font-size: .4rem;
  //     box-sizing: border-box;
  //     div{
  //         padding: 0 .3rem;
  //         background: #fff;
  //         border-radius: .13rem;
  //         margin-bottom: .4rem;
  //         p:nth-of-type(1){
  //             word-wrap:break-word;
  //             width: 100%;
  //             padding-top: .4rem;
  //             font-size: .34rem;
  //             font-weight: 500;
  //         }
  //         p:nth-of-type(2){
  //             font-size: .32rem;
  //             color: #666;
  //         }
  //         p:nth-of-type(3){
  //             display: flex;
  //             height: 1.7rem;
  //             align-items: center;
  //             img{
  //                 width: .72rem;
  //                 height: .72rem;
  //                 border-radius: 50%;
  //             }
  //             &>span{
  //                 margin-left: .2rem;
  //                 font-size: .32rem;
  //                 color: #666;
  //             }
  //         }
  //         p:nth-of-type(4){
  //             width: 100%;
  //             height: 1rem;
  //             border-top: solid 1px #dddddd;
  //             display: flex;
  //             justify-content: space-between;
  //             align-items: center;
  //             font-size: .3rem;
  //             span:nth-of-type(1){
  //                 color: #666;
  //             }
  //             span:nth-of-type(2){
  //                 color: rgb(175, 233, 68);
  //                 img{
  //                     width: .32rem;
  //                     height:.32rem;
  //                 }
  //             }
  //         }
  //     }
  // }
}
</style>
