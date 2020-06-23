import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Login extends Component { // const Login = () => {
    constructor() {
        super()

        this.state = {
            email: "",
            password: "",
            loading: false,
            message: ""
        }
    }
    dataChange(ev) {
        this.setState({[ev.target.name]: ev.target.value})
    }
    postdata(ev) {
        ev.preventDefault()
        const email = this.state.email
        const password = this.state.password

        this.setState({loading: true})
        const data = {
            email,
            password
        }
        axios.post('/t/c8fks-1592906590/post', data).then(response => {
            console.log(response);
            this.setState({loading: false, message: response.data})
        }).catch(error => {
            console.log(error);
            this.setState({loading: false})
        })
    }
    loadOrShowMsg() {
        if (this.state.loading) {
            return <p>Loading...</p>
        } else {
            return <p>{
                this.state.message
            }</p>
        }
    }
    render() {
        return (
            <div className="container col-md-6">
                <div className="py-4">

                    <form>
                        <h3>Sign In</h3>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email"/>
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password"/>
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                <Link to="/register" className="register">Register</Link>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                        <p className="forgot-password text-right">
                            <Link to="/forgot-password">Forgot password?</Link>
                        </p>
                    </form>
                    {
                    this.loadOrShowMsg()
                } </div>
            </div>
        );
    }
}

export default Login;
