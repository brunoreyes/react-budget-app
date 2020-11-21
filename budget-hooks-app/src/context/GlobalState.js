import React, { createContext, useReducer, useEffect, useState } from 'react';
import AppReducer from './AppReducer.js';

// using the localstorge of the website
// const initialState = {
//   incomeTransactions:
//     JSON.parse(localStorage.getItem('incomeTransactions')) || [],
//   expenseTransactions:
//     JSON.parse(localStorage.getItem('expenseTransactions')) || [],
// };

// test data
const initialState = {
  incomeTransactions: [
    { id: 1, incomeName: 'Car sold', incomeAmount: 15000 },
    { id: 2, incomeName: 'Salary', incomeAmount: 5000 },
    { id: 3, incomeName: 'Bonus', incomeAmount: 13000 },
  ],
  expenseTransactions: [
    { id: 1, expenseName: 'Rent', expenseAmount: 1000 },
    { id: 2, expenseName: 'Credit Card', expenseAmount: 2000 },
    { id: 3, expenseName: 'Clothes', expenseAmount: 500 },
  ],
};
export const GlobalContext = createContext(initialState);

// children: all components that live within the application
export const GlobalContextProvider = ({ children }) => {
  // in the place of redux we are using useReducer, the react hook.
  // const [variable, function] = useReducer(fileThatContainsInfo, valueOfTheState);
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // // for setting transactions
  // const [incomeTransactions, updatingIncomeTransactions] = useState(
  //   initialState
  // );

  // for editing an income Transaction
  const [editIncomeTransaction, setIncomeTransaction] = useState(null);

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
  };

  // Find task
  const findIncome = (incomeTransaction) => {
    // dispatch({
    //   type: 'READ_INCOME',
    //   payload: incomeTransaction,
    // });
    const item = incomeTransaction;
    console.log(incomeTransaction);
    // setItem('incomeTransactions', JSON.stringify(state.incomeTransactions));
    setIncomeTransaction(item);
  };

  // editing a transaction by taking in a unique id and targeting it
  const editIncome = (incomeName, incomeAmount, editIncomeTransaction) => {
    dispatch({
      type: 'UPDATE_INCOME',
      payload: editIncomeTransaction,
      incomeName,
      incomeAmount,
    });
    // const newIncomeTransactions = initialState.incomeTransactions.map(
    //   (incomeTransaction) =>
    //     incomeTransaction.id === editIncomeTransaction.id
    //       ? { incomeName, incomeAmount }
    //       : incomeTransaction
    // );

    // updatingIncomeTransactions(newIncomeTransactions);

    // const newIncomeTransaction = (incomeTransaction) =>
    //   incomeTransaction.id === editIncomeTransaction.id
    //     ? { incomeName, incomeAmount }
    //     : incomeTransaction;
    // console.log(newIncomeTransaction);
    // incomeTransaction.id === editIncomeTransaction.id
    //   ? { incomeName, incomeAmount, id }
    //   : incomeTransaction;

    // newIncomeTransactions;
  };

  // editing a transaction by taking in a unique id and targeting it
  // const editExpense = (id) => {
  //   dispatch({
  //     type: 'UPDATE_EXPENSE',
  //     payload: id,
  //   });
  // };
  return (
    <GlobalContext.Provider
      value={{
        // passing the data from expenseTransactions & expenseTransactions
        // make sure to place a common between data passed
        incomeTransactions: state.incomeTransactions,
        expenseTransactions: state.expenseTransactions,
        addIncome,
        addExpense,
        deleteTransaction,
        editIncome,
        // editExpense,
        findIncome,
        editIncomeTransaction,

        // findExpense,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
