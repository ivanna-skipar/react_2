import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Page from "./Page";

class Theme extends Component {
  constructor(){
    super();
    this.state = {
      currentPage: "Login"
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(page) {
    this.setState = {
      currentPage: page
    }
  }
  render() {
    return (
      <div className="main">
        <Navbar currentPage={this.state.currentPage} brand={this.props.brand} change={this.handleChange} />
        <Page currentPage={this.state.currentPage} />
      </div>
    );
  }
}

export default Theme;
