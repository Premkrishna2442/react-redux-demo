import { BUY_CAKE } from "./cakeType";
import { RESTOCK_CAKE } from "./cakeType";
 const initialState={
     noofCakes:20,

 }

const cakeReducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE:
            return{
                ...state,
                noofCakes:state.noofCakes-action.qty
            }
        case   RESTOCK_CAKE:
            return{
                ...state,
                noofCakes:state.noofCakes+Number(action.qty)    

            }  
            default:
                return  state
    }
}
 
export default cakeReducer
