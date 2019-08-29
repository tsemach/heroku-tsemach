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
            {/* <Button id="tsemach.github.io" text="tsemach.github.io" handleClick={handleSelected}/>
            <Button id="React-CSS" text="React-CSS" handleClick={handleSelected}/> */}
            {/* <Anchor text="tsemach.github.io" link="/applications/react-css/index.html"/>
            <Anchor text="React-CSS" link="/applications/react-css/index.html"/>
            <Anchor text="Typescript-TxJS (rx-txjs)" link="/applications/react-css/index.html"/>
            <Anchor text="Typescript Publisher (rx-txjs-publisher)" link="/applications/react-css/index.html"/>
            <Anchor text="Typescript Adapters" link="/applications/react-css/index.html"/>  */}
          </ul>
        </div>        
      </React.Fragment>
    );
  }
}

export default List;