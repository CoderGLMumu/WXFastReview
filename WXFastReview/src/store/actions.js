/*
通过mutation间接更新state的多个方法的对象
 */
import {
  // RECEIVE_ADDRESS,
  // RECEIVE_CATEGORYS,
  RECEIVE_USER_DETAILS,

} from './mutation-types'
import {
  req_simulated_logo,
  req_user_details,
  review_manuscript,
  writing_manuscript,
  // review_manuscript,
} from '../api'


export default {

  // 异步模拟登陆
  async getslogo({commit, state}) {
    // 发送异步ajax请求
    const result = await req_simulated_logo();

    // 提交一个mutation
    if (result.responseCode === 200) {
    //  console.log(result.message, '')
    }
  },

  async getuser_details({commit, state}) {
    // 发送异步ajax请求
    const result = await req_user_details();
    // 提交一个mutation

    if (result.responseCode === 200) {
      const user_details = result.resultParm.resource
      commit(RECEIVE_USER_DETAILS, {user_details})
    }
  },

  // 异步获取地址
  async getAddress({commit, state}) {
    // 发送异步ajax请求
    // const geohash = state.latitude + ',' + state.longitude
    // const result = await reqAddress(geohash)
    // // 提交一个mutation
    // if (result.code === 0) {
    //   const address = result.data
    //   commit(RECEIVE_ADDRESS, {address})
    // }
  },

  // 异步获取食品分类列表
  async getCategorys({commit}) {
    // 发送异步ajax请求
    // const result = await reqFoodCategorys()
    // // 提交一个mutation
    // if (result.code === 0) {
    //   const categorys = result.data
    //   commit(RECEIVE_CATEGORYS, {categorys})
    // }
  },

  // 异步获取商家列表
  async getShops({commit, state}) {
    // 发送异步ajax请求
    // const {longitude, latitude} = state
    // const result = await reqShops(longitude, latitude)
    // // 提交一个mutation
    // if (result.code === 0) {
    //   const shops = result.data
    //   commit(RECEIVE_SHOPS, {shops})
    // }
  },

  // 同步记录用户信息
  // recordUser({commit}, userInfo) {
  //   commit(RECEIVE_USER_INFO, {userInfo})
  // },

}
