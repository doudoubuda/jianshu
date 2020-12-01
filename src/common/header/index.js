import React, { Component } from 'react'
import { connect } from 'react-redux'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper,
  SearchInfo, SearchInfoTitle, SearchInfoSwitch,SearchInfoItem,SearchInfoList
} from './style'
import { CSSTransition } from 'react-transition-group';
import  { actionCreators } from './store';


class Header extends Component {
   showSearchInfo  () {
    let panelList = []
    let list = this.props.list.toJS()
    console.log("22")
    if(this.props.focused || this.props.mouseIn){
      panelList = list.slice(this.props.currentPage*10, this.props.currentPage*10+10)
    }
    if(this.props.focused || this.props.mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={this.props.handleMouseIn}
          onMouseLeave={this.props.handleMouseIn}
        >
        <SearchInfoTitle>
          热门搜索
          <SearchInfoSwitch onClick={() => this.props.handlePage(this.props.currentPage, this.props.totalPage, this.spinIcon)}>
            
            <span className="searchIcon">
              <span ref={ (icon) => this.spinIcon = icon} className='iconfont spin'>&#xe7cf;</span> 
              换一批          
            </span>
          </SearchInfoSwitch>
        </SearchInfoTitle>
        <SearchInfoList>
          {
             panelList.map( (item, index) => {
              return(
                <SearchInfoItem>{item}</SearchInfoItem>
              )
            })
          }
   
          
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
        <NavItem className="right">
        <Addition>
        <Button className="writting">
          <span className="iconfont">&#xe600;</span>
          写文章
        </Button>
        <Button className="reg">注册</Button>
      </Addition>
        </NavItem>
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
                onFocus={() => this.props.handleInputFocus(this.props.list)}
                onBlur={this.props.handleInputBlur}
                className={ this.props.focused ? 'focused': ''}
                >
              </NavSearch>
            </CSSTransition>
            <span className={this.props.focused ? "focused iconfont": 'iconfont'}>&#xe610;</span>
            {this.showSearchInfo()}
          </SearchWrapper>
      </Nav>
    </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
   //把仓库里的数据映射到props
   focused: state.get('header').get('focused'),
   mouseIn: state.get('header').get('mouseIn'),
   list: state.get('header').get('list'),
   totalPage: state.get('header').get('totalPage'), //总页数
   currentPage: state.get('header').get('currentPage'), // 当前页数
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus (list) {
      list.size === 0 && dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur () {
      dispatch(actionCreators.searchFocus())
    },
    handleMouseIn(){
      dispatch(actionCreators.Mouse_IN_Header())
    },
    handleMouseOut(){
      dispatch(actionCreators.Mouse_IN_Header())
    },
    handlePage(cerrent,total, spin){
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
      if (originAngle) {
        originAngle = parseInt(originAngle, 10)
      }else {
        originAngle = 0
      }
      spin.style.transform = `rotate(${originAngle+360}deg)`;
      console.log("span", spin)
      if(cerrent<total-1){
        cerrent += 1
      }else {
        cerrent = 1
      }
      dispatch(actionCreators.CustomCurrentPage(cerrent))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
