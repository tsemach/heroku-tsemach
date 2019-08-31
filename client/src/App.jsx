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
    //this.state = {applications: []};
    this.state = {selected: undefined};
    this.handleSelected = this.handleSelected.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
  }
  
  // async componentDidMount() {    
  //   console.log("[App::componentDidMount] is called,", Config.env.HERUKO_URL);    
  //   try {
  //     const reply = await http.get(Config.env.HERUKO_URL+'/applications');
      
  //     console.log("[App::getDerivedStateFromProps] REPLY:", reply.data.data);
  //     this.setState({applications: reply.data.data});      
  //   }
  //   catch (e) {
  //     console.error(e.message);
  //   }
  //   console.log("[App::componentDidMount] returned");
  // }

  // static async getDerivedStateFromProps(_props, _state) {
  //   const state = { ..._state };
  //   console.log("[App::getDerivedStateFromProps] called");
  //   try {
  //     const reply = await http.get(Config.env.HERUKO_URL+'/applications');
      
  //     console.log("[App::getDerivedStateFromProps] REPLY:", reply.data.data);
  //     state.applications = reply.data.data;
  //   }
  //   catch (e) {
  //     console.error(e.message);
  //   }
    
  //   console.log("[App::getDerivedStateFromProps] return ", state);
  //   return state;
  // }

  handleSelected (id) {
    console.log("[App::handleSelected] is called, id", id);

    this.setState({selected: id});     
  }

  handleDescription(link) {
    console.log("[App::handleDescription] is called link = ", link);
    if (link) {

    }
  }

  render() {    
    console.log("[App::reander] is called");
    return (
      <React.Fragment>    
        <Header/>
        <div className="app-container">      
            <List /*applications={this.state.applications}*/ handleSelected={this.handleSelected}/>
            <Description name={this.state.selected} handleDescription={this.handleDescription}/>
        </div>
      </React.Fragment>
    );
  }
}

export default App;