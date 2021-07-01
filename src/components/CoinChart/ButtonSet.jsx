import React from 'react';
import DataList from '../DataList';
import './ButtonSet.scss';

const ButtonSet = ({ children }) => {
  return (
    <DataList
      className="ButtonSet"
      items={children}
      createElement={(item) => item}
    />
  );
};

export default ButtonSet;
