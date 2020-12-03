import React, { Component } from 'react'
import { ListWrapper, ListItem, LoadMore} from '../style'
import ListImg from '../../../static/topic.jpg'
import { connect } from 'react-redux'
import  { actionCreators } from '../store';

 class List extends Component {
  render() {
    return (
      <ListWrapper>
        {
          this.props.List.map( (item, index) => {
            return (
              <ListItem key={item.get('id')}> 
                <div className="article">
                  <div className="title">
                   <h2>{item.get('title')}</h2>
                  </div>
                  <div className="arcticle-content">
                  {item.get('desc')}
                  </div>
                  <div className="tips">
                   作者：
                  </div>
                </div>
                <img className="ListImg" src={ListImg} alt=""/>
              </ListItem>
            )
          })         
        }
        <LoadMore onClick={() => this.props.handleLoadMore(this.props.articlePage)}>加载更多</LoadMore>
      </ListWrapper>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    //把仓库里的数据映射到props
    List: state.get('topic').get('articleList'),
    articlePage: state.get('topic').get('articlePage'),
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleLoadMore(articlePage){
      dispatch(actionCreators.getList(articlePage))
     }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
