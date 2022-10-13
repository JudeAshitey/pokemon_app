const React = require("react");
const pokemon = require('../models/pokemon')


class Show extends React.Component{
    render(){
        const {pokemon} = this.props;
        return(
            <div  >
                <h1>Gotta Catch 'Em All</h1>
                <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
                <img src = {pokemon.img}/>
           
             <a href="/pokemon"><button>Lets Get Back</button></a>
            </div>
        )
    }
}

module.exports = Show;