import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ProductDescription from '../productDetail/ProductDescription'
import Slider from '../productDetail/Slider'
import Similarproducts from '../productDetail/Similarproducts'

const ProducDetail = () => {

  const [productInfo, setProductInfo] = useState()
  const { id } = useParams()


  useEffect(() => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
    axios.get(URL)
      .then(res => setProductInfo(res.data.data.product))
      .catch(err => console.log(err))
  }
    , [])

  return (
    <section>
      <div className="empty__box"></div>
      <div className='productDetail__main_cont'>
        <Slider key={productInfo?.productImgs} imgs={productInfo?.productImgs} />
        <ProductDescription key={productInfo?.id} productInfo={productInfo} />
      </div>
      <Similarproducts key={productInfo?.id} productInfo={productInfo} />
    </section>
  )
}

export default ProducDetail