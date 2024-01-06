import { writable } from "svelte/store";

export const pokemon = writable([]);
let loaded = false;

export const fetchPoke = async () => {
    if(loaded) return;
    const url = `https://pokeapi.co/api/v2/pokemon/?limit=15`;
    const res = await fetch(url);
    const data = await res.json();
    const loadPoke = data.results.map((data, index) => ({
            name: data.name,
            id: index + 1,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index +1}.png`
        
    }));
    pokemon.set(loadPoke);
    loaded = true;
};
fetchPoke();

