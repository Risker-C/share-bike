import React, { Component } from 'react'
import './index.less'
import Header from '../../components/header'
import Footer from '../../components/footer'
import NavLeft from '../../components/navLeft'
import { Row, Col } from 'antd'
export default class Admin extends Component{
    render () {
        return(
            <div className='admin-wrap'>
                <Row>
                    <Col span={4}>
                        <NavLeft/>
                    </Col>
                    <Col span={20}>
                        <Header className='header'/>
                        <div className='contend-wrap'>
                            <div className="contend">
                                {this.props.children}
                            </div>
                        </div>
                        <Footer/>
                    </Col>
                </Row>
            </div>
        )
    }
}