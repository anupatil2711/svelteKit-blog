<script>
    import { pokemon } from "../stores/pokestore";
    import PokemonCard from "../../components/pokemonCard.svelte";
</script>
<h1 class="text-4xl text-center my-8 uppercase font-mono">Svelte Pokemon App</h1>
<div class="grid gap-6 md:grid-cols-3 grid-cols-2">
    {#each $pokemon as pokeman}
    <PokemonCard pokeman = { pokeman } />
    {/each}
</div> 

