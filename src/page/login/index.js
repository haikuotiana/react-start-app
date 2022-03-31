import React,{useState} from 'react'
import './index.css'
import { Form, Input, Button, Checkbox,Space } from 'antd';
import { UserOutlined, LockOutlined,PoweroffOutlined} from '@ant-design/icons';
import Cookies from 'js-cookie';
import {Encrypt} from '@/utils/secret.js';
import { useNavigate } from 'react-router-dom';

const Login=()=>{
    const navigate = useNavigate()
    const [loadingFlag,setLoadingFlag]=useState(false);
    const onFinish = (values) => {
        console.log('Success:', values);
        setLoadingFlag(true)
        let pwdToken=Encrypt(values.password);
        Cookies.set('token',pwdToken);
        setTimeout(() => {
            setLoadingFlag(false);
            navigate("/")
        }, 2000)
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className="login_box">
            <div className="login_formBox">
                <img src={require('@/assets/image/logo.png').default}/>
                <p>欢迎登录咱们圈儿👏</p>
                <div className="login_input">
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        >
                        <Form.Item
                            name="username"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                            ]}
                        >
                            <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <a className="login-form-forgot" href="">
                            Forgot password
                            </a>
                        </Form.Item>

                        <Form.Item>
                            <Space style={{ width: '100%' }}>
                                <Button type="primary" htmlType="submit" className="login-form-button" loading={loadingFlag}>
                                    Log in
                                </Button>
                            </Space>
                            Or <a href="">register now!</a>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
}
export default Login;