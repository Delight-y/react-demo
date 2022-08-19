import router from './router'
import { useRoutes } from 'react-router-dom'
const App = () => {
    const appRoutesElement = useRoutes(router)
    return appRoutesElement
}
export default App
