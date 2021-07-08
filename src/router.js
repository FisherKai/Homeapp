import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import HomePage from './pages/home/home';
import facedemo from './pages/facedemo/facedemo';


function RouterConfig({ history }) {
    return (
        <Router history={history}>
            <Switch>
                <Route exact component={HomePage} path="/"></Route>
                <Route exact component={facedemo} path="/faceapidemo"></Route>
            </Switch>
        </Router>
    );
}

export default RouterConfig;
