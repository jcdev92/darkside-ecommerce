import React from 'react'

const ProductCart = () => {
    


  return (
    <article className='cart__item'>
        <header className='cart__item__header'>

        <h3 className='cart__subtitle'>asda</h3>
        <h3 className='cart__name'>Sambung Galaxy 22</h3>
        </header>

        <span className='cart__quantity'>1</span>
        <div>
            <span className='cart__total_label'>Total:</span>
            <p className='cart__total_label'>850</p>
        </div>
    </article>
    )
}

export default ProductCart