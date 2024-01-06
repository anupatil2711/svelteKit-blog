<script>
    export let pokeman;
</script>
<a class="list-none p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-lg flex flex-col items-center" href = {`/pokemon/${pokeman.id}`}>
    <img class = "h-48 w-48 " src = {pokeman.image} alt = {pokeman.name}>
    <h2 class="text-lg">{pokeman.id}. {pokeman.name}</h2>
</a>
<!-- {pokeman.name} -->