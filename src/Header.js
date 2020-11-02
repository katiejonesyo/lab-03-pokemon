import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>
                   Pokemon
                </h1>
                <h2>
                
                    <Link to="/">Poke Home</Link>
                   
                    <Link to="/list">List Page</Link>
                    <Link to="/detail">Detail Page</Link>
                  
                </h2>
            </div>
        )
    }
};