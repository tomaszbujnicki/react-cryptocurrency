import React from 'react';
import './ButtonSet.scss';

const ButtonSet = ({ children }) => {
  return (
    <ul className={'ButtonSet'}>
      {children.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
};

export default ButtonSet;
