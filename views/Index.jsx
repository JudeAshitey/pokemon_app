const React = require("react");
const pokemon = require('../models/pokemon')

const style = {
    color:"#fff",
    backgroundColor: "#0000",

}

class Index extends React.Component{
    render(){
        return(
            <div>
                <h1>Pokemon</h1>
                <ul>
                    {pokemon.map((pokemon, idx) => (
                        <li>{pokemon.name}{" "}<img src = {pokemon.img}/></li>
                    ))}
                </ul>
            </div>
        )
    }
}

module.exports = Index;