import React from 'react';

const ProductsSearch = ({handleOnProductSearch}) => {
    let searchName;
    
    return (
        <div>
            Search Product By Name: 
            <input type="text" ref={input => searchName = input} onChange={() => handleOnProductSearch(searchName.value)}/>
        </div>
    );
};

export default ProductsSearch;