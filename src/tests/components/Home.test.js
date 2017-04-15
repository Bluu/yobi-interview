import React from 'react';
import { shallow } from 'enzyme';

import Home from '../../components/Home';

test('My name is displayed correctly', () => {
    const message = 'German Cuamea';

    const homeComponent = shallow(
        <Home />
    );

  expect(homeComponent.text()).toEqual(message);
});