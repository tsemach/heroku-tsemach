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
    this.empty = {github: 'None', pages: 'None', npm: 'None', isBlank: {github: false, pages: false, npm: false}};
  }
  
  static async getDerivedStateFromProps(props, state) {
    const { name } = props;

    if ( ! name ) {
      return {props, state};
    }

    if ( ! state.descriptions[name] ) {
      const reply = await http.get(`${Config.env.HERUKO_URL+'/description'}?name=${name}`);
      state.descriptions[name] = reply.data.data;
    }      
    return {props, state};
  }

  render() {
    const { name, handleDescription } = this.props;

    let description = name && this.state.descriptions[name] ? this.state.descriptions[name] : this.empty;

    let isGitHub = description.github && description.github !== 'None' ? true : false;
    let isPages = description.pages && description.pages !== 'None'  ? true : false;
    let isNpm = description.npm && description.npm !== 'None'  ? true : false;
    
    let content = description.content;
    console.log("DDDDDDDDD: ", description);
    return (
      <div className="description-container">
        <div className="description-paragraph">
        {/* <pre>{content}</pre> */}
        <ReactMarkdown source={content}/>
        </div>
        <div className="description-footer">
          {/* <Button disabled={!isGitHub} id={description.github} text='GitHub' handleClick={handleDescription}/> */}
          <Anchor isBlank={description.isBlank.github} link={description.github} text='GitHub' handleClick={handleDescription}/>
          <Anchor isBlank={description.isBlank.pages} link={description.pages} text='Project URL' handleClick={handleDescription}/>
          <Anchor isBlank={description.isBlank.npm} link={description.npm} text='Npm' handleClick={handleDescription}/>
        </div>
      </div>
  )};
}
 
export default Description;