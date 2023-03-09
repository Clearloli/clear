import {createRouter, createWebHistory } from 'vue-router'

// 路由
let routes = [
  {
    path: '/',
    name: 'home',
    component: ()=> import('@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: ()=> import('@/views/About.vue')
  },
]

// 路由器
const router = createRouter({
  history: createWebHistory(), // html5模式
  routes
})

export default router