import React, { Component } from 'react';


export default class PokeItem extends Component {
    render () {
        return (
            <div classnAME="poke-item">
                <div className="poke-name">{this.props.name}</div>
                <div className="type-one">{this.props.typeOne}</div>
                <div className="type-two">{this.props.typeTwo}</div>
                <img className="poke-img" src={this.props.image}/>
            </div>
        )
    
    }
};