import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer.js';

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

  return (
    <GlobalContext.Provider
      value={{
        // passing the data from incomeTransactions & expenseTransactions
        // make sure to place a common between data passed
        incomeTransactions: state.incomeTransactions,
        expenseTransactions: state.expenseTransactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
