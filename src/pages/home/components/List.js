import React, { Component } from 'react'
import { ListWrapper, ListItem} from '../style'
import ListImg from '../../../static/topic.jpg'
import { connect } from 'react-redux'

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
      </ListWrapper>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    //把仓库里的数据映射到props
    List: state.get('topic').get('articleList'),
  }
}

export default connect(mapStateToProps, null)(List)
