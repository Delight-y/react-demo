/*
 * @Author: Delight_y
 * @Date: 2022-08-26 10:36:57
 * @Description: 发现音乐
 * @LastEditors: Delight_y
 * @LastEditTime: 2023-12-21 11:40:55
 */
import { Button } from 'antd'
import React, { useEffect } from 'react'
import home from '@styles/home.module.scss'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Recommend from './Home/recommend'
import Grade from './Home/grade'
import Sheet from './Home/sheet'
import Radio from './Home/radio'
import Singer from './Home/singer'
import Album from './Home/album'

export default function Home() {
    // 当前所在二级导航
    const [currentType, setCurrentType] = useState(0)
    // 定义btn列表数据
    const btnList: Array<any> = [
        { text: '推荐', value: 'recommend', id: 0 },
        { text: '排行榜', value: 'grade', id: 1 },
        { text: '歌单', value: 'sheet', id: 2 },
        { text: '主播电台', value: 'radio', id: 3 },
        { text: '歌手', value: 'singer', id: 4 },
        { text: '新碟上架', value: 'album', id: 5 },
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
                            className={home.btn}
                            onClick={() => btnClick(btn.id)}
                        >
                            <span
                                style={{
                                    backgroundColor: currentType === btn.id ? '#9B0909' : '',
                                }}
                            >
                                {btn.text}
                            </span>
                        </Button>
                    )
                })}
            </div>
            {/* 推荐页 */}
            {currentType == 0 && <Recommend></Recommend>}
            {currentType == 1 && <Grade></Grade>}
            {currentType == 2 && <Sheet></Sheet>}
            {currentType == 3 && <Radio></Radio>}
            {currentType == 4 && <Singer></Singer>}
            {currentType == 5 && <Album></Album>}
        </div>
    )
}
