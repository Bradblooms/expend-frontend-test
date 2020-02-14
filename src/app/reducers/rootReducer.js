

import { combineReducers } from "redux";

import { reducer as FormReducer } from "redux-form";

import jobsReducers from "../../features/form/jobReducers"





const appReducer = combineReducers({
    jobs: jobsReducers,
    form: FormReducer
});

const rootReducer = (state, action) => {

    return appReducer(state, action)
}

export default rootReducer;