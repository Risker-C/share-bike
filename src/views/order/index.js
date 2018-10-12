import React, { Component } from 'react'
import './index.less'
import { Form, Select, DatePicker, Card, Button, Table, message,Modal } from 'antd'
import axios from '../../axios'
const FormItem = Form.Item
const Option = Select.Option
const {RangePicker} = DatePicker

class FilterForm extends Component{
    
    constructor(props){
        super(props)
    }
    state = {
        selectCity: '',   //选择的城市
        selectOrder: '',  //选择的订单
        dataSource: [],   //列表数据
        pn: 1,            //列表页码
        loading: {
            spinning: true,
            tip: '数据拼命加载中',
            size: 'large'
        },
        selectedRowKeys: [],//列表选中的Key值
        selectedItem: [], //列表选中的行
        pagination: {     //分页器配置
            total: 0,     //列表行数
            pageSize: 10, //列表页数
            current: 1,
            onChange: (page) => {
                console.log(page)
                this.setState({
                    pn: page,
                    selectedRowKeys: [],
                    selectedItem:[]
                }, () => this.getData())
            }
        },
        visible: false,
        endItem: [],

    }
    //订单状态数据
    orderData = [
        {
            label: '全部',
            id: 0
        },
        {
            label: '进行中',
            id: 1
        },
        {
            label: '结束行程',
            id: 2
        }
    ]
    //城市数据
    cityData = [
        {
            label: '北京',
            id: '0'
        },
        {
            label: '上海',
            id: '1'
        },
        {
            label: '广东',
            id: '2'
        }
    ]


    //查询方法
    handleSearch = () => {
        const value = this.props.form.getFieldsValue()
        console.log(value)
    }

    //重置输入框内容
    handleReset = () => {
        this.props.form.resetFields()
    }

    //订单详情功能
    handleDetail = () => {
        if (this.state.selectedItem.length != 0){
            console.log(this.state.selectedItem)
            window.open(`/#/common/order/detail/${this.state.selectedItem[0].id}`, '_blank')
        } else {
            message.warning('请选择一个操作对象', 1)
        }
    }

    //结束订单
    handleDone = () => {
        if (this.state.selectedItem.length != 0){
            console.log(this.state.selectedItem)
            axios.get('/order/ebike_info').then(res => {
                console.log(res)
                this.setState({
                    endItem: res.result,
                    visible: true
                })
            })
        } else {
            message.warning('请选择一个操作对象', 1)
        }
    }

    //确认结束订单
    handleEnd = () => {
        axios.get('/order/finish_order', this.state.endItem.id).then(res => {
            console.log(this.state.endItem.id,res)
            if(res.code == 0){
                this.setState({
                    visible: false,
                    selectedRowKeys: [],
                    selectedItem:[]
                })
                message.success('结束订单成功')
                this.getData()
            }
        })
    }
    //获取数据
    getData = () => {
        this.setState({
            loading: {
                ...this.state.loading,
                spinning:true
            }
        }, () => {
            axios.get('/order/list', {page: this.state.pn}).then(res => {
                console.log(res)
                if(res.code == 0){
                    console.log(res.result.item_list)
                    this.setState({
                        dataSource: res.result.item_list.map((item, index) => {
                            item.key = index
                            return item
                        }),
                        loading: {
                            ...this.state.loading,
                            spinning: false
                        },
                        pagination: {
                            ...this.state.pagination,
                            pageSize: res.result.page_size,
                            total: res.result.total_count,
                            current: this.state.pn
                        }
                    })
                }
            })
        })
    }

    //页面加载前钩子函数
    componentWillMount(){
        this.getData()
    }

