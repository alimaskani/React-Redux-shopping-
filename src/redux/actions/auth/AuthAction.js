import {
    REQ_LOGIN_START,
    REQ_LOGIN_SUCCESS,
    REQ_LOGIN_FAILED,
} from "./ActionTypes";



export const LoginUser = async (dispatch) => {
    const apiUrl = `https://apitester.ir/api/Products`;
    let result = await fetch(apiUrl)
        .then(response => response.json())
        .then(data => dispatch(ReqLoginSuccess(data)))
        .catch(error => {dispatch(ReqLoginFailed(error))})
    return result
}


export const ReqLoginStart = () => ({
    type:REQ_LOGIN_START,
})

export const ReqLoginSuccess = (data) => ({
    type:REQ_LOGIN_SUCCESS,
    payload:data
})

export const ReqLoginFailed = (errorMessage) => ({
    type:REQ_LOGIN_FAILED,
    payload:errorMessage

})