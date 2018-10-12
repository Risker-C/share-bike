import React, { Component } from 'react'
import './index.less'
import Header from '../../components/header'
import Footer from '../../components/footer'
import NavLeft from '../../components/navLeft'
import { Row, Col } from 'antd'
import { Layout } from 'antd';

const { Sider } = Layout;
export default class Admin extends Component{
    render () {
        return(
            <div className='admin-wrap'>
                <Row>
                    <Col span={4} className="nav-left-wrap">
                        <NavLeft/>
                    </Col>
                    <Col span={20} style={{height: '100vh',overflow: 'auto'}}>
                        <Header/>
                        <div className='contend-wrap'>
                            <div className="contend">
                                {this.props.children}
                            </div>
                        </div>
                        <Footer/>
                    </Col>
                </Row>
                {/*<Layout>*/}
                    {/*<Sider><NavLeft/></Sider>*/}
                    {/*<Layout>*/}
                        {/*<Header/>*/}
                        {/*<div className='contend-wrap'>*/}
                            {/*<div className="contend">*/}
                                {/*{this.props.children}*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        {/*<Footer/>*/}
                    {/*</Layout>*/}
                {/*</Layout>*/}
            </div>
        )
    }
}