import React, { Component } from'react';
import './App.css';
import Header from './Header.js';
import Navibar from './Navibar.js';
import Search from './Search.js';
import ListPage from './ListPage.js';
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
        <ListPage data={pokemon}/>
        </main>
      </>
    )
  }
};