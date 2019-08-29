import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import _ from 'lodash';
import 'react-splitter-layout/lib/index.css';
import 'babel-polyfill';

import * as utils from './common/utils';
import Config from './config'
import http from './services/http-service'
import data from './common/data';

import './App.scss';

import Header from './components/Header';
import List from './components/List';
import Description from './components/Description';


console.log("[APP] HERUKO_URL:", process.env.HERUKO_URL)

/**
 * from: https://stackoverflow.com/questions/42914666/react-router-external-link?rq=1
 * 
 * state: 
 *  view: 
 *    left - cssCode, htmlCode
 *    right - cssCode, htmlCode, htmlRendered
 */
class App extends Component {
  constructor() {
    super();
    this.handleSelected = this.handleSelected.bind(this);
    this.state = {data: []};
  }
  
  async componentDidMount() {    
    console.log(Config.env.HERUKO_URL);    
    try {
      const reply = await http.get(Config.env.HERUKO_URL);
      
      console.log("REPLY:", reply.data.data);
      this.setState({data: reply.data.data});
    }
    catch (e) {
      console.error(e.message);
    }
  }

  handleSelected (id) {
    console.log("handleSelected: ", id);
  }

  render() {    
    console.log("RENDER REPLY:", this.state.data);
    return (
      <React.Fragment>    
        <Header/>
        <div className="app-container">
          {/* <Route path="/react-css" component={<a target="_blank" href="http://localhost:1234/reac-css">Google</a>}/>  */}
          {/* <Route path="/react-css" component={() => {          
            window.location.href = 'http://localhost:1234/react-css'; 

            return <p>sdvsd</p>;
          }}/>  */}
          <div className="list-container">
            <List data={this.state.data} handleSelected={this.handleSelected}/>
          </div>
          <Description content="AAAA"/>
        </div>
      </React.Fragment>
    );
  }
}

export default App;