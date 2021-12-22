<script>
    let showmap = false;
    let first = false;
    let coord = {};

    function Show() {
        if (coord)
            navigator.geolocation.getCurrentPosition(({ coords }) => {
                coord.x = coords.latitude;
                coord.y = coords.longitude;
                showmap = true;
            });
        else showmap = true;
    }
</script>

<div class="p-7 w-fit bg-white rounded-2xl mx-auto flex flex-col mt-10">
    <img
        src="/img/qr_img.png"
        alt="QR code to connect"
        width="256"
        height="256"
    />
    <div class="mt-4 flex justify-between items-center">
        <button
            class="p-3 bg-green-600 hover:bg-green-800 text-white font-bold rounded-md"
            href="https://www.google.com/maps/dir/10.780672,106.708992/Landmark+81,+%C4%90%C6%B0%E1%BB%9Dng+Nguy%E1%BB%85n+H%E1%BB%AFu+C%E1%BA%A3nh,+Vinhomes+Central+Park,+Ph%C6%B0%E1%BB%9Dng+22,+B%C3%ACnh+Th%E1%BA%A1nh,+Ho+Chi+Minh+City/@10.7872371,106.7081508,14.84z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x317527c2f8f30911:0x36ac5073f8c91acd!2m2!1d106.7218689!2d10.7949999"
            on:click={Show}>Locate</button
        >
        <button
            class="p-3 bg-green-600 hover:bg-green-800 text-white font-bold rounded-md"
            ><a href="/seller/bin-locations/connected">Deposit</a></button
        >
    </div>
</div>

<div
    class="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center"
    class:hidden={!showmap}
    on:click={() => (showmap = false)}
>
    {#if !first}
        <iframe
            title="Map to bin"
            src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d31353.307056017966!2d106.66585574713993!3d10.798795707599306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d{coord.x}!2d{coord.y}!4m5!1s0x317527c2f8f30911%3A0x36ac5073f8c91acd!2zTGFuZG1hcmsgODEsIDIwOCDEkC4gTmd1eeG7hW4gSOG7r3UgQ-G6o25oLCBWaW5ob21lcyBDZW50cmFsIFBhcmssIFBoxrDhu51uZyAyMiwgQsOsbmggVGjhuqFuaCwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oIDcwMDAwMCwgVmlldG5hbQ!3m2!1d10.794999899999999!2d106.72186889999999!5e0!3m2!1sen!2s!4v1640153924233!5m2!1sen!2s"
            width="600"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
        />
    {/if}
</div>
