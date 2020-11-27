import React from 'react'
import { connect } from 'react-redux'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper} from './style'
import { CSSTransition } from 'react-transition-group';
import  { actionCreators } from './store';

const Header = (props) => {
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
            in={props.focused}
            timeout={300}
            classNames='slide'
            >
              <NavSearch
                onFocus={props.handleInputFocus}
                onBlur={props.handleInputFocus}
                className={ props.focused ? 'focused': ''}
                >
              </NavSearch>
            </CSSTransition>
            <span className={props.focused ? "focused iconfont": 'iconfont'}>&#xe610;</span>
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

const mapStateToProps = (state) => {
  return {
   //把仓库里的数据映射到props
   focused: state.get('header').get('focused')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus () {
      dispatch(actionCreators.searchFocus())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
