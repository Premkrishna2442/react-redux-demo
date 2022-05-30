import {success,request,failure} from './userType'
import axios from 'axios'
export const userRequest=()=>{
    return{
    type:request
    }
}

export const userSuccess=(users)=>{
    return{
    type:success,
    payload:users
    }
}

export const userFailure=(error)=>{
    return{
        type:failure,
        payload:error
    }
}

 const fetchUsers=()=>{
    return (dispatch)=>{
        dispatch(userRequest)
        axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
            const users=  res.data
            console.log("🚀 ~ file: userAction.js ~ line 28 ~ axios.get ~ users", users)
            dispatch(userSuccess(users))
        }).catch((error)=>{
            const err=error.message
            console.log("🚀 ~ file: userAction.js ~ line 32 ~ axios.get ~ err", err)
            dispatch(userFailure(err))
        }
        )
        }
    }


    export default fetchUsers;