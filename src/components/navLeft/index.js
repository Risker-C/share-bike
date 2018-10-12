import React, { Component } from 'react'
import { Menu, Icon, Button } from 'antd'
import { Link } from 'react-router-dom'
import './index.less'
const SubMenu = Menu.SubMenu
const MenuItem = Menu.Item
const MenuItemGroup = Menu.ItemGroup


export default class NavLeft extends Component{
    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

    state = {
        openKeys: ['sub1'],
    };

    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    }
    render () {
        return(
            <div className='nav-left'>
                <Menu
                    mode='inline'
                    theme='dark'
                    // onOpenChange={this.onOpenChange}
                    // defaultSelectedKeys={['home']}
                    // defaultOpenKeys={['home']}
                    >
                    <MenuItem key='home'>
                        <Link to='/admin/home'>首页</Link>
                    </MenuItem>
                    <MenuItem key='secondPage'>
                        <Link to='/admin/secondPage'>第二页</Link>
                    </MenuItem>
                    <MenuItem key='Order'>
                        <Link to='/admin/order'>订单管理</Link>
                    </MenuItem>
                    <SubMenu key="echarts" title={<span><Icon type="mail" /><span>图表</span></span>}>
                        <Menu.Item key="Bar"><Link to='/admin/echarts/bar'>柱状图</Link></Menu.Item>
                        <Menu.Item key="Pie"><Link to='/admin/echarts/pie'>饼图</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="experiment" theme="outlined" /><span>测试组件</span></span>}>
                        <Menu.Item key="5"><Link to='/admin/test/login'>登录组件</Link></Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}