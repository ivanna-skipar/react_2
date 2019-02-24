import React, { Component } from 'react';
import Register from "./Register";
import Login from "./Login";
import Jumbotron from "./Jumbotron";

class Page extends Component {
    render() {
        let pageContent;
        if (this.props.currentPage === 'Home') {
            pageContent = "Home page"
        } else if (this.props.currentPage === 'About') {
            pageContent = "About page"
        } else if (this.props.currentPage === 'Contacts') {
            pageContent = "Contacts page"
        } else if (this.props.currentPage === 'Register') {
            pageContent = "Register page"
        } else if (this.props.currentPage === 'Login') {
            pageContent = "Login page"
        }
        else {
            pageContent = "Home page"
        }

        if (this.props.currentPage === "Register") {
            return (
                <div className="container">
                    <Register />
                    <h2>{this.props.currentPage}</h2>
                    {pageContent}
                </div>
            )
        } else if (this.props.currentPage === "Login") {
            return (
                <div className="container">
                    <Login />
                    <h2>{this.props.currentPage}</h2>
                    {pageContent}
                </div>
            )
        } else if (this.props.currentPage ==="Home"){
            return(
                <div className="container">
                    <Jumbotron />
                    <h2>{this.props.currentPage}</h2>
                    {pageContent}
                </div>
            )
        } 
        else {
            return (
                <div className="container">
                    <h2>{this.props.currentPage}</h2>
                    {pageContent}
                </div>
            )
        }

    }
}


export default Page;