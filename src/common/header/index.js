import React, { Component } from 'react'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper} from './style'
import { CSSTransition } from 'react-transition-group'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state= {
      focused: false
    }
  }

  render() {
    return (
      <HeaderWrapper>
        <Logo href="/"/>
        <Nav>
          <NavItem className="left active">首页</NavItem>  
          <NavItem className="left">下载APP</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <span className="iconfont">&#xe612;</span>
          </NavItem>
            <SearchWrapper>
             <CSSTransition
              in={this.state.focused}
              timeout={300}
              classNames='slide'
              >
                <NavSearch
                  onFocus={this.handleInputFocus}
                  onBlur={this.handleInputFocus}
                  className={ this.state.focused ? 'focused': ''}
                  >
                </NavSearch>
              </CSSTransition>
              <span className={this.state.focused ? "focused iconfont": 'iconfont'}>&#xe610;</span>
            </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting">
            <span className="iconfont">&#xe600;</span>
            写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
  handleInputFocus = () => {
    this.setState({
      focused: !this.state.focused
    })
  }
}
