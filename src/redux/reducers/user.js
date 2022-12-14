// Esse reducer será responsável por tratar as informações da pessoa usuária

import { USER_LOGIN } from '../actions/actionTypes';

const INITIAL_STATE = { email: 'user' };

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_LOGIN:
    return { ...state, email: action.email };

  default:
    return state;
  }
};

export default reducer;
