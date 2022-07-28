import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { expenses, email } = this.props;
    const totalExpenses = expenses.reduce((total, expense) => (
      total
        + Number(expense.value)
        * Number(expense.exchangeRates[expense.currency].ask)
    ), 0);
    return (
      <div>
        <span data-testid="email-field">{email}</span>
        <span data-testid="total-field">{totalExpenses.toFixed(2)}</span>
        <span data-testid="header-currency-field">BRL</span>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
