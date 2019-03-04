/*
直接更新state的多个方法的对象
 */
import Vue from 'vue'
import {
  // RECEIVE_ADDRESS,
  // RECEIVE_CATEGORYS,
  RECEIVE_USER_DETAILS,
} from './mutation-types'

export default {

    [RECEIVE_USER_DETAILS](state,{user_details}){
      state.user_details = user_details
    },
  // [RECEIVE_ADDRESS] (state, {address}) {
  //   state.address = address
  // },

  // [RECEIVE_CATEGORYS] (state, {categorys}) {
  //   state.categorys = categorys
  // },

}
