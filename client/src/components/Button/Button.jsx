
import React from 'react';

import './Button.scss';

const Button = (props) => {
  const { text, id, handleClick } = props;
  
  return (
    <button id="button" onClick={() => handleClick(id)}>{text}</button>
  );
}

Button.defaultProps = {
  handleClick: () => {}
}

export default Button;

