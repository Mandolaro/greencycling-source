<script>
    import {point} from "/src/routes/seller/store.js"
    let orgs = ["Red Cross", "Change Vietnam", "WWF", "Oxfam", "Unicef", "V", "B", "C", "D"];
    let coupons = ["Tiki", "Shopee", "KFC","A", "V", "B", "C", "D"]
    let val = 0;
    let valredeem = 0;
    let globalval = 0;
    point.subscribe(value => {
		globalval = value;
	});
    function donate(org) {
        
        return () =>
        {
            $point -= val;
            val &&
            alert(`You donated $${val / 10} to ${org} with ${val} point`);
            if(val) val = 0;
        }
           
    }

    function redeem(org) {
        return () =>
        {
            $point -= valredeem;
            valredeem &&
            alert(`You redeemed a $${valredeem / 10} ${org} coupon with ${valredeem} point`);
            if(valredeem) valredeem = 0;
        }
            
    }
</script>

<div class="w-fit">
    <h1 class="w-fit mx-auto text-center p-7 bg-white  text-6xl">{globalval} Points</h1>
    <h1 class="text-2xl font-bold mt-10"> <u><a href="/seller/exchange-help/"> How does the exchange system work? </a></u></h1>
    
    <div class="flex flex-wrap w-fit">
        
        <div class = "main-container">
            <h1 class="flex-grow mx-10 mt-10 text-center font-semibold text-2xl bg-white text-4xl">Donate</h1>
            <div class="flex-grow mx-10 mt-10 makeScroll">
                
                
                <div class="bg-white md:mx-0 p-7 justify-between">
                    <h2 class="text-center text-xl">{val}</h2>
                    <input
                        type="range"
                        min="0"
                        max={globalval}
                        bind:value={val}
                        class="w-full min-w-[20rem] mb-5"
                    />
                    
                    <div>
                        {#each orgs as org}
                            <div
                                class="flex flex-row justify-between items-center mt-5 "
                            >
                                <div>{org}</div>
                                <a
                                    href="/seller/exchange"
                                    class="btn"
                                    class:btn-disabled={val == 0}
                                    on:click={donate(org)}>Donate</a
                                >
                            </div>
                        {/each}
                    </div>
                </div>
            </div>
        </div>
        <div class = "main-container">
         <h1 class="flex-grow mx-10 mt-10 text-center font-semibold text-2xl bg-white text-4xl">Redeem</h1>
        <div class="flex-grow mx-10 mt-10 flex flex-col makeScroll">
            
            <div class="bg-white mx-auto md:mx-0 p-7 flex-grow flex flex-col justify-between">
                <div class="w-full">
                    <h2 class="text-center text-xl">{valredeem}</h2>
                    <input
                        type="range"
                        min="0"
                        max={globalval}
                        bind:value={valredeem}
                        class="w-full mb-5 min-w-[20rem] "
                    />
                </div>
                <div>
                    {#each coupons as org}
                        <div
                            class="flex flex-row justify-between items-center mt-5"
                        >
                            <div>{org} Coupon</div>
                            <a
                                href="/seller/exchange"
                                class="btn"
                                class:btn-disabled={valredeem == 0}
                                on:click={redeem(org)}>Redeem</a
                            >
                        </div>
                    {/each}
                </div>
                <div class="flex flex-row justify-between items-center mt-5">
                    <div>Cash</div>
                <a
                    href="/seller"
                    class="btn"
                    class:btn-disabled={valredeem == 0}
                    on:click={() =>
                        valredeem &&
                        alert(
                            `You redeemed ${valredeem} points for $${
                                valredeem / 10
                            }`
                        )}>Redeem</a
                >
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style lang="postcss">
    .main-container {
  height: 100vh; /* or position:absolute; height:100%; */
  display: flex;
  flex-direction: column;
    }
    div.makeScroll {
    overflow-y :auto;
    }
    .btn {
        @apply block w-24 text-lg text-center text-white font-bold py-2 px-4 rounded-lg bg-green-600 hover:bg-green-800;
    }
    .btn-disabled {
        @apply bg-gray-600 hover:bg-gray-800 pointer-events-none;
    }
</style>
