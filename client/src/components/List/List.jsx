import React, { Component } from 'react';

import Anchor from '../Anchor';
import Button from '../Button';

import "./List.scss";

class List extends Component {
  // state = {  }
  
  render() { 
    const { data, handleSelected } = this.props;

    return (
      <React.Fragment>
        <div id="list">
          <ul>            
            {data.map(item => 
              <Button key={item.name} id={item.name} text={item.text} handleClick={handleSelected}/>                
            )}            
          </ul>
        </div>        
      </React.Fragment>
    );
  }
}

export default List;