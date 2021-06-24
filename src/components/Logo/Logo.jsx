import React from 'react';
import './Logo.scss';
import assets from '../../data/assets';

function Logo({ height, width }) {
  const styles = { height, width };
  console.log(styles);
  return <img style={styles} className="Logo" src={assets.logoFull} alt="" />;
}

export default Logo;
