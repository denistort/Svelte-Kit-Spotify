<script lang="ts">
	import type { PageData } from "./$types";


	export let data: PageData;
	console.log(data);
</script>

<div class="w">
	<div>
		<a href="/"><h2>New releases</h2></a>
		<div class="sec"></div>
	</div>
</div>

<style lang="scss">
	.w {
		display: flex;
		gap: 24px;
		flex-direction: column;
	}
	.sec {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
	}
</style>