
import axios from "axios"
import { reset } from "redux-form"

import { JOB_RECIEVED, JOB_STORED, JOB_ERORR } from "./jobConstants"

import { setAlert, resetAlert } from '../alert/alertActions'



export const storeJobs = job => async (dispatch, getState) => {

    dispatch({ type: JOB_RECIEVED })

    try {

        const options = {
            url: 'http://example.com/api/v1/submit-form',
            method: 'POST',
            timeout: 4000,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: job,
        };

        const response = await axios(options)



        dispatch({ type: JOB_STORED, payload: response.data })
        // dispatch success alert
        dispatch(setAlert('success', 'Form Submited Successfully', 'success'))

        // clear form after successfull submission
        dispatch(reset("form"));

        //in case of success alert will disapear in 2.5 sec

        dispatch(resetAlert())



    } catch (err) {
        // dispach network error alert

        dispatch({ type: JOB_ERORR })
        dispatch(setAlert('Network Error', "Somthing went wrong, please tray again", 'danger'))

    }

}