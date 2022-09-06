import React from 'react'

const SearchProductHome = ({setNameProduct}) => {


    const handleSearchProduct = (e) =>{
        e.preventDefault()
        setNameProduct(e.target.nameProduct.value.toLowerCase().trim())
      }

    return (
        <form action="" onSubmit={handleSearchProduct}>
            <input type="text" id='nameProduct' placeholder='search product' />
            <button>Search</button>
        </form>
    )
}

export default SearchProductHome