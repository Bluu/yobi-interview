import React from 'react';

const Product = ({product, handleOnGoBack}) => (
    <div>
        <button onClick={handleOnGoBack}>Go Back</button>
        <div>Product Name: {product.name}</div>
        <div>Product Type: {product.type}</div>
        <div>Has Bulk: {product.hasBulk ? 'yes' : 'no'}</div>
        <div>Has Retail: {product.hasRetail ? 'yes' : 'no'}</div>
        <div>Description: {product.descripton}</div>
        <div>Batch Number: {product.batchNumber}</div>
        <div>Lot Id: {product.lotId}</div>
    </div>
);

export default Product;