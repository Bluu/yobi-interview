import React from 'react';
import { shallow } from 'enzyme';

import Product from '../../components/Product';

let product;;

beforeEach(() => {
  product = {
        name: 'test name',
        type: 'test type',
        hasBulk: true,
        hasRetail: true,
        descripton: 'test description',
        batchNumber: 1,
        lotId: 1,
    };
});

test('message is displayed correctly', () => {
    const productComponent = shallow(
        <Product product={product} handleOnGoBack={() => true} />
    );

    expect(productComponent.containsMatchingElement(
        <div>Product Name: {product.name}</div>
    )).toEqual(true);

    expect(productComponent.containsMatchingElement(
        <div>Has Bulk: yes</div>
    )).toEqual(true);
});

test('go back button clicked', () => {
    const goBackFnMock = jest.fn();

    const productComponent = shallow(
        <Product product={product} handleOnGoBack={goBackFnMock} />
    );

    productComponent.find('button').simulate('click');

    expect(productComponent.find('button').length).toEqual(1);
    expect(goBackFnMock.mock.calls.length).toBe(1);
});