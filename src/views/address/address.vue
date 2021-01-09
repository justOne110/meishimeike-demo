<template>
    <div class="wrap">
        <div class="item" v-for="(item,index) in list" :key="index">
          <div><img src="https://img-blog.csdnimg.cn/20210107094004472.png#pic_center" alt=""></div>
          <div>
            <p>
              <span>{{item.user_name}}</span>
              <span>{{item.mobile}}</span>
            </p>
            <p>
              <span>{{item.province_name}}{{item.city_name}}{{item.district_name}}</span>
            </p>
          </div>
          <div>
            <p @click="goUpdate(item.id)">编辑</p>
          </div>
        </div>
        <div class="bottom">
          <van-button type="danger" @click="goEdit">新增收货地址</van-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
          list:[]
        };
    },
    created() {

    },
    mounted() {
      this.getList()
    },
    methods: {
      // 获取页面数据
      async getList(){
        let {data:res} = await this.$axios.getAddress()

        console.log(res)
        this.list = res.data
      },
      // 去添加
      goEdit(){
        this.$router.push('/address-edit')
      },
      // 去修改
      goUpdate(id){
        this.$router.push('/address-update?id='+id)
      }
    },
    computed:{

    }
};
</script>

<style lang="scss" scoped>
.wrap{
  width: 100%;
  height: 100%;
  .item{
    background: #ffff;
    width: 100%;
    padding: .3rem;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    div:nth-of-type(1){
      width: 10%;
      display: flex;
      align-items: center;
      img{
        width: .6rem;
        height: .6rem;
        // height:;
      }
    }
    div:nth-of-type(2){
      margin-left: .3rem;
      flex: 1;
      font-size: .2rem;
      p:nth-of-type(1){
        span:nth-of-type(2){
          color: #8c8c8c;
          margin-left: .2rem;
        }
        margin-bottom: .3rem;
      }
    }
    div:nth-of-type(3){
      width: 20%;
      display: flex;
      align-items: center;
      p{
        text-align: center;
        font-size: .2rem;
        padding: .1rem .3rem;
        border-radius: .4rem;
        background: rgba(231,77,61,.06);
        color: rgb(230, 94, 4);

      }
    }
  }
  .bottom{
    width: 100%;
  position: fixed;
    bottom: 0;
    .van-button{
      width: 90%;
      margin-left: 5%;
    }
  }
}
</style>
