import { createRoot } from 'react-dom/client'
import * as React from 'react'
import '@styles/global.css' // 引入全局公共样式文件

import App from './App'

const container = document.getElementById('app')
const root = createRoot(container as Element)

root.render(<App />)
