import React from 'react';

const ProductsSearch = ({handleOnProductSearch}) => (
    <div>
        Search Product By Name: 
        <input type="text" onChange={(event) => handleOnProductSearch(event.target.value)}/>
    </div>
);

export default ProductsSearch;