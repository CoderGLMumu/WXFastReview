/*
包含n个接口请求函数的模块
函数的返回值: promise对象
 */
import ajax from './ajax'
// const BASE_URL = 'http://localhost:4000'
// const BASE_URL = '/api'
const BASE_URL = 'http://192.168.1.161'

// 0、模拟登陆
export const req_simulated_logo = () => ajax(`${BASE_URL}/writing/wechat/simulated/login`)

// 2、写作神器用户详情
export const req_user_details = () => ajax(`${BASE_URL}/writing/user/details`)

// 3、查询所有需要审核的稿件
export const review_manuscript = () => ajax(`${BASE_URL}/writing/review/manuscript`)

// 4、根据稿件id查找稿件详情
export const writing_manuscript = () => ajax(`${BASE_URL}/writing/manuscript`)

// 5、稿件审核
// export const review_manuscript = () => ajax(`${BASE_URL}/writing/review/manuscript`)

// 1、根据经纬度获取位置详情
// export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)
// // 2、获取食品分类列表
// export const reqFoodCategorys = () => ajax(BASE_URL+'/index_category')



