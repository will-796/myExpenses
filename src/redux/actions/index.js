// Coloque aqui suas actions

import { ADD_EXPENSE, GET_CURRENCY, USER_LOGIN } from './actionTypes';

export const userLogin = (email) => ({
  type: USER_LOGIN,
  email,
});
export const actionGetCurrency = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  const currency = Object.keys(data).filter((curr) => curr !== 'USDT');
  dispatch({ type: GET_CURRENCY, currency });
};
export const actionAddExpense = (expense) => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  console.log(expense);
  dispatch({ type: ADD_EXPENSE, expense, data });
};
