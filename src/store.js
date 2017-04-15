import createSagaMiddleware from 'redux-saga';

import {
    applyMiddleware,
    createStore,
    compose,
} from 'redux';

import reducers from './reducers/';

export default function configureStore(initialState, mainSaga) {
    const sagaMiddleware = createSagaMiddleware();

    const middleware = applyMiddleware(
        sagaMiddleware,
    );

    const store = createStore(
        reducers,
        initialState,
        compose(
            middleware,
            //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // redux devtools
        )
    );

    sagaMiddleware.run(mainSaga);

    return { store };
}
