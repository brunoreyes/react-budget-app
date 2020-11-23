import React, { createContext, useReducer, useEffect, useState } from 'react';
import AppReducer from './AppReducer.js';

// using the localStorage of the website
const initialState = {
  incomeTransactions:
    JSON.parse(localStorage.getItem('incomeTransactions')) || [],
  expenseTransactions:
    JSON.parse(localStorage.getItem('expenseTransactions')) || [],
};

// test data
// const initialState = {
//   incomeTransactions: [
//     { id: 1, incomeName: 'Car sold', incomeAmount: 15000 },
//     { id: 2, incomeName: 'Salary', incomeAmount: 5000 },
//     { id: 3, incomeName: 'Bonus', incomeAmount: 13000 },
//   ],
//   expenseTransactions: [
//     { id: 1, expenseName: 'Rent', expenseAmount: 1000 },
//     { id: 2, expenseName: 'Credit Card', expenseAmount: 2000 },
//     { id: 3, expenseName: 'Clothes', expenseAmount: 500 },
//   ],
// };
export const GlobalContext = createContext(initialState);

// children: all components that live within the application
export const GlobalContextProvider = ({ children }) => {
  // in the place of redux we are using useReducer, the react hook.
  // const [variable, function] = useReducer(fileThatContainsInfo, valueOfTheState);
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // utilizing useEffect to set the local storage to the "inititialState"
  // which is the value given to "state" via the function: dispatch, using the
  // useReducer hook. Basically setting the storage to whatever action is called
  useEffect(() => {
    localStorage.setItem(
      'incomeTransactions',
      JSON.stringify(state.incomeTransactions)
    );
    localStorage.setItem(
      'expenseTransactions',
      JSON.stringify(state.expenseTransactions)
    );
  });
  // grabbing all of the previous income and expense amounts and mapping them out
  const incomeAmountsMapped = state.incomeTransactions.map(
    (incomeTransaction) => incomeTransaction.incomeAmount
    // (incomeTransaction) => parseFloat(incomeTransaction.incomeAmount)
    // to convert a string into a number, use parseFloat()
  );

  const expenseAmountsMapped = state.expenseTransactions.map(
    (expenseTransaction) => expenseTransaction.expenseAmount
  );

  // passing and taking in to arguments, the acc (accumulator) and current income amount
  // then we are adding the acc to the current income amount, producing the new current income amount
  // 0 is adding 0 additioanl value to the income, .toFixed add fixed decimals
  const totalIncome = incomeAmountsMapped.reduce(
    (acc, item) => (acc += item),
    0
  );
  // .toFixed(2);
  const totalExpense = expenseAmountsMapped.reduce(
    (acc, item) => (acc += item),
    0
  );
  const formattedTotalBudget = (
    totalIncome - totalExpense
  ).toLocaleString(undefined, { maximumFractionDigits: 2 });
  const formattedTotalIncome = totalIncome.toLocaleString(undefined, {
    maximumFractionDigits: 2,
  });
  const formattedTotalExpense = totalExpense.toLocaleString(undefined, {
    maximumFractionDigits: 2,
  });

  // for editing Transactions or Deleting transactions
  // functionality has been set so a targeted transaction values will be sent
  // to the setIncome/ExpenseTransaction function which uses useState(values) and sets
  // that value to = the editIncome/ExpenseTransaction variable
  // after the edit submission or delete onClick have been pressed,
  // setIncome/ExpenseTransaction() will be passed the parameter null,
  // to clear the input fields once again.

  const [editIncomeTransaction, setIncomeTransaction] = useState(null);
  const [editExpenseTransaction, setExpenseTransaction] = useState(null);

  // addIncome will add transaction info to the state, by taking in the parameter of incomeTransaction
  // and passing it as the value of the payload property: incomeTransaction
  // addIncome has to be passed down to the provider
  const addIncome = (incomeTransaction) => {
    //   Within the dispatch we must pass an action ( a pure Js object), and define it's type, which by convention
    // is written in uppercase like so: 'ADD_INCOME'.

    //   Actions may have an optional property called the payload, which in this case carries
    //   the newly created "incomeTransaction" object that was created in the incomeTransaction component
    dispatch({
      type: 'ADD_INCOME',
      payload: incomeTransaction,
    });
  };

  const addExpense = (expenseTransaction) => {
    dispatch({
      type: 'ADD_EXPENSE',
      payload: expenseTransaction,
    });
  };

  // deleting a transaction by taking in a unique id and targeting it
  const deleteTransaction = (id) => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
    setIncomeTransaction(null);
  };

  // Finding transactions for editing
  const findIncome = (incomeTransaction) => {
    const item = incomeTransaction;
    setIncomeTransaction(item);
  };

  const findExpense = (expenseTransaction) => {
    const item = expenseTransaction;
    setExpenseTransaction(item);
  };

  // editing a transaction by taking in a unique id and targeting it
  const editIncome = (
    incomeName,
    incomeAmountNumber,
    editIncomeTransaction
  ) => {
    dispatch({
      type: 'UPDATE_INCOME',
      payload: editIncomeTransaction.id,
      incomeName,
      incomeAmountNumber,
    });
    setIncomeTransaction(null);
  };

  const editExpense = (
    expenseName,
    expenseAmountNumber,
    editExpenseTransaction
  ) => {
    dispatch({
      type: 'UPDATE_EXPENSE',
      payload: editExpenseTransaction.id,
      expenseName,
      expenseAmountNumber,
    });
    setExpenseTransaction(null);
  };

  return (
    <GlobalContext.Provider
      value={{
        // passing the data from expenseTransactions & expenseTransactions
        // make sure to place a common between data passed
        incomeTransactions: state.incomeTransactions,
        expenseTransactions: state.expenseTransactions,
        editIncomeTransaction,
        editExpenseTransaction,
        formattedTotalBudget,
        formattedTotalExpense,
        formattedTotalIncome,
        totalIncome,
        totalExpense,
        addIncome,
        addExpense,
        deleteTransaction,
        // 2 parts for editing transaction:
        // Pt. 1: finding the unique id, Pt. 2: replacing it & mapping out a new array
        findIncome,
        editIncome,
        findExpense,
        editExpense,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
