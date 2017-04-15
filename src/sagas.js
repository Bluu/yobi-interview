import { fork, take, call, put } from 'redux-saga/effects';

import { 
    GET_PRODUCTS_REQUEST,
    getProductsRequestSuccess,
    getProductsRequestFailure
} from './actions/products';

import { getProducts } from './api/products';

// This is an example function of how we use our sagas to
// make HTTP requests and handle actions.
export function* getProductsSaga() {
    while (true) {
       yield take(GET_PRODUCTS_REQUEST);

       const { response, error } = yield call(getProducts);

       if (response) {
           yield put(getProductsRequestSuccess(response));
       } else {
           yield put(getProductsRequestFailure(error));
       }
    }
}

export default function* rootSaga() {
    yield [
        fork(getProductsSaga), // Used as an example to 'wire-up' a saga to listen for actions
    ];
}
