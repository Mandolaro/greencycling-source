<script>
    export let message;
    export let time;
</script>

<div class="flex items-center space-x-7">
    <div class="w-9 h-9 bg-yellow-600 rounded-full relative" />
    <div class="h-24 bg-white flex-grow rounded-lg flex justify-between items-center px-5">
        <p class="text-2xl font-medium">{message}</p>
        <p>{time} day{time == 1 ? '' : 's'} ago</p>
    </div>
</div>
