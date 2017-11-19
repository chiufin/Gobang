import ActionTypes from '../constants/ActionTypes'
import { updateObject, createReducer } from './reducerUtils'

const initialState = {
    num: 0
}

const increment = (state, action) => updateObject(state, { num: state.num + 1 })
const decrement = (state, action) => updateObject(state, { num: state.num - 1 })

    
export default createReducer(initialState, {
    [ActionTypes.INCREASE]: increment,
    [ActionTypes.DECREASE]: decrement
});