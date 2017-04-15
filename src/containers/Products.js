import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import Products from '../components/Products';
import { getProductsRequest } from '../actions/products';

class ProductsContainer extends Component {
    constructor() {
        super();
        this.handleOnProductSelect = this.handleOnProductSelect.bind(this);
    }
    componentDidMount() {
        this.props.getProductsRequest();
    }

    handleOnProductSelect(productIndex) {
        const { history } = this.props;

        history.push({
            pathname: `/product/${productIndex}`,
        })
    }

    render() {
        const {
            products, 
            isProcessing,
            error,
        } = this.props.products;

        if (isProcessing) {
            return <Loading/>;
        }

        if (error) {
            return <ErrorMessage message={error}/>;
        }

        return <Products products={products} handleOnProductSelect={this.handleOnProductSelect}/>;
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
        getProductsRequest
    }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProductsContainer);
