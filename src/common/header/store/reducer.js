import * as actionsType from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    focused: false,
    list: []
})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state=defaultState, action) => {
  switch(action.type){
    case actionsType.SEARCH_FOCUS:
      return state.set('focused', !state.get('focused')) 
    case actionsType.SEARCH_HEADER_LIST:
      return state.set('list', action.data)
    default:
      return state
  }

}