/*
 * @Date: 2023-12-13 11:17:30
 * @Description: 主页
 * @LastEditTime: 2023-12-19 18:14:54
 */
import React from 'react'
import NavBar from '@components/NavBar.tsx'
import { mainRoutes } from '@router/index.tsx'
import { Avatar, Button, Input, Layout } from 'antd'
import header from '@styles/header.module.scss'
import { Outlet } from 'react-router-dom'
import logo from '@assets/images/logo.png'
import avatar from '@assets/images/avatar.jpg'
import { CaretUpOutlined, SearchOutlined } from '@ant-design/icons'
// 首页
export default class Main extends React.Component {
    // 左侧导航数据
    get leftNav() {
        return mainRoutes
    }
    state = {
        iconLeft: 271,
    }
    // 接收子组件数据
    menuChange = (left) => {
        this.setState({ iconLeft: left })
    }
    render(): React.ReactNode {
        const { Header, Content } = Layout
        return (
            <Layout>
                <Header className={[header.header, 'flex align-center'].join(' ')}>
                    <div className="flex align-center">
                        <img src={logo} alt="" className={header.logo} />
                        <h1 className={header.title} style={{ marginBottom: '0px' }}>
                            网易云音乐
                        </h1>
                    </div>
                    {/* 导航栏 */}
                    <NavBar leftNav={this.leftNav} menuChange={this.menuChange}></NavBar>
                    <div style={{ height: '32px' }} className={'flex align-center'}>
                        <Input
                            className={[header.search, header.w160].join(' ')}
                            placeholder="音乐/视频/电台/用户"
                            prefix={<SearchOutlined />}
                        />
                        <Button
                            className={[
                                header.headerBtn,
                                'margin-left-offset28 margin-right-small',
                            ].join(' ')}
                        >
                            创作者中心
                        </Button>
                        <Avatar src={avatar} style={{ cursor: 'pointer' }}></Avatar>
                    </div>
                </Header>
                <Header className={header.subHeader}>
                    <CaretUpOutlined className={header.cor} style={{ left: this.state.iconLeft }} />
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
