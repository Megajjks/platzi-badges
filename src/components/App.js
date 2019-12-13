import React from 'react';
<<<<<<< HEAD
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
=======
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from '../pages/Home';
import Badges from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew';
import NotFound from '../pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
>>>>>>> 7ad536f94341d1cd0e2f9b470b3dee61de11345e
