import { SUCCESS_ALERT } from './alertConstants'
import { createReducer } from '../../app/util/reducerUtil'

const initialState = []


export const setAlertReducer = (state, payload) => {
    return {
        ...state,
        success: payload
    }
}


export default createReducer(initialState, {
    [SUCCESS_ALERT]: setAlertReducer,

})