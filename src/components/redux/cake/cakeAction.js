import { BUY_CAKE } from "./cakeType";
import { RESTOCK_CAKE } from "./cakeType";
export const buyCake=(count)=>{
    return{
        type:BUY_CAKE,
        qty:count,
    }
}

export const restockCake=(count)=>{
    return{
        type:RESTOCK_CAKE,
        qty:count
    }
}
