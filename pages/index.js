import React from 'react';

export async function getStaticProps(context){
    const pokemons = await fetch('https://pokeapi.co/api/v2/pokedex/2/')
    .then((serverResponse) => {
        if(serverResponse.ok) {
            return serverResponse.json();
        }
    })
    .then((objectResponse) => {
        return objectResponse.pokemon_entries;
    })

    return {
        props: {
            pokemons
        },

    }
}

export default function Home(props){
    const { pokemons } = props;

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