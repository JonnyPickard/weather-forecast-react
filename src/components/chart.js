import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
  return (data.reduce((a, b) => (a + b)) / data.length).toFixed(0);
}

export default ({ data, color, units }) => (
  <div>
    <Sparklines height={120} width={180} data={data}>
      <SparklinesLine color={color} />
      <SparklinesReferenceLine type="avg" />
    </Sparklines>
    <div>{average(data)} {units}</div>
  </div>
);
