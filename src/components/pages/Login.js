import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Login extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            email: "",
            password: ""
        }
    }
    handleEmail = (event) => {
        this.setState({email: event.target.value});
    }
    handlePassword = (event) => {
        this.setState({password: event.target.value});
    }
    handleSubmit = (event) => {
        const {email, password} = this.state;
        const auth = {
            email,
            password
        };
        fetch("http://jcc.ajenotech.com/api/v1/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(auth)
        }).then(result =>{
            return result.json()
        }).then(data => {
            // debugger
            console.log(data.access_token);
            // debugger 
            localStorage.setItem("token", JSON.stringify(data.access_token))

        })
        // }).then(function (renponse) {
        //     debugger
        //     console.log(renponse.status)
        //     console.log(renponse.access_token)
        //     console.log(renponse.user)ss
        //     // return renponse.json();
        // });
        event.preventDefault();
    }
    render() {
        return (
            <div className="container col-md-6">
                <div className="py-4">
                    <form onSubmit={
                            this.handleSubmit
                        }
                        method="POST">
                        <h3 className="title mx-auto">Sign In</h3>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email"
                                value={
                                    this.state.value
                                }
                                onChange={
                                    this.handleEmail
                                }
                                className="form-control"
                                placeholder="Enter email here"
                                name="email"
                                required/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password"
                                value={
                                    this.state.value
                                }
                                onChange={
                                    this.handlePassword
                                }
                                className="form-control"
                                placeholder="Enter Password"
                                name="password"
                                required/>
                        </div>
                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                <Link to="/register" className="register">Register</Link>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Login</button>
                        <p className="forgot-password text-right">
                            <Link to="/forgot-password">Forgot password?</Link>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}
export default Login;
