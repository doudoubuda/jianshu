import React, { PureComponent } from 'react'
import { ListWrapper, ListItem, LoadMore} from '../style'
import ListImg from '../../../static/topic.jpg'
import { connect } from 'react-redux'
import  { actionCreators } from '../store';
import { Link } from 'react-router-dom'

 class List extends PureComponent {
  render() {
    return (
      <ListWrapper>
        {
          this.props.List.map( (item, index) => {
            return (
              <Link to={'/detail/' + item.get('id')} style={{ textDecoration:'none', color: 'black'}} key={item.get('id')}>
                <ListItem > 
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
              </Link>
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
