<script>
	import { AppBar, LightSwitch } from "@skeletonlabs/skeleton";
	import gradHat from "$lib/assets/graduation-hat.png";
</script>

<AppBar>
	<h1 class="h1">Skole</h1>
	<svelte:fragment slot="lead">
		<img src={gradHat} alt="hey" class=" w-12" />
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<LightSwitch />
	</svelte:fragment>
</AppBar>

<style>
</style>
