import React, { Component } from 'react'
import { LoginWrapper } from './style'

export default class Login extends Component {
  render() {
    return (
      <LoginWrapper>
        <div className="login-content">
        <div className="title">
          <span className="title-panel title-padding">
            登录
          </span>
          <b className="title-padding">.</b>
          <span className="title-panel title-padding">
            注册
          </span>
        </div>
        <div className="content">
          <input type="text" placeholder="手机号或邮箱"/>
          <input type="password" placeholder="密码"/>
        </div>
        {/* <div className="tips">
          <div className="tip-left">
            <input type="radio" name="cjf" id="transfer" value="transfer" />
          </div>
          <div className="tip-right">
            
          </div>
        </div> */}
        <div className="login">
          <button>登录</button>
        </div>
        </div>
      </LoginWrapper>
    )
  }
}
