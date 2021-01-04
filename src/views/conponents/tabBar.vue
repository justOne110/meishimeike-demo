<template>
  <div>
    <van-tabbar v-model="active" route>
      <van-tabbar-item
        icon="https://img-blog.csdnimg.cn/20201231152759678.png"
        to="/index"
        >首页</van-tabbar-item
      >
      <van-tabbar-item
        icon="https://img-blog.csdnimg.cn/20201231152745260.png"
        to="/class"
        >课程</van-tabbar-item
      >
      <van-tabbar-item
        icon="https://img-blog.csdnimg.cn/20201231153021160.png"
        to="/log"
        >约课记录</van-tabbar-item
      >
      <van-tabbar-item
        icon="https://img-blog.csdnimg.cn/20201231152723634.png"
        to="/practice"
        >练习</van-tabbar-item
      >
      <van-tabbar-item
        icon="https://img-blog.csdnimg.cn/20201231152659108.png"
        to="/my"
        >我的</van-tabbar-item
      >
    </van-tabbar>

    <!-- -------------------------------------------------------------------------------------------------------------- -->
    <!-- <van-tabbar v-model="active" route>
      <van-tabbar-item v-for="(item,index) in arr" :key="index" :to="item.to">
        <span>{{item.title}}</span>
        <template #icon="props">
          <img :src="props.active ? icon.active : icon.inactive" />
        </template>
      </van-tabbar-item>
  
    </van-tabbar> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      // icon: {
        
      //   active: 'https://img.yzcdn.cn/vant/user-active.png',
      //   inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
      // },
      // arr:[
      //   {
      //     path:"/index", // 路径
      //     title:"首页", // 标题
      //     active:"https://img-blog.csdnimg.cn/20210102154449566.png", // 高亮图片
      //     inactive:"https://img-blog.csdnimg.cn/20201231152759678.png" // 默认图片
      //   },
      //   {
      //     path:"/class", // 路径
      //     title:"课程", // 标题
      //     active:"https://img-blog.csdnimg.cn/20210102154449566.png", // 高亮图片
      //     inactive:"https://img-blog.csdnimg.cn/20201231152759678.png" // 默认图片
      //   },
      //   {
      //     path:"/log", // 路径
      //     title:"约课记录", // 标题
      //     active:"https://img-blog.csdnimg.cn/20210102154449566.png", // 高亮图片
      //     inactive:"https://img-blog.csdnimg.cn/20201231152759678.png" // 默认图片
      //   },
      //   {
      //     path:"/practice", // 路径
      //     title:"练习", // 标题
      //     active:"https://img-blog.csdnimg.cn/20210102154449566.png", // 高亮图片
      //     inactive:"https://img-blog.csdnimg.cn/20201231152759678.png" // 默认图片
      //   },
      //   {
      //     path:"/my", // 路径
      //     title:"我的", // 标题
      //     active:"https://img-blog.csdnimg.cn/20210102154449566.png", // 高亮图片
      //     inactive:"https://img-blog.csdnimg.cn/20201231152759678.png" // 默认图片
      //   }
      // ]
    };
  },
  created() {},
  mounted() {},
  methods: {},
  computed: {},
};
</script>

<style scoped>
</style>

