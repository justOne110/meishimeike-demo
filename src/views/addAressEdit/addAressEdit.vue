<template>
  <div class="wrap">
    <div class="item">
      <p>姓名</p>
      <p><input type="text" v-model="name" /></p>
    </div>
    <div class="item">
      <p>手机号</p>
      <p><input type="number" v-model="mobile" /></p>
    </div>
    <div class="item">
      <p>地址信息</p>
      <p><input type="text" @click="site" v-model="drlSite" /></p>
    </div>
    <div class="item">
      <p>详细地址</p>
      <p><input type="text" v-model="xxSite" /></p>
    </div>
    <van-switch-cell v-model="checked" title="设为默认地址" @change="change" />


    <van-popup v-model="show" position="bottom">
      <van-area :area-list="areaList" @confirm="confirm" />
    </van-popup>
    <!-- {{city_id}} -->
    <van-button type="danger" @click="set">保存</van-button>
  </div>
</template>

<script>
import citys from '../../assets/js/city'
export default {
  data() {
    return {
      checked: false,
      show:false,
      areaList:citys,
      drlSite:'', // 地址信息
      city_id:'',// 城市id
      district_id:"",// 区
      province_id:'',// 省份
      type:"",// 开关 1 2 
      mobile:"",//手机号
      xxSite:"",// 详细地址信息
      name:"", // 姓名
    };
  },
  created() {},
  mounted() {},
  methods: {
    site(){
      this.show = true
    },
    confirm(e){
      // console.log(2345)
      this.show = false
      console.log(e)
      
    this.drlSite = e[0].name + e[1].name + e[2].name
      this.city_id = e[1].code
      this.district_id = e[2].code
      this.province_id = e[0].code
    },
    change(){
      if(this.checked == true){
        this.type = 1
      }else{
        this.type = 2

      }
    },

    // 修改函数
     async set(){
      let aaa  = {
        address:this.xxSite,
        city_id:this.city_id,
        district_id:this.district_id,
        is_default:this.type,
        mobile:this.mobile,
        province_id:this.province_id,
        user_name:this.name

      }
      let {data:res} = await this.$axios.setAddRess(aaa)
      console.log(res)
      if(res.code != 200) return this.$toast(res.msg)

      this.$router.go(-1)
    }

  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
  .item {
    padding: 0.4rem 0.3rem;
    background: #fff;
    p:nth-of-type(1) {
      font-size: 0.3rem;
    }
    p:nth-of-type(2) {
      margin-top: 0.2rem;
      width: 100%;
      input {
        background: #fdfdfd;
        width: 100%;
        height: 0.8rem;
        border: 1px solid #dddddd;
      }
    }
  }
  .van-switch-cell {
    margin-top: 0.2rem;
  }
  .van-button {
    position: fixed;
    bottom: 0;
    width: 90%;
    margin-left: 5%;
  }
}
</style>
