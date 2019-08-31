import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

import http from '../../services';
import Button from '../Button';
import Anchor from '../Anchor';

import Config from '../../config';

import "./Description.scss";

class Description extends Component {

  constructor() {
    super();
    this.state = {descriptions: {}};
    this.empty = {github: {link: '#', blank: false}, project: {link: '#', blank: false}, npmurl: {link: '#', blank: false}}
  }

  async componentDidMount() {
    console.log("[Description::componentDidMount] is called")
    let { name } = this.props;

    if ( ! name ) {
      return;
    }

    if ( ! this.state.descriptions[name] ) {
      const reply = await http.get(`${Config.env.HERUKO_URL+'/description'}?name=${name}`);
      this.state.descriptions[name] = reply.data.data;
    }
    console.log("[Description::componentDidMount] returned, state=", JSON.stringify(this.state, undefined, 2));
  }

  static async getDerivedStateFromProps(prevProps, nextState) {
    console.log("[Description::getDerivedStateFromProps] called, prevProps", prevProps);
    let { name } = prevProps;

    if ( ! name ) {
      console.log("[Description::getDerivedStateFromProps] return, name is not defined");      
      return {descriptions: {}};
    }

    if ( ! nextState.descriptions[name] ) {
      console.log("[Description::getDerivedStateFromProps] getting from:", `${Config.env.HERUKO_URL+'/description'}?name=${name}`)
      const reply = await http.get(`${Config.env.HERUKO_URL+'/description'}?name=${name}`);
      nextState.descriptions[name] = reply.data.data;
    }
    console.log("[Description::getDerivedStateFromProps] returned, state=", JSON.stringify(nextState, undefined, 2));    

    return nextState;
  }
  /**
   * "descriptions": {
   *   "tsemach.github.io": {
   *     "_id": "5d69a01407735a9c4ac6bae4",
   *     "name": "tsemach.github.io",
   *     "github": {
   *       "link": "https://github.com/tsemach/tsemach.github.io",
   *       "blank": "true"
   *     },
   *     "project": {
   *       "link": "https://tsemach.github.io",
   *       "blank": "true"
   *     },
   *     "npmurl": {
   *       "link": "#",
   *       "blank": "falsee"
   *     }
   *   }
   * }
   */
  render() {
    const { name, handleDescription } = this.props;
    console.log("[Description::render] is called, this.props", this.props);

    const description = name && this.state.descriptions[name] ? this.state.descriptions[name] : this.empty;        
    const content = description.content;
    
    console.log("[Description::render] description:",description);

    return (
      <div className="description-container">
        <div className="description-markdown">          
          <ReactMarkdown source={content}/>          
        </div>
        <div className="description-footer">
          <Anchor goto={description.github} text='GitHub' handleClick={handleDescription}/>
          <Anchor goto={description.project} text='Project URL' handleClick={handleDescription}/>
          <Anchor goto={description.npmurl} text='Npm' handleClick={handleDescription}/>          
        </div>
      </div>
  )};
}
 
export default Description;