import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../store/slices/products.slice' 

const Home = () => {


  const products = useSelector(state => state.products)

  console.log(products)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])


  return (
    <div>Home</div>
  )
}

export default Home