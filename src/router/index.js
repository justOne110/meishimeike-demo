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
    path: "/info",
    name: "Info",
    component: () => import('../views/info/info'),
    meta: { keepAlive: false }
  },
  // 修改个人信息
  {
    path: "/setName",
    name: "Setname",
    component: () => import('../views/info/setName'),
    meta: { keepAlive: false }
  },
  // 关注
  {
    path: "/pay",
    name: "Pay",
    component: () => import('../views/pay/pay'),
    meta: { keepAlive: false }
  },
  // 设置
  {
    path: "/setting",
    name: "Setting",
    component: () => import('../views/setting/setting'),
    meta: { keepAlive: false }
  },
  // 搜索页
  {
    path: "/search",
    name: "Search",
    component: () => import('../views/search/search'),
    meta: { keepAlive: false }
  },
  // 意见反馈
  {
    path: "/idea",
    name: "Idea",
    component: () => import('../views/idea/idea'),
    meta: { keepAlive: false }
  },
  // 地址管理
  {
    path: "/address",
    name: "Address",
    component: () => import('../views/address/address'),
    meta: { keepAlive: false }
  },
  // 添加地址
  {
    path: "/address-edit",
    name: "Address-edit",
    component: () => import('../views/addAressEdit/addAressEdit'),
    meta: { keepAlive: false }
  },
  // 修改
  {
    path: "/address-update",
    name: "Address-update",
    component: () => import('../views/addAressUpdate/addAressUpdate'),
    meta: { keepAlive: false }
  },

]

const router = new VueRouter({
  routes
})

export default router
