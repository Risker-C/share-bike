import React, { Component } from 'react'
import { Card } from 'antd'
import echarts from 'echarts/lib/echarts'   //引入echarts核心包
import echartsTheme from '../echartTheme'   //引入样式
import 'echarts/lib/component/legend'       //引入legend组件
import ReactEcharts from 'echarts-for-react'//引入第三方封装好的库
import 'echarts/lib/chart/bar'              //引入柱状图
class Bar extends Component{
    
    constructor(props){
        super(props)
    }

    componentWillMount(){
        echarts.registerTheme('Bar1',echartsTheme)
        this.renderBar1()
        this.renderBar2()
    }
    renderBar1 = () => {
        this.option1 = {
            title: {
                text:'OFO周骑行订单'
            },
            tooltip : {
                trigger: 'axis'
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['星期一','星期二','星期三','星期四','星期五','星期六','星期日'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    type:'value'
                }
            ],
            series: [{
                name: 'ofo订单量',
                type: 'bar',
                data: [500, 1000, 1600, 3000, 2800, 2600, 2870]
            }]
        }
    }

    renderBar2 = () => {
        this.option2 = {
            title: {
                text:'用户骑行订单'
            },
            tooltip : {
                trigger: 'axis'
            },
            legend:{
                data:['ofo订单量', '摩拜订单量', '哈喽订单量']
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['星期一','星期二','星期三','星期四','星期五','星期六','星期日'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    type:'value'
                }
            ],
            series: [
                {
                    name: 'ofo订单量',
                    type: 'bar',
                    data: [300, 600, 800, 1800, 2000, 1500, 1000]
                },
                {
                    name: '摩拜订单量',
                    type: 'bar',
                    data: [500, 1000, 1600, 3000, 2800, 2600, 2870]
                },
                {
                    name: '哈喽订单量',
                    type: 'bar',
                    data: [600, 1200, 1800, 5000, 6000, 8000, 10000]
                },
            ]
        }
    }


    render () {

        return(
            <div className=''>
               <Card
                   title='柱形图表一'
               >
                   <ReactEcharts theme = 'Bar1' option={this.option1}> </ReactEcharts>
               </Card>
                <Card
                    title='柱形图表2'
                >
                    <ReactEcharts theme = 'Bar1' option={this.option2}> </ReactEcharts>
                </Card>
            </div>
        )
    }
}
export default Bar