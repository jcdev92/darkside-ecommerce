import React, { useState } from 'react'
import {BsCartPlus} from 'react-icons/bs'

const ProductDescription = ({productInfo}) => {

    const [count, setCount] = useState(1)

    const handlePlus = () => setCount(count + 1)
    const handleMinus = () => count - 1 >= 1 ? setCount(count - 1) : setCount(1)

    const handleAddCart = e => {
        e.stopPropagation()
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
        const obj = {
          id: product.id,
          quantity: count
        }
        axios.post(URL, obj, getConfig())
          .then(res => console.log(res.data))
          .catch(err => console.log(err))
          navigate(`/cart`)
      }

  return (
    <section className="product__desc">
        <h2 className="product__desc__name">{productInfo?.title}</h2>
        <p className="product__desc__desciption">{productInfo?.description}</p>
        <div className="product__desc__body">
            <article className="product__desc__price">
                <h3 className="product__desc__price-value">Price</h3>
                <span className="product__desc__price-value">{productInfo?.price}</span>
            </article>
            <article className="product__desc__stock">
                <h3 className="product__desc__stock-value">Stock</h3>
                <div className="stock__container">
                    <button onClick={handlePlus} className="stock__button__plus">+</button>
                    <span className="stock__value">{count}</span>
                    <button onClick={handleMinus} className="stock__button__plus">-</button>
                    <div className="box__button">
                        <button onClick={handleAddCart} className="card__button"><BsCartPlus className="cart__icon"/></button>
                    </div>
                </div>
            </article>
        </div>
    </section>
  )
}

export default ProductDescription