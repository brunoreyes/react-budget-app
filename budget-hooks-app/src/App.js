import React from 'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import TransactionForm from './components/TransactionForm';
import IncomeList from './components/IncomeList';
import ExpenseList from './components/ExpenseList';
import BarChart from './components/BarChart';
import IncomePieChart from './components/IncomePieChart';
import ExpensePieChart from './components/ExpensePieChart';

// import GlobalContextProvider, the useReducer hook, and wrap everything within the application.
import { GlobalContextProvider } from './context/GlobalState';

//  type shortcut: "rafce" to create a functional component
// shorthand npm install: npm i pkgName
// imported uuid for autogenerating unique id's for newly created objects

const App = () => {
  return (
    <GlobalContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <Balance />
          <BarChart className="bar-chart" />
          <TransactionForm />
          <IncomeList />
          <ExpenseList />
          <IncomePieChart />
          <ExpensePieChart />
        </div>
      </div>
    </GlobalContextProvider>
  );
};

export default App;
