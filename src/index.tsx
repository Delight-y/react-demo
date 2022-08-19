import { createRoot } from 'react-dom/client'
import * as React from 'react'
import '@styles/global.scss' // 引入全局公共样式文件
import { HashRouter } from 'react-router-dom'
import App from './App'

const container = document.getElementById('app')
const root = createRoot(container as Element)

root.render(
    <HashRouter>
        <App />
    </HashRouter>
)
