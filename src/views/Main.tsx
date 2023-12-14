/*
 * @Date: 2023-12-13 11:17:30
 * @Description: 主页
 * @LastEditTime: 2023-12-14 16:13:55
 */
import React from 'react'
import NavBar from '@components/NavBar.tsx'
import { mainRoutes } from '@router/index.tsx'
import { Layout } from 'antd'
import header from '@styles/header.module.scss'
import { Outlet } from 'react-router-dom'
import logo from '@assets/images/logo.png'
// 首页
export default class Main extends React.Component {
    // 左侧导航数据
    get leftNav() {
        return mainRoutes
    }
    render(): React.ReactNode {
        const { Header, Content } = Layout
        return (
            <Layout>
                <Header className={header.header}>
                    <div className="padding-right-medium flex justify-center">
                        <div className={header.logo}>
                            <img src={logo} alt="" />
                        </div>
                        <h1 className={header.title}>网易云音乐</h1>
                    </div>
                    {/* 导航栏 */}
                    <NavBar leftNav={this.leftNav}></NavBar>
                </Header>

                {/* 页面主体内容 */}
                <Layout className="mainContent">
                    <Content>
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        )
    }
}
