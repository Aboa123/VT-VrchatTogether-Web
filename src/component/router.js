import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './main';
import Loading from './loading';
// import Landing from './landing';
// import Contents from './contents';
import {NotFound} from './notFound';

const Router = () => (
    <Switch>
        <Route exact path="/" component={Loading}/>
        <Route exact path="/main" component={Main}/>
        {/* <Route path="/landing" component={Landing}/> */}
        {/* <Route path="/contents" component={Contents}/> */}
        <Route path="*" exact component={NotFound}/>
    </Switch>
)

export default Router;