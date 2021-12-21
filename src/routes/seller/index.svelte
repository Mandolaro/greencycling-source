<script>
    import InfoCard from "$lib/InfoCard.svelte";
    import ActivityList from "$lib/ActivityList.svelte";
    import Graph from "$lib/Graph.svelte";
    import TextCard from "$lib/TextCard.svelte";
    import {username} from "/src/routes/seller/store.js"
    let username_now;
    username.subscribe(value => {
		username_now = value;
	});
    let date = "0";
</script>
<div>
<div class="flex md:flex-row flex-col md:space-x-10 overflow-auto scroll">
    <h1 class="w-fit text-2xl font-bold mt-10 p-7 bg-white text-6xl">Welcome back, {username_now} </h1>
    <div class="p-7 w-fit bg-white mx-auto flex flex-col mt-10">
        <img
            src="/img/qr_img.png"
            alt="QR code to connect"
            width="96"
            height="96"
        />
</div>



</div>
<h1 class="text-2xl font-bold mt-10">Your account summary</h1>
<div class="flex md:flex-row flex-col md:space-x-10 overflow-auto scroll">
    <InfoCard data={["0", "12", "60", "96", "124"]} icon="award" message="Points" class="bg-red-400" selected = {date}/>
    <InfoCard data={["0 KG", "4 KG", " 24 KG", "44 KG", "66 KG"]} icon="Trash" message="Recycled" selected = {date}/>
    <InfoCard data={["$0", "$5", "$5", "$7", "$12"]} icon="redeem" message="Redeemed" selected = {date}/>
    <InfoCard data={["$0", "$10", "$25", "$29", "$29"]} icon="heart" message="Donated" selected = {date}/>
</div>
<div class="flex md:flex-row flex-col md:space-x-10 overflow-auto scroll">
    <div class="text-center inline-block p-4 w-40 rounded-md bg-cyan-600 hover:bg-cyan-800 text-white shadow-cyan-600 hover:shadow-cyan-800" on:click={() => (date = "0")}>Today</div>
    <div class="text-center inline-block p-4 w-40 rounded-md bg-cyan-600 hover:bg-cyan-800 text-white shadow-cyan-600 hover:shadow-cyan-800" on:click={() => (date = "1")}>This Week</div>
    <div class="text-center inline-block p-4 w-40 rounded-md bg-cyan-600 hover:bg-cyan-800 text-white shadow-cyan-600 hover:shadow-cyan-800" on:click={() => (date = "2")}>This Month</div>
    <div class="text-center inline-block p-4 w-40 rounded-md bg-cyan-600 hover:bg-cyan-800 text-white shadow-cyan-600 hover:shadow-cyan-800" on:click={() => (date = "3")}>This year</div>
    <div class="text-center inline-block p-4 w-40 rounded-md bg-cyan-600 hover:bg-cyan-800 text-white shadow-cyan-600 hover:shadow-cyan-800" on:click={() => (date = "4")}>All time</div>
</div>
<h1 class="text-2xl font-bold mt-10"> Recycling History</h1>

<Graph/>
<h1 class="text-2xl font-bold mt-10">Activity log</h1>
<ActivityList/>
</div>
 