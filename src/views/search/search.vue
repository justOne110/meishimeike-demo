<template>
  <div class="wrap">
    <!-- 搜索框 -->
    <!-- <header>
      <p>
        <input type="text" v-model="value" @input="change" @blur="drl" />
      </p>
      <p v-if="flag">取消</p>
      <p v-if="flag == false" @click="serach">搜索</p>
    </header> -->

    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
        @input="drlInput"
        @clear="drlClear"
      />
    </form>
    <!-- -------------------------------------------------------- -->
    <div class="ss" v-if="flag == true">
      <p>
        <span>历史搜索</span>
        <van-icon name="delete-o" @click="del" />
      </p>
      <!-- <p>{{this.$store.state.searchLog}}</p> -->
      <div>
        <p
          v-for="(item, index) in this.$store.state.searchLog"
          :key="index"
          @click="delItem(item)"
        >
          {{ item }}
        </p>
      </div>
    </div>

    <div class="addlist" v-if="flag == false">
      <div v-for="(item, index) in list" :key="index">
        <dl>
          <dt><img :src="item.cover_img" alt /></dt>
          <dd>
            <section>
              <p>{{ item.title }}</p>
              <p>{{ item.has_buy }}万+人已报名</p>
            </section>
            <section>
              <img src="../../assets/logo.png" />
              <p>免费</p>
            </section>
          </dd>
        </dl>
      </div>
      <van-empty description="暂无数据" v-if="serachFlag == 1" />
    </div>

    <!-- <van-dialog v-model="show" title="标题" :confirm="confirm" show-cancel-button>
    </van-dialog> -->
  </div>
</template>

<script>
import { Dialog, Toast} from "vant";
export default {
  data() {
    return {
      value: "",
      flag: true,
      serachFlag: 0,
      list: [],
      show: false,
    };
  },
  created() {},
  mounted() {},
  beforeDestroy(){

  },
  destroyed:{

  },
  methods: {
    async onSearch(val) {
      // 获取数据
      let { data: res } = await this.$axios.serach(this.value);
      this.list = res.data.list;
      // 如果没有数据 给一个状态
      if (res.data.total == 0) {
        this.serachFlag = 1;
      } else {
        this.serachFlag = 0;
      }
      console.log(res);

      this.$store.commit("setSearch", this.value);
    },

    onCancel() {
      Toast("取消");
    },
    drlInput() {
      this.flag = false;
    },
    drlClear() {
      this.flag = true;
    },
    // // 搜索
    // async serach() {
    //   // 获取数据
    //   let { data: res } = await this.$axios.serach(this.value);
    //   this.list = res.data.list;

    //   if (res.data.total == 0) {
    //     this.serachFlag = 1;
    //   } else {
    //     this.serachFlag = 0;
    //   }
    //   console.log(res);

    //   this.$store.commit("setSearch", this.value);
    // },
    del() {
    //   this.$store.state.searchLog = [];
    //   sessionStorage.removeItem('vuexxx')
    this.$store.commit('del')
    },
    delItem(item) {
      Dialog.alert({
        title: "标题",
        message: "弹窗内容",
      }).then(() => {
        this.$store.commit('delItem',item)
        console.log(12345)
      });

    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
  background: #fff;
  //   header {
  //     width: 100%;
  //     height: 1.2rem;
  //     border-bottom: solid 1px #dddddd;
  //     display: flex;
  //     align-items: center;
  //     padding: 0 0.3rem;
  //     box-sizing: border-box;
  //     p:nth-of-type(1) {
  //       flex: 1;
  //       input {
  //         width: 100%;
  //         height: 0.8rem;
  //         border-radius: 0.4rem;
  //         background: rgb(250, 245, 245);
  //         border: 0;
  //         text-indent: 1em;
  //       }
  //     }
  //     p:nth-of-type(2) {
  //       width: 15%;
  //       text-align: center;
  //       font-size: 0.3rem;
  //     }
  //   }
  .ss {
    padding: 0.4rem;
    box-sizing: border-box;
    & > p {
      display: flex;
      justify-content: space-between;
      align-items: center;
      span:nth-of-type(1) {
        font-size: 0.3rem;
        font-weight: bolder;
      }
    }
    div {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      // justify-content: space-around;
      & > p {
        width: 19%;
        margin-left: 1%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        text-align: center;
        color: #fff;
        margin-top: 0.2rem;
        // padding: .2rem;
        background: rgb(245, 77, 77);
      }
    }
  }

  .addlist {
    background: #dddd;
    div {
      width: 100%;
      padding: 0.3rem;
      box-sizing: border-box;
      background: #fff;
      margin-top: 0.2rem;
      dl {
        width: 100%;
        display: flex;
        font-size: 0.3rem;
        margin-top: 0.2rem;
        dt {
          width: 35%;
          img {
            width: 100%;
            height: 1.5rem;
            border-radius: 0.3rem;
          }
        }
        dd {
          flex: 1;
          display: flex;
          padding-left: 0.15rem;
          justify-content: space-between;
          section:nth-of-type(1) {
            width: 80%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            p:nth-of-type(2) {
              font-size: 0.28rem;
              color: #caaeae;
            }
          }
          section:nth-of-type(2) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 20%;
            img {
              width: 80%;
            }
            p {
              color: red;
            }
          }
        }
      }
    }
  }
}
</style>
 