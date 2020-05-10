<!--
 * @Author: your name
 * @Date: 2020-05-08 23:29:39
 * @LastEditTime: 2020-05-10 13:10:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \23_VueCLI3.x\vant-app\src\components\tabbar-btn.vue
 -->

<template>
  <div>
    <div style="height:50px;"></div>
    <van-tabbar route v-model="active" inactive-color="#000">
        <van-tabbar-item icon="chat-o" to="/index">首页</van-tabbar-item>
        <van-tabbar-item icon="friends-o" to="/special">专题</van-tabbar-item>
        <van-tabbar-item icon="friends-o" to="/category">分类</van-tabbar-item>
        <van-tabbar-item icon="search" to="/buycart">购物车</van-tabbar-item>
        <van-tabbar-item icon="user-o" to="/">我</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
 
 <script>
 export default {
   data() {
     return {
       active: 0
     }
   }
 }
 </script>
 
 <style>
 
 </style>
