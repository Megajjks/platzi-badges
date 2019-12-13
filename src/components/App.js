import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Layout from '../components/Layout'
import BadgeNew from '../pages/BadgeNew'
import Badge from '../pages/Badge'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'

function App(){
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/badges" component={Badge}/>
                    <Route exact path="/badges/new" component={BadgeNew}/>
                    <Route component={NotFound}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;