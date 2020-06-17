import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'

export default props => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/billingCycles' component={BillingCycle} />
            <Redirect from='*' to='/' />
        </Switch>
    </BrowserRouter>
        
    
)
