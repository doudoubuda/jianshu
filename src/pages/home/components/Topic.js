import React, { Component } from 'react'
import { TopicWrapper, TopicItem} from '../style'
import topicImg from '../../../static/topic.jpg'
import { connect } from 'react-redux'

 class Topic extends Component {
  render() {
    return (
      <TopicWrapper>
        {
          this.props.topicList.map( (item, index) => {
            return (
              <TopicItem key={item.get('id')}> 
                <img className="topicImg" src={topicImg} alt=""/>
                <div className="topicContent">{item.get('title')}</div>
              </TopicItem>
            )
          })
        }
      </TopicWrapper>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    //把仓库里的数据映射到props
    topicList: state.get('topic').get('topicList'),
  }
}

export default connect(mapStateToProps, null)(Topic)