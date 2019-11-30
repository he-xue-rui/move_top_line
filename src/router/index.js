import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout'

import home from '@/views/home'
import question from '@/views/question'
import video from '@/views/video'
import user from '@/views/user'

import search from '@/views/search'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: home
      },
      {
        path: '/question',
        component: question
      },
      {
        path: '/video',
        component: video
      },
      {
        path: '/user',
        component: user
      }
    ]
  },
  {
    path: '/search',
    component: search
  }
]

const router = new VueRouter({
  routes
})

export default router
