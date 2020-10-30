import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import ListPage from './ListPage.js';
import PokeHome from './PokeHome.js';
import Header from './Header.js';
import Footer from './Footer.js';
import Fetch from './Fetch.js';


export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Header name="pokemon" />
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <PokeHome {...routerProps} />} 
                        />
                        <Route 
                            path="/list" 
                            exact
                            render={(routerProps) => <ListPage {...routerProps} />} 
                        />
                        <Route 
                            path="/fetch" 
                            exact
                            render={(routerProps) => <Fetch {...routerProps} />} 
                        />
                    </Switch>
                    <Footer />
                </Router>
                
            </div>
        )
    }
}