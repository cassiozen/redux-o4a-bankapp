export const DEPOSIT = 'deposit';
export const WITHDRAW = 'withdraw';

export const deposit = (amount) => {
  return { type: DEPOSIT, amount}
}

export const withdraw = (amount) => {
  return { type: WITHDRAW, amount}
}
