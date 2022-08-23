import { router }  from './router'
import { useRoutes } from 'react-router-dom'
const App = () => {
    // 引入路由
    const appRoutesElement = useRoutes(router)
    return appRoutesElement
}
export default App
