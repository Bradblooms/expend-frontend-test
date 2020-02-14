import { STORE_JOBS } from "./jobConstants"
import axios from "axios"
import { reset } from "redux-form"


export const storeJobs = jobs => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'aplication/json'
        }
    }
    const { firstName, lastName, email, phone_number } = jobs

    const body = JSON.stringify({ firstName, lastName, email, phone_number })

    console.log(JSON.parse(body))

    try {
        const res = await axios.post('http://example.com/api/v1/submit-form ', body, config)
        console.log('success', res.data)

    } catch (err) {
        console.log(err)
        dispatch(reset("form"));
    }

}