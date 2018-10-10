import React, { Component } from 'react'
import {HashRouter, Route, Link, Switch} from 'react-router-dom'
import Home from '../views/home'
import Admin from '../views/admin'
import NotMatch from '../views/notMatch'
import SecondPage from '../views/secondPage'
export default class Router extends Component{
    render () {
        return (
            <HashRouter>
                <div>
                    <Switch>
                        <Route path='/admin' render={() =>
                            <Admin>
                                <Switch>
                                    <Route path='/admin' exact component={Home}/>
                                    <Route path='/admin/secondPage' exact component={SecondPage}/>
                                    <Route component={NotMatch}></Route>
                                </Switch>
                            </Admin>
                        }></Route>
                        <Route component={NotMatch}></Route>
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}