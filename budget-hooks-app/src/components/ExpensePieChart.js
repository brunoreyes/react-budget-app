import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { ResponsivePieCanvas } from '@nivo/pie';

const ExpensePieChart = () => {
  const data = [
    {
      id: 'go',
      label: 'go',
      value: 131,
      color: 'hsl(112, 70%, 50%)',
    },
    {
      id: 'scala',
      label: 'scala',
      value: 406,
      color: 'hsl(208, 70%, 50%)',
    },
    {
      id: 'javascript',
      label: 'javascript',
      value: 212,
      color: 'hsl(261, 70%, 50%)',
    },
    {
      id: 'python',
      label: 'python',
      value: 331,
      color: 'hsl(91, 70%, 50%)',
    },
    {
      id: 'sass',
      label: 'sass',
      value: 499,
      color: 'hsl(16, 70%, 50%)',
    },
    {
      id: 'c',
      label: 'c',
      value: 524,
      color: 'hsl(291, 70%, 50%)',
    },
    {
      id: 'lisp',
      label: 'lisp',
      value: 474,
      color: 'hsl(319, 70%, 50%)',
    },
    {
      id: 'php',
      label: 'php',
      value: 537,
      color: 'hsl(263, 70%, 50%)',
    },
    {
      id: 'elixir',
      label: 'elixir',
      value: 280,
      color: 'hsl(303, 70%, 50%)',
    },
    {
      id: 'stylus',
      label: 'stylus',
      value: 388,
      color: 'hsl(283, 70%, 50%)',
    },
    {
      id: 'make',
      label: 'make',
      value: 259,
      color: 'hsl(238, 70%, 50%)',
    },
    {
      id: 'ruby',
      label: 'ruby',
      value: 10,
      color: 'hsl(208, 70%, 50%)',
    },
    {
      id: 'java',
      label: 'java',
      value: 592,
      color: 'hsl(45, 70%, 50%)',
    },
    {
      id: 'hack',
      label: 'hack',
      value: 417,
      color: 'hsl(137, 70%, 50%)',
    },
    {
      id: 'rust',
      label: 'rust',
      value: 588,
      color: 'hsl(353, 70%, 50%)',
    },
    {
      id: 'haskell',
      label: 'haskell',
      value: 511,
      color: 'hsl(343, 70%, 50%)',
    },
    {
      id: 'erlang',
      label: 'erlang',
      value: 422,
      color: 'hsl(76, 70%, 50%)',
    },
    {
      id: 'css',
      label: 'css',
      value: 119,
      color: 'hsl(241, 70%, 50%)',
    },
  ];
  return (
    <div className="expense-pie-chart-container" style={{ height: 200 }}>
      <ResponsivePieCanvas
        style={{ height: 200 }}
        data={data}
        margin={{ top: 40, right: 200, bottom: 40, left: 80 }}
        // colors={{ scheme: 'reds' }}
        colors={['#21ba45', '#fff']}
        borderColor={{ from: 'color', modifiers: [['darker', '0.7']] }}
        radialLabel="label"
        radialLabelsTextColor="#ffffff"
        radialLabelsLinkOffset={-3}
        radialLabelsLinkDiagonalLength={14}
        radialLabelsLinkHorizontalLength={13}
        radialLabelsLinkStrokeWidth={2}
        radialLabelsLinkColor={{ from: 'color', modifiers: [] }}
        enableSliceLabels={false}
        sliceLabelsRadiusOffset={0}
        sliceLabelsSkipAngle={12}
        sliceLabelsTextColor="#ffffff"
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: 'ruby',
            },
            id: 'dots',
          },
          {
            match: {
              id: 'c',
            },
            id: 'dots',
          },
          {
            match: {
              id: 'go',
            },
            id: 'dots',
          },
          {
            match: {
              id: 'python',
            },
            id: 'dots',
          },
          {
            match: {
              id: 'scala',
            },
            id: 'lines',
          },
          {
            match: {
              id: 'lisp',
            },
            id: 'lines',
          },
          {
            match: {
              id: 'elixir',
            },
            id: 'lines',
          },
          {
            match: {
              id: 'javascript',
            },
            id: 'lines',
          },
        ]}
        legends={[]}
      />
    </div>
  );
};

export default ExpensePieChart;
