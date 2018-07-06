import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                Name: '',
                Email: '',
                Password: '',
            },
            errors: {
                Name: '',
                Email: '',
                Password: '',
            }
        }
    }

    validate(name, value) {
        /*debugger*/
        switch (name) {
            case 'Name':
                if (!value) {
                    return 'First name is Required';
                } else {
                    return '';
                }
            case 'Password':
                if (!value) {
                    return 'Password is Required';
                } else {
                    return '';
                }
            case 'Email':
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

    handleSubmit = () => {
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
        console.log(this.state.fields.Name);
        console.log(this.state.fields.Email);
        console.log(this.state.fields.Password);
    };

    render() {
        return (
            <div className="login-modal">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <div className="login100-form validate-form p-l-55 p-r-55 p-t-178">
                            <span className="login100-form-title"> Register </span>
                            <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter name">
                                <input className="input100"
                                       type="text"
                                       name="Name"
                                       placeholder="Name"
                                       value={this.state.fields.Name}
                                       onChange={this.handleChange}/>
                                <span className="focus-input100"/>
                            </div>
                            <small className="error">{this.state.errors.Name}</small>
                            <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter email">
                                <input className="input100"
                                       type="text"
                                       name="Email"
                                       placeholder="Email"
                                       value={this.state.fields.Email}
                                       onChange={this.handleChange}/>
                                <span className="focus-input100"/>
                            </div>
                            <small className="error">{this.state.errors.Email}</small>
                            <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter password">
                                <input className="input100"
                                       type="password"
                                       name="Password"
                                       placeholder="Password"
                                       value={this.state.fields.Password}
                                       onChange={this.handleChange}/>
                                <span className="focus-input100"/>
                            </div>
                            <small className="error">{this.state.errors.Password}</small>
                            {/*<div className="text-right p-t-13 p-b-23">
                                <span className="txt1"> Forgot </span>
                                 <a href="#" className="txt2"> Username / Password? </a>
                            </div>*/}
                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn" onClick={this.handleSubmit}> Sign Up </button>
                            </div>
                            <div className="flex-col-c p-t-40 p-b-40">
                                <h3>
                                    <Link to={'/login'}>
                                        <span className="txt1 p-b-9">Have an account?</span>
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

export default Register;