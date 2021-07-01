import React from 'react';
import './Button.scss';

const Button = (props) => {
  return (
    <button className="Button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
