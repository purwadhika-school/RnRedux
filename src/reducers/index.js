import { combineReducers } from 'redux'
import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware'
import { 
  FETCH_DATA,
  FETCH_DATA_SWAPI
} from '../actions/index'



export const data = (state = {
  items: '',
}, action) => {
  switch (action.type){
    case `${FETCH_DATA}`: 
      return {
        ...state,
        items: 'This is data from redux'
      }

    default: 
      return state
  }
}

export const dataSwapi = (state ={ isLoading: false, data: {} }, action) => {
  switch (action.type) {
    case `${FETCH_DATA_SWAPI}_PENDING`:
      return {
        ...state,
        isLoading: true
      }
      
    case `${FETCH_DATA_SWAPI}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        isLoading: false
      }

    case `${FETCH_DATA_SWAPI}_REJECTED`:
      return {
        ...state,
        isLoading: false
      }

    default: 
      return state
  }
}


const rootReducer = combineReducers({
  data: data,
  dataSwapi: dataSwapi
})

export default rootReducer
