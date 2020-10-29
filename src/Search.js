import React, { Component } from 'react';

export default class Search extends Component {
    render() {
        return (
            <section className="search">
            <input
                placeholder=" Search"
                className="search-input"
                onChange={this.props.handleSearch}/>

            {/* <Sort
                data={this.props.data}
                handleCategorySelect={this.props.handleCategorySelect}
                handleSort={this.props.handleSort}/> */}
            </section>
        )
    }

};