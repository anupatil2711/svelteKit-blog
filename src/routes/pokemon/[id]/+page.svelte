<script>
    export let data;
  </script>
  
  <div class="p-6 text-left text-black border-dashed border-2 border-black rounded-xl max-w-80 m-4 transition ease-in-out delay-150 bg-purple-50 hover:-translate-y-1 hover:scale-110 hover:bg-green-300 duration-300">
    <h1 class="text-xl my-8 uppercase underline">Pokemon - {data.pokeman.name}</h1>
    <img
      src={data.pokeman.sprites.other["official-artwork"].front_default} 
      alt={data.pokeman.name}
      height="300"
      width="300" />
    <h3>Height - {data.pokeman.height}</h3>
    <h3>Weight - {data.pokeman.weight}</h3>

  </div>
  