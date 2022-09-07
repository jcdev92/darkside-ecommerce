import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SelectProduct = ({setSelectProduct, selectProduct}) => {

const [categories, setCategories] = useState()

useEffect(()=>{
    const url = 'https://ecommerce-api-react.herokuapp.com/api/v1/products/categories'
    axios.get(url)
    .then(res => setCategories(res.data.data.categories))
    .catch(err => console.log(err))
},[])


const handleOnChange = (e) =>{
    e.preventDefault()
    setSelectProduct(e.target.value)
}


  return (
    <div className="select__product">
        <select value={selectProduct} onChange={handleOnChange}>
            <option value="All">All Products</option>
            {categories?.map(category =>(
                <option className="option" value={category.name} key={category.id}>{category.name}</option>
            ))}
        </select>
    </div>
  )
}

export default SelectProduct