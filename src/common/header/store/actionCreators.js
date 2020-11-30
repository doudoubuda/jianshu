import * as actionsType from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'

export const searchFocus = () => ({
  type: actionsType.SEARCH_FOCUS
})

//处理换一换翻页
export const CustomTotalPage = (totalPage) => ({
  type: actionsType.Custom_Total_Page,
})
export const CustomCurrentPage = (currentPage) => ({
  type: actionsType.Custom_Current_Page,
  currentPage,
})
export const Mouse_IN_Header = () => ({
  type: actionsType.Mouse_IN_Header
})

 const changeHeaderList = (data) => ({
  type: actionsType.SEARCH_HEADER_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length/10)
})
//不使用redux-thunk的话只能返回一个对象
// 使用redux-thunk的意义是返回一个函数
export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headelist.json').then(
      (res) => {
        const data = res.data
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