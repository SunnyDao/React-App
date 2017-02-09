import React from 'react';
import {Route, IndexRoute} from 'react-router';
import {Main,Home,Article,Counter} from '../containers';


export default () => (
    <Route path="/" component={Main}>
        <IndexRoute component={Home} />
        <Route path="article" component={Article} />
        <Route path="counter" component={Counter} />
    </Route>
);