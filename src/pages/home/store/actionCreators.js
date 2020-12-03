import * as actionsType from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'

export const ADD_ARTICLE_LIST = () => ({
  type: actionsType.ADD_ARTICLE_LIST
})

const addArticleList = (data, nextPage) => ({
  type: actionsType.ADD_ARTICLE_LIST,
  data: fromJS(data),
  nextPage,
})

//不使用redux-thunk的话只能返回一个对象
// 使用redux-thunk的意义是返回一个函数
export const getList = (articlePage) => {
  return (dispatch) => {
    axios.get(`/api/addArticleList.json?page=${articlePage}`).then(
      (res) => {
        const data = res.data
        const action = addArticleList(data.data, articlePage+1)
        dispatch(action)
      }
    ).catch(
      (err) => {
        console.log("error")
      }
    )
  }
}