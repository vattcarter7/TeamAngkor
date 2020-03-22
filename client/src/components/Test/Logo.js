import React from 'react';
import logo from '../../img/logo.png'

const Logo = () => {
  return (
    <img
      src={logo}
      width="160"
      height="34"
      alt="City tours"
      data-retina="true"
      className="logo_normal"
    />
  );
};

export default Logo;
