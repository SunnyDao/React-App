import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Main from '../containers/Main';
import Home from '../containers/Home';
import Counter from '../containers/Counter';

export default () => (
    <Route path="/" component={Main}>
        <IndexRoute component={Home} />
        <Route path="counter" component={Counter} />
    </Route>
);