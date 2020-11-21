// creating a new state which will be the local state of the component
import React, { useState, useContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
// importing in order to addIncome function from GlobalContext
import { GlobalContext } from '../context/GlobalState';
// import IncomeTransaction from './IncomeTransaction';
// import IncomeTransaction from './IncomeTransaction';

const TransactionForm = () => {
  //gathering functions from GlobalContext
  const {
    addIncome,
    addExpense,
    editIncome,
    editIncomeTransaction,
    // editExpense,
  } = useContext(GlobalContext);
  // const [name, setIncomeName] = useState('');

  // creating a new state by using array destructuring

  //  variable   function     hook        value
  const [income, setIncome] = useState({
    incomeName: '',
    incomeAmount: '',
  });

  // destructuring properties from the income object
  const { incomeName, incomeAmount } = income;

  const onSubmitIncome = (e) => {
    // e.preventDefault method ensures the submit btn doesn't reload the pg, like it normally would.
    e.preventDefault();

    if (editIncomeTransaction) {
      // console.log(editIncomeTransaction);
      editIncome(incomeName, incomeAmount, editIncomeTransaction);
      setIncome({ incomeName: '', incomeAmount: '' });
      // editIncome(incomeName, incomeAmount, editIncome.id);
      // editIncome(incomeName, incomeAmount, editIncome.id);}
    } else if (incomeName || incomeAmount !== '') {
      const newIncomeTransaction = {
        // uuid is an npm pkg that autogenerates unique ids for each newly created object, installed via: npm i uuid
        id: uuidv4(),
        // thanks to es6, if the property and value are the same, we can write the value ones
        //  so incomeText instead of incomeText: income.incomeText,
        incomeName,
        //   multiplying a string by 1 will convert a string number into just a number (change string to an int)
        incomeAmount: incomeAmount * 1,
      }; // console.log(newIncomeTransaction);
      addIncome(newIncomeTransaction);
      // setting the input values back to empty after inputted values have been submitted
      setIncome({ incomeName: '', incomeAmount: '' });
    }
  };

  // function that uses set income method
  const onChangeIncome = (e) => {
    // accessing the exact property name with [] and assigning it a value
    // to keep both properties (incomeText & incomeAmount) spread out the income object via "...income"
    setIncome({ ...income, [e.target.name]: e.target.value });
    // console.log(income);
  };

  useEffect(() => {
    if (editIncomeTransaction) {
      setIncome({
        incomeName: editIncomeTransaction.incomeName,
        incomeAmount: editIncomeTransaction.incomeAmount,
      });
      console.log(editIncomeTransaction);
    } else {
      setIncome('');
    }
  }, [editIncomeTransaction]);

  //  variable   function     hook        value
  const [expense, setExpense] = useState({
    expenseName: '',
    expenseAmount: '',
  });

  // destructuring properties from the expense object
  const { expenseName, expenseAmount } = expense;

  // function that uses set expense method
  const onChangeExpense = (e) => {
    // accessing the exact property name with [] and assigning it a value
    // to keep both properties (expenseText & expenseAmount) spread out the expense object via "...expense"
    setExpense({ ...expense, [e.target.name]: e.target.value });
    // console.log(expense);
  };

  const onSubmitExpense = (e) => {
    // e.preventDefault method ensures the submit btn doesn't reload the pg, like it normally would.
    e.preventDefault();

    if (expenseName || expenseAmount !== '') {
      const newExpenseTransaction = {
        // uuid is an npm pkg that autogenerates unique ids for each newly created object, installed via: npm i uuid
        id: uuidv4(),
        // thanks to es6, if the property and value are the same, we can write the value ones
        //  so expenseText instead of expenseText: expense.expenseText,
        expenseName,
        //   multiplying a string by 1 will convert a string number into just a number (change string to an int)
        expenseAmount: expenseAmount * 1,
      };
      // console.log(newexpenseTransaction);
      addExpense(newExpenseTransaction);

      setExpense({ expenseName: '', expenseAmount: '' });
    }
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={onSubmitIncome}>
        <div className="input-group income">
          <input
            type="text"
            value={incomeName}
            // name of the attribute should match the name of the property of the income object
            name="incomeName"
            placeholder="Income Name"
            autoComplete="off"
            onChange={onChangeIncome}
          />
          <input
            type="number"
            value={incomeAmount}
            // name of the attribute should match the name of the property of the income object
            name="incomeAmount"
            placeholder="00.00"
            autoComplete="off"
            onChange={onChangeIncome}
          />{' '}
          {/* TODO: input date for transactions here */}
          {/* <input
            type="number"
            value={expenseAmount}
            placeholder="Date (Optional)"
            name="expenseAmount"
            onChange={onChangeExpense}
            autoComplete="off"
          /> */}
          {/* only when info has been submitted will a unique id be generated by uuidv4 */}
          <input
            type="submit"
            value={editIncome ? 'Edit Income' : '+ Income'}
          />
        </div>
      </form>
      <form onSubmit={onSubmitExpense}>
        <div className="input-group expense">
          <input
            type="text"
            value={expenseName}
            name="expenseName"
            placeholder="Expense Name"
            autoComplete="off"
            onChange={onChangeExpense}
          />

          <input
            type="number"
            value={expenseAmount}
            placeholder="00.00"
            name="expenseAmount"
            onChange={onChangeExpense}
            autoComplete="off"
          />
          {/* <input
            type="number"
            value={expenseAmount}
            placeholder="Date (Optional)"
            name="expenseAmount"
            onChange={onChangeExpense}
            autoComplete="off"
          /> */}
          <input type="submit" value="+ Expense" />
        </div>
      </form>
    </div>
  );
};

export default TransactionForm;
