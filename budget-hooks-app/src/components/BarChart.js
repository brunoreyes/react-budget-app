import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { ResponsiveBarCanvas } from '@nivo/bar';

const BarChart = () => {
  const { totalExpense, totalIncome } = useContext(GlobalContext);

  const data = [
    {
      type: 'income',
      value: totalIncome,
      color: '#fff',
    },
    {
      type: 'expense',
      value: totalExpense,
      color: '#000',
    },
  ];
  return (
    <div className="bar-chart" style={{ height: 350 }}>
      <ResponsiveBarCanvas
        data={data}
        indexBy="type"
        margin={{ top: 50, right: -60, bottom: 50, left: 0 }}
        pixelRatio={2}
        padding={0.4}
        innerPadding={0}
        minValue="auto"
        maxValue="auto"
        groupMode="stacked"
        layout="vertical"
        reverse={false}
        valueScale={{ type: 'linear' }}
        colors={['#21ba45', '#cf5856']}
        colorBy="index"
        borderWidth={0}
        borderColor={{ from: 'color', modifiers: [['darker', '1.2']] }}
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={null}
        enableGridX={false}
        enableGridY={false}
        enableLabel={false}
        labelTextColor={{ from: 'color', modifiers: [['darker', '1.4']] }}
        isInteractive={false}
      />{' '}
    </div>
  );
};

export default BarChart;
