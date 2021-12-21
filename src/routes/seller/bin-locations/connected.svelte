<script>
    let successful;
    let amount;
    let done = false;
</script>

<div class="bg-white rounded-2xl p-7">
    <h3 class="text-xl font-semibold">Bin connected</h3>
    <pre class="mt-4 mb-5 whitespace-pre-wrap">
Distance: 5m
Address: 520 NE. Edgemont Ave.Clemmons, NC 27012
    </pre>
    <a sveltekit:prefetch href="/seller/bin-locations" class="btn-red btn mr-10 mt-5">Disconnect</a>
    <button class="btn-green btn mt-5" on:click={() => {
        successful = 0 | 2 * Math.random()
        amount = 0 | 20 * Math.random()
        done = true;
    }}
        >Deposit</button
    >
</div>

<a
    sveltekit:prefetch
    href="/seller/bin-locations"
    class="fixed inset-0 opacity-90 bg-black flex justify-center items-center"
    class:hidden={!done}
>
    <div class="p-5 border w-96 shadow-lg rounded-md bg-white">
        <div class="mt-3 text-center">
            {#if successful}
                <div
                    class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-8 h-8 text-green-500 stroke-current"
                        fill="none"
                        viewBox="0 0 24 24"
                        ><path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                        /></svg
                    >
                </div>
            {:else}
                <div
                    class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100"
                >
                    <svg
                        viewBox="0 0 24 24"
                        class="w-8 h-8 text-red-500 stroke-current"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        ><path
                            d="M12 8V12V8ZM12 16H12.01H12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        /></svg
                    >
                </div>
            {/if}
        </div>
        <h3 class="text-lg leading-6 text-center font-medium text-gray-900">
            {#if successful}
                Successful!
            {:else}
                Failed!
            {/if}
        </h3>
        <div class="mt-2 px-7 py-3">
            <p class="text-sm text-center text-gray-500">
                {#if successful}
                    You sold your scrap for {0 | (20 * Math.random())} points
                {:else}
                    Your scrap is contaminated
                {/if}
            </p>
        </div>
        <div class="items-center px-4 py-3">
            {#if successful}
            <button
                class="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
            >
                OK
            </button>
            {:else}
            <button
                class="px-4 py-2 bg-red-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
            >
                OK
            </button>
            {/if}
        </div>
    </div>
</a>

<style lang="postcss">
    .btn {
        @apply text-lg text-center text-white font-bold py-2 px-4 rounded-lg;
    }
    .btn-red {
        @apply bg-red-600 hover:bg-red-800;
    }
    .btn-green {
        @apply bg-green-600 hover:bg-green-800;
    }
</style>
