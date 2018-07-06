import React, {Component} from 'react';
import axios from 'axios';
import moment from 'moment';
import {BarChart} from 'react-easy-chart';
import SweetAlert from 'react-bootstrap-sweetalert'
import {Input, Col, Button} from 'antd';
import 'antd/dist/antd.min.css';
import '../home.css';
const InputGroup = Input.Group;
let today = new Date()
class attendance extends React.Component {
    constructor() {
        super()
        this.state = {
            time: 0,
            currentDate: moment(`${today.getFullYear()}/${today.getMonth()}/${today.getDate()}`, "yyyy/mm/dd").unix(),
            startTime: 0,
            totalTime: 0,
            pauseTime: 0,
            continueTime: 0,
            breakTime: 0,
            allBreakTime: 0,
            showStart: false,
            showStop: false,
            list: {},
            userData: [],
            allBreak: [],
            toggle: false
        }
    }

    componentWillMount() {
        const that = this
        setInterval(() => {
            const currentTime = new Date().getTime()
            const time = moment(currentTime).format("hh : mm : s a")
            that.setState({
                time: time
            }, () => {
                if (that.state.startTime) {
                    that.duration()
                }
            })
        }, 1000)
        const sTime = localStorage.getItem('startTime') || '';
        const bTime = localStorage.getItem('breakTime') || '';
        const breaks = (localStorage.getItem('breakTime') && JSON.parse(localStorage.getItem('breakTime'))) || [];
        this.setState({
            allBreak: breaks
        })

        if (sTime) {
            const time1 = moment(parseInt(sTime)).format("hh : mm : s a")
            that.setState({
                startTime: time1
            })
        }

        if (breaks) {
            console.log(breaks)
            /*let v = bTime.split(',')*/
            const totalDurations = breaks.slice(1)
                .reduce((prev, cur) => moment.duration(cur).add(prev),
                    moment.duration(breaks[0]))
            let totalBreak = moment.utc(totalDurations.asMilliseconds()).format("HH:mm:ss")

            that.setState({
                allBreakTime: totalBreak
            })
        }
        //get data for generate graph
        axios.get(`http://localhost:8080/api/timer`)
            .then(res => {
                const userData = res.data;
                this.setState({userData});
                console.log(userData)
            })
        //for disable stop & break button
        axios.get(`http://localhost:8080/api/timer/attend/${this.state.currentDate}`)
            .then(res => {
                const list1 = res.data;
                if (list1.total !== null) {
                    document.getElementById("stopBtn").disabled = true;
                    document.getElementById("breakBtn").disabled = true;
                }
            })
    }

    componentDidMount() {
        //for disable start button
        axios.get(`http://localhost:8080/api/timer/attend/${this.state.currentDate}`)
            .then(res => {
                const list = res.data;
                this.setState({list});
                console.log(list)
                console.log(list.date)
                let today1 = `${today.getFullYear()}/${today.getMonth()}/${today.getDate()}`
                let todayDate = moment(today1, "yyyy/mm/dd").unix()
                console.log(todayDate)
                if (list.date === todayDate) {
                    console.log('same date');
                    document.getElementById("startBtn").disabled = true;
                }
            })
        console.log(this.state.list)
    }

