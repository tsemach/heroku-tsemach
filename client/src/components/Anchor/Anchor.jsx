
{/* <a target="_blank" href="/applications/react-css/index.html">List Refefdfact-CSS</a> */}

import React from 'react';

import './Anchor.scss';

const Anchor = (props) => {
  const { text, link, isBlank } = props;

  console.log("BBBBBBBB: isBlank", isBlank, link);

  const target = isBlank ? 'target="_blank"' : '_self';

  return (
    <a id="anchor" target={target} href={link}>{text}</a>  
  );
}

Anchor.defaultProps = {
  isBlank: false
}

export default Anchor;

