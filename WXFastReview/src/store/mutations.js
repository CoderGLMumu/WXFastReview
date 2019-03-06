/*
直接更新state的多个方法的对象
 */
import Vue from 'vue'
import {
  RECEIVE_USER_DETAILS,
  RECEIVE_MANUSCRIPT_PENDING_REVIEW,
  RECEIVE_MANUSCRIPT_PASSING,
  RECEIVE_WRITING_MANUSCRIPT,
  RECEIVE_REVIEW_MANUSCRIPT,
} from './mutation-types'

export default {

    [RECEIVE_USER_DETAILS](state,{user_details}){
      state.user_details = user_details
    },
    [RECEIVE_MANUSCRIPT_PENDING_REVIEW](state,{manuscript_pending_review}){
      state.manuscript_pending_review = manuscript_pending_review
    },
    [RECEIVE_MANUSCRIPT_PASSING](state,{manuscript_passing}){
      state.manuscript_passing = manuscript_passing
    },
    [RECEIVE_WRITING_MANUSCRIPT](state,{writing_manuscript}){
      state.writing_manuscript = writing_manuscript
    },
    [RECEIVE_REVIEW_MANUSCRIPT](state,{review_manuscript}){
      state.review_manuscript = review_manuscript
    },

}
