import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>
                    <u><strong>Pokemon</strong></u>
                </h1>
                <ul><li>
                    <Link to="/">Poke Home</Link>
                    </li>
                    <li>
                    <Link to="/list">List Page</Link>
                    </li>
                    <li>
                    <Link to="/fetch">Fetch</Link>
                    </li>

                </ul>
            </div>
        )
    }
};