import React, { Component } from 'react'
import { HomeWrapper, HomeLeft, HomeRight } from './style'
import List from './components/List'
import Recommend from './components/Recommend'
import Topic from './components/Topic'
import Writer from './components/Writer'

export default class Home extends Component {
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
      </HomeWrapper>
    )
  }
}
