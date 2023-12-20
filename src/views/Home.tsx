/*
 * @Author: Delight-y
 * @Date: 2022-08-26 10:36:57
 * @Description: 发现音乐
 * @LastEditors: Delight_y
 * @LastEditTime: 2023-12-20 15:27:36
 */
import { Button } from 'antd'
import React, { useEffect } from 'react'
import home from '@styles/home.module.scss'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function Home() {
    // 当前所在二级导航
    const [currentType, setCurrentType] = useState(0)
    // 定义btn列表数据
    const btnList: Array<any> = [
        { text: '推荐', value: 0 },
        { text: '排行榜', value: 1 },
        { text: '歌单', value: 2 },
        { text: '主播电台', value: 3 },
        { text: '歌手', value: 4 },
        { text: '新碟上架', value: 5 },
    ]
    // 获取到当前路由信息
    const location = useLocation()
     // 切换路由
     useEffect(() => {
        // 重置数据
        setCurrentType(0)
    }, [location.pathname])
    // 二级导航点击事件
    const btnClick = val => {
        // 获取当前点击的二级导航类型
        setCurrentType(val)
    }
    return (
        <div>
            <div className={home.nav}>
                {btnList.map(btn => {
                    return (
                        <Button
                            type="text"
                            key={btn.value}
                            value={btn.value}
                            className={home.btn}
                            onClick={() => btnClick(btn.value)}
                        >
                            <span
                                style={{
                                    backgroundColor: currentType === btn.value ? '#9B0909' : '',
                                }}
                            >
                                {btn.text}
                            </span>
                        </Button>
                    )
                })}
            </div>
            <h1>this is {btnList[currentType].text} page!</h1>
        </div>
    )
}
