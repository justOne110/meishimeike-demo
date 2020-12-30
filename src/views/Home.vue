<template>
  <div class="wrap">
    <router-view/>
    <!-- 底部tabBar -->
      <tabBar/>
  </div>
</template>

<script>
//导入子组件
import tabBar from './conponents/tabBar'
export default {
  data() {
    return {
      active:0
    };
  },
  created() {},
  mounted() {},
  methods: {},
  computed: {},
  components:{
    tabBar,// 底部tabbar
  }
};
</script>

<style scoped>
.wrap {
  width: 100%;
  height: 100%;
}
</style>
