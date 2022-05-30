import  cakeReducer  from "./cake/cakeReducer";
import  iceReducer  from "./ice/iceReducer";
import userReducer from './user/userReducer'
import { combineReducers } from "redux";

const rootReducer=combineReducers({
    ice:iceReducer,
    cake:cakeReducer,
    user:userReducer
})

export default rootReducer