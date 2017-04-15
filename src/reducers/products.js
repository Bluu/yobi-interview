import * as a from '../actions/products';

const INITIAL_STATE = {
    products: [],
    isProcessing: false,
    error: null,
    searchProductName: '',
}

export default function productsReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case a.GET_PRODUCTS_REQUEST: {
            return {
                ...state,
                isProcessing: true,
            };
        }

        case a.GET_PRODUCTS_REQUEST_SUCCESS: {
            return {
                ...state,
                products: action.payload,
                isProcessing: false,
                error: null,
            };
        }

        case a.GET_PRODUCTS_REQUEST_FAILURE: {
            return {
                ...state,
                error: action.payload,
                isProcessing: false,
            };
        }

         case a.SEARCH_PRODUCTS_BY_NAME: {
            return {
                ...state,
                searchProductName: action.payload,
            };
        }

        default:
            return state;
    }
}
