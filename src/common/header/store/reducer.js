import * as actionsType from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    focused: false
})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state=defaultState, action) => {
  if(action.type === actionsType.SEARCH_FOCUS){
    return state.set('focused', !state.get('focused')) 
  }
  return state;
}