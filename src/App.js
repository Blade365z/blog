import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './components/Home';
import UserPost from './components/UserPost';

import './App.css';


export default function App() {
    return (
        <div className="container main">
            <div className="card card-body">
                <h4> <i className="fab fa-blogger me-1"></i>BloggoMojo</h4>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/home" />
                    </Route>
                    <Route path="/home" component={Home} exact />
                    <Route path="/posts/:id" component={UserPost} exact />
                </Switch>
            </div>
        </div>
    )
}
