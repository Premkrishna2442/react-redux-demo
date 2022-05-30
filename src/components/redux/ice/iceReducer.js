import { BUY_ICE } from "./iceType";


const initialState={
    noofice:10,
}

const iceReducer=(state=initialState,action)=>{
    console.log("-----",state, action)
    switch(action.type){
        case BUY_ICE: return{
            ...state,
            noofice:state.noofice-1
        }
        default: return state
    }
}
 export default iceReducer