<template>
       <div class="teacherList">
      <div v-for="(item,index) in superT" :key="index">
        <img :src="item.teacher_avatar" alt="" />
        <div>
          <p>{{item.teacher_name}}</p>
          <p>{{item.introduction}}</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props:["superT"],
    data() {
        return {

        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
     
    },
    computed:{

    }
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/mixins.scss';//引用此混合样式
  .teacherList {
    padding: 0.1rem 0.2rem 0.5rem;
    font-size: 0.4rem;
    & > div {
      display: flex;
      background: #ffffff;
      height: 2rem;
      padding: 0 0.4rem;
      box-sizing: border-box;
      margin-top: 0.2rem;
      border-radius: 0.1rem;
      justify-content: center;
      align-items: center;
      img {
        width: 1rem;
        height: 1rem;
        margin-right: 0.32rem;
        border-radius: 50%;
      }
      & > div {
        flex: 1;
        p:nth-of-type(1) {
          font-size: 0.4rem;
        }
        p:nth-of-type(2) {
          font-size: 0.3rem;
          color: #b7b7b7;
          @include ellipsisBasic;//使用此混合样式，默认显示1行
        }
      }
    }
  }
</style>
