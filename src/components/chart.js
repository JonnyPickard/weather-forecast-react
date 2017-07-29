import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import PropTypes from 'prop-types';

function average(data) {
  return (data.reduce((a, b) => (a + b)) / data.length).toFixed(0);
}

export default function chart({ data, color, units }) {
  return (
    <div>
      <Sparklines height={120} width={180} data={data}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(data)} {units}</div>
    </div>
  );
}

chart.propTypes = {
  data: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  units: PropTypes.string.isRequired,
};
