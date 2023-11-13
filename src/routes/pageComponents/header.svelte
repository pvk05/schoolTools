<script>
    import { AppBar, LightSwitch } from "@skeletonlabs/skeleton";
	import atom from '$lib/assets/atom.png'

</script>

<style>
</style>

<AppBar>
	<h1 class="h1">Periodic Table</h1>
	<svelte:fragment slot="lead">
		<img src={atom} alt="hey" class=" w-10">
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<LightSwitch />
	</svelte:fragment>
</AppBar>