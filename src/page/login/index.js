import React from 'react'
import './index.css'
class Login extends React.Component{
    render(){
        return (
            <div className="login_box">
                <div className="login_form">
                    <img src={require('@/assets/image/logo.png').default}/>
                    <p>登录咱们圈儿</p>
                </div>
            </div>
        )
    }
}
export default Login;