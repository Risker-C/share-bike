import React, { Component } from 'react'
import { Card } from 'antd'
import echarts from 'echarts/lib/echarts'   //引入echarts核心包
import echartsTheme from '../themeLight'   //引入样式
import 'echarts/lib/component/legend'       //引入legend组件
import ReactEcharts from 'echarts-for-react'//引入第三方封装好的库
import 'echarts/lib/chart/pie'              //引入柱状图

class Pie extends Component{
    
    constructor(props){
        super(props)
    }
    componentWillMount(){
        echarts.registerTheme('pie', echartsTheme)
        this.renderPie1()
        this.renderPie2()
    }
    renderPie1(){
        this.option1 = {
            title: {
                text: 'OFO周订单',
                x: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                right: '10px',
                top: '10px',
                data: ['周一','周二','周三','周四','周五', '周六', '周日']
            },
            series: [
                {
                    name: '骑行订单',
                    type: 'pie',
                    radius : '60%',
                    center: ['50%', '60%'],
                    data:[
                        {value:1000, name:'周一'},
                        {value:2000, name:'周二'},
                        {value:2000, name:'周三'},
                        {value:1800, name:'周四'},
                        {value:2700, name:'周五'},
                        {value:5000, name:'周六'},
                        {value:10000, name:'周日'},
                    ]
                }
            ]
        }
    }
    renderPie2(){
        this.option2 = {
            title: {
                text: 'OFO周订单',
                x: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                right: '10px',
                top: '10px',
                data: ['周一','周二','周三','周四','周五', '周六', '周日']
            },
            series: [
                {
                    name: '骑行订单',
                    type: 'pie',
                    radius : ['60%', '80%'],
                    center: ['50%', '60%'],
                    data:[
                        {value:1000, name:'周一'},
                        {value:2000, name:'周二'},
                        {value:2000, name:'周三'},
                        {value:1800, name:'周四'},
                        {value:2700, name:'周五'},
                        {value:5000, name:'周六'},
                        {value:10000, name:'周日'},
                    ]
                }
            ]
        }
    }
    render () {
        return(
            <div className='pie'>
                <Card
                    title='饼图一'
                >
                    <ReactEcharts option={this.option1} theme='pie'> </ReactEcharts>
                </Card>
                <Card
                    title='饼图二'
                >
                    <ReactEcharts option={this.option2} theme='pie'> </ReactEcharts>
                </Card>
            </div>
        )
    }
}
export default Pie