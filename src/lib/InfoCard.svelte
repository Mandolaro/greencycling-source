<script>
    import Graph from "./Graph.svelte";

    export let data = [];
    export let icon;
    export let message;
    let colors = ['blue-800', 'sky-400', 'purple-500', 'orange-600', 'lime-500']
    let colors_hover = ['blue-800', 'sky-400', 'purple-500', 'orange-600', 'lime-500']
    let date = ['Today', 'This week', 'This month', 'This year', 'All time']
    let open = false;
    export let selected = "0";
</script>

<div
    class="flex md:flex-col flex-row items-center bg-white rounded-xl p-8 auto md:w-64 md:h-56 md:mt-24 mt-4 flex-shrink-0 space-x-4 md:space-x-0"
>
    <div on:click={() => (open = true)} class="rounded-xl w-24 h-24 md:mx-auto p-7 bg-{colors[selected]} hover:bg-{colors_hover[(selected+1)%5]} md:-mt-20">
        <img
            src={`/img/icons/${icon}-solid.svg`}
            alt={`logo for ${message}`}
        />
    </div>
    <div
        class="flex md:flex-col items-center justify-between flex-grow md:flex-grow-0"
    >
        <p class="text-2xl font-medium md:mt-12">{message}</p>
    </div>
</div>

<div
    class="m-0 fixed inset-0 flex justify-center items-center z-10 rounded-2xl"
    class:hidden={!open}
>
    <div
        class="fixed inset-0 bg-black bg-opacity-80"
        on:click={() => (open = false)}
    />
    <div class="bg-white z-20 p-7 w-5/12 rounded-xl">
        <h3 class="text-2xl font-medium">{message}</h3>
        <div class="flex space-x-3 justify-center mt-3 items-center text-2xl font-medium">
            <h1>{date[selected]}:</h1>
            <div>{data[selected]}</div>
        </div>
    </div>
</div>
