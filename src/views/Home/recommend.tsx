/*
 * @Author: Delight_y
 * @Date: 2023-12-20 15:42:39
 * @Description: 推荐页
 * @LastEditors: Delight_y
 * @LastEditTime: 2023-12-21 18:49:03
 */
import * as React from 'react'
import Home from '../Home'
import home from '@styles/home.module.scss'
import { Button, Carousel, ConfigProvider } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

export default function Recommend() {
    const recommendList: Array<any> = [
        { src: 'https://p1.music.126.net/-LRhyGfL-OOEe-_VQcYkTA==/109951169189305360.jpg' },
        { src: 'http://p1.music.126.net/Yfz48IdKHC3OrlnSfoR2cQ==/109951169189971364.jpg' },
        { src: 'https://p1.music.126.net/GGrmgF-OsvvedV1PJu2m2A==/109951169190148550.jpg' },
        { src: 'https://p1.music.126.net/-acxXiYt5w8L_BwN_vgjFA==/109951169190256973.jpg' },
        { src: 'https://p1.music.126.net/cGuvL0qvdrHE_pgIxw2jig==/109951169190177928.jpg' },
        { src: 'https://p1.music.126.net/L7xZiZyvYwJroSUlzF7Q2w==/109951169190207573.jpg' },
        { src: 'https://p1.music.126.net/0DExXV3CQZBiwJf5lPCgew==/109951169190029462.jpg' },
    ]
    // 当前轮播所显示的图片src
    const [currentImg, setCurrentImg] = React.useState(recommendList[0].src) // 默认第一张
    const carouselRef = React.useRef<any>(null);
    // 轮播前获取下一张图片
    const beforeChange = next => {
        setCurrentImg(recommendList[next].src)
    }
    // 切换走马灯
    const changeCarousel = pos => {
        if (pos == 'next') {
            carouselRef.current?.next()
        } else {
            carouselRef.current?.prev()
        }
    }
    return (
        <div>
            {/* 走马灯 */}
            <div
                className={home.recommendTop}
                style={{ backgroundImage: `url(${currentImg}?imageView&blur=40x20)` }}
            >
                <LeftOutlined className={home.icon} onClick={() => changeCarousel('previous')}/>
                <div className={home.warp}>
                    <Carousel
                        className={home.recommendCarousel}
                        autoplay
                        beforeChange={(current, next) => beforeChange(next)}
                        ref={carouselRef}
                    >
                        {recommendList.map((img, index) => {
                            return <img src={img.src} key={index} />
                        })}
                    </Carousel>
                    <div className={home.download}></div>
                </div>
                <RightOutlined className={home.icon} onClick={() => changeCarousel('next')}/>
            </div>
        </div>
    )
}
