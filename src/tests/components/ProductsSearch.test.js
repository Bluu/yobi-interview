import React from 'react';
import { shallow } from 'enzyme';

import ProductsSearch from '../../components/ProductsSearch';

test('search a product', () => {
    const searchProductMock = jest.fn();
    const searchVal = 'test';

    const searchProductsComponent = shallow(
        <ProductsSearch handleOnProductSearch={searchProductMock} />
    );

    searchProductsComponent.find('input').simulate('change', { target: { value: searchVal } })

    expect(searchProductMock.mock.calls.length).toBe(1);
    expect(searchProductMock.mock.calls[0][0]).toBe(searchVal);
});