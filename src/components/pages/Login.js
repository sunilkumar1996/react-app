import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form'

class Login extends Component {
    render() {
        // console.log(this.props)
        const {handleSubmit} = this.props;
        return (
            <div className="container col-md-6">
                <div className="py-4">
                    <form onSubmit={handleSubmit((formValues)=>{
                        console.log(formValues)
                    })}>
                        <h3 className="title mx-auto">Sign In</h3>
                        <div className="form-group">
                            <label>Email address</label>
                            {/* <input type="email" className="form-control" name="email" placeholder="Enter email"/> */}
                            <Field type="email" className="form-control" placeholder="Enter email here" name="email" component="input" /> 
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <Field type="password" className="form-control" placeholder="Enter Password" name="password" component="input" /> 
                            {/* <input type="password" className="form-control" name="password" placeholder="Enter password"/> */}
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
                </div>
            </div>
        );
    }
}

export default reduxForm({form:"myForm"})(Login);
