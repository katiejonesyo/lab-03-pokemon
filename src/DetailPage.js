import React, { Component } from 'react'
import fetch from 'superagent'
 
export default class DetailPage extends Component {
    state = {
        data: [],
    }

    componentDidMount = async () => {
        const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.new}`);
        
    this.setState({data: response.body });
}


    render() {
        return (
            <div className="fetch">
            <h1>{this.props.match.params.new}</h1>
            {
                this.state.data.length === 0
                ?<iframe 
                src="https://giphy.com/gifs/5fQyd7jM58m5y/html5" 
                title={Math.random()}
                width="500" 
                height="500" 
                frameBorder="0" 
                className="giphy-embed" 
                allowFullScreen/>
                :this.state.data.map(data => <div key={data.data}>
                <p>{data.character}</p>
                <img src={data.character} alt={data.character} width="200" height="200"/>
                <p>{data.data}</p>
                </div>)
            }

         </div>
        )
    }
}


