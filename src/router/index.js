import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/index',
    component: Home,
    children: [
      {
        path: '/index',
        name: 'Index',
        component: () => import('../views/index/index'),
        meta: { keepAlive: false }
      },
      {
        path: '/class',
        name: 'class',
        component: () => import('../views/class/class'),
        meta: { keepAlive: false }
      },
      {
        path: '/log',
        name: 'Log',
        component: () => import('../views/log/log'),
        meta: { keepAlive: false }
      },
      {
        path: '/practice',
        name: 'Practice',
        component: () => import('../views/practice/practice'),
        meta: { keepAlive: false }
      },
      {
        path: '/my',
        name: 'My',
        component: () => import('../views/my/my'),
        meta: { keepAlive: false }
      },
    ]
  },
  // 登录
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/login'),
    meta: { keepAlive: false }
  },
  // 注册
  {
    path: '/zc',
    name: 'Zc',
    component: () => import('../views/zc/zc'),
    meta: { keepAlive: false }
  },
  // 详情
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('../views/detail/index'),
    meta: { keepAlive: false }
  },
  // 查看个人信息
  {
    path:"/info",
    name:"Info",
    component:()=> import ('../views/info/info'),
    meta:{keepAlive:false}
  },
  // 修改个人信息
  {
    path:"/setName",
    name:"Setname",
    component:()=> import ('../views/info/setName'),
    meta:{keepAlive:false}
  },
  // 关注
  {
    path:"/pay",
    name:"Pay",
    component:()=> import ('../views/pay/pay'),
    meta:{keepAlive:false}
  }

]

const router = new VueRouter({
  routes
})

export default router
