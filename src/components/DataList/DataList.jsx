import React from 'react';
import './DataList.scss';

function DataList({ items, createElement, className, keys }) {
  return (
    <ol className={'DataList ' + className}>
      {items.map((item, index) => {
        return <li key={item[keys] || index}>{createElement(item)}</li>;
      })}
    </ol>
  );
}

export default DataList;
