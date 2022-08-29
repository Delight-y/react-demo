/**
 * @description 统一处理：按需加载页面
 */
import { FC, lazy, Suspense } from 'react'
import * as React from 'react'

interface lazyWarpProps {
    // 页面路径参数 eg:@view/Home.tsx
    path: string
    // 业务模块名称 eg:@views/test/test.tsx
    moduleName?: string
}

/**
 * 懒加载组件包装器
 */
const LazyWrap: FC<lazyWarpProps> = ({ path, moduleName = null }) => {
    const url = moduleName ? moduleName + '/' + path : path
    const LazyComponent = lazy(() => import(`../views/${url}`))
    return (
        // 渲染lazy组件
        <Suspense fallback={<div> Loading.... </div>}>
            <LazyComponent />
        </Suspense>
    )
}

export default LazyWrap
