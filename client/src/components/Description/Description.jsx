import React, { Component } from 'react';

const Description = (props) => {
  const {content = ''} = props;

  return (  
    <React.Fragment>
      <pre>{content}</pre>
    </React.Fragment>
  );
}
 
export default Description;