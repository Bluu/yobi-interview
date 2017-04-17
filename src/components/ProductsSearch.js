import React from 'react';

import '../styles/productSearch.css'

const ProductsSearch = ({handleOnProductSearch}) => (
    <div className="box search">
        Search Product By Name: &nbsp;
        <input type="text" onChange={(event) => handleOnProductSearch(event.target.value)}/>
    </div>
);

export default ProductsSearch;