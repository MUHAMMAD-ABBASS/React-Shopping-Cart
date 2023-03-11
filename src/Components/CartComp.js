import React,{useContext, useState} from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2';
import Items from './Items';
import { CartContext } from './Cart';

const CartComp = () => {
    // const [item, setItem]=useState(products);
    const {totalItem,totalAmount,item,clearCart} =useContext(CartContext);
 

    if(item.length===0){
      return(
         <>
<header>
            <div className='continue-shopping'>
               <img src='./images/arrow.png' alt='arrow' className='arrow-icon'/>
               <h3>continue shopping</h3>
            </div>

            <div className='cart-icon'>
                <img src='./images/cart.png' alt='cart'  />
                <p>0</p>
            </div>
        </header>

        <section  className='main-cart-section'>
           <h1>Shopping Cart</h1>
           <p className='total-items'>you have <span className='total-items-count'>0</span> items in shopping cart</p>

           <div className='cart-items'>
              <div className='cart-items-container'>
              <Scrollbars>
              {
                item.map((items)=><Items key={items.id} {...items}/>)
              }
                
              </Scrollbars>

              </div>

           </div>

           <div className='card-total'>
           <h3>cart total:<span>0</span></h3>
           <button>Check out</button>
           <button className='clear-cart' onClick={clearCart}>Clear Cart</button>

           </div>
        </section>
         </>
      )
    }


  return (
    <>
         <header>
            <div className='continue-shopping'>
               <img src='./images/arrow.png' alt='arrow' className='arrow-icon'/>
               <h3>continue shopping</h3>
            </div>

            <div className='cart-icon'>
                <img src='./images/cart.png' alt='cart'  />
                <p>{totalItem}</p>
            </div>
        </header>

        <section  className='main-cart-section'>
           <h1>Shopping Cart</h1>
           <p className='total-items'>you have <span className='total-items-count'>{totalItem}</span> items in shopping cart</p>

           <div className='cart-items'>
              <div className='cart-items-container'>
              <Scrollbars>
              {
                item.map((items)=><Items key={items.id} {...items}/>)
              }
                
              </Scrollbars>

              </div>

           </div>

           <div className='card-total'>
           <h3>cart total:<span>{totalAmount}</span></h3>
           <button>Check out</button>
           <button className='clear-cart' onClick={clearCart}>Clear Cart</button>

           </div>
        </section>
    </>
   
  )
}

export default CartComp