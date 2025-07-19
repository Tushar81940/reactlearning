import React from 'react';

const Header = (props) => {
  return (
    <h2>This is the Header,{props.name}, {props.color}</h2>
  );
};

export default Header;
