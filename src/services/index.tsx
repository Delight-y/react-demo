/**
 * @description Export all api
 */
import request from './request' // 引入axios基础配置
// 相关接口server服务器域名信息
import config from '@config/index.tsx'

// 获取所有的api请求信息
const serviceFiles = require.context('./modules', false, /\.tsx$/)
const serviceCombine = {},
    services = {}

// 遍历所有的api
serviceFiles.keys().forEach(key => {
    const filename = key.replace(/(\.\/|\.tsx)/g, '')
    // 每个业务模块名
    serviceCombine[filename] = serviceFiles(key)['default']
})

// 遍历每个模块
for (const module in serviceCombine) {
    services[module] = {}
    const apiMap = serviceCombine[module]
    // 获取服务器相关配置信息 defaultServer默认服务器访问域名
    const { defaultServer, servers } = config
    // 遍历每个模块下的所有api
    for (const apiName in apiMap) {
        // 接口请求调用时就采用services.module.apiName的方式
        services[module][apiName] = (data, apiUrl) => {
            // 处理每一个api
            const apiData = apiMap[apiName]
            const url = apiUrl || apiData.url
            const serverFlag = /^http/.test(url)
            let server = ''
            if (serverFlag) {
                // 若api指定了请求的域名server则根据所传server访问；否则就采用默认域名进行请求
                server = apiData.server ? servers[apiData.server] : servers[defaultServer]
            }
            const requestConfig = {
                method: apiData.type || 'get', // 默认get请求
                url: server + url,
                // 处理重复请求 存在不同模块就是要同时访问相同接口 这时你可以配置isCancel，这样就可以避免接口被取消掉
                isCancel: apiData.isCancel ? apiData.isCancel : false,
                headers: apiData.headers ? apiData.headers : {},
            }
            const dataName = requestConfig.method === 'get' ? 'params' : 'data'
            requestConfig[dataName] = data
            return request(requestConfig)
        }
    }
}

export default services
