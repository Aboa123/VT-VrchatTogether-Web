import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './main';
import Landing from './landing';
import Contents from './contents';

const Router = () => (
    <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/landing" component={Landing}/>
        <Route path="/contents" component={Contents}/>
    </Switch>
)

export default Router;