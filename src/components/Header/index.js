import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="navbar navbar-transparent navbar-fixed-top" style={{background:'black'}}>
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <a className="navbar-brand" href="#"><img className="logo" src="images/logo.png" alt="logo" height={'100%'}/></a>
                    </div>
                    <nav id="my-nav" className="navbar-collapse collapse" role="navigation">
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <a href="#home">Home</a>
                            </li>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#portfolio">Works</a>
                            </li>
                            <li>
                                <a href="#skill">Skills</a>
                            </li>
                            <li>
                                <a href="#clients">Clients</a>
                            </li>
                            <li>
                                <a href="#process">Process</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}
export default Header;