import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { ResponsivePieCanvas } from '@nivo/pie';
import Zoom from 'react-reveal/Zoom';

const ExpensePieChart = () => {
  const { expenseTransactions, totalExpense } = useContext(GlobalContext);
  const data = expenseTransactions.map((item) => {
    return {
      id: item.expenseName.charAt(0).toUpperCase() + item.expenseName.slice(1),
      value: item.expenseAmount,
      formattedValue:
        ' (' + ((item.expenseAmount / totalExpense) * 100).toFixed(0) + '%)',
    };
  });

  return (
    <Zoom>
      <div className="expense-pie-chart-container" style={{ height: 150 }}>
        {' '}
        <ResponsivePieCanvas
          data={data}
          margin={{ top: 0, right: 0, bottom: 0, left: 30 }}
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
          // radialLabel={function (e) {
          //   return (
          //      e.id + ' (' + ((e.value / totalExpense) * 100).toFixed(0) + '%)'
          //   );
          // }}
          pixelRatio={2}
          // radialLabelsTextColor="#d64933"
          // radialLabelsLinkOffset={0}
          // radialLabelsLinkDiagonalLength={25}
          // radialLabelsLinkHorizontalLength={20}
          // radialLabelsLinkStrokeWidth={1.5}
          // radialLabelsLinkColor={{ from: 'color', modifiers: [] }}
          enableRadialLabels={false}
          enableSliceLabels={false}
          // tooltip={false}
          // sliceLabel={}
          sliceLabelsSkipAngle={45}
          // sliceLabelsTextColor="#ffffff"
          isInteractive={true}
        />
      </div>
    </Zoom>
  );
};

export default ExpensePieChart;
