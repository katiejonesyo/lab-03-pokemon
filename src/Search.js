import React, { Component } from 'react';
import Sort from './Sort.js';

export default class Search extends Component {
    render() {
        return (
            <section className="search">
                Search (children: Sort)
                <Sort />
            </section>
        )
    }

};