import { useReducer } from "react";

export const reducer =(state,action)=>{
    if(action.type==="REMOVE_ITEM")
    {
        return {
            ...state,
            item:state.item.filter((curElement)=>{
                return curElement.id !== action.payload
            }),
        }
    }

    if(action.type==="CLEAR_CART"){
        return{
            ...state,item:[]
        }
    }

    if(action.type==="INCREMENT"){
        let updateCart = state.item.map((curElement)=>{
            if(curElement.id===action.payload){
            return{...curElement, quantity:curElement.quantity+1}
            }
            return curElement
        });
        return {...state,item:updateCart}
    }

    if(action.type==="DECREMENT"){
        let updateCart = state.item.map((curElement)=>{
            if(curElement.id===action.payload){
            return{...curElement, quantity:curElement.quantity-1}
            }
            return curElement
        }) .filter((curElem) => curElem.quantity !== 0) 
        return {...state,item:updateCart}
    }

    if(action.type==="GET_TOTAL"){
        let{totalItem,totalAmount}= state.item.reduce(
            (accum,curVal)=>{
                let {quantity,price}=curVal
                accum.totalAmount += quantity*price
                accum.totalItem += quantity
                return accum
            },
            {
                totalItem:0,
                totalAmount:0
            }
        );
    return {...state,totalItem,totalAmount}
    }
    return state;
}