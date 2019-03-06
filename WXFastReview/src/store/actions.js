/*
通过mutation间接更新state的多个方法的对象
 */
import {

  RECEIVE_MANUSCRIPT_PENDING_REVIEW,
  RECEIVE_MANUSCRIPT_PASSING,
  RECEIVE_USER_DETAILS,
  RECEIVE_WRITING_MANUSCRIPT,
  RECEIVE_REVIEW_MANUSCRIPT,
} from './mutation-types'
import {
  req_simulated_logo,
  req_user_details,
  req_manuscript,
  req_writing_manuscript,
  req_review_manuscript,
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
    //
    // let manuscriptApprovalStatus = 'PENDING_REVIEW'
    let pageNo = Parameter.pageNo
    let pageSize = Parameter.pageSize

    const result = await req_manuscript(manuscriptApprovalStatus,pageNo,pageSize);
    // // 提交一个mutation
    if (result.responseCode === 200) {
      if (Parameter.selectIndex == 0) {
        const manuscript_pending_review = result.resultParm.resource
        commit(RECEIVE_MANUSCRIPT_PENDING_REVIEW, {manuscript_pending_review})
      }
      if (Parameter.selectIndex == 1) {
        const manuscript_passing = result.resultParm.resource
        commit(RECEIVE_MANUSCRIPT_PASSING, {manuscript_passing})
      }

      // 数据更新了, 通知一下组件
      // callback && callback()
    }
  },

  async get_writing_manuscript({commit, state},aid) {

    const result = await req_writing_manuscript(aid)
    if (result.responseCode === 200) {

      const writing_manuscript = result.resultParm.resource
      commit(RECEIVE_WRITING_MANUSCRIPT, {writing_manuscript})
    }

  },

  async get_review_manuscript({commit, state},{manuscript, manuscriptReview,isAuto,callback}) {

    debugger
    const result = await req_review_manuscript({manuscript, manuscriptReview,isAuto})
    if (result.responseCode === 200) {

      const review_manuscript = result.resultParm.resource
      commit(RECEIVE_REVIEW_MANUSCRIPT, {review_manuscript})
      // 通知一下组件
      callback && callback()
    }

  },


}
