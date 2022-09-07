import axios from 'axios'
import React from 'react'
import {MdOutlineDeleteOutline} from 'react-icons/md'
import getConfig from '../../utils/getConfig'

const ProductCart = ({product, getAllProductsCart}) => {

    const handleDeleteProduct = () => {
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`
        axios.delete(URL, getConfig())
          .then(() => getAllProductsCart())
          .catch(err => console.log(err))
      }

  return (
    <article className='cart__item'>
    <header className='cart__item-header'>
      <h4 className='cart__category'>{product.brand}</h4>
      <h3 className='cart__name'>{product.title}</h3>
    </header>
    <dv className="quantity">
      <h3>quantity</h3>
      <span className='cart__quantity'>{product.productsInCart.quantity}</span>
    </dv>
    <footer className='cart__item-footer'>
      <span className='cart__total-label'>Total:</span>
      <p className='cart__total-number'>{product.price}</p>
    </footer>
    <i onClick={handleDeleteProduct} className="cart__trash"><MdOutlineDeleteOutline/></i>
  </article>
    )
}

export default ProductCart