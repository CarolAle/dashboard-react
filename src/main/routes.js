import React from 'react'
import { Route, Redirect, BrowserRouter, Switch } from 'react-router-dom'

import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'

export default props => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/billyngCycles" component={BillingCycle} />
            <Redirect from="*" to="/" />
        </Switch>
        
    </BrowserRouter>
)
