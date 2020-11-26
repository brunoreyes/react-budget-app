import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { ResponsiveBarCanvas } from '@nivo/bar';
import Zoom from 'react-reveal/Zoom';

const BarChart = () => {
  const { totalExpense, totalIncome } = useContext(GlobalContext);
  const data = [{ value: totalIncome }, { value: totalExpense }];
  return (
    <Zoom>
      <div className="bar-chart" style={{ height: 350 }}>
        <ResponsiveBarCanvas
          data={data}
          indexBy="value"
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
          colors={['#21ba45', '#D64933']}
          colorBy="index"
          borderWidth={0}
          axisTop={null}
          axisRight={null}
          axisBottom={null}
          axisLeft={null}
          enableGridX={false}
          enableGridY={false}
          enableLabel={false}
          isInteractive={false}
        />{' '}
      </div>
    </Zoom>
  );
};
export default BarChart;
