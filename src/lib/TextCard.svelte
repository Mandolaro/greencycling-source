<script>
    import Graph from "./Graph.svelte";

    export let message;

    let open = false;
    let selected = "0";
</script>

<div
    class="flex md:flex-col flex-row items-center bg-white rounded-xl p-8 auto md:w-64 md:h-56 md:mt-24 mt-4 flex-shrink-0 space-x-4 md:space-x-0"
>
    <div on:click={() => (open = true)} class="rounded-xl w-48 h-48 md:mx-auto p-7 bg-green-400 hover:bg-green-600 md:-mt-20">
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
        <h3 class="font-xl font-bold">{message}</h3>
        <Graph />
    </div>
</div>
