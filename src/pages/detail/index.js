import React, { Component } from 'react'
import { DetailWrapper, DetailRight, DetailLeft} from './style'

export default class Detail extends Component {
  render() {
    console.log("this.props", this.props.match.params.id)
    return (
      <DetailWrapper>
        <div className="content">
          <DetailLeft>
            <h1 className="title">App开屏页如何设计？来看这五个常用的方法</h1>
            <img className="img" src="./assets/tips.jpg" alt=""/>
            <div className="tips">
              大家好，我是Clippp。今天为大家带来的文章是「开屏页」设计。用户只需要50毫秒(0.05秒)就能对网站/App做出评价，从而决定是留下还是离开。开屏页设计的合理性很大程度上影响了用户的初体验。
            </div>
            <div className="detail">
            根据极光的数据，截止2020年6月底，拼多多已上线超60个月，距离2018年7月上市也已经过去23个月，拼多多渗透率已达50.29%，位列全网第七，日活跃用户排名第六，在其一级行业（移动购物）和二级行业（综合商城）中都位列第二，仅次于淘宝；仅6月30日新增用户高达398万，位列全网新增第一。从用户转化漏斗图可以看到，拼多多新增转化率为30.77%，次日安装留存率和次日活跃留存率分别为81.88%和42.97%。
            </div>
          </DetailLeft>
          <DetailRight>
            <div className="recommend">
              <span>推荐阅读</span>
            </div>
            <div className="rec-panel">
              <div className="panel-detail">
              阿里持续被锤
              </div>
              <div className="count">
              阅读 2,237
              </div>
            </div>
            <div className="rec-panel">
              <div className="panel-detail">
              直角还是圆角？按钮设计背后的逻辑分析
              </div>
              <div className="count">
              阅读 2,2372
              </div>
            </div>
            <div className="rec-panel">
              <div className="panel-detail">
              如何建立数据看板
              </div>
              <div className="count">
              阅读 72
              </div>
            </div>
          </DetailRight>
        </div>
      </DetailWrapper>
    )
  }
}
