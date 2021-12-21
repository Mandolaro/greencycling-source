<script>
    export let message;
</script>
<div class="box">
    <p class="text-2xl font-medium md:mt-6 md:mb-6">{message}</p>
</div>

<style>
	.box {
        display: flex;
		width: 385px;
		border: 1px solid #aaa;
		border-radius: 2px;
		box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
        justify-content: center;
        align-items: center;
        text-align: center;
	}
</style>