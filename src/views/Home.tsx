import React from 'react'
import '@styles/test.scss'
import { Link, Outlet } from 'react-router-dom'
export default class Home extends React.Component {
    render(): React.ReactNode {
        return (
            <div>
                <nav>
                    <li>
                        <Link to="/hello">hello</Link>
                    </li>
                    <li>
                        <Link to="/login">login</Link>
                    </li>
                </nav>
                {/* 子路由页面 */}
                <Outlet></Outlet>
            </div>
        )
    }
}
