export default (state, action) => {
  switch (action.type) {
    // if the action type matches, we return the spreaded state
    case 'ADD_INCOME':
      return {
        ...state,
        incomeTransactions: [action.payload, ...state.incomeTransactions],
      };
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenseTransactions: [action.payload, ...state.expenseTransactions],
      };
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        // in order to delete a transaction, use a filter (an array helper method)
        //   looping through incomeTransactions and returning a filtered array.
        incomeTransactions: state.incomeTransactions.filter(
          (incomeTransaction) => incomeTransaction.id !== action.payload
        ),
        expenseTransactions: state.expenseTransactions.filter(
          (expenseTransaction) => expenseTransaction.id !== action.payload
        ),
      };

    case 'UPDATE_INCOME':
      return {
        ...state,
        incomeTransactions: state.incomeTransactions.map(
          (incomeTransaction) => {
            if (incomeTransaction.id === action.payload) {
              const updatedIncomeTransaction = {
                ...incomeTransaction,
                incomeAmount: action.incomeAmountNumber,
                incomeName: action.incomeName,
                incomeDate: action.incomeDate,
              };
              return updatedIncomeTransaction;
            }
            return incomeTransaction;
          }
        ),
      };

    case 'UPDATE_EXPENSE':
      // console.log(action);

      return {
        ...state,
        expenseTransactions: state.expenseTransactions.map(
          (expenseTransaction) => {
            if (expenseTransaction.id === action.payload) {
              const updatedExpenseTransaction = {
                ...expenseTransaction,
                expenseName: action.expenseName,
                expenseAmount: action.expenseAmountNumber,
                expenseDate: action.expenseDate,
              };
              return updatedExpenseTransaction;
            }
            return expenseTransaction;
          }
        ),
      };

    default:
      return state;
  }
};
