import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { ResponsivePieCanvas } from '@nivo/pie';

const IncomePieChart = () => {
  const { incomeTransactions, totalIncome } = useContext(GlobalContext);

  // example of Rename all object keys of an array in Js

  // const array = [
  //   { id: '1', name: 'Apple' },
  //   { id: '2', name: 'Tomato' },
  //   { id: '3', name: 'Orange' },
  //   { id: '4', name: 'Coconut' },
  //   { id: '5', name: 'Strawberry' },
  //   { id: '6', name: 'Banana' },
  // ];

  // const newArray = array.map(item => {
  //   return { itemId: item.id, itemName: item.name };
  // });

  // Result:
  // [
  //   { itemId: "1", itemName: "Apple" },
  //   { itemId: "2", itemName: "Tomato" },
  //   { itemId: "3", itemName: "Orange" },
  //   { itemId: "4", itemName: "Coconut" },
  //   { itemId: "5", itemName: "Strawberry" },
  //   { itemId: "6", itemName: "Banana" }
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
    <div className="income-pie-chart-container" style={{ height: 200 }}>
      {' '}
      <ResponsivePieCanvas
        data={data}
        margin={{ top: 40, right: 0, bottom: 40, left: 30 }}
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
          // '#fff',
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

export default IncomePieChart;
