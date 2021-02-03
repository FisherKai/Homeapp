import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import HomePage from './containers/home/home';
import facedemo from './containers/facedemo/facedemo';


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
