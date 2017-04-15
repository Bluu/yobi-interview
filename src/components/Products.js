import React from 'react';

import '../styles/products.css';

const Products = ({ products, handleOnProductSelect }) => {
    if (products === []) {
        return <div>No Products to Display</div>;
    }

    return (
       <div className="table">
            <div className="row">
                <div className="cell">Product Name</div>
                <div className="cell">Product Type</div>
                <div className="cell">Has Bulk</div>
                <div className="cell">Has Retail</div>
            </div>
            {
                products.map((product, index) => (
                    <div key={index} className="row product"onClick={() => handleOnProductSelect(index)}>
                        <div className="cell">{product.name}</div>
                        <div className="cell">{product.type}</div>
                        <div className="cell">{product.hasBulk ? 'yes' : 'no'}</div>
                        <div className="cell">{product.hasRetail ? 'yes' : 'no'}</div>
                    </div>
                ))
            }
        </div>
    );
};

export default Products;
 

  