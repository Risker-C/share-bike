import React, { Component } from 'react'
import {HashRouter, Route, Link, Switch} from 'react-router-dom'
import Home from '../views/home'
import Admin from '../views/admin'
import NotMatch from '../views/notMatch'
import SecondPage from '../views/secondPage'
import Login from '../views/login'
import Order from '../views/order'
import Details from '../views/order/details'
import Bar from '../views/echarts/bar'
import Pie from '../views/echarts/pie'
import TestLogin from '../views/test/login'
export default class Router extends Component{
    render () {
        return (
            <HashRouter>
                <div>
                    <Switch>
                        <Route path='/admin' render={() =>
                            <Admin>
                                <Switch>
                                    <Route path='/admin/home' component={Home}/>
                                    <Route path='/admin/secondPage' exact component={SecondPage}/>
                                    <Route path='/admin/order' component={Order}/>
                                    <Route path='/admin/test/login' component={TestLogin}/>
                                    <Route path='/admin/echarts/bar' component={Bar}/>
                                    <Route path='/admin/echarts/pie' component={Pie}/>
                                    <Route component={NotMatch}></Route>
                                </Switch>
                            </Admin>
                        }></Route>
                        <Route path='/common/order/detail/:id' component={Details}/>
                        <Route path='/login' exact component={Login}/>
                        <Route component={NotMatch}></Route>
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}