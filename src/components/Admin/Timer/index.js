import React, {Component} from 'react';
import {Input, Col, Button} from 'antd';
import moment from 'moment';
import 'antd/dist/antd.min.css';
import '../home.css';
const InputGroup = Input.Group;

class Timer extends React.Component {
    constructor() {
        super()
        this.state = {}
        // holds the actuall time
        this.time = null;
        // will be used to clear the interval
        this.intervalId = null;
        // used to switch from play to pause and viceversa
        this.state.toggle = false;
        // holds the formatted current time in HH:mm:ss
        this.state.currentTime = null

    }

    componentDidMount() {
        this.initializeTime()
    }

    initializeTime = () => {
        this.time = 0;
        this.setState({
            currentTime: this.formatTime(this.getTime())
        })
    }

    playTime = () => {
        if (!this.state.toggle) {
            this.startTime()
        } else {
            this.pauseTime()
        }
    }

    startTime() {
        this.createInterval()
        this.toggle()
    }

    pauseTime = () => {
        this.clearInterval()
        this.toggle()
    }

    resetTime = () => {
        this.initializeTime()
        this.clearInterval()
        this.setState({toggle: false})
    }

    toggle = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    createInterval() {
        this.intervalId = setInterval(this.updateTime, 100);
    }

    clearInterval() {
        clearInterval(this.intervalId)
    }

    updateTime = () => {
        this.time += 100
        const newTime = this.getTime();
        const formattedTime = this.formatTime(newTime);

        +this.setState({currentTime: formattedTime})
        console.log(formattedTime)
    }

    formatTime = (momentJsObject) => {
        return momentJsObject.format("HH:mm:ss")
    }

    getTime = () => {
        return moment.utc(this.time)
    }


    render() {
        var toggleText = !this.state.toggle
            ? "Play"
            : "Stop";

        return (
            <div className="wrapper">
                <nav id="sidebar">
                    <div className="sidebar-header">
                        <h3>BVM Infotech</h3>
                    </div>

                    <ul className="list-unstyled components">
                        <li>
                            <a href="#">Create</a>
                        </li>
                        <li>
                            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false"
                               className="dropdown-toggle">Pages</a>
                            <ul className="collapse list-unstyled" id="pageSubmenu">
                                <li>
                                    <a href="#">Page 1</a>
                                </li>
                                <li>
                                    <a href="#">Page 2</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>

                <div id="content">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="nav navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">Page1</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Page2</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <div className="text-center">
                        <div>
                            <div className="mdl-card__title--expand">
                                <h1 ref="time" className='timer' id='time'>{this.state.currentTime}</h1>
                            </div>

                            <div className="mdl-card__actions">
                                <button className="btn btn-success btn-timer" onClick={this.playTime}>
                                    {toggleText}
                                </button>
                                &nbsp;&nbsp;&nbsp;
                                <button className="btn btn-danger btn-timer" onClick={this.resetTime}>
                                    Reset
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Timer;