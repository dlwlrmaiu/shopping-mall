/*
 * @Author: your name
 * @Date: 2020-05-07 17:24:19
 * @LastEditTime: 2020-05-10 12:57:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \23_VueCLI3.x\vant-app\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import axios from 'axios'
import api from './../assets/config'

export default new Vuex.Store({
  state: {
    cartTotal:{
      checkedGoodsAmount: 0,
      checkedGoodsCount: 0,
      goodsAmount: 0,
      goodsCount: 0
    },
    cartList: []
  },
  mutations: {
    setCarList(state, cartList) {
      state.cartList = cartList
    },
    setCartTotal(state, cartTotal) {
      state.cartTotal = cartTotal
    }
  },
  actions: {
    async AjaxCart(content){
      let cartRes = await axios.get(api.CartList)
      console.log(cartRes.data)
      content.commit('setCarList',cartRes.data.data.cartList)
      content.commit('setCartTotal',cartRes.data.data.cartTotal)
    }
  },
  modules: {
  }
})
