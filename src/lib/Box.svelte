<script>
    export let message;
</script>
<div class="box">
    <p class="text-2xl font-medium md:mt-12">{message}</p>
</div>

<style>
	.box {
		width: 385px;
		border: 1px solid #aaa;
		border-radius: 2px;
		box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
		padding: 0.5em;
		margin: 0 0 1em 0;
        text-align: center;
	}
</style>