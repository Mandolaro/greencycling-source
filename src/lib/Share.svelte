<script>
    let sharemenu = false;

    let colors = ['blue-800', 'sky-400', 'purple-500', 'orange-600', 'lime-500']
    let link = {
        'Facebook': 'https://www.facebook.com/',
        'Twitter' : 'https://twitter.com/',
        'Instagram': 'https://www.instagram.com/',
        'Reddit': 'https://www.reddit.com/',
        'Whatsapp': 'https://www.whatsapp.com/'
    };
</script>

<div
    on:click={() => (sharemenu = false)}
    class:hidden={!sharemenu}
    class="fixed inset-0 bg-black bg-opacity-90 z-20 flex justify-center items-center"
>
    <div class="p-7 w-96 bg-white rounded-xl">
        <h3 class="text-center text-lg font-semibold">Share</h3>
        {#each ['Facebook', 'Twitter', 'Instagram', 'Reddit', 'WhatsApp'] as page, i}
        <div class="flex justify-between items-center mt-7">
            <div class="flex items-center">
            <div class={`overflow-hidden social-icon rounded-full w-12 h-12 md:mx-auto p-3 bg-${colors[i]}`}>
                <img src={'/img/icons/social/' + page.toLowerCase() + '.svg'} alt={`${page} Icon`}>
            </div>
            <p class="ml-4">{page}</p>
            </div>
            <a href = {link[page]}><div class="btn p-2 bg-blue-600 hover:bg-blue-800 rounded-md text-white"> Share</div></a>
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

<!--Load the tailwind classes-->
<div class="hidden bg-blue-800 bg-sky-400 bg-orange-600 bg-purple-500 bg-lime-500"></div>