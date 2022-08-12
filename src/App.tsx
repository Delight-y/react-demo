import React from 'react'
import '@styles/global.css'
import base from '@styles/base.module.css'
import '@styles/test.scss'
export default class App extends React.Component {
    render(): React.ReactNode {
        return (
            <div className="title">
                这里是App页面！
                <span className={base.title}>模块化样式</span>
            </div>
        )
    }
}
