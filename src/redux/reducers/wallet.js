// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import {
  ADD_EXPENSE,
  DELETE_EXPENSE,
  GET_CURRENCY,
  ID_TO_EDIT,
  UPDATE_EXPENSE,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  numberExpenses: 0,
  editor: false,
  idToEdit: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCY:
    return { ...state, currencies: action.currency };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        {
          id: state.numberExpenses,
          ...action.expense,
          exchangeRates: action.data,
        },
      ],
      numberExpenses: state.numberExpenses + 1,
    };

  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses].filter(
        (expense) => expense.id !== action.id,
      ),
    };

  case UPDATE_EXPENSE:
    return {
      ...state,
      expenses: [...action.expenses],
      editor: false,
      idToEdit: null,
    };

  case ID_TO_EDIT:
    return { ...state, idToEdit: action.id, editor: true };

  default:
    return state;
  }
};

export default reducer;
