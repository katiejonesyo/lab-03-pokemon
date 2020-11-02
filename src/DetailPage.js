import React, { Component } from 'react'
import fetch from 'superagent'
import PokeList from './PokeList.js';
 
export default class DetailPage extends Component {
    state = {
        data: [],
    }

    componentDidMount = async () => {
        const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.new}`);
        
    this.setState({data: response.body.results });
}


    render() {
        return (
            <>
            <div className="fetch">
            <h1>{this.props.match.params.new}</h1>
            {
                this.state.data.length === 0
                ? <iframe 
                src="https://giphy.com/gifs/5fQyd7jM58m5y/html5" 
                title={Math.random()}
                width="500" 
                height="500" 
                frameBorder="0" 
                className="giphy-embed" 
                allowFullScreen/>

                : <PokeList
                pokemonDataProp={this.state.pokemonData} />
            }

         </div>
         </>
        )
    }
}


