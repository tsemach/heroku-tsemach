
{/* <a target="_blank" href="/applications/react-css/index.html">List Refefdfact-CSS</a> */}

import React from 'react';

import './Anchor.scss';

const Anchor = (props) => {
  const { text, goto } = props;

  //console.log("[Anchor::render] is called isBlank", isBlank, link);
  console.log("[Anchor::render] is called isBlank", goto.blank, goto.link);

  const target = goto.blank ? 'target="_blank"' : '_self';

  return (
    <a id="anchor" target={target} href={goto.link}>{text}</a>  
  );
}

Anchor.defaultProps = {
  isBlank: false
}

export default Anchor;

