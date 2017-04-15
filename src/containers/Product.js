import React, { Component } from 'react';
import { connect } from 'react-redux';

import Product from '../components/Product';

class ProductContainer extends Component {
    constructor() {
        super();
        this.handleOnGoBack = this.handleOnGoBack.bind(this);
    }

    componentWillMount() {
        const { history } = this.props;
        const { products } = this.props.products;
        const productIndex = this.props.match.params.id;

        const product = products[productIndex];

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
        const productIndex = this.props.match.params.id;

        const product = products[productIndex];

        if(!product) {
            return <div></div>;
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
