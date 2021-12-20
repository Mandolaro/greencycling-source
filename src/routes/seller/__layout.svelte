<script>
    import {page} from '$app/stores'
    const hrefs = ['bin-locations', 'exchange']
</script>

<svelte:head>
    <title>RECYCLER | GREENCYCLING</title>
</svelte:head>

<nav class="fixed bg-white flex h-min justify-between md:justify-start md:flex-col md:h-screen md:w-96 w-screen">
    <div class="flex justify-center items-center overflow-hidden">
        <a sveltekit:prefetch href="/" class="md:text-2xl font-semibold mx-4 md:p-6 md:mb-4">GREENCYCLING</a>
    </div>

    <div class="flex md:flex-col md:space-y-4">
        <a sveltekit:prefetch href='/seller' class="p-4 md:mx-6 md:rounded-md hover:bg-blue-200" class:active={$page.path == '/seller'}>SUMMARY</a>
        {#each hrefs as href}
            <a sveltekit:prefetch href={'/seller/' + href} class="p-4 md:rounded-md md:mx-6 hover:bg-blue-200" class:active={$page.path == '/seller/' + href}>{href.split('-').join(' ').toUpperCase()}</a>
        {/each}
    </div>
</nav>
<div class="bg-gray-200 min-h-screen h-full md:ml-96 px-10 md:py-10 py-24">
    <slot/>
</div>

<style lang="postcss">
    .active {
        @apply bg-blue-400;
    }
</style>