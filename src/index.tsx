import { createRoot } from 'react-dom/client'
import * as React from 'react'
import '@styles/global.css' // 引入全局公共样式文件

const container = document.getElementById('app')
const root = createRoot(container as Element)

// 采用hash路由模式
root.render(
    <div className='title'>欢迎来到react!</div>
)
