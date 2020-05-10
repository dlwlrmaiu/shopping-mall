<!--
 * @Author: your name
 * @Date: 2020-05-08 19:20:16
 * @LastEditTime: 2020-05-08 23:41:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \23_VueCLI3.x\vant-app\src\views\user-list.vue
 -->
<template>
  <div id="index">
    <div>
      <van-search v-model="value" placeholder="商品搜索，共239款好物" />
    </div>
    <div class="swiper">
      <van-swipe :autoplay="3000" width="375" height="200">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image.image_url" width="375" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="channel">
      <van-grid :column-num="5">
        <van-grid-item v-for="(value, index1) in channel" :key="index1" :icon="value.icon_url" :text="value.name" />
      </van-grid>
    </div>
    <div class="brand-list">
      <van-panel title="品牌制造商直供">
        <van-grid :column-num="2">
          <van-grid-item v-for="(item, index2) in brandList" :key="index2" >
            <van-image lazy-load :src="item.new_pic_url" />
            <h4 class="title">{{item.name}}</h4>
            <p class="price">{{item.floor_price}}元起</p>
          </van-grid-item>
        </van-grid>
      </van-panel>
    </div>
    <div class="new-goods-list">
      <van-panel title="新品首发">
        <van-grid :column-num="2">
          <van-grid-item v-for="(item3, index3) in newGoodsList" :key="index3" >
            <van-image lazy-load :src="item3.list_pic_url" />
            <h4 class="title">{{item3.name}}</h4>
            <p class="price">{{item3.retail_price}}元起</p>
          </van-grid-item>
        </van-grid>
      </van-panel>
    </div>
    <div class="hot-goods-list">
      <van-panel title="人气推荐">
        <van-card
          v-for="(item4, index4) in hotGoodsList"
          :key="index4"
          :price="item4.retail_price"
          :desc="item4.goods_brief"
          :title="item4.name"
          :thumb="item4.list_pic_url"
        />
      </van-panel>
    </div>
    <tabber-btn></tabber-btn>
  </div>
</template>

 

<script>
import Vue from 'vue';
import { Lazyload } from 'vant';

Vue.use(Lazyload);
import api from '../assets/config'
import axios from 'axios'
import TabberBtn from './../components/tabbar-btn'
export default {
  data() {
    return {
      value: '',
      data: {}
    }
  },
  components: {
    TabberBtn
  },
  computed: {
    images() {
      if(typeof this.data.banner === 'object') {
        return this.data.banner
      } else {
        return []
      }
    },
    channel() {
       if(typeof this.data.channel === 'object') {
        return this.data.channel
      } else {
        return []
      }
    },
    brandList() {
       if(typeof this.data.brandList === 'object') {
        return this.data.brandList
      } else {
        return []
      }
    },
    newGoodsList() {
       if(typeof this.data.newGoodsList === 'object') {
        return this.data.newGoodsList
      } else {
        return []
      }
    },
    hotGoodsList() {
       if(typeof this.data.hotGoodsList === 'object') {
        return this.data.hotGoodsList
      } else {
        return []
      }
    }
  },
  async mounted() {
    let res = await axios.get(api.IndexUrl)
    this.data = res.data.data
    console.log(this.data)
  }
}
</script>

<style lang="less">
  #index {
    .van-cell__title {
      text-align: center;
    }
    .van-grid-item {
      overflow: hidden;
    }
    .brand-list {
      .van-grid-item__content {
        padding: 8px;
      }
      .title {
        position: absolute;
        top: 10px;
        left: 18px;
      }
      .price {
        position: absolute;
        top: 34px;
        left: 18px;
        font-size: 14px;
        color: #999;
      }
    }
    .new-goods-list{
      .title {
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .price {
        font-size: 14px;
        color: #999;
      }
    }
    .hot-goods-list {
      .van-card__title {
        position: absolute;
        top: 12px;
        left: 56px;
        font-size: 14px;
        font-weight: 600;
      }
      .van-card__desc {
        position: absolute;
        top: 32px;
        left: 56px;
      }
      .van-card__price {
        color: #951218;
      }
    }
  }
  
</style>
 