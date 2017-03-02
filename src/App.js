import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { deposit, withdraw } from './bankActions';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  handleDeposit = () => {
    this.props.onDeposit(this.amount.value);
    this.amount.value = '';
  }

  handleWithdraw = () => {
    this.props.onWithdraw(this.amount.value);
    this.amount.value = '';
  }

  render() {
    return (
      <div>
        <header className="header">
          <img src={logo} width="150" alt="ReduxBank" /><br/>Redux Bank</header>
        <br />
        <h1>Your balance is ${(this.props.balance).toFixed(2)}</h1>
        <div className="atm">
          <input type="text" placeholder="Enter Ammount" ref={input => this.amount = input} />
          <br />
          <button onClick={this.handleWithdraw}>Withdraw</button>
          <button onClick={this.handleDeposit}>Deposit</button>
        </div>

        <div className="info">
          <strong>Additional Info:</strong>
          <div className="info--visible">
            <p><strong>Your account Manager:</strong> C. F. Frost </p>
            <p><strong>Pre approved credit limit:</strong> $500,000.00 </p>
          </div>
        </div>

      </div>
    );
  }
}
App.propTypes = {
  balance: PropTypes.number,
  onDeposit: PropTypes.func,
  onWithdraw: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    balance: state.balance
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeposit: amount => dispatch(deposit(amount)),
    onWithdraw: amount => dispatch(withdraw(amount))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App)

