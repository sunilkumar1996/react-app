import React, {Component} from "react";
import {Link} from 'react-router-dom';

export default class Register extends Component {
    render() {
        return (
            <div className="container col-md-6">
                <div className="py-5">
                <form>
                    <h3>Sign Up</h3>

                    <div className="form-group">
                        <label>First name</label>
                        <input type="text" className="form-control" placeholder="First name"/>
                    </div>

                    <div className="form-group">
                        <label>Last name</label>
                        <input type="text" className="form-control" placeholder="Last name"/>
                    </div>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email"/>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password"/>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                    <p className="forgot-password text-right">
                        
                        <Link to="/login">Already registered Login</Link>
                    </p>
                </form>
                </div>
            </div>
        );
    }
}
