import * as axios from 'axios';

import { FETCH_PRODUCTS_URL } from '../config/default';
import { sortListByStringField } from '../lib/common';

export const getProducts = () => {
  return axios.get(FETCH_PRODUCTS_URL)
    .then(response => ({ response: sortListByStringField(response.data, 'name') }))
    .catch(error => ({ error }));
}