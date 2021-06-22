import React from 'react';
import './DataList.scss';

function DataList({ items, createElement }) {
  return (
    <ol className="DataList">
      {items.map((item) => {
        return (
          <li className="DataList__li" key={item.id}>
            {createElement(item)}
          </li>
        );
      })}
    </ol>
  );
}

export default DataList;
