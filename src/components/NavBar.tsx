/*
 * @Date: 2023-12-13 11:17:30
 * @Description: 左侧导航栏组件
 * @LastEditTime: 2023-12-19 18:32:48
 */
import * as React from 'react'
import { Menu, MenuProps } from 'antd'
import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

type MenuItem = Required<MenuProps>['items']

export default function NavBar(props: any) {
    // 处理导航数据
    const nav: MenuItem = props.leftNav[0].children
    const navData = nav.map((route: any) => {
        // 添加menu key
        route!.key = route.path
        return route
    })
    // 获取到当前路由信息
    const location = useLocation()
    const navigate = useNavigate()
    // 默认选择首页
    const [menuSelect, setMenuSelect] = useState('/home')
    /**
     * 副作用钩子，一般用于异步请求，接收两个参数： 第一个参数异步操作 第二个参数数组 只要数组变化，useEffect就会执行，若第二个参数为空，useEffect会在每次组件渲染时执行；
     */
    // 每次切换路由，获取当前最新的pathname,并赋给menu组件
    useEffect(() => {
        // 初始化路由重定向
        if (location.pathname === '/') {
            navigate('/home')
        }
        // 获取当前选中的menu item
        getSelectedMenu()
    }, [location.pathname])
    // 动态计算icon定位元素的left数据
    const getSelectedMenu = () => {
        let iconLeft = 0
        // 获取当前选中的menu item
        const menuSelected = document.getElementsByClassName('ant-menu-item-selected')[0]
        // 获取该元素到浏览器可视范围的距离
        const rect = menuSelected.getBoundingClientRect()
        // 动态计算icon的left值
        iconLeft = rect.left + (rect.width - 14) / 2
        props.menuChange(iconLeft) // 将数据传递到父组件
    }
    // 点击左侧菜单 进行路由跳转
    const onclick = ({ key }) => {
        setMenuSelect(key)
        navigate(key)
    }
    return (
        <div>
            <Menu
                mode="horizontal"
                theme="dark"
                selectedKeys={[menuSelect]}
                items={navData}
                onClick={onclick}
            />
        </div>
    )
}
