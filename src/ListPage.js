import React, { Component } from 'react';
import './App.css';
import Navibar from './Navibar.js';
import Search from './Search.js';
import PokeList from './PokeList.js';
import { pokemon } from './Data.js';
import Sort from './Sort.js';



export default class App extends Component {
  state = {
    selectedCategory: '',
    selectedSort: '',
    inputVal: '',
    searchQuery: ''
  }

handleCategorySelect = (e) => {
  this.setState({
    selectedCategory: e.target.value
  })
}
handleSort = (e) => {
  this.setState({
    selectedSort: e.target.value
  });
}
  handleSearch = (e) => {
    this.setState({
      inputVal: e.target.value
    })
  }

  handleSubmit = (e) => { 
    e.preventDefault();
    this.setState({
      searchQuery: this.state.inputVal
    })
  }

  render() {
    return (
      <>
        <Navibar/>
          <main>
            <Search
            // data={pokemon}
            // handleCategorySelect={this.handleCategorySelect}
            // handleSort={this.handleSort}
            handleSearch={this.handleSearch}
            // inputVal={this.state.inputVal}
            submit={this.handleSubmit}
            />
          
            <PokeList
            data={pokemon}
            selectedCategory={this.state.selectedCategory}
            selectedSort={this.state.selectedSort}
            inputVal={this.state.inputVal}
            submit={this.state.searchQuery}/>

            <Sort
            data={this.props.data}
            handleCategorySelect={this.props.handleCategorySelect}
            handleSort={this.props.handleSort}/>
          </main>
      </>
    )
  }
}