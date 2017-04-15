import * as a from '../actions/products';

const INITIAL_STATE = {
    products: [],
    isProcessing: false,
    error: null,
}

export default function productsReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case a.GET_PRODUCTS_REQUEST: {
            return {
                ...state,
                isProcessing: true,
            };
            //break;
        }

        case a.GET_PRODUCTS_REQUEST_SUCCESS: {
            // Handle action
            return {
                ...state,
                products: action.payload,
                isProcessing: false,
                error: null,
            };
            //break;
        }

        case a.GET_PRODUCTS_REQUEST_FAILURE: {
            // Handle action
            return {
                ...state,
                error: action.payload,
                isProcessing: false,
            };
            //break;
        }

        default:
            return state;
    }
}
