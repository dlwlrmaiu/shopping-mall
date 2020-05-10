<!--
 * @Author: your name
 * @Date: 2020-05-07 17:24:19
 * @LastEditTime: 2020-05-09 19:51:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \23_VueCLI3.x\vant-app\src\App.vue
 -->
<template>
  <div id="app"> 
    <router-view/>
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


<style lang="less">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  body {
    background-color: #eee;

  }
  *{
    margin: 0;
    padding: 0;
  }
</style>
