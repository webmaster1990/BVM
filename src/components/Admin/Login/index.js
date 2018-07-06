import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                email: '',
                password: '',
            },
            errors: {
                email: '',
                password: '',
            }
        }
    }

    componentWillMount ()
    {
        /*const user = (localStorage.getItem('data') && JSON.parse(localStorage.getItem('data')));
        if(user){
            window.location.href = '../Home'
        }*/
    }

    validate(name, value) {
        /*debugger*/
        switch (name) {
            case 'email':
                if (!value) {
                    return 'Email is Required';
                } else if (!value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
                    return 'Email is invalid';
                } else {
                    return '';
                }
            case 'password':
                if (!value) {
                    return 'Password is Required';
                } else {
                    return '';
                }
            default: {
                return ''
            }

        }
    }

    handleChange = (e) => {/*debugger*/
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
        const { fields } = this.state;
        let validationErrors = {};
        Object.keys(fields).map(name => {
            const error = this.validate(name, fields[name]);
            if (error && error.length > 0) {
                validationErrors[name] = error;
            }
        });
        if (Object.keys(validationErrors).length > 0) {/*debugger*/
            this.setState({ errors: validationErrors });
            return;
        }

        await axios.post('http://localhost:8080/api/login', {
            email: fields.email,
            password: fields.password
        })
            .then(function (response) {debugger
                console.log(response);
            console.log(response.data);
                window.location.href = '../home'
            const user = response.data;
            localStorage.setItem('data' ,JSON.stringify(user));
            if (user.role === "admin") {
                window.location.href = '../home'
            } else {
                window.location.href = '../attendance'
            }
            }).catch(function (error) {
                console.log(error);
            });
    };

    render() {
        return (
            <div className="login-modal">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <div className="login100-form validate-form p-l-55 p-r-55 p-t-178">
                            <span className="login100-form-title"> Sign In </span>
                            <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
                                <input className="input100"
                                       type="text"
                                       name="email"
                                       placeholder="Email"
                                       value={this.state.fields.email}
                                       onChange={this.handleChange}/>
                                <span className="focus-input100"/>
                            </div>
                            <small className="error">{this.state.errors.email}</small>
                            <div className="wrap-input100 validate-input" data-validate="Please enter password">
                                <input className="input100"
                                       type="password"
                                       name="password"
                                       placeholder="Password"
                                       value={this.state.fields.password}
                                       onChange={this.handleChange}/>
                                <span className="focus-input100"/>
                            </div>
                            <small className="error">{this.state.errors.password}</small>
                            <div className="text-right p-t-13 p-b-23">
                                <span className="txt1"> Forgot </span>
                                <a href="#" className="txt2"> Username / Password? </a>
                            </div>
                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn" onClick={this.onSubmit.bind(this)}> Sign In </button>
                            </div>
                            <div className="flex-col-c p-t-40 p-b-40">
                                <h3>
                                    <Link to={'/register'}>
                                        <span className="txt1 p-b-9">Don’t have an account?</span>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;