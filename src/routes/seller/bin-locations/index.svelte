<script>
    let selected = "nearest"
    const locations = {
        nearest: [`Distance: 120m
Address: 605 Hillcrest St.`, `Distance: 270m
Address: 524 Cherry St.`, `Distance: 557m
Address: 2 Harvard St.`],
        recent: [`Distance: 120m
Address: 605 Hillcrest St.`, `Distance: 557m
Address: 2 Harvard St.`, `Distance: 1.4km
Address: 7764 South Green Hill St.`]
    }
    locations.all = [...new Set(locations.nearest.concat(locations.recent))]
</script>

<h3 class="text-xl font-semibold">
    <select
        bind:value={selected}
        class="p-1 border-2 border-gray-300 bg-white rounded-md"
    >
        <option value="nearest">Nearest bins</option>
        <option value="recent">Recently connected bins</option>
        <option value="all">All bins</option>
    </select>
</h3>
    <div class="bg-white rounded-2xl p-7 mt-10">
        <pre class="mt-4 mb-10 whitespace-pre-wrap">
Distance: 5m
Address: 520 NE. Edgemont Ave.
    </pre>
        <a
            sveltekit:prefetch
            href="/seller/bin-locations/connecting/"
            class="btn mr-10">Connect</a
        >
    </div>

{#each locations[selected] as place}
<div class="bg-white rounded-2xl p-7 mt-10">
    <pre class="mt-4 mb-10 whitespace-pre-wrap">
        {place}
    </pre>
    <div
        class="btn btn-disabled mr-10"
        on:click={() => alert("Too far to connect")}
    >
        Connect
    </div>
</div>
{/each}

<style lang="postcss">
    .btn {
        @apply w-fit text-lg text-center text-white font-bold py-2 px-4 rounded-lg bg-green-600 hover:bg-green-800;
    }
    .btn-disabled {
        @apply bg-gray-600 hover:bg-gray-800;
    }
</style>
