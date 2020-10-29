import React, { Component } from'react';

export default class Sort extends Component {
    render() {
        return (
            <div className="sort-dropdown">
                <select className="updown-dropdown" defaultValue={this.props.selectedSort} onChange={this.props.handleSort}>
                    <option className="content" value='ascending'> ascending (a-z)</option>
                    <option className="content" value='descending'> descending (z-a)</option>
                    <option className="content" value=''>sort by...</option>
                </select>
                <select className="category-dropdown" defaultValue={this.props.selectedCategory} onChange={this.props.handleCategorySelect}>
                    <option className="content" value="">all categories</option>
                    {
                        //getUniqueCategories(this.props.data).map((category, index) =>
                        //<option className="content" value={category} key={index}>{category}</option>//)
                    }
                </select>
                
            </div>
        )
    }
}


// const getUniqueCategories = (data) => {
//     const arr = data.map(pokemon => pokemon.type_1);
//     return Array.from(new Set(arr));
//};