// 根据环境不同引入不同baseApi地址
import { baseUrl } from '@/config'
import { Toast } from 'vant'
// console.log(baseUrl)

//1. 先导入axios对象
import axios from 'axios';
// 引入loding
// import { Loading } from 'element-ui';
//2. 创建axios的对象
const Server = axios.create({
    baseURL: baseUrl, //基础url地址
    timeout: 3000,//超时时间
});
// var loadingInstance
//3. 请求拦截器配置
Server.interceptors.request.use((config) => {

      // 不传递默认开启loading
      if (!config.hideloading) {
        // loading
        Toast.loading({
          forbidClick: true
        })
      }

    //  loadingInstance = Loading.service({ fullscreen: true });
    // 先获取本地存储
    let token ='Bearer '+ sessionStorage.getItem('token')
    
    // if(token){
        config.headers['authorization'] = token
    // }

    return config;

}, (error) => {
    return Promise.reject(error);
});

//4. 相应拦截器
Server.interceptors.response.use((response) => {
    Toast.clear()
    // loadingInstance.close();
    // console.log(response);
    //过滤返回的data值
    if (response.status == 200) {
        // return response.data;
        return response;
    }

    return response;
}, (error) => {

    return Promise.reject(error);
});

//5. 抛出对象接口
export default Server;
