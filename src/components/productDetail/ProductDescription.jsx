import React, { useState } from 'react'

const ProductDescription = ({productInfo}) => {

    const [count, setCount] = useState(1)

    const handlePlus = () => setCount(count + 1)
    const handleMinus = () => count - 1 >= 1 ? setCount(count - 1) : setCount(1)

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
                </div>
            </article>
        </div>

    </section>
  )
}

export default ProductDescription