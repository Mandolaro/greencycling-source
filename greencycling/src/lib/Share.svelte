<script>
    let sharemenu = false;
</script>

<div
    on:click={() => (sharemenu = false)}
    class:hidden={!sharemenu}
    class="fixed inset-0 bg-black bg-opacity-90 z-20 flex justify-center items-center"
>
    <div class="p-7 w-96 bg-white rounded-xl">
        <h3 class="text-center text-lg font-semibold">Share</h3>
        {#each ['Facebook', 'Twitter', 'Instagram', 'Reddit', 'WhatsApp'] as page}
        <div class="flex justify-between items-center mt-7">
            <p class="mr">{page}</p>
            <div class="btn p-2 bg-blue-600 hover:bg-blue-800 rounded-md text-white">Share</div>
        </div>
        {/each}
    </div>
</div>

<div
    class="fixed right-8 bottom-8 p-5 rounded-full w-16 h-16 bg-blue-600 hover:bg-blue-800"
    on:click={() => (sharemenu = true)}
>
    <svg
        aria-hidden="true"
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        ><path
            fill="white"
            d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"
        /></svg
    >
</div>
