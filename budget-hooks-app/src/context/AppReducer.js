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
    // case 'READ_INCOME':
    //   return {
    //     ...state,
    //     incomeTransactions: state.incomeTransactions.filter(
    //       (incomeTransaction) => incomeTransaction.id === action.payload
    //     ),
    //   };

    case 'UPDATE_INCOME':
      console.log(state);

      return {
        ...state,
        incomeTransactions: state.incomeTransactions.filter(
          (incomeTransaction) =>
            incomeTransaction.id === action.payload.editIncomeTransaction.id
        ),
        // incomeTransactions: [action.payload, ...state.expenseTransactions],
        // incomeTransactions: state.incomeTransactions.filter(
        //   (incomeTransaction) => incomeTransaction.id === action.payload.id
        // ),
        // incomeTransactions: state.incomeTransactions.map((incomeTransaction) =>
        //   incomeTransaction.id === action.payload.editIncomeTransaction.id
        //     ? action.payload
        //     : incomeTransaction
        // ),
      };

    default:
      return state;
  }
};
