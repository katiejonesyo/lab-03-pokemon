import React, { Component } from 'react';

export default class Search extends Component {
    render() {
        return (
            <form onSubmit={this.props.submit}>
            <input
                placeholder=" Search"
                className="search-input"
                type="text"
                onChange={this.props.handleSearch}/>
                <button>Submit</button>
            </form>
        )
    }

};