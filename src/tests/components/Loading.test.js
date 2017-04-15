import React from 'react';
import { shallow } from 'enzyme';

import Loading from '../../components/Loading';

test('displays one loading image', () => {
    const loadingComponent = shallow(
        <Loading />
    );

    expect(loadingComponent.find('img').length).toEqual(1);
});