import React from 'react'

const CardPurchases = ({ purchase }) => {
    console.log(purchase)
    let date = purchase.updatedAt.substring(0,10)
    return (
        <article className='purch__card'>
            <div className='purch__card__date'>
                <h4>{date}</h4>
            </div>
            <ul className='purch__card__list'>

                {
                    purchase.cart.products.map(product => (
                        <li key={product.id} className='purch__card__item'>
                            <h5>{product.title}</h5>
                            <span>{product.productsInCart.quantity}</span>
                            <span>{product.price}</span>
                        </li>
                    ))
                }
            </ul>
        </article>
    )
}

export default CardPurchases