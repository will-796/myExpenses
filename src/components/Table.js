import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionDeleteExpense } from '../redux/actions';

class Table extends Component {
  editExpense = () => {};

  deleteExpense = (id) => {
    const { deleteEx } = this.props;
    deleteEx(id);
  };

  render() {
    const headerList = [
      'Descrição',
      'Tag',
      'Método de pagamento',
      'Valor',
      'Moeda',
      'Câmbio utilizado',
      'Valor convertido',
      'Moeda de conversão',
      'Editar/Excluir',
    ];
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            {headerList.map((column) => (
              <th key={ column }>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={ expense.id }>
              <td>{expense.description}</td>
              <td>{expense.tag}</td>
              <td>{expense.method}</td>
              <td>{Number(expense.value).toFixed(2)}</td>
              <td>{expense.exchangeRates[expense.currency].name}</td>
              <td>
                {Math.round(
                  Number(expense.exchangeRates[expense.currency].ask) * 100,
                ) / 100}
              </td>
              <td>
                {Math.round(
                  Number(expense.value)
                    * Number(expense.exchangeRates[expense.currency].ask)
                    * 100,
                ) / 100}
              </td>
              <td>BRL</td>
              <td>
                <button
                  type="button"
                  onClick={ () => this.editExpense(expense.id) }
                >
                  Editar
                </button>
                <button
                  type="button"
                  onClick={ () => this.deleteExpense(expense.id) }
                  data-testid="delete-btn"
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  deleteEx: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteEx: (id) => dispatch(actionDeleteExpense(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
