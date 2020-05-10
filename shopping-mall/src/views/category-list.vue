<!--
 * @Author: your name
 * @Date: 2020-05-09 16:35:42
 * @LastEditTime: 2020-05-09 22:12:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \23_VueCLI3.x\vant-app\src\views\category-list.vue
 -->
<template>
  <div id="categoryList">
    <div>
      <van-nav-bar
        fixed
        z-index=10
        title="网易严选"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
      <div style="height: 46px;"></div>
    </div>
    <div>
      <van-tabs v-model="active">
        <van-tab v-for="(item, index) in clist" :key="index" :title="item.name">
          <h3 class="item-front-name">{{item.front_name}}</h3>
          <p class="item-front-desc">{{item.front_desc}}</p>
          <van-grid :column-num="2" v-if="item.plist">
            <van-grid-item  v-for="(item2, index2) in item.plist.data" :to="'/product/' + item2.id" :key="index2">
              <van-image :src="item2.list_pic_url" />
              <h4 class="van-ellipsis">{{item2.name}}</h4>
              <p class="price">¥{{item2.retail_price}}</p>
            </van-grid-item>
          </van-grid>
        </van-tab>     
      </van-tabs> 
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  // props: ['id'],
  data() {
    return {
      active: 0,
      clist: []
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    async getList(cid,page) {
      let res = await axios.get(this.$root.api.GoodsList, { params: { categoryId: cid, page, size: 20 }})
      return res.data.data
    }
  },
  async created() {
    // console.log(this.$route.params.id)
    let res = await axios.get(this.$root.api.GoodsCategory, { params: { id: this.$route.params.id} })
    this.clist = res.data.data.brotherCategory
    let id = this.clist[0].id
    // this.getList(id, 1)
    // console.log(this.clist)
    this.clist.forEach(async (item, index) => {
      item.plist = await this.getList(item.id,1)  
      this.$forceUpdate()
    });
  }
}
</script>

<style lang="less">
  #categoryList {
    .item-front-name {
      padding-top: 20px;
      font-size: 16px;
      color: #333;
    }
    .item-front-desc {
      font-size: 14px;
      color: #666;
      padding: 10px;
    }
    .van-grid-item {
      overflow: hidden;
    }
    .van-ellipsis {
      font-size: 14px;
      width: 100%;
    }
    .price {
      padding-top: 5px;
      color: #951218;
    }
  }
</style>