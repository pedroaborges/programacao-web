import {useState, useEffect } from "react";

function PokemonList() {
    const [pokemons, setPokemons ] = useState([])

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
        .then(response => response.json())
        .then(data => setPokemons(data.results))
    }, [])

    return (
        <div>
            <h2>Lista de Pokemons</h2>
            <ul>
                {pokemons.map(pokemon => (
                    <li key={pokemon.name}>{pokemon.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default PokemonList