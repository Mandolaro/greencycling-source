<script>
    let orgs = ["Red Cross", "Change Vietnam", "WWF"];
    let val = 0;
    let valredeem = 0;
    function donate(org) {
        return () =>
            val &&
            alert(`You donated $${val / 10} to ${org} with ${val} point`);
    }
</script>

<div class="w-fit">
    <h1 class="w-fit mx-auto text-center p-7 bg-white rounded-lg text-6xl">124 Points</h1>
    <div class="flex flex-wrap w-fit">
        <div class="flex-grow mx-10 mt-10 flex flex-col">
            <h1 class="mb-5 text-center font-semibold text-2xl">Donate</h1>
            <div class="bg-white mx-auto md:mx-0 p-7 rounded-2xl flex-grow">
                <h2 class="text-center text-xl">{val}</h2>
                <input
                    type="range"
                    min="0"
                    max="124"
                    bind:value={val}
                    class="w-full min-w-[20rem] mb-5"
                />
                <div>
                    {#each orgs as org}
                        <div
                            class="flex flex-row justify-between items-center mt-5"
                        >
                            <div>{org}</div>
                            <a
                                href="/seller"
                                class="btn"
                                class:btn-disabled={val == 0}
                                on:click={donate(org)}>Donate</a
                            >
                        </div>
                    {/each}
                </div>
            </div>
        </div>

        <div class="flex-grow mx-10 mt-10 flex flex-col">
            <h1 class="mb-5 text-center font-semibold text-2xl">Redeem</h1>
            <div class="bg-white mx-auto md:mx-0 p-7 rounded-2xl flex-grow flex flex-col justify-between items-end">
                <div class="w-full">
                    <h2 class="text-center text-xl">{valredeem}</h2>
                    <input
                        type="range"
                        min="0"
                        max="124"
                        bind:value={valredeem}
                        class="w-full mb-10 min-w-[20rem]"
                    />
                </div>
                <a
                    href="/seller"
                    class="btn float-right"
                    class:btn-disabled={valredeem == 0}
                    on:click={() =>
                        valredeem &&
                        alert(
                            `You redeemed ${valredeem} points for $${
                                valredeem / 10
                            }`
                        )}>Ok</a
                >
            </div>
        </div>
    </div>
</div>

<style lang="postcss">
    .btn {
        @apply block w-24 text-lg text-center text-white font-bold py-2 px-4 rounded-lg bg-green-600 hover:bg-green-800;
    }
    .btn-disabled {
        @apply bg-gray-600 hover:bg-gray-800 pointer-events-none;
    }
</style>
