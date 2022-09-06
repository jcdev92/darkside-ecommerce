import React from 'react'

const ProductCartInfo = () => {
  return (
    <article className='cart__item'>
        <header className="cart__item--header">
            <h3 className="cart__category"></h3>
            <h4 className="cart__name"></h4>
        </header>
        <i className="fa-regular fa-trash-can"></i>
        <span className="cart__quantity"></span>
        <div>
            <span className="cart__total--label">Total:</span>
            <p className="cart__total--number">850</p>
        </div>
    </article>
  )
}

export default ProductCartInfo