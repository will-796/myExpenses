// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { ADD_EXPENSE, GET_CURRENCY } from '../actions/actionTypes';

const INITIAL_STATE = { currencies: [], expenses: [], numberExpenses: 0 };

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCY:
    return { ...state, currencies: action.currency };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        { id: state.numberExpenses, ...action.expense, exchangeRates: action.data },
      ],
      numberExpenses: state.numberExpenses + 1,
    };

  default:
    return state;
  }
};

export default reducer;
