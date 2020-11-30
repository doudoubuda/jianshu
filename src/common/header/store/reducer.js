import * as actionsType from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    totalPage: 0, //总页数
    currentPage: 0, // 当前页数
})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state=defaultState, action) => {
  console.log("action.type", action)
  switch(action.type){
    case actionsType.SEARCH_FOCUS:
      return state.set('focused', !state.get('focused')) 
    case actionsType.SEARCH_HEADER_LIST:
      return state.set('list', action.data).set('totalPage', action.totalPage)
    case actionsType.Mouse_IN_Header:
      return state.set('mouseIn', !state.get('mouseIn'))
    case actionsType.Custom_Current_Page:
      return state.set('currentPage', action.currentPage)
    case actionsType.Custom_Total_Page:
      return state.set('totalPage', action.totalPage)      
    default:
      return state
  }

}