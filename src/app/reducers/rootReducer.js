

import { combineReducers } from "redux";

import { reducer as FormReducer } from "redux-form";

import jobsReducers from "../../features/form/jobReducers"
import alertReducers from "../../features/alert/alertReducers"





const appReducer = combineReducers({
    jobs: jobsReducers,
    form: FormReducer,
    alert: alertReducers
});

const rootReducer = (state, action) => {

    return appReducer(state, action)
}

export default rootReducer;