import React from 'react'

const SearchProductHome = ({setNameProduct, setSelectProduct}) => {


    const handleSearchProduct = (e) =>{
        e.preventDefault()
        setNameProduct(e.target.nameProduct.value)
        setSelectProduct()
        e.target.nameProduct.value = ''
      }
    

    return (
        <form action="" onSubmit={handleSearchProduct} className="input">
            <input type="text" id='nameProduct' placeholder='search product' />
            <button>Search</button>
        </form>
    )
}

export default SearchProductHome