
import { createReducer } from "../../app/util/reducerUtil";

import { STORE_JOBS } from "./jobConstants"

const initialState = {
    job: {}
}


export const jobsReducer = (state, payload) => {
    return {
        ...state,
        job: payload.jobs
    }
}



export default createReducer(initialState, {
    [STORE_JOBS]: jobsReducer
})