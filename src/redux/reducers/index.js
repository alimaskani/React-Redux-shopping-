import React from "react";
import {combineReducers} from "redux";
import LoginUserReducer from "./AuthReducer";


export default combineReducers({
    LoginState : LoginUserReducer
})