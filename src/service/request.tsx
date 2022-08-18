/**
 * @description 基于axios的二次封装
 */
import axios, { AxiosRequestConfig, AxiosResponse, Canceler } from 'axios'

// 接口请求服务器域名
const baseURL: string = ''
// 用于取消请求
const CancelToken = axios.CancelToken

const apiCach = {
    taskList: [], // api请求列表
    // 新增请求
    addTask(config: AxiosRequestConfig, cancelToken: Canceler) {
        this.taskList.push({ origin: `${config.url}&${config.method}`, cancelToken })
    },
    // 删除请求
    deleteTask(config: AxiosRequestConfig) {
        // 以url跟method为唯一请求标识
        const url: string = `${config.url}&${config.method}`
        // 在当前请求列表中找到要取消的请求
        const index = this.taskList.find(i => i['origin'] === url)
        if (index > -1) {
            // 将该项请求取消掉
            this.taskList[index].cancelToken('cancelRequest' + config.url)
            // 从请求列表中剔除
            this.taskList.splice(index, 1)
        }
    },
}
// 创建一个axios实例
const request = axios.create({
    baseURL,
    timeout: 1000, // 请求超时时间
    withCredentials: true, // token验证
    // 请求头
    headers: {
        'Content-Type': 'multipart/form-data ;application/json; charset=utf-8',
    },
})

// 请求拦截
request.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        // 发送请求前统一进行处理
        // 进行请求判断 -> 处理重复请求问题 通过isCancel参数
        if (config.hasOwnProperty('isCancel') && config['isCancel']) {
            // 如果有这个属性 则重复请求时 取消之前的请求 只保留最后一个请求
            config.cancelToken = new CancelToken((c: Canceler) => {
                // 删除请求
                apiCach.deleteTask(config)
                // 新增请求
                apiCach.addTask(config, c)
            })
        }
        const method: string | undefined = config.method
        // 根据实际情况处理content-type
        config.headers = Object.assign(
            method === 'get'
                ? { 'content-type': 'application/x-www-form-urlencoded' }
                : { 'Content-Type': 'multipart/form-data; application/json; charset=utf-8' },
            config.headers
        )
        return config
    },
    (err: Error) => {
        // 异常抛出
        return Promise.reject(err)
    }
)
// 重定向到登录页 后续提到util中
const redirectLogin = () => {}
// 响应拦截
request.interceptors.response.use(
    (respose: AxiosResponse) => {
        // 获取服务端响应数据
        const { code, data, message } = respose.data
        // 约定code为400|401 重新登录
        if (code === 400 || code === 401) {
            return redirectLogin
        } else if (code === 200) {
            return data
        } else if (code) {
            // 抛出错误并进行提示
            return Promise.reject(data)
        } else {
            return Promise.resolve(data)
        }
    },
    (err: Error) => {
        return Promise.reject(err)
    }
)
export default request