    render () {
        //列表表头项
        const columns = [
            {
                title:'订单编号',
                dataIndex:'order_sn',
                key: 'order_sn'
            },
            {
                title: '车辆编号',
                dataIndex: 'bike_sn',
                key: 'bike_sn'
            },
            {
                title: '用户名',
                dataIndex: 'user_name',
                key: 'user_name'
            },
            {
                title: '手机号',
                dataIndex: 'mobile',
                key: 'mobile'
            },
            {
                title: '里程',
                dataIndex: 'distance',
                render(distance){
                    return distance/1000 + 'Km';
                },
                key: 'distance'
            },
            {
                title: '行驶时长',
                dataIndex: 'total_time',
                key: 'total_time'
            },
            {
                title: '状态',
                dataIndex: 'status',
                key: 'status'
            },
            {
                title: '开始时间',
                dataIndex: 'start_time',
                key: 'start_time'
            },
            {
                title: '结束时间',
                dataIndex: 'end_time',
                key: 'end_time'
            },
            {
                title: '订单金额',
                dataIndex: 'total_fee',
                key: 'total_fee'
            },
            {
                title: '实付金额',
                dataIndex: 'user_pay',
                key: 'user_pay'
            }
        ]
        //Table选择功能配置
        const rowSelection = {
            fixed: true,//把选择框列固定在左边
            type: 'radio',//选择方式为单选
            selectedRowKeys: this.state.selectedRowKeys,//选中的行数据
            onChange: (selectedRowKeys, selectedRow) => {
                console.log(selectedRowKeys, selectedRow)
                this.setState({
                    selectedRowKeys: selectedRowKeys,
                    selectedItem: selectedRow
                })
            }
        }
        const { getFieldDecorator } = this.props.form
        return(
            <div>
                <Card>
                    <Form layout='inline'>
                        <FormItem label = '城市:'>
                            {
                                getFieldDecorator('city',{})(
                                    <Select
                                        placeholder='请选择一个城市'
                                        style={{width: '200px'}}
                                    >
                                        {this.cityData.map(item => <Option key={item.id} value={item.id}>{item.label}</Option>)}
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem  label = '订单时间:'>
                            {
                                getFieldDecorator('time',{})(
                                    <RangePicker/>
                                )
                            }
                        </FormItem>
                        <FormItem label = '订单状态:'>
                            {
                                getFieldDecorator('label',{})(
                                    <Select
                                        placeholder='请选择一个状态'
                                        style={{width: '200px'}}
                                    >
                                        {this.orderData.map(item => <Option key={item.id} value={item.id}>{item.label}</Option>)}
                                    </Select>
                                )
                            }
                        </FormItem>
                        <div className='btn-wrap mt10'>
                            <Button type='primary' onClick={this.handleSearch}>
                                查询
                            </Button>
                            <Button className='ml10' onClick={this.handleReset}>
                                重置
                            </Button>
                        </div>
                    </Form>
                </Card>
                <Card>
                    <div>
                        <Button type='primary' onClick={this.handleDetail}>订单详情</Button>
                        <Button type='primary' className='ml10' onClick={this.handleDone}>结束订单</Button>
                    </div>
                </Card>
                <Card>
                    <Table
                        bordered
                        dataSource={this.state.dataSource}
                        columns={columns}
                        rowSelection={rowSelection}
                        loading={this.state.loading.spinning}
                        pagination = {this.state.pagination}
                    >
                    </Table>
                </Card>
                <Modal
                    title='删除确认框'
                    visible={this.state.visible}
                    onOk={this.handleEnd}
                    onCancel={() => this.setState({visible: false})}
                >
                    <ul className='ul-data'>
                        <li>
                            <span className='car-num li-title'>车辆编号：</span>
                            {this.state.endItem.bike_sn}
                        </li>
                        <li>
                            <span className='car-num li-title'>剩余电量：</span>
                            {this.state.endItem.battery}
                        </li>
                        <li>
                            <span className='car-num li-title'>行程开始时间：</span>
                            {this.state.endItem.start_time}
                        </li>
                        <li>
                            <span className='car-num li-title'>当前位置：</span>
                            {this.state.endItem.location}
                        </li>
                    </ul>
                </Modal>
            </div>
        )
    }
}
export default Form.create()(FilterForm)