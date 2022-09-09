import React from 'react'

const SearchProductHome = ({setNameProduct, setSelectProduct, setPrice}) => {


    const handleSearchProduct = (e) =>{
        setNameProduct(e.target.value)
        setSelectProduct()
        setPrice()
      }
    

    return (
        <div className="input">
            <input onChange={handleSearchProduct} type="text" placeholder='search product' />
        </div>
    )
}

export default SearchProductHome