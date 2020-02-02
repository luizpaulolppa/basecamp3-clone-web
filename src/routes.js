import React from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { isAuthenticated } from './auth';

import CreateAccount from './pages/CreateAccount';
import Home from './pages/Home';

const PrivateRouter = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: "/", state: { from: props.location } }} />
            )
        }
    />
)

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/create-new-account" component={CreateAccount} />
            <PrivateRouter exact path="/app" component={() => <h1>Voce está logado!!</h1>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;