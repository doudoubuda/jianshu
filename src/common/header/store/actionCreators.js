import * as actionsType from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'

export const searchFocus = () => ({
  type: actionsType.SEARCH_FOCUS
})
 const changeHeaderList = (data) => ({
  type: actionsType.SEARCH_HEADER_LIST,
  data: fromJS(data)
})
//不使用redux-thunk的话只能返回一个对象
// 使用redux-thunk的意义是返回一个函数
export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headelist.json').then(
      (res) => {
        const data = res.data
        console.log('data', data)
        const action = changeHeaderList(data.data)
        dispatch(action)
      }
    ).catch(
      (err) => {
        console.log("error")
      }
    )
  }
}