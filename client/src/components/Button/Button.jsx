
import React from 'react';

import './Button.scss';

const Button = (props) => {
  const { text, id, handleClick, disabled = true } = props;  
  const isDisabled = disabled;

  return (
    <button id="button" {...isDisabled ? disabled : ''} onClick={() => handleClick(id)}>{text}</button>
  );
}

Button.defaultProps = {
  handleClick: () => {}
}

export default Button;

