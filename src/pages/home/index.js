import React, { PureComponent } from 'react'
import { HomeWrapper, HomeLeft, HomeRight } from './style'
import List from './components/List'
import Recommend from './components/Recommend'
import Topic from './components/Topic'
import Writer from './components/Writer'
import { BackTop } from './style'
import { connect } from 'react-redux'
import * as actionCreators from './store/actionCreators'

class Home extends PureComponent {
  handleScrollTop() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
         {/* <img src="" alt=""/> */}
         <Topic></Topic>
         <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
        { this.props.showBackTop ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null }
      </HomeWrapper>
    )
  }

  componentDidMount(){
    this.bindEvents()
  }
  
  bindEvents() {
    window.addEventListener('scroll', this.props.changeBackTop)
  }
}
const mapStateToProps = (state) => {
  return {
    //把仓库里的数据映射到props
    showBackTop: state.get('topic').get('showBackTop'),
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeBackTop(e){
      if( document.documentElement.scrollTop > 100) {
        dispatch(actionCreators.SCROLL_TOP(true))
      }else {
        dispatch(actionCreators.SCROLL_TOP(false))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