    start = async () => {
        const getTime = new Date().getTime()
        let currentDate = `${today.getFullYear()}/${today.getMonth()}/${today.getDate()}`
        let date = moment(currentDate, "yyyy/mm/dd").unix()
        this.setState({
            currentDate: date
        })
        //post current date & start time
        await axios.post('http://localhost:8080/api/timer', {
            date: date,
            startTime: getTime,
            endTime: '',
            total: '',
        })
            .then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });

        localStorage.setItem('startTime', getTime);
    }

    duration = () => {
        const {time, startTime} = this.state
        let start = moment(startTime, "HH:mm:ss a");
        let end = moment(time, "HH:mm:ss a");
        let duration = moment.duration(end.diff(start));
        let hours = parseInt(duration.asHours());
        let minutes = parseInt(duration.asMinutes()) - hours * 60;
        /*let seconds = parseInt(duration.asSeconds());*/
        let seconds = duration.seconds();
        let difference = `${hours} : ${minutes} : ${seconds} `;
        /*let totalTime = difference.subtract(breakTime)*/
        this.setState({
            totalTime: difference
        })
    }


    stop = async () => {
        const {time, startTime, allBreakTime, currentDate} = this.state
        let start = moment(startTime, "HH:mm:ss a");
        console.log(start)
        let end = moment(time, "HH:mm:ss a");
        let lunch = moment(allBreakTime, "HH:mm:ss a");
        console.log(lunch)
        let duration = moment.duration(end.diff(start));
        let hours = parseInt(duration.asHours());
        let minutes = parseInt(duration.asMinutes()) - hours * 60;
        let seconds = duration.seconds();
        debugger
        let difference = `${hours}:${minutes}:${seconds}`;
        let totalWork = moment(difference, "HH:mm:ss a");
        console.log(totalWork)
        let duration1 = moment.duration(totalWork.diff(lunch));
        const total = duration1._milliseconds / 1000

        //update end time & total time of employee using current date
        await axios.put('http://localhost:8080/api/timer/' + currentDate, {

            endTime: end.unix(),
            total: total
        })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });

        //empty all start and local storage
        localStorage.setItem('breakTime', JSON.stringify([]));
        localStorage.setItem('startTime', '');
        this.setState({
            allBreak: [],
            startTime: 0,
            totalTime: 0,
        })
    }

    pauseContinue = () => {
        this.setState({
            toggle: !this.state.toggle
        })
        if (!this.state.toggle === true) {
            console.log('pause')
            const timep = new Date().getTime()
            const pauseTime = moment(parseInt(timep)).format("hh : mm : s a")
            console.log(pauseTime)
            this.setState({
                pauseTime: pauseTime
            })

        } else {
            console.log('contine')
            const {pauseTime, totalTime, allBreak} = this.state
            const timec = new Date().getTime()
            const continueTime = moment(parseInt(timec)).format("hh : mm : s a")
            console.log(continueTime)
            this.setState({
                continueTime: continueTime
            })
            //diff of pause time & continue time
            let start = moment(pauseTime, "HH:mm:ss a");
            let end = moment(continueTime, "HH:mm:ss a");
            let duration = moment.duration(end.diff(start));
            console.log(duration)
            debugger
            let hours = parseInt(duration.asHours());
            let minutes = parseInt(duration.asMinutes()) - hours * 60;
            let seconds = parseInt(duration._data.seconds);
            let difference = `${hours}:${minutes}:${seconds}`;
            allBreak.push(
                difference
            )
            this.setState({
                allBreak
            })

            localStorage.setItem('breakTime', JSON.stringify(allBreak));
        }
    }

    render() {
        const {userData} = this.state
        /*userData.forEach(tt => {
            tt.hours = `${moment(tt.total).hours()}.${moment(tt.total).minutes()}`
        })*/
        userData.forEach(tt => {
         tt.hours = `${(tt.total)/3600}`
         })
        const graphObj = (userData && userData.length && userData.map(x => ({
                x: x.date,
                y: x.hours,
                color: `${x.total < 28800 ? '#45B9D3' : 'red'}`
            }))) || []

        return (
            <div className="wrapper">
                <nav id="sidebar">
                    <div className="sidebar-header">
                        <h3>BVM Infotech</h3>
                    </div>

                    <ul className="list-unstyled components">
                        <li>
                            <a href="home">Home</a>
                        </li>
                        <li>
                            <a href="attendance">Attendance</a>
                        </li>
                        <li>
                            <a href="#">Employee</a>
                        </li>
                        {/*<li>
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
                        </li>*/}
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

                    <div className="col-sm-6">
                        <div className="card text-center">
                            <div className="panel-heading">
                                Time Tracker
                            </div>
                            <div className="panel-body">
                                {/*<h4 className="timeDisplay">Current Time = {this.state.time}</h4>*/}
                                <h4 className="startTime timeDisplay">Start Time  {this.state.startTime} hour</h4>
                                <h4 className="totalTime timeDisplay">Total Time  {this.state.totalTime} hour</h4>
                                <h4 className="breakTime timeDisplay">Total Break Time  {this.state.allBreakTime} hour</h4>
                            </div>
                            <div className="panel-footer">
                                <button className="btn btn-primary btn-timer" id="startBtn"
                                        onClick={() => this.setState({showStart: true})}>Start
                                </button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button className="btn btn-info btn-timer" id="breakBtn"
                                        onClick={this.pauseContinue}>{!this.state.toggle ? "Pause" : "Continue"}
                                </button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button className="btn btn-danger btn-timer" id="stopBtn"
                                        onClick={() => this.setState({showStop: true})}>Stop
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card text-center">
                            <div className="panel-heading">
                                Work Graph
                            </div>
                            <div className="panel-body">
                                <BarChart
                                    axisLabels={{x: 'Date', y: 'Working hour'}}
                                    axes
                                    height={200}
                                    width={500}
                                    barWidth={30}
                                    data={graphObj}
                                    margin={{top: 10, right: 0, bottom: 30, left: 50}}
                                />
                                {/*<Bar data={graphObj}/>*/}
                            </div>
                        </div>
                    </div>
                    <div>
                        <SweetAlert
                            custom
                            showCancel
                            show={this.state.showStart}
                            confirmBtnText="Yes"
                            cancelBtnText="No"
                            confirmBtnBsStyle="primary"
                            cancelBtnBsStyle="default"
                            title="Want to start tracker?"
                            onConfirm={() => {
                                this.start()
                                console.log('confirm');
                                this.setState({showStart: false});
                            }}
                            onCancel={() => {
                                console.log('cancel');
                                this.setState({showStart: false});
                            }}
                            onEscapeKey={() => this.setState({showStart: false})}
                            onOutsideClick={() => this.setState({showStart: false})}
                        >
                            You will find start your tracker after press Yes
                        </SweetAlert>

                        <SweetAlert
                            warning
                            showCancel
                            show={this.state.showStop}
                            confirmBtnText="Yes"
                            cancelBtnText="No"
                            confirmBtnBsStyle="primary"
                            cancelBtnBsStyle="default"
                            title="Want to stop tracker?"
                            onConfirm={() => {
                                this.stop()
                                console.log('confirm');
                                this.setState({showStop: false});
                            }}
                            onCancel={() => {
                                console.log('cancel');
                                this.setState({showStop: false});
                            }}
                            onEscapeKey={() => this.setState({showStop: false})}
                            onOutsideClick={() => this.setState({showStop: false})}
                        >
                            You will find stop your tracker after press Yes
                        </SweetAlert>
                    </div>
                </div>
            </div>
        );
    }
}

export default attendance;