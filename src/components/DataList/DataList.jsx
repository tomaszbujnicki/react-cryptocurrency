import React from 'react';
import './DataList.scss';

function DataList(props) {
  const items = props.items;
  const createElement = props.createElement;

  return (
    <ol className="DataList">
      {items.map((coin) => {
        return (
          <li className="DataList__li" key={coin.id}>
            {createElement(coin)}
          </li>
        );
      })}
    </ol>
  );
}

export default DataList;
