import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
// import { PieChart } from 'react-comps-svg-charts';

const ExpensePieChart = (props) => {
  const data = {
    data: {
      labels: ['12am-3am', '3am-6pm', '6am-9am', '9am-12am', '12pm-3pm'],
      datasets: [
        {
          title: 'Some Data',
          color: 'light-blue',
          values: [25, 40, 30, 35, 8],
        },
        {
          title: 'Another Set',
          color: 'violet',
          values: [25, 50, -10, 15, 18],
        },
      ],
    },
  };

  return <div></div>;
};

export default ExpensePieChart;
