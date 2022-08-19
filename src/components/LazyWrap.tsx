/**
 * @description 统一处理：按需加载页面
 */
import { FC, lazy, Suspense } from 'react'
import * as React from 'react'

interface lazyWarpProps {
    // 页面路径参数 eg:@view/Home.tsx
    path: string
}

/**
 * 懒加载组件包装器
 */
const LazyWrap: FC<lazyWarpProps> = ({ path }) => {
    const LazyComponent = lazy(() => import(`../views/${path}`))
    return (
        // 渲染lazy组件
        <Suspense>
            <LazyComponent />
        </Suspense>
    )
}

export default LazyWrap
