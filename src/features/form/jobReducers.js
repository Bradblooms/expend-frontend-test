
import { createReducer } from "../../app/util/reducerUtil";

import { JOB_RECIEVED, JOB_STORED, JOB_ERORR } from "./jobConstants"

const initialState = {
    items: []
}


export const jobRecieved = (state, payload) => {
    return {
        ...state,
        loading: true
    }
}
export const jobStored = (state, payload) => {
    return {
        ...state,
        loading: false,
        items: payload,
        type: "success"
    }
}

export const jobErorr = (state, payload) => {
    return {
        ...state,
        loading: false,
        items: payload,
        type: "error"
    }
}



export default createReducer(initialState, {
    [JOB_RECIEVED]: jobRecieved,
    [JOB_STORED]: jobStored,
    [JOB_ERORR]: jobErorr,
})