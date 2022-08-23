import React from 'react'
import NavBar from '@components/NavBar.tsx'
import { mainRoutes } from '@router/index.tsx'
import { Layout } from 'antd'
import nav from '@styles/navbar.module.scss'

// 首页
export default class Home extends React.Component {
    // 左侧导航数据
    get leftNav() {
        return mainRoutes
    }
    render(): React.ReactNode {
        const { Sider, Content } = Layout
        return (
            <Layout>
                <Sider className={nav.navBar}>
                    {/* 导航栏 */}
                    <NavBar leftNav={this.leftNav}></NavBar>
                </Sider>

                {/* 页面主体内容 */}
                <Layout>
                    <Content></Content>
                </Layout>
            </Layout>
        )
    }
}
