import React, { Component } from 'react';
import { connect } from 'react-redux';

import Product from '../components/Product';
import ErrorMessage from '../components/ErrorMessage';
import { findProduct } from '../lib/common';

class ProductContainer extends Component {
    constructor() {
        super();
        this.handleOnGoBack = this.handleOnGoBack.bind(this);
    }

    componentWillMount() {
        const { history } = this.props;
        const { products } = this.props.products;
        const productLotId = Number(this.props.match.params.id);

        const product = findProduct(products, productLotId);

        if(!product) {
            history.push({
                pathname: '/',
            })
        }
    }

    handleOnGoBack() {
        const { history } = this.props;

        history.goBack();
    }

    render() {
        const { products } = this.props.products;
        const productLotId = Number(this.props.match.params.id);

        const product = findProduct(products, productLotId);

        if(!product) {
            return <ErrorMessage message='Product Not Found'/>;
        }

        return <Product product={product} handleOnGoBack={this.handleOnGoBack}/>;
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
    };
};

export default connect(
    mapStateToProps,
)(ProductContainer);
