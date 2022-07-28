// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { USER_LOGIN } from '../actions/actionTypes';

const INITIAL_STATE = { };

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_LOGIN:
    return { ...state, algumaChave: action.payload };

  default:
    return state;
  }
};

export default reducer;
