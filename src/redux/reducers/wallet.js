// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { GET_CURRENCY } from '../actions/actionTypes';

const INITIAL_STATE = { currencies: [] };

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCY:
    return { ...state, currencies: action.currency };

  default:
    return state;
  }
};

export default reducer;
