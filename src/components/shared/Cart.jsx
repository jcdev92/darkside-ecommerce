import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCartInfo from '../cart/ProductCartInfo'

const Cart = () => {

    const [cartProducts, setCartProducts] = useState()

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
  )
}

export default Cart