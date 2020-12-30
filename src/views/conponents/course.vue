<template>
  <div class="class">
    <div v-for="(item, index) in course" :key="index"  @click="goDetial(item.id)">
      <p>{{ item.title }}</p>
      <p>共{{ item.total_periods }}课时</p>
      <p>
        <img :src="item.teachers_list[0].teacher_avatar" alt="" />
        <span>{{ item.teachers_list[0].teacher_name }}</span>
      </p>
      <p>
        <span>{{ item.sales_num }}人已报名</span>
        <span v-if="item.price == 0">免费</span>
        <span style="color: red" v-else
          ><img src="../../assets/price.png" />1.00</span
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props:["course"],
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
     goDetial(id){
        this.$router.push(`/detail?id=${id}`)
      }
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.class {
  width: 100%;
  padding: 0.4rem;
  font-size: 0.4rem;
  box-sizing: border-box;
  div {
    padding: 0 0.3rem;
    background: #fff;
    border-radius: 0.13rem;
    margin-bottom: 0.4rem;
    p:nth-of-type(1) {
      word-wrap: break-word;
      width: 100%;
      padding-top: 0.4rem;
      font-size: 0.34rem;
      font-weight: 500;
    }
    p:nth-of-type(2) {
      font-size: 0.32rem;
      color: #666;
    }
    p:nth-of-type(3) {
      display: flex;
      height: 1.7rem;
      align-items: center;
      img {
        width: 0.72rem;
        height: 0.72rem;
        border-radius: 50%;
      }
      & > span {
        margin-left: 0.2rem;
        font-size: 0.32rem;
        color: #666;
      }
    }
    p:nth-of-type(4) {
      width: 100%;
      height: 1rem;
      border-top: solid 1px #dddddd;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.3rem;
      span:nth-of-type(1) {
        color: #666;
      }
      span:nth-of-type(2) {
        color: rgb(175, 233, 68);
        img {
          width: 0.32rem;
          height: 0.32rem;
        }
      }
    }
  }
}
</style>
