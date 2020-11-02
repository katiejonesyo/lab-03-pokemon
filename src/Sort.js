import React, { Component } from'react';

export default class Sort extends Component {
    render() {
        return (
            <div className="sort-dropdown">
                <select className="updown-dropdown" defaultValue={this.props.selectedSort} onChange={this.props.handleSort}>
                <option className="content" value=''>Sort By</option>
                    <option className="content" value='asc'> ascending (a-z)</option>
                    <option className="content" value='desc'> descending (z-a)</option>
                    
                </select>
                <select className="category-dropdown" defaultValue={this.props.selectedCategory} onChange={this.props.handleCategorySelect}>
                    <option className="content" value="">all categories</option>
                </select>
                
            </div>
        )
    }
};