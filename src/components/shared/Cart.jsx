import axios from 'axios'
import React, { useEffect, useState } from 'react'
<<<<<<< HEAD
import ProductCartInfo from '../cart/ProductCartInfo'
=======
import ProductCart from '../Cart/ProductCart'
>>>>>>> 5fc994b9c40b9731c37217ca8d7da9598385a443

const Cart = () => {

    const [cartProducts, setCartProducts] = useState()

<<<<<<< HEAD
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }

    useEffect(() => {
        const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/cart"
        axios.get(URL, config)
            .then(res => setCartProducts(res.data))
            .catch(err => console.log(err))
    }, [])

    console.log(cartProducts)

  return (
    <section className="car">
        <h2 className="cart__title">Cart</h2>
        <ProductCartInfo />
        <hr className="cart__hr" />
        <footer className="cart__footer">
            <span className="cart__footer-global-label">Total:</span>
            <p className="cart__footer-global-value">1350</p>
            <button className='cart__btn'>CheckOut</button>
        </footer>
    </section>
=======
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
>>>>>>> 5fc994b9c40b9731c37217ca8d7da9598385a443
  )
}

export default Cart