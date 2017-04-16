import React from 'react';
import { shallow } from 'enzyme';

import ErrorMessage from '../../components/ErrorMessage';

test('message is displayed correctly', () => {
    const message = 'test error';

    // Render error message component
    const errorMessageComponent = shallow(
        <ErrorMessage message={message} />
    );

    expect(errorMessageComponent.text()).toEqual(message);
});