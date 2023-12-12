<script>
	import {
		AppRail,
		AppRailTile,
		AppRailAnchor,
	} from "@skeletonlabs/skeleton";
	import menuIcon from "$lib/assets/main-menu.png";
	import atom from "$lib/assets/atom.png";
	import timetable from "$lib/assets/timetable.png";
	import checklist from "$lib/assets/checklist.png";
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

	<AppRailAnchor href="./todo" title="Todo" selected={$page.url.pathname === '/todo'}>
		<svelte:fragment slot="lead"
			><img
				src={checklist}
				alt="hey"
				class=" w-1/2 m-auto"
			/></svelte:fragment
		>
		<span>Todo List</span>
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
		<AppRailAnchor href="./login" title="login"
			>Min Side</AppRailAnchor
		>
	</svelte:fragment>
</AppRail>
