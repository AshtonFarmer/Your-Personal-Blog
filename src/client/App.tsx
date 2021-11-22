import React, { Component, Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './scss/app';

import authors from './db/queries/authors';
import blogs from './db/queries/blogs';
import users from './db/queries/users';

export default class App extends React.Component<IAppProps, IAppState> {

    render () {
        return (
           <Router>
               <>
                    <Nav />
                    <div className="container">
                    <Switch>
                        <Route exact path="/" component={authors} />
                        <Route exact path="/" component={blogs} />
                        <Route exact path="/" component={users} />                     
                    </Switch>
                    </div>
                     
               </>
           </Router>
        )
    }
}

interface IAppProps { }

interface IAppState { }