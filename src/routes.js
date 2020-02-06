import React from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { isAuthenticated } from './auth';

import CreateAccount from './pages/CreateAccount';
import CreateCompany from './pages/CreateCompany';
import Dashboard from './pages/Dashboard';
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
            <PrivateRouter exact path="/create-new-account" component={CreateAccount} />
            <PrivateRouter exact path="/create-new-company" component={CreateCompany} />
            <PrivateRouter exact path="/dashboard" component={Dashboard} />
        </Switch>
    </BrowserRouter>
);

export default Routes;