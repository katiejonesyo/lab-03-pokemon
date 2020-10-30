import React, { Component } from 'react';
import PokeItem from './PokeItem.js';

export default class PokeList extends Component {
    render () {
        return (
            <section className="poke-list">
                PokeList
                {   this.props.data.filter((pokemon) => {
                        if (!this.props.submit) return true;
                        if (pokemon.pokemon === this.props.submit) return true;
                        return false;
                    })


                   .map((pokemon, i) => {
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
                   
                        
                      .sort((a, b) => {
                            if (!this.props.selectedSort === 'ascending'){
                                return a[this.props.selectedCategory] - b[this.props.selectedCategory]
                            } else {
                                return b[this.props.selectedCategory] - a[this.props.selectedCategory]
                            }
                        })
                        
                        // const searchValidation = (data, input) => {
                        //     if (input) {
                        //         return data.filter(pokemon => pokemon.pokemon.includes(input));
                        //     } else {
                        //         return data;
                        //     }
                        // }
                }
                
            </section>
        )
      
    }
}

