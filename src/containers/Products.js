import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import ProductsSearch from '../components/ProductsSearch';
import Products from '../components/Products';
import { 
    getProductsRequest,
    searchProductsByName,
} from '../actions/products';
import { filterProducts } from '../lib/common';

class ProductsContainer extends Component {
    constructor() {
        super();
        this.handleOnProductSelect = this.handleOnProductSelect.bind(this);
        this.handleOnProductSearch = this.handleOnProductSearch.bind(this);
    }
    componentDidMount() {
        this.props.searchProductsByName('');
        this.props.getProductsRequest();
    }

    handleOnProductSelect(productLotId) {
        const { history } = this.props;

        history.push({
            pathname: `/product/${productLotId}`,
        })
    }

    handleOnProductSearch(productName) {
        this.props.searchProductsByName(productName);
    }

    render() {
        const {
            products, 
            isProcessing,
            error,
            searchProductName,
        } = this.props.products;

        if (isProcessing) {
            return <Loading/>;
        }

        if (error) {
            return <ErrorMessage message={error}/>;
        }

        let productsList = !searchProductName ? products : filterProducts(products, searchProductName);

        return (
            <div>
                <ProductsSearch handleOnProductSearch={this.handleOnProductSearch}/>
                <Products products={productsList} handleOnProductSelect={this.handleOnProductSelect}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // Define connection properties
    return {
        products: state.products,
    };
};

export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        // Define connected actions
        getProductsRequest,
        searchProductsByName,
    }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProductsContainer);
