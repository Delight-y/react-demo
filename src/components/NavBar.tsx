/**
 * @description 左侧导航栏组件
 */
import * as React from 'react'
import { Menu, MenuProps } from 'antd'
import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

type MenuItem = Required<MenuProps>['items']

export default function NavBar(props: any) {
    // 处理导航数据
    const navData: MenuItem = props.leftNav
    // 获取到当前路由信息
    const location = useLocation()
    // 每次切换路由，获取当前最新的pathname,并赋给menu组件
    useEffect(() => {
        setMenuSelect(location.pathname)
    }, [location])
    // 默认选择首页
    const [menuSelect, setMenuSelect] = useState('/')
    return (
        <div>
            <Menu mode="inline" selectedKeys={[menuSelect]}>
                {/* menu切换时跳转到对应路由页面 */}
                {navData.map((route: any) => (
                    <Menu.Item key={route.path}>
                        <NavLink to={route.path}>{route.name}</NavLink>
                    </Menu.Item>
                ))}
            </Menu>
        </div>
    )
}
