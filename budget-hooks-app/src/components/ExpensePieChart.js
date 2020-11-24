import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { ResponsivePieCanvas } from '@nivo/pie';

const ExpensePieChart = () => {
  const { expenseTransactions, totalExpense } = useContext(GlobalContext);

  const data = expenseTransactions.map((item) => {
    return {
      id: item.expenseName.charAt(0).toUpperCase() + item.expenseName.slice(1),
      value: item.expenseAmount,
    };
  });

  return (
    <div className="expense-pie-chart-container" style={{ height: 200 }}>
      {' '}
      <ResponsivePieCanvas
        data={data}
        margin={{ top: 40, right: 0, bottom: 40, left: 30 }}
        colors={[
          '#da1e37',
          '#85182a',
          '#bf0603',
          '#ffba08',
          '#c71f37',
          '#bd1f36',
          '#f48c06',
          '#ce4257',
          '#6a040f',
          '#ffba08',
          // '#',
        ]}
        radialLabel={function (e) {
          return (
            e.id + ' (' + ((e.value / totalExpense) * 100).toFixed(0) + '%)'
          );
        }}
        pixelRatio={2}
        radialLabelsTextColor="#fff"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={20}
        radialLabelsLinkHorizontalLength={14}
        radialLabelsLinkStrokeWidth={1.5}
        radialLabelsLinkColor={{ from: 'color', modifiers: [] }}
        enableSliceLabels={false}
        sliceLabelsSkipAngle={45}
        sliceLabelsTextColor="#ffffff"
        isInteractive={false}
      />
    </div>
  );
};

export default ExpensePieChart;
