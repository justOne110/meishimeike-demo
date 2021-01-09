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
    <van-cell title="删除"  @click="del"/>
    <van-popup v-model="show" position="bottom">
      <van-area :area-list="areaList" @confirm="confirm" />
    </van-popup>

    <van-button type="danger" @click="set">修改</van-button>
  </div>
</template>

<script>
import citys from "../../assets/js/city";
export default {
  data() {
    return {
      id: "",
      checked: false,
      show: false,
      areaList: citys,
      drlSite: "", // 地址信息
      city_id: "", // 城市id
      district_id: "", // 区
      province_id: "", // 省份
      type: "", // 开关 1 2
      mobile: "", //手机号
      xxSite: "", // 详细地址信息
      name: "", // 姓名
    };
  },
  created() {
    this.id = this.$route.query.id;
    this.get();
  },
  mounted() {
    if ((this.type = 1)) {
      this.checked == true;
    } else {
      this.checked == false;
    }
  },
  methods: {
    site() {
      this.show = true;
    },
    confirm(e) {
      // console.log(2345)
      this.show = false;
      console.log(e);

      this.drlSite = e[0].name + e[1].name + e[2].name;
      this.city_id = e[1].code;
      this.district_id = e[2].code;
      this.province_id = e[0].code;
    },
    change() {
      if (this.checked == true) {
        this.type = 1;
      } else {
        this.type = 2;
      }
    },

    // 修改函数
    async set() {
      let aaa = {
        address: this.xxSite,
        city_id: this.city_id,
        district_id: this.district_id,
        is_default: this.type,
        mobile: this.mobile,
        province_id: this.province_id,
        user_name: this.name,
      };
      let { data: res } = await this.$axios.setAddresss(this.id, aaa);
      console.log(res);
      if (res.code != 200) return this.$toast(res.msg);

      this.$router.go(-1);
    },
    // 获取数据
    async get() {
      let { data: res } = await this.$axios.getAddresss(this.id);
      console.log(res);
      this.name = res.data.user_name;
      this.mobile = res.data.mobile;
      this.drlSite =
        res.data.province_name + res.data.city_name + res.data.district_name;
      this.xxSite = res.data.address;
      this.type = res.data.is_default;
      this.district_id = res.data.district_id;
      this.province_id = res.data.province_id;
      this.city_id = res.data.city_id;
    },
    async del(){
      let {data:res} = await this.$axios.del(this.id)

      console.log(res)
      if(res.code == 200){
        this.$toast.success('删除成功')
        setTimeout(()=>{
          this.$router.go(-1)
        },1000)
      }
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

