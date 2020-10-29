import React, { Component } from'react';
import './App.css';
import Header from './Header.js';
import Navibar from './Navibar.js';
import Search from './Search.js';
import PokeList from './PokeList.js';
import { pokemon } from './Data.js';
import Sort from './Sort.js';



export default class App extends Component {
  state = {
    selectedCategory: '',
    selectedSort: '',
    inputVal: ''
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

  render() {
    return (
      <>
      <header>
        <Header/>
        <Navibar/>
      </header>
          <main>
            <Search
            data={pokemon}
            handleCategorySelect={this.handleCategorySelect}
            handleSort={this.handleSort}
            handleSearch={this.handleSearch}
            inputVal={this.state.inputVal}
            />
          
            <PokeList
            data={pokemon}
            selectedCategory={this.state.selectedCategory}
            selectedSort={this.state.selectedSort}
            inputVal={this.state.inputVal}/>

            <Sort
            data={this.props.data}
            handleCategorySelect={this.props.handleCategorySelect}
            handleSort={this.props.handleSort}/>
          </main>
      </>
    )
  }
}