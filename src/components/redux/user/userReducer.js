import {request,success,failure} from './userType'



const initialState={
    loading:false,
    users:[],
    error:''
}


const userReducer=(state=initialState,action)=>{
   switch(action.type){
        case request:
            return{
                ...state,
                loading:true
            }
        case success:
            return{
                
                users:action.payload,
                error:'',
                loading:false
            }  
            
        case failure:
            return{
                users:'',
                loading:false,
                error:action.payload
            }
           default:
               return {
                   state
               } 
    }

}

export default userReducer