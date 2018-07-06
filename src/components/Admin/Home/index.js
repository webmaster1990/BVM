import React, {Component} from 'react';
import {Modal} from 'react-bootstrap';
import axios from 'axios';
import {Input, Col, Button} from 'antd';
import 'antd/dist/antd.min.css';
import '../home.css';
const InputGroup = Input.Group;

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
            fields: {
                id: '',
                name: '',
                email: '',
                password: ''
            },
            data: [],
            errors: {
                name: '',
                email: '',
                password: '',
            },
            user: [],
            list: []
        };
    }

    handleClose() {
        this.setState({
            show: false,
            fields: {
                name: '',
                email: '',
                password: '',
            },
            errors: {
                name: '',
                email: '',
                password: '',
            }
        });
    }

    handleShow() {
        this.setState({show: true});
    }

    componentWillMount() {
        const user = (localStorage.getItem('data') && JSON.parse(localStorage.getItem('data'))) || [];
        this.setState({
            user: user
        })
        if(user.role !== "admin") {
            window.location.href = '../attendance'
        }

    }

    componentDidMount() {
        axios.get(`http://localhost:8080/api/users`)
            .then(res => {
                const list = res.data;
                this.setState({list});
                console.log(list)
            })
        const {user} = this.state
        console.log(user.email)
        if(user.role !== "admin") {
            document.getElementById("registerBtn").disabled = true;
        }
    }

    validate(name, value) {
        /*debugger*/
        switch (name) {
            case 'name':
                if (!value) {
                    return 'First name is Required';
                } else {
                    return '';
                }
            case 'password':
                if (!value) {
                    return 'Password is Required';
                } else {
                    return '';
                }
            case 'email':
                if (!value) {
                    return 'Email is Required';
                } else if (!value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
                    return 'Email is invalid';
                } else {
                    return '';
                }
            default: {
                return ''
            }

        }
    }

    onChange = (e) => {/*debugger*/
        this.setState({
            errors: {
                ...this.state.errors,
                [e.target.name]: this.validate(e.target.name, e.target.value),
            },
            fields: {
                ...this.state.fields,
                [e.target.name]: e.target.value,
            }
        })
    };

    onSubmit = async () => {
        const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');
        const {fields, user} = this.state;
        let validationErrors = {};
        Object.keys(fields).map(name => {
            const error = this.validate(name, fields[name]);
            if (error && error.length > 0) {
                validationErrors[name] = error;
            }
        });
        if (Object.keys(validationErrors).length > 0) {/*debugger*/
            this.setState({errors: validationErrors});
            return;
        }

        await axios.post('http://localhost:8080/api/users', {

            name: fields.name,
            email: fields.email,
            password: fields.password
        })
            .then(function (response) {
                /*window.location.href = './login'*/
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });

        user.push({
            id: Math.floor(Math.random() * chars.length),
            name: fields.name,
            email: fields.email,
            password: fields.password,

        })
        this.setState({
            id: fields.id + 1,
            user
        })
        localStorage.setItem('data', JSON.stringify(user));
    };

    uRemove = async (i) => {
        debugger
        await axios.delete(`http://localhost:8080/api/users/` + i)
            .then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
    }

    editRow = (a, i) => {
        const {list} = this.state
        debugger
        this.handleShow();
        this.setState({
            fields: {
                name: a.name,
                email: a.email,
                password: a.password,
                id: a._id
            },
            list: i,

            /*id:i*/
        })

    }

    save = async () => {
        const {fields} = this.state;
        await axios.put('http://localhost:8080/api/users/' + fields.id, {
            name: fields.name,
            email: fields.email,
            password: fields.password
        })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
        this.handleClose();
        this.componentDidMount();
    }

    render() {
        const {fields, user, list} = this.state;
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

                    <Button type="button" className="btn btn-primary" id="registerBtn" onClick={this.handleShow} style={{
                        float: 'right',
                        height: '50px',
                        width: '100px',
                        textAlign: 'center',
                        fontSize: '20px'
                    }}>Register</Button>
                    <div>
                        <table className="table table-striped" border="1">
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Delete</th>
                                <th>Edit</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                Array.isArray(list) ? list.map((a, i) =>
                                    <tr key={i}>
                                        <td>{a.name}</td>
                                        <td>{a.email}</td>
                                        <td>{a.password}</td>
                                        <td><input type="button" value="Delete" onClick={() => this.uRemove(a._id)}/>
                                        </td>
                                        <td><input type="button" value="Edit" onClick={() => this.editRow(a, i)}/></td>
                                    </tr>
                                ) : null
                            }

                            </tbody>
                        </table>
                    </div>

                    <div className="Modal">
                        <Modal show={this.state.show} onHide={this.handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Register</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {/*<h4>Modal Show</h4>
                                 <hr />*/}
                                <div className="{/*text-center*/}">
                                    <InputGroup size="large">
                                        <Col>
                                            <Input
                                                type="text"
                                                name="name"
                                                placeholder="Name"
                                                value={this.state.fields.name}
                                                onChange={this.onChange}
                                            />
                                        </Col>
                                        <InputGroup>
                                            <small className="error">{this.state.errors.name}</small>
                                        </InputGroup>
                                    </InputGroup><br/>
                                    <InputGroup size="large">
                                        <Col>
                                            <Input
                                                type="text"
                                                name="email"
                                                placeholder="Email"
                                                value={this.state.fields.email}
                                                onChange={this.onChange}
                                            />
                                        </Col>
                                        <InputGroup>
                                            <small className="error">{this.state.errors.email}</small>
                                        </InputGroup>
                                    </InputGroup><br/>
                                    <InputGroup size="large">
                                        <Col>
                                            <Input
                                                type="password"
                                                name="password"
                                                placeholder="Password"
                                                value={this.state.fields.password}
                                                onChange={this.onChange}
                                            />
                                        </Col>
                                        <InputGroup>
                                            <small className="error">{this.state.errors.password}</small>
                                        </InputGroup>
                                    </InputGroup><br/>
                                    <Button type="primary" size={'large'} onClick={this.onSubmit.bind(this)}> Sign
                                        In </Button>
                                    <Button type="button" size={'large'} className="btn btn-primary"
                                            onClick={() => this.save()}>Save</Button>
                                </div>
                            </Modal.Body>
                            {/*<Modal.Footer>
                             <Button onClick={this.handleClose}>Close</Button>
                             </Modal.Footer>*/}
                        </Modal>
                    </div>

                </div>
            </div>
        );
    }
}

export default Home;