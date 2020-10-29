import React, { Component } from 'react';
import { pokemon } from './Data.js';
import PokeItem from './PokeItem.js';

export default class PokeList extends Component {
    render () {
        return (
            <sections className="poke-list">
                PokeList (children: PokeItem)
                {
                    this.props.data.map((pokemon, index) => {
                        return (
                            <PokeItem
                            name={pokemon.pokemon}
                            typeOne={pokemon.type_1}
                            typeTwo={pokemon.type_2}
                            image={pokemon.url_image}
                            key={index}/>
                            )
                        })
                }
            </sections>
        )
      
    }
};