import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AddProperty from './components/AddProperty/AddProperty';
import AddProperty1 from './components/AddProperty/AddProperty1';
import AddProperty2 from './components/AddProperty/AddProperty2';
import AddProperty3 from './components/AddProperty/AddProperty3';
import AddProperty4 from './components/AddProperty/AddProperty4';
import AddProperty5 from './components/AddProperty/AddProperty5';

export default (
    <Switch>
        <Route component={ Login } path="/" exact />
        <Route component={ Dashboard } path="/dashboard" exact />
        <Route path="/addproperty" render={() => (
            <AddProperty>
                <Route path="/addproperty/1" component={ AddProperty1 } />
                <Route path="/addproperty/2" component={ AddProperty2 } />
                <Route path="/addproperty/3" component={ AddProperty3 } />
                <Route path="/addproperty/4" component={ AddProperty4 } />
                <Route path="/addproperty/5" component={ AddProperty5 } />
            </AddProperty>
        )}/>
    </Switch>
)