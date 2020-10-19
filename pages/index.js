import React, { useState, useEffect } from 'react';

export default function Home(){
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokedex/2/')
        .then((serverResponse) => {
            if(serverResponse.ok) {
                return serverResponse.json();
            }
        })
        .then((objectResponse) => {
            console.log(objectResponse.pokemon_entries);
            setPokemons(objectResponse.pokemon_entries);
        })
    }, []);


    return (
        <div>
            Pokedex
            <ul>
                {pokemons.map((pokemon) => (
                    <li key={pokemon.entry_number}>
                        {pokemon.pokemon_species.name}
                    </li>
                ))}
            </ul>
        </div>
        
    );
}