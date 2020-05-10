/*
 * @Author: your name
 * @Date: 2020-05-07 17:24:19
 * @LastEditTime: 2020-05-10 13:02:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \23_VueCLI3.x\vant-app\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import CategoryList from '../views/category-list.vue'
import Product from '../views/Product.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('../views/Index.vue')
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('../views/Category.vue')
  },
  {
    path: '/special',
    name: 'Special',
    component: () => import('../views/Special.vue')
  },
  {
    path: '/categorylist/:id',
    name: 'CategoryList',
    component: () => import('../views/category-list.vue'),
    //props: true
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product,
    props: true
  },
  {
    path:"/buycart",
    name:"buycart",
    component:() => import('../views/buycart.vue') 
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
