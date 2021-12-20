<script>
    import InfoCard from "$lib/InfoCard.svelte";
    import Graph from "$lib/Graph.svelte";
    import ActivityList from "$lib/ActivityList.svelte";
</script>

<div>
<div class="flex md:flex-row flex-col md:space-x-10 overflow-auto scroll">
    <InfoCard data={[0, 12, 60, 96, 124]} icon="award" message="Points" class="bg-red-400"/>
    <InfoCard data={["0 KG", "4 KG", " 24 KG", "44 KG", "66 KG"]} icon="trash" message="Recycled"/>
    <InfoCard data={["$0", "$5", "$5", "$7", "$12"]} icon="redeem" message="Redeemed"/>
    <InfoCard data={["$0", "$10", "$25", "$29", "$29"]} icon="heart" message="Donated"/>
</div>
<h1 class="text-2xl font-bold mt-10">Activity log</h1>
<ActivityList/>
</div>