<template>
  <div class="wrap">
    <!-- 标题栏 -->
    <van-nav-bar title="特色课">
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <!-- 下拉菜单 -->
    <van-dropdown-menu>
      <!-- 分类 -->
      <van-dropdown-item v-model="value1" title="分类" ref="classRef">
        <div>
          <!-- <p>{{ grade.name }}</p> -->
          <div>
            <!-- <span
              @click="gradeId(item.id)"
              v-for="(item, index) in grade.child"
              :key="index"
              >{{ item.name }}</span
            > -->
          </div>
        </div>
        <div>
          <!-- <p>{{ subject.name }}</p> -->
          <div>
            <!-- <span
              @click="subjectId(item.id)"
              v-for="(item, index) in subject.child"
              :key="index"
              >{{ item.name }}</span
            > -->
          </div>
        </div>

        <div class="buts">
          <button @click="reset">重置</button>
          <button @click="gradeClassfiy" >确定</button>
        </div>
      </van-dropdown-item>
      <!-- 排序 -->
      <van-dropdown-item v-model="value2" :options="option2" title="排序" @change="change"/>
      <!-- 筛选 -->
      <van-dropdown-item v-model="value3" title="筛选"> </van-dropdown-item>
    </van-dropdown-menu>

    <course :course="classfiy" />
  </div>
</template>

<script>

import course from "../conponents/course";
export default {
  data() {
    return {
      value1: 0,
      value2: 0,
      value3: 0,
      option2: [
        { text: "综合排序", value: "0" },
        { text: "最新", value: "1" },
        { text: "最热", value: "2" },
        { text: "价格从低到高", value: "3" },
        { text: "价格从高到低", value: "4" },
      ],
      grade: [], // 年纪
      subject: [], //科目
      classfiy: [],
      gId: '', // 课程id
      sId: '', // 课程id
      dd:[]
    };
  },
  components: {
    course,
  },
  created() {},
  mounted() {
    //   下拉菜单
    this.getDro();
    // 列表数据
    this.getClassfiy();
    // 分类数据
    // this.gradeClassfiy()
  },
  methods: {
    // 获取下拉菜单数据
    async getDro() {
      let { data: res } = await this.$axios.dropdown();
      // console.log(res);
      this.grade = res.data.attrclassify[0];
      this.subject = res.data.attrclassify[1];
      console.log(this.grade);
    },
    // 获取列表数据
    async getClassfiy() {
      let { data: res } = await this.$axios.classfiy();
      console.log(res);
      this.classfiy = res.data.list;
    },
    // 年纪ID
    gradeId(id) {
      console.log(id);

      this.gId = id;
    },
    // 课程Id
    subjectId(id) {
      console.log(id);
      this.sId = id;
    },
    // 分类数据  点击确定按钮
    async gradeClassfiy() {
      let cc = [];
      if (this.gId == "" && this.sId != "") {
        cc.push(this.sId);
      } else if (this.gId != "" && this.sId == "") {
        cc.push(this.gId);
      } else if (this.gId != "" && this.sId != "") {
        cc.push(this.gId + "," + this.sId);
      }
      console.log(cc);
      this.dd = cc
      let { data: res } = await this.$axios.gradeClassfiy(cc);

      console.log(res);
      console.log(123456);
      this.classfiy = res.data.list;
      this.$refs.classRef.toggle();
    },
    // 重置
    reset(){
      this.getClassfiy()
      this.$refs.classRef.toggle();
    },
    // 排序
    async change(e){
      console.log(e)
      let {data:res} = await this.$axios.sort(e,this.dd)
      console.log(res)
      this.classfiy = res.data.list;
    }
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  padding-top: 1.4rem;
  background: #f0f0f0;
  .van-nav-bar {
    width: 100%;
    position: fixed;
    top: 0;
  }
  .van-dropdown-menu {
    width: 100%;
    position: fixed;
    top: 0.58rem;
  }
  .van-dropdown-item:nth-of-type(1) {
    div {
      // border-bottom: 1px solid #dddddd;
      padding: 0.2rem;
      box-sizing: border-box;
      & > p {
        width: 100%;
        font-size: 0.32rem;
        color: #646464;
      }
      & > div {
        font-size: 0.32rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        span {
          padding: 0.2rem 0.4rem;
          border-radius: 0.2rem;
          background: #f5f5f5;
          margin-bottom: 0.4rem;
          color: #646464;
        }
        span:hover {
          background: rgb(116, 189, 56);
        }
      }
      .buts {
        width: 100%;
        button {
          width: 48%;
          line-height: 0.6rem;
          border: 0;
          // background:#dddd;
          border-radius: 0.06rem;
          background: #ffff;
        }
        button:nth-of-type(1) {
          border: 1px solid #dddddd;
        }
        button:nth-of-type(2) {
          background: rgb(214, 108, 8);
          color: #ffff;
        }
      }
    }
  }
}
</style>


