import React from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import CustomTooltip from './CustomTooltip';

const Chart = ({ data, dataKey, tickFormatter, labels }) => {
  return (
    <LineChart width={1000} height={400} data={data}>
      <CartesianGrid stroke="rgba(255,255,255,0.3)" strokeDasharray="1 3" />

      <XAxis
        interval={24}
        dataKey={dataKey.id}
        tickFormatter={dataKey.tickFormatter}
      />

      {labels.map((label) => (
        <YAxis
          yAxisId={label.id}
          width={label.width}
          orientation={label.orientation}
          type="number"
          tickCount={5}
          tick={{ fill: label.color, opacity: 0.65 }}
          domain={['auto', 'auto']}
          padding={{ bottom: 20 }}
          tickFormatter={label.tickFormatter}
        />
      ))}
      {labels.map((label) => (
        <Line
          type="monotone"
          hide={label.isHide}
          dataKey={label.id}
          stroke={label.color}
          dot={{ r: 0 }}
          activeDot={{ r: 5 }}
          yAxisId={label.id}
          key={label.isHide ? Math.random() : label.id}
        />
      ))}

      <Tooltip content={<CustomTooltip labels={labels} dataKey={dataKey} />} />
    </LineChart>
  );
};

export default Chart;
