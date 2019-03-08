/*
通过mutation间接更新state的多个方法的对象
 */
import {

  RECEIVE_MANUSCRIPT_PENDING_REVIEW,
  RECEIVE_MANUSCRIPT_PASSING,
  RECEIVE_USER_DETAILS,
  RECEIVE_WRITING_MANUSCRIPT,
  RECEIVE_REVIEW_MANUSCRIPT,
  RECEIVE_REVIEW_COUNT,
} from './mutation-types'
import {
  req_simulated_logo,
  req_user_details,
  req_manuscript,
  req_writing_manuscript,
  req_review_manuscript,
  req_review_count,
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

  async get_review_count({commit, state}) {
    // 发送异步ajax请求
    const result = await req_review_count();
    // 提交一个mutation
    debugger
    if (result.responseCode === 200) {
      const review_count = result.resultParm.resource
      commit(RECEIVE_REVIEW_COUNT, {review_count})
    }
  },

  // 查询所有需要审核的稿件
  async get_manuscript({commit, state},Parameter) {
    // 发送异步ajax请求
    let manuscriptApprovalStatus

    if (Parameter.selectIndex == 0) {
      manuscriptApprovalStatus = 'PENDING_REVIEW'
    }
    if (Parameter.selectIndex == 1) {
      manuscriptApprovalStatus = 'PASSING'
    }

    let pageNo = Parameter.pageNo
    let pageSize = Parameter.pageSize

    const result = await req_manuscript(manuscriptApprovalStatus,pageNo,pageSize);
    // // 提交一个mutation
    if (result.responseCode === 200) {
      if (Parameter.selectIndex == 0) {
        const manuscript_pending_review = result.resultParm.resource
        commit(RECEIVE_MANUSCRIPT_PENDING_REVIEW, {manuscript_pending_review})
        Parameter.callback && Parameter.callback()
      }
      if (Parameter.selectIndex == 1) {
        const manuscript_passing = result.resultParm.resource
        commit(RECEIVE_MANUSCRIPT_PASSING, {manuscript_passing})
        Parameter.callback && Parameter.callback()
      }

      // 数据更新了, 通知一下组件

    }
  },

  async get_writing_manuscript({commit, state},aid) {

    const result = await req_writing_manuscript(aid)
    if (result.responseCode === 200) {

      const writing_manuscript = result.resultParm.resource
      commit(RECEIVE_WRITING_MANUSCRIPT, {writing_manuscript})
    }

  },

  async get_review_manuscript2({commit, state},{manuscript, manuscriptReview,isAuto,callback}) {

    const result = await req_review_manuscript(manuscript, manuscriptReview,isAuto)
    if (result.responseCode === 200) {

      const review_manuscript = result.resultParm.resource
      commit(RECEIVE_REVIEW_MANUSCRIPT, {review_manuscript})
      // 通知一下组件
      callback && callback()
    }

  },

  async get_review_manuscript({commit, state},{manuscript, manuscriptReview,isAuto,callback}) {

    const result = await req_review_manuscript({manuscript:JSON.stringify(manuscript),manuscriptReview:JSON.stringify(manuscriptReview),isAuto:JSON.stringify(isAuto)})
    if (result.responseCode === 200) {

      const review_manuscript = result.resultParm.resource
      commit(RECEIVE_REVIEW_MANUSCRIPT, {review_manuscript})
      // 通知一下组件
      callback && callback()
    }

  },

}
