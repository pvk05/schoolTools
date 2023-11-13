<script>
    import "../app.postcss";
    import { AppShell } from '@skeletonlabs/skeleton';
    import Header from "./pageComponents/header.svelte";
    import LeftSidebar from "./pageComponents/leftSidebar.svelte";
    import PageHeader from "./pageComponents/pageHeader.svelte";
    import PageFooter from "./pageComponents/pageFooter.svelte";
    import Footer from "./pageComponents/footer.svelte";
</script>

<AppShell>
	<svelte:fragment slot="header"><Header /></svelte:fragment>
	<svelte:fragment slot="sidebarLeft"><LeftSidebar /></svelte:fragment>
	<svelte:fragment slot="sidebarRight"><LeftSidebar /></svelte:fragment>
	<svelte:fragment slot="pageHeader"><PageHeader /></svelte:fragment>
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter"><PageFooter /></svelte:fragment>
	<svelte:fragment slot="footer"><Footer /></svelte:fragment>
</AppShell>