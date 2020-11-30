import React, { Component } from 'react'
import { connect } from 'react-redux'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper,
  SearchInfo, SearchInfoTitle, SearchInfoSwitch,SearchInfoItem,SearchInfoList
} from './style'
import { CSSTransition } from 'react-transition-group';
import  { actionCreators } from './store';


class Header extends Component {
   showSearchInfo  () {
    if(this.props.focused) {
      return (
        <SearchInfo>
        <SearchInfoTitle>
          热门搜索
          <SearchInfoSwitch>换一批</SearchInfoSwitch>
        </SearchInfoTitle>
        <SearchInfoList>
          {this.props.list.map( (item, index) => {
            return(
              <SearchInfoItem>{item}</SearchInfoItem>
            )
          })}
        </SearchInfoList>
      </SearchInfo>
      )
    }else {
      return null
    }
  }
  render(){
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
            in={this.props.focused}
            timeout={300}
            classNames='slide'
            >
              <NavSearch
                onFocus={this.props.handleInputFocus}
                onBlur={this.props.handleInputBlur}
                className={ this.props.focused ? 'focused': ''}
                >
              </NavSearch>
            </CSSTransition>
            <span className={this.props.focused ? "focused iconfont": 'iconfont'}>&#xe610;</span>
            {this.showSearchInfo()}
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
}

const mapStateToProps = (state) => {
  return {
   //把仓库里的数据映射到props
   focused: state.get('header').get('focused'),
   list: state.get('header').get('list')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus () {
      dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur () {
      dispatch(actionCreators.searchFocus())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
