<script>
    let selected = "nearest"
    const locations = {
        nearest: [`Address: XYZ Str. WEA City`,`
Address: 605 Hillcrest St. ABC City`, `
Address: 524 Cherry St. ABC City`, `
Address: 2 Harvard St. ABC City`]
    }
    locations.all = [...new Set(locations.nearest.concat(locations.recent))]
</script>
    <div class="bg-white rounded-2xl p-7 mt-10">
        <pre class="mt-4 mb-10 whitespace-pre-wrap">
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
