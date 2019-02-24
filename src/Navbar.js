import React, { Component } from 'react';
import logo from './logo.svg';

class Navbar extends Component {
    constructor() {
        super();
        this.change = this.change.bind(this);
    }
    change(page) {
        this.props.change(page);
        console.log(this.props.change(page))
    } 
      render() {
        return (
            <nav>
                <img src={logo} className="App-logo" alt="logo" />
                <ul className="nav nav-tabs">
                    <li className={(this.props.currentPage === 'Home') ? 'active' : ''}>
                        <a className="nav-link" href="#" onClick={this.change.bind(this,'Home')}>Home</a>
                    </li>
                    <li className={(this.props.currentPage === 'About') ? 'active' : ''}>
                        <a className="nav-link" href="#" onClick={this.change.bind(this,'About')}>About</a>
                    </li>
                    <li className={(this.props.currentPage === 'Contacts') ? 'active' : ''}>
                        <a className="nav-link" href="#" onClick={this.change.bind(this,'Contacts')}>Contacts</a>
                    </li>
                    <li className={(this.props.currentPage === 'Register') ? 'active' : ''}>
                        <a className="nav-link" href="#" onClick={this.change.bind(this,'Register')}>Register form</a>
                    </li>
                    <li className={(this.props.currentPage === 'Login') ? 'active' : ''}>
                        <a className="nav-link" href="#" onClick={this.change.bind(this,'Login')}>Login form</a>
                    </li>
                </ul>
            </nav>
        )
    }
}
export default Navbar;