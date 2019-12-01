import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

import Layout from '../views/Layout' // 首页框架

import home from '@/views/home' // 首页
import question from '@/views/question' // 论坛界面
import video from '@/views/video' // 视频界面
import user from '@/views/user' // 个人页面

import profile from '@/views/profile' // 编辑资料界面
import chat from '@/views/chat' // 小智同学界面
import search from '@/views/search' // 搜索界面
import login from '@/views/login' // 登陆页面

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: home
      },
      {
        path: '/question',
        name: 'question',
        component: question
      },
      {
        path: '/video',
        name: 'video',
        component: video
      },
      {
        path: '/user',
        name: 'user',
        component: user
      }
    ]
  },
  {
    path: '/user/profile',
    name: 'profile',
    component: profile
  },
  {
    path: '/user/chat',
    name: 'chat',
    component: chat
  },
  {
    path: '/search',
    name: 'search',
    component: search
  },
  {
    path: '/login',
    name: 'login',
    component: login
  }
]

const router = new VueRouter({
  routes
})

// 使用导航守卫拦截登录
router.beforeEach((to, from, next) => {
  // 当未登录 且  页面为（个人中心 /user、编辑资料 /user/profile、小智同学 /user/chat）
  const { user } = store.state
  if (!user.token && to.path.startsWith('/user')) {
    // 现实登录后回跳  把当前想访问的地址传递给登录页面
    console.log(to.path)
    return next({ path: '/login', query: { redirectUrl: to.path } })
  }
  next()
})

export default router
