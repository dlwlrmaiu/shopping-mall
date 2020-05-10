<!--
 * @Author: your name
 * @Date: 2020-05-08 23:24:43
 * @LastEditTime: 2020-05-09 17:37:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \23_VueCLI3.x\vant-app\src\views\Category.vue
 -->
<template>
  <div id="category"> 
    <div>
      <van-search v-model="value" placeholder="商品搜索，共239款好物" />
    </div>
    <div>
      <van-tree-select
        height='calc(100vh - 104px)'
        :items="items"
        @click-nav="changRight"
        :main-active-index.sync="activeIndex">
        <template #content>
          <img class="banner-img" :src="bannerImg" alt="">
          <van-grid :column-num="3">
            <van-grid-item 
              v-for="(item, index) in subCategoryList"
              :to="'/categorylist/' + item.id"
              :key="index" 
              :icon="item.wap_banner_url" 
              :text="item.name" />
          </van-grid>
        </template>
      </van-tree-select>
    </div>
    <tabber-btn></tabber-btn>
  </div>
</template>

<script>

// CatalogList: ApiRootUrl + 'catalog/index',  //分类目录全部分类数据接口
//   CatalogCurrent: ApiRootUrl + 'catalog/current',  //分类目录当前分类数据接口

import api from '../assets/config'
import axios from 'axios'
import TabberBtn from './../components/tabbar-btn'
export default {
  components: {
    TabberBtn
  },
  data() {
    return {
      value: '',
      data: {},
      activeIndex: 0,
      subCategoryList: [],
      bannerImg: ''
    }
  },
  async created() {
    let res = await axios.get(api.CatalogList)
    this.data = res.data.data
    this.subCategoryList = this.data.categoryList[this.activeIndex].subCategoryList
    console.log(this.subCategoryList)
    this.bannerImg = this.data.categoryList[this.activeIndex].img_url
  },
  computed: {
    items() {
      if(this.data.categoryList === undefined ) {
        return []
      } else {
        let arr = []
        this.data.categoryList.forEach(item => {
          item.text = item.name
          arr.push(item)
        })
        return arr
      }
    }
  },
  methods: {
    changRight(index) {
      this.activeIndex = index
    }
  },
  watch: {
    async activeIndex() { 
      if(this.items.length !== 0) {
        let id = this.items[this.activeIndex].id
        let res = await axios.get(api.CatalogCurrent, { params: { id } })
        this.subCategoryList = res.data.data.currentCategory.subCategoryList
        this.bannerImg = this.data.categoryList[this.activeIndex].img_url
      } else {
        this.subCategoryList = []
      }
    }
  }
}
</script>

<style lang="less">
  #category {
    .banner-img {
      width: 100%;
      box-sizing: border-box;
      padding: 5px;
    }
  }
</style>