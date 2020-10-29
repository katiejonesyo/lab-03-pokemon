import React, { Component } from 'react';


export default class PokeItem extends Component {
    render () {
        return (
            <div className="poke-item">
                <div className="poke-name">{this.props.name}</div>
                <div className="typeone-label">Primary Type:</div>
                <div className="typetwo-label">Primary Type:</div>
                <div className="poke-typeone">{this.props.typeOne}</div>
                <div className="poke-typetwo r-col">{this.props.typeTwo}</div>
                <div className="pokedex-entry">{this.props.pokedexEntry}</div>
                <img className="poke-img" src={this.props.image}/>
            </div>
        )
    
    }
};