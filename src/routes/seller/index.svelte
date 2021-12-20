<script>
    import InfoCard from "$lib/InfoCard.svelte";
    import ActivityList from "$lib/ActivityList.svelte";
    import Graph from "$lib/Graph.svelte";
    import {username} from "/src/routes/seller/store.js"
    let username_now;
    username.subscribe(value => {
		username_now = value;
	});
</script>
<div>
<div class="flex md:flex-row flex-col md:space-x-10 overflow-auto scroll">
    <h1 class="w-fit text-2xl font-bold mt-10 p-7 bg-white rounded-lg text-6xl">Welcome back, {username_now} </h1>
    <div class="p-7 w-fit bg-white rounded-2xl mx-auto flex flex-col mt-10">
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
    <InfoCard data={["0", "12", "60", "96", "124"]} icon="award" message="Points" class="bg-red-400"/>
    <InfoCard data={["0 KG", "4 KG", " 24 KG", "44 KG", "66 KG"]} icon="trash" message="Recycled"/>
    <InfoCard data={["$0", "$5", "$5", "$7", "$12"]} icon="redeem" message="Redeemed"/>
    <InfoCard data={["$0", "$10", "$25", "$29", "$29"]} icon="heart" message="Donated"/>
</div>
<h1 class="text-2xl font-bold mt-10"> Recycling History</h1>

<Graph/>
<h1 class="text-2xl font-bold mt-10">Activity log</h1>
<ActivityList/>
</div>