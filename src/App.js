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

// const App = props => {
class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <div className="page-wrapper">
                        <Navbar/>
                        <h1>Hello, {
                            this.props.name
                        }</h1>
                        <Switch>
                            <Route path="/" exact
                                component={Home} text="new"/>
                            <Route path="/about" exact
                                component={About}/>
                            <Route path="/contact" exact
                                component={Contact}/>
                            <Route path="/login" exact
                                component={Login}/>
                            <Route path="/register" exact
                                component={Register}/>
                            <Route path="/forgot-password" exact
                                component={ForgotPassword}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}
export default App;
