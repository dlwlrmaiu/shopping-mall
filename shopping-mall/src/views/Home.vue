<!--
 * @Author: your name
 * @Date: 2020-05-07 17:24:19
 * @LastEditTime: 2020-05-08 23:42:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \23_VueCLI3.x\vant-app\src\views\Home.vue
 -->
<template>
  <div class="home">
    <div>
      <van-nav-bar>
        <template #right>
          <van-icon name="photograph" color="#000" size="18" />
        </template>
      </van-nav-bar>
      <div class="header-user-info">
        <div class="header-user-info-photograph">
          <img :src="yushuxin" alt="">
        </div>
        <div>
          <van-cell title="dlwlrma" />
          <van-cell title="微信号:wxid_km6jd1grvreu22" />
        </div>
      </div>
    </div>
    
    <van-cell-group>
      <van-cell title="支付" icon="certificate" is-link />
    </van-cell-group>
    <van-cell-group>
      <van-cell title="收藏" icon="star-o" is-link />
      <van-cell title="相册" icon="photo-o" is-link />
      <van-cell title="卡包" icon="idcard" is-link />
      <van-cell title="表情" icon="smile-o" is-link />
    </van-cell-group>
    <van-cell-group>
      <van-cell title="设置" icon="setting-o" is-link />
    </van-cell-group>
    <tabbar-btn></tabbar-btn>
  </div>
</template>

<script>
// @ is an alias to /src

// const img = require('./../assets/img/fanhui.png')
import img from './../assets/img/fanhui.png'
import xiaochengxu from './../assets/img/xiaochengxu.png'
import yushuxin from './../assets/img/1.jpg'
import TabbarBtn from './../components/tabbar-btn'

export default {
  name: 'Home',
  components: {
    TabbarBtn
  },
  data() {
    return {
      img,
      xiaochengxu,
      yushuxin
    }
  },
  methods: {
  
  }
}
</script>

<style lang="less" scoped>

  .van-cell-group {
    margin: 10px 0;
  }
  .header-user-info {
    display: flex;
    background-color: #fff;
    padding: 20px;
  }
  .header-user-info-photograph {
    margin: 15px 0;
  }
  .header-user-info img {
    width: 60px;
    height: 60px;
    border-radius: 10px;
  }
</style>