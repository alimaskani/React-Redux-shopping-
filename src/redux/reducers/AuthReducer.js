import React from "react";
import {
    REQ_LOGIN_START,
    REQ_LOGIN_SUCCESS,
    REQ_LOGIN_FAILED
} from "../actions/auth/ActionTypes";

const initialState = {
    items:[],
    message:""
}


const LoginUserReducer = (state = initialState,action) => {
    switch (action.type) {

        case REQ_LOGIN_START :
            return {items:[],message: ""}
        case REQ_LOGIN_SUCCESS :
            return {items: action.payload,message: ""}
        case REQ_LOGIN_FAILED :
            return {items: [],message:action.payload}
        default :
            return state
    }
}

export default LoginUserReducer;