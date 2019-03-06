/*
ajax请求函数模块
返回值: promise对象(异步返回的数据是: response.data)
 */
import axios from 'axios'

window.Promise = Promise // 解决ie找不到Promise

axios.defaults.withCredentials = true // 跨域带sension

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

export default function ajax (url, data={}, type='GET') {

  return new Promise(function (resolve, reject) {
    // 执行异步ajax请求
    let promise
    if (type === 'GET') {
      // 准备url query参数数据
      let dataStr = '' //数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发送get请求

      promise = axios.get(url)
    } else {

      // 发送post请求
      debugger

      // let params = {_method:'put'}
      // let methods = 'post'
      // let conf = {url:url,methods:methods,params:params,data:data}
      // promise = axios.post(url,data,
      //   {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
      // promise = axios.post(url,params, data)

      var qs = require('qs');
      promise = axios.post(url, qs.stringify({"data": JSON.stringify(data)}))
    }
    promise.then(function (response) {
      // 成功了调用resolve()
      resolve(response.data)
    }).catch(function (error) {
      //失败了调用reject()
      reject(error)
    })
  })
}

/*
const response = await ajax()
const result = response.data

const resule = await ajax()
 */
