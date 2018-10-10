import React, { Component } from 'react'
import { Menu, Icon, Button } from 'antd'
import { Link } from 'react-router-dom'
import './index.less'
const SubMenu = Menu.SubMenu
const MenuItem = Menu.Item
export default class NavLeft extends Component{
    render () {
        return(
            <div className='nav-left'>
                <Menu mode='vertical' theme='dark'>
                    <MenuItem key='home'>
                        <Link to='/admin'>首页</Link>
                    </MenuItem><MenuItem key='secondPage'>
                        <Link to='/admin/secondPage'>第二页</Link>
                    </MenuItem>
                </Menu>
            </div>
        )
    }
}