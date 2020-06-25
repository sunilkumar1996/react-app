import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

export default class componentName extends Component {
    handleLogout = () => {
        localStorage.clear('token');
        // history.push('/login');
    }
    render() {
        const Comp = this.props.components
        var auth = JSON.parse(localStorage.getItem('token'))
        console.log('auth')
        
        return (
            <div className="container">
            <div className="row">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">User Profile</h3>
                        <button onClick={this.handleLogout()}>Logout</button>
                        <div className="card-body">
                            {auth ? <Comp/> : <Redirect to="/login"></Redirect>}
                            <h1>This user profile page</h1>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
