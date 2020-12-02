import React, { Component } from 'react'
import { RecommendWrapper, RecommendItem} from '../style'
import { connect } from 'react-redux'

class Recommend extends Component {
  render() {
    return (
      <div>
        <RecommendWrapper>
        {
          this.props.recommendList.map( (item) => {
            return (
              <RecommendItem>
                <img className="recommendImg" src={item.get('imgUrl')} alt=""/>
              </RecommendItem>
            )
          })          
        }
        </RecommendWrapper>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    //把仓库里的数据映射到props
    recommendList: state.get('topic').get('recommendList'),
  }
}

export default connect(mapStateToProps, null)(Recommend)
