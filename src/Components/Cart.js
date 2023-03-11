import React, { createContext, useEffect, useReducer, useState } from 'react'
import './Cart.css'
import CartComp from './CartComp';
import {reducer} from './reducer'
import {products} from './Products'


export const CartContext = createContext();
const initialState ={
  item:products,
  totalAmount:0,
  totalItem:0,
  amount:0,

}

function Cart() {

   // const [item, setItem]=useState(products);
   const[state,dispatch]=useReducer(reducer,initialState);

   const removeItem=(id)=>{
    return dispatch({
      type:"REMOVE_ITEM",
      payload:id,
    })
   }

   const clearCart =()=>{
    return dispatch({
      type:"CLEAR_CART"
    })
   }

   const increment =(id)=>{
    return dispatch({
      type:"INCREMENT",
      payload:id,
    })
   }

   const decrement =(id)=>{
    return dispatch({
      type:"DECREMENT",
      payload:id,
    })
   }

   useEffect(()=>{
    dispatch({
      type:"GET_TOTAL"
    });},[state.item] )
  return (
   
     <CartContext.Provider value={{...state,removeItem,clearCart,increment,decrement}}>
       <CartComp/>
     </CartContext.Provider>
      
  )
}

export default Cart