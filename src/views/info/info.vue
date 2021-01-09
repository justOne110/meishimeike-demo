<template>
  <div>
    <van-nav-bar title="个人信息" left-arrow @click-left="onClickLeft" />
    <van-cell title="头像" @click="imgPopup">
      <!-- 使用 right-icon 插槽来自定义右侧图标 -->
      <template #right-icon>
        <img :src="userInfo.avatar" alt="" />
      </template>
    </van-cell>

    <van-cell
      title="昵称"
      is-link
      :value="userInfo.nickname"
      @click="goSetInfo(userInfo.nickname)"
    />
    <van-cell title="手机号" :value="userInfo.mobile" />
    <van-cell title="性别" v-if="userInfo.sex == 3" is-link value="保密" />
    <van-cell title="性别" v-if="userInfo.sex == 0" is-link value="男" />
    <van-cell title="性别" v-if="userInfo.sex == 1" is-link value="女" />
    <van-cell title="性别" v-if="userInfo.sex == 2" is-link value="未知" />
    <van-cell
      title="出生日期"
      is-link
      :value="userInfo.birthday"
      @click="setTime"
    />
    <van-cell title="所属城市" is-link :value="sCity" @click="selectCity" />

    <!-- <van-cell title="学科" is-link :value="userInfo.attr[1].attr_value" /> -->
    <!-- <van-cell title="年级" is-link value="请选择" @click="dj" /> -->

    <!-- 学科弹出框 -->
    <!-- <van-popup v-model="show" position="bottom">
      <van-picker show-toolbar :columns="columns.name" />
    </van-popup> -->
    <!-- 出生日期 -->
    <van-popup v-model="time" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        :min-date="minDate"
        :max-date="maxDate"
        @confirm="changes"
      />
    </van-popup>
    <!-- 城区弹出框 -->
    <van-popup v-model="city" position="bottom">
      <van-area @confirm="setCity" :area-list="areaList" />
    </van-popup>

    <!-- 选择头像 -->
    <van-popup v-model="imgFlag" position="bottom">
      <van-uploader  :after-read="afterRead">
        <van-button icon="plus" type="primary">上传文件</van-button>
        <!-- <input type="file"/> -->
      </van-uploader>
    </van-popup>
    <!-- {{ files }} -->
  </div>
</template>

<script>
import citys from "../../assets/js/city.js";
export default {
  data() {
    return {
      minDate: new Date(1890, 0, 1), // 开始时间
      maxDate: new Date(), // 结束时间
      currentDate: new Date(),
      show: false,
      time: false,
      city: false,
      imgFlag: false,
      sCity: "",
      areaList: citys,
      userInfo: [], // 获取的信息
      columns: [
        // "小学一年级",
        // "小学二年级",
        // "小学三年级",
        // "小学四年级",
        // "小学五年级",
        // "小学六年级",
        // "初一",
        // "初二",
        // "初三",
        // "高一",
        // "高二",
        // "高三",
        // {class:"小学一年级",id:"18"},
        // {class:"小学二年级",id:"18"},
      ],
      files: [],
    };
  },
  created() {
    console.log(this.files);
  },
  mounted() {
    this.getUSerInfo();
  },
  methods: {
    // 返回
    onClickLeft() {
      this.$router.go(-1);
    },

    // 获取个人信息
    async getUSerInfo() {
      let { data: res } = await this.$axios.uesrInfo();
      console.log(res);
      this.userInfo = res.data;
      // this.currentDate = res.data.birthday;
      this.sCity =
        res.data.province_name +
        "," +
        res.data.city_name +
        "," +
        res.data.district_name;
    },

    // // 获取学科，年级
    // async getGrade(){

    // },
    // 点击单元格
    dj() {
      this.show = true;
    },
    // 点击进入修改昵称
    goSetInfo(name) {
      this.$router.push(`/setName?name=${name}`);
    },
    // 点击 时间 出现
    setTime() {
      this.time = true; // 弹框出现
    },

    // 时间改变
    async changes(e) {
      console.log(e);
      let d = new Date(e);
      d = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
      // console.log(d);
      let { data: res } = await this.$axios.setInfos({ birthday: d });
      console.log(res);
      if (res.code !== 200) {
        return this.$toast.fail(res.msg);
      } else {
        this.getUSerInfo();
        this.time = false;
      }
    },

    // 城区
    selectCity() {
      this.city = true;
    },
    // 设置城市
    async setCity(e) {
      console.log(e);
      // 获取城市id
      let { code: city_id } = e[0];
      let { code: province_id } = e[1];
      let { code: district_id } = e[2];

      // 调用接口
      let res = await this.$axios.setInfos({
        city_id: city_id,
        district_id: district_id,
        province_id: province_id,
      });
      console.log(res);

      this.city = false;

      this.getUSerInfo();
    },

    // 点击弹出选择图片
    imgPopup() {
      this.imgFlag = true;
    },
    afterRead(e) {
      console.log(e.file);
      let content = e.file;
      let data = new FormData();
      data.append("file", content);
      this.$axios.updateImg(data).then((res) => {
        console.log(res);

        this.$axios.setInfos({ avatar: res.data.data.path }).then((re) => {
          console.log(re);
          this.imgFlag = false;
          this.getUSerInfo();
        });
      });
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
img {
  width: 0.8rem;
  height: 0.8rem;
}
</style>

