import React from 'react';

const ForgotPassword = () => {
    return (
        <div className="container col-md-6">
            <div className="py-4">
                <form>
                    <h3>Forgot Password!</h3>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email"/>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Send Mail</button>
                </form>
            </div>
        </div>
    );
}
export default ForgotPassword;
