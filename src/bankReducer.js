import { DEPOSIT, WITHDRAW } from './bankActions';

export default (state = { balance: 0 }, action) => {

  console.log(action)

  switch (action.type) {
    case DEPOSIT:
      return { balance: state.balance + parseFloat(action.amount) }
    case WITHDRAW:
      return { balance: state.balance - parseFloat(action.amount) }
    default:
      return state;
  }
}

