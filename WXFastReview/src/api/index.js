/*
包含n个接口请求函数的模块
函数的返回值: promise对象
 */
import ajax from './ajax'
// const BASE_URL = 'http://localhost:4000'
// const BASE_URL = '/api'
// const BASE_URL = 'http://192.168.1.161'
const BASE_URL = 'http://39.108.119.115:9132'

// 0、模拟登陆
export const req_simulated_logo = () => ajax(`${BASE_URL}/writing/wechat/simulated/login`)

// 2、写作神器用户详情
export const req_user_details = () => ajax(`${BASE_URL}/writing/user/details`)

// 3、查询所有需要审核的稿件
// export const req_manuscript = (manuscriptApprovalStatus,pageNo,pageSize) => ajax(`${BASE_URL}/writing/review/manuscript/${manuscriptApprovalStatus,pageNo,pageSize}`)
export const req_manuscript = (manuscriptApprovalStatus,pageNo,pageSize) => ajax(BASE_URL+'/writing/review/manuscript', {manuscriptApprovalStatus, pageNo, pageSize})
// 4、根据稿件id查找稿件详情
export const req_writing_manuscript = (id) => ajax(`${BASE_URL}/writing/manuscript`,{id})
// 4、审核的稿件
export const req_review_manuscript = ({manuscript, manuscriptReview,isAuto}) => ajax(`${BASE_URL}/writing/review/manuscript?_method=put`, {manuscript, manuscriptReview,isAuto}, 'POST')

// export const req_review_manuscript = ({name, pwd, captcha}) => ajax(BASE_URL+'/login_pwd', {name, pwd, captcha}, 'POST')
// 5、稿件审核
// export const review_manuscript = () => ajax(`${BASE_URL}/writing/review/manuscript`)




