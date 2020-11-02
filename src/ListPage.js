import React, { Component } from 'react';
import './App.css';
import fetch from 'superagent';
import PokeItem from './PokeItem.js';
import Sort from './Sort.js';

const sleep = (time) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, time)
});

export default class App extends Component {
  state = {
    selectedCategory: 'type_1',
    selectedSort: '',
    inputVal: '',
    searchQuery: '',
    data: []
  }
  componentDidMount = async () => {
    await this.fetchPokemon();

  }

fetchPokemon = async () => {
  const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}&direction=${this.state.selectedSort}&sort=${this.state.selectedCategory}`);
  
  await sleep(2000)
  this.setState({ data: response.body.results});
  console.log(response);
}

handleCategorySelect = async (e) => {
 await this.setState({
    selectedCategory: e.target.value
  })
  await this.fetchPokemon();
}
handleSort = async (e) => {
  await this.setState({
    selectedSort: e.target.value
  });

  await this.fetchPokemon();
}

  handleSearch = (e) => {
    this.setState({
      searchQuery: e.target.value
    })
    console.log(e.target.value);

  }

  handleSubmit = async (e) => { 
    e.preventDefault();
     await this.fetchPokemon(); 
     
  }

  render() {
    console.log(this.state.selectedSort)
    console.log(this.state.selectedCategory)
    return (
      <>  
      
      <main>
        <section>

        <form onSubmit={this.handleSubmit}>
            <input
                placeholder=" Search"
                className="search-input"
                type="text"
                onChange={this.handleSearch}
                />
                <button>Submit</button>
            </form>
            <Sort 
              handleSort={this.handleSort}
              handleCategorySelect={this.handleCategorySelect}
              selectedSort={this.state.selectedSort}
              onChange={this.state.handleSort}
              />
              </section>
            
            {
              this.state.data.length === 0
              ? <iframe 
              src="https://giphy.com/gifs/5fQyd7jM58m5y/html5" 
              title={Math.random()}
              width="500" 
              height="500" 
              frameBorder="0" 
              className="giphy-embed" 
              allowFullScreen />
              : this.state.data.map((pokemon, i) => {
                return (
                     <PokeItem
                    key={i}
                    name={pokemon.pokemon}
                    typeOne={pokemon.type_1}
                    typeTwo={pokemon.type_2}
                    image={pokemon.url_image}
                    />
                )
                })
                
              }
             
              </main>
      </>
      
    )
  }
}

