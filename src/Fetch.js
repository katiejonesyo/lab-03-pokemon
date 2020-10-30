import React, { Component } from 'react'
import fetch from 'superagent';

export default class Fetch extends Component {
    state = {
        quotes: []

    }
     componentDidMount = async () => {
         const response = await fetch.get('https://alchemy-pokedex.herokuapp.com/api/pokedex');
         this.setState({ quotes: response.body.results });
     }

     render() {
         return (
             <>
             <div>
                 {
                     (this.state.quotes.length === 0)
                     ?<iframe
                        src='https://media.giphy.com/media/rAm0u2k17rM3e/giphy.gif'
                        title = 'waiting'
                        width ='200px'
                        height ='200px'
                        frameBorder = '1px'/>
                        :JSON.stringify(this.state.quotes)
                 }
             </div>
             <div>
                 {this.state.quotes.map(quote =>
                    <div>
                        <p>
                            {quote.character}
                        </p>
                        </div>
                            
                    )}
             </div>
             </>
         )
     }
};
