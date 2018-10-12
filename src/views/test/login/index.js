import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
    },
};

export default class testLogin extends Component{

    constructor(props){
        super(props)
    }

    handleSubmit = (e) => {
        let username = document.getElementById('username')
        let password = document.getElementById('password')
        console.log(username.value, password.value)
    }

    render() {
        return (
            <Form layout="inline" onSubmit={this.handleSubmit}>
                <FormItem
                    {...formItemLayout}
                    lable='warning'
                    validateStatus="warning"
                >
                    <Input id='username' prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                </FormItem>
                <FormItem>
                    <Input id='password' prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit">
                        Log in
                    </Button>
                </FormItem>
            </Form>
        );
    }
}