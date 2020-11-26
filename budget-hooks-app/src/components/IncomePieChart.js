import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { ResponsivePieCanvas } from '@nivo/pie';
import Zoom from 'react-reveal/Zoom';

const IncomePieChart = () => {
  const { incomeTransactions, totalIncome } = useContext(GlobalContext);

  // example of Rename all object keys of an array in Js

  // const array = [
  //   { id: '1', name: 'Apple' },
  //   { id: '2', name: 'Tomato' },
  // ];

  // const newArray = array.map(item => {
  //   return { itemId: item.id, itemName: item.name };
  // });

  // Result:
  // [
  //   { itemId: "1", itemName: "Apple" },
  //   { itemId: "2", itemName: "Tomato" },
  // ];

  const data = incomeTransactions.map((item) => {
    return {
      id: item.incomeName.charAt(0).toUpperCase() + item.incomeName.slice(1),
      value: item.incomeAmount,
      // + '%',
    };
  });

  // value is going to bepercentage is going to be transaction/ totalincome

  return (
    <Zoom>
      <div className="income-pie-chart-container" style={{ height: 150 }}>
        {' '}
        <ResponsivePieCanvas
          data={data}
          margin={{ top: 0, right: 0, bottom: 0, left: 30 }}
          colors={[
            '#21ba45',
            '#01f31e',
            '#004b23',
            '#006400',
            '#ccff33',
            '#38b000',
            '#016400',
            '#2c9348',
            '#6feb83',
            // '#',
            // '#',
            // '#',
            // '#',
          ]}
          // colors={{ scheme: 'yellow_green' }}
          // borderColor={{ from: 'color', modifiers: [['darker', '0.4']] }}
          // radialLabel="id"
          radialLabel={function (e) {
            return (
              e.id + ' (' + ((e.value / totalIncome) * 100).toFixed(0) + '%)'
            );
          }}
          // radialLabel={function (e) {
          //   return e.id + ' (' + e.value + ')';
          // }}
          pixelRatio={2}
          radialLabelsTextColor="#d64933"
          // radialLabelsLinkOffset={0}
          // radialLabelsLinkDiagonalLength={25}
          // radialLabelsLinkHorizontalLength={20}
          // radialLabelsLinkStrokeWidth={1.5}
          radialLabelsLinkColor={{ from: 'color', modifiers: [] }}
          enableRadialLabels={false}
          enableSliceLabels={false}
          // sliceLabel={}
          sliceLabelsSkipAngle={45}
          // sliceLabelsTextColor="#ffffff"
          isInteractive={true}
        />
      </div>
    </Zoom>
  );
};

export default IncomePieChart;
