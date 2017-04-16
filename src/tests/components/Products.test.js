import React from 'react';
import { shallow } from 'enzyme';

import Products from '../../components/Products';

let products;

beforeEach(() => {
    products = [{
        name: 'test name',
        type: 'test type',
        hasBulk: true,
        hasRetail: true,
        descripton: 'test description',
        batchNumber: 1,
        lotId: 1,
    }];
});

test('no product message is displayed', () => {
    products = [];

    const productsComponent = shallow(
        <Products products={products} handleOnProductSelect={() => true} />
    );

    expect(productsComponent.text()).toEqual('No Products to Display');
});

test('display one product', () => {
    const productsComponent = shallow(
        <Products products={products} handleOnProductSelect={() => true} />
    );

    expect(productsComponent.find('.product').length).toEqual(1);
});

test('select a product', () => {
    const selectProductMock = jest.fn();

     const productsComponent = shallow(
        <Products products={products} handleOnProductSelect={selectProductMock} />
    );

    productsComponent.find('.product').simulate('click');

    expect(selectProductMock.mock.calls.length).toBe(1);
});