
{/* <a target="_blank" href="/applications/react-css/index.html">List Refefdfact-CSS</a> */}

import React from 'react';

import './Anchor.scss';

const Anchor = (props) => {
  const { text, link, isBlank } = props;

  const target = isBlank ? 'target="_blank"' : '_self';
  return (
    <a className="anchor" target={target} href={link}>{text}</a>  
  );
}

Anchor.defaultProps = {
  isBlank: false
}

export default Anchor;

