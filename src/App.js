import React, {Component} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/pages/Login';
import NotFound from './components/pages/NotFound';
import Register from './components/pages/Register';
import ForgotPassword from './components/pages/Forgot-password';
import Profile from './components/pages/Profile';


class App extends Component {
    render() {
        return (
            <Router>
                <div className="container col-md-12">
                    <div className="page-wrapper">
                        <Navbar/>
                        <Switch>
                            <Route path="/" exact>
                                <Profile components={Home}/>
                            </Route>
                            <Route path="/about">
                                <Profile components={About}/>
                            </Route>
                            <Route path="/contact">
                                <Profile components={Contact}/>
                            </Route>
                            <Route path="/login"
                                component={Login}/>
                            <Route path="/register"
                                component={Register}/>
                            <Route path="/forgot-password">
                                <Profile components={ForgotPassword}/>
                            </Route>
                            <Route component={NotFound}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}
export default App;
