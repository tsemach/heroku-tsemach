import React, { Component } from 'react';

import Anchor from '../Anchor';
import Button from '../Button';

import Config from '../../config';
import http from '../../services/http-service'

import "./List.scss";

class List extends Component {
  constructor() {
    super();
    this.state = {applications: []};
  }
  
  async componentDidMount() {    
    console.log("[List::componentDidMount] is called,", Config.env.HERUKO_URL);    
    try {
      const reply = await http.get(Config.env.HERUKO_URL+'/applications');
      
      console.log("[List::componentDidMount] REPLY:", reply.data.data);
      this.setState({applications: reply.data.data});      
    }
    catch (e) {
      console.error(e.message);
    }
    console.log("[List::componentDidMount] returned");
  }

  // static async getDerivedStateFromProps(_props, _state) {
  //   const state = { ..._state };
  //   console.log("[List::getDerivedStateFromProps] called");
  //   try {
  //     const reply = await http.get(Config.env.HERUKO_URL+'/applications');
      
  //     console.log("[List::getDerivedStateFromProps] REPLY:", reply.data.data);
  //     state.applications = reply.data.data;
  //   }
  //   catch (e) {
  //     console.error(e.message);
  //   }
    
  //   console.log("[List::getDerivedStateFromProps] return ", state);
  //   return state;
  // }  

  render() { 
    const { handleSelected } = this.props;
    const { applications } = this.state;

    return (
      <React.Fragment>
        <div id="list">
          <ul>            
            {applications.map(app => 
              <Button key={app.name} id={app.name} text={app.text} handleClick={handleSelected}/>                
            )}            
          </ul>
        </div>        
      </React.Fragment>
    );
  }
}

export default List;