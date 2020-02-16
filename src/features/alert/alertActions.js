import { SUCCESS_ALERT } from "./alertConstants"


export const setAlert = (header, msg, alertType) => dispatch => {
    dispatch({
        type: SUCCESS_ALERT,
        payload: { header, msg, alertType }
    })

}

export const resetAlert = () => dispatch => {
    setTimeout(() => {
        dispatch({
            type: SUCCESS_ALERT,
            payload: []
        })
    }, 3000)

}