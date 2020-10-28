import React, { Component } from'react';
import './App.css';
import Header from './Header.js';
import Navibar from './Navibar.js';
import Search from './Search.js';
import PokeList from './PokeList.js';
import { pokemon } from './Data.js';



export default class App extends Component {
  render() {
    return (
      <>
        <header>
        <Header />
        <Navibar />
        </header>
        <main>
        <Search data={pokemon}/>
        <PokeList data={pokemon}/>
        </main>
      </>
    )
  }
};