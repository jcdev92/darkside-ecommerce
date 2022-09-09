import React from 'react'

const SearchProductHome = ({setNameProduct, setSelectProduct}) => {


    const handleSearchProduct = (e) =>{
        setNameProduct(e.target.value)
        setSelectProduct()
      }
    

    return (
        <div className="input">
            <input onChange={handleSearchProduct} type="text" placeholder='search product' />
        </div>
    )
}

export default SearchProductHome