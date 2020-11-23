import React, { useContext } from 'react';
import ReactFrappeChart from 'react-frappe-charts';
import { GlobalContext } from '../context/GlobalState';

const BarChart = (props) => {
  const {
    totalExpense,
    totalIncome,
    formattedTotalBudget,
    formattedTotalExpense,
    formattedTotalIncome,
  } = useContext(GlobalContext);
  const config = {
    colors: ['#21ba45', '#cf5856'],
    axisOptions: { xAxisMode: 'tick', yAxisMode: 'tick', xIsSeries: 1 },
    height: 400,
  };

  return (
    <div className="bar-chart">
      <ReactFrappeChart
        type="bar"
        data={{
          //   isNavigable: true,
          labels: [''],
          datasets: [{ values: [totalIncome] }, { values: [totalExpense] }],
        }}
        {...config}
      />
    </div>
  );
};

export default BarChart;
