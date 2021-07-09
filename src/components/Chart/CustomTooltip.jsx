import React from 'react';
import './CustomTooltip.scss';

const CustomTooltip = ({ active, payload, labels, dataKey }) => {
  if (active && payload) {
    const heading = payload[0].payload[dataKey.id];
    return (
      <div className="CustomTooltip">
        <p>{dataKey.tooltipFormatter(heading)}</p>
        {labels.map((label) => (
          <p key={label.name}>
            {label.name + ': '}
            <span style={{ color: label.color }}>
              {label.tooltipFormatter(payload[0].payload[label.id])}
            </span>
          </p>
        ))}
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
