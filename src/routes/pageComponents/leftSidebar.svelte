<script>
	import {
		AppRail,
		AppRailTile,
		AppRailAnchor,
	} from "@skeletonlabs/skeleton";
	import menuIcon from "$lib/assets/main-menu.png";
	import atom from "$lib/assets/atom.png";
	import timetable from "$lib/assets/timetable.png";
	import { page } from '$app/stores';

	let currentTile = 0;
</script>

<AppRail>
	<svelte:fragment slot="lead">
		<AppRailAnchor href="/" selected={$page.url.pathname === '/'}
			><img
				src={menuIcon}
				alt="hey"
				class=" w-1/2 m-auto"
			/></AppRailAnchor
		>
	</svelte:fragment>
	<!-- --- -->

	<AppRailAnchor href="./timeplan" title="Timeplan" selected={$page.url.pathname === '/timeplan'}>
		<svelte:fragment slot="lead"
			><img
				src={timetable}
				alt="hey"
				class=" w-1/2 m-auto"
			/></svelte:fragment
		>
		<span>Timeplan</span>
	</AppRailAnchor>

	<AppRailAnchor href="./periodicTable" title="Kjemi" selected={$page.url.pathname === '/periodicTable'}>
		<svelte:fragment slot="lead"
			><img
				src={atom}
				alt="hey"
				class=" w-1/2 m-auto"
			/></svelte:fragment
		>
		<span>Kjemi</span>
	</AppRailAnchor>

	
	<!-- --- -->
	<svelte:fragment slot="trail">
		<AppRailAnchor href="./minSide" title="Account"
			>Min Side</AppRailAnchor
		>
	</svelte:fragment>
</AppRail>
