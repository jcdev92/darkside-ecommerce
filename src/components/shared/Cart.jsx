import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCart from '../Cart/ProductCart'

const Cart = () => {

    const [cartProducts, setCartProducts] = useState()

    useEffect(()=>{

        const config ={
            headers:{
                Authorization:`Bearer ${localStorage.getItem(`token`)}`
            }
        }

        const url = "https://ecommerce-api-react.herokuapp.com/api/v1/cart"
        axios.get(url, config)
        .then(res => setCartProducts(res.data))
        .catch(err => console.log(err))
    },[])
    console.log(cartProducts);

  return (
    <article className='cart'>
        <h2>Cart</h2>
        <ProductCart/>
        <footer className='cart__footer'>
            <span className='cart__total__global'>Total:</span>
            <p className='cart__total__global_value'>1350</p>
            <button className='cart__btn'>Chechout</button>
        </footer>
    </article>
  )
}

export default Cart