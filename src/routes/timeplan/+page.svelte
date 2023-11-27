<script>
    import LoggedIn from './loggedIn.svelte';
    import NotLoggedIn from './notLoggedIn.svelte';

    export let data;

    let { session, supabase, profile, fagValg } = data
    $: ({ session, supabase, profile, fagValg } = data) 

</script>

<h3 class="h3">Timeplan</h3>
<br>
<div class=" grid grid-cols-7 gap-1 border-2">
    <div class=" row-start-1 col-start-1"></div>

    <div class=" row-start-1 col-start-2">Mandag</div>
    <div class=" row-start-1 col-start-3">Tirsdag</div>
    <div class=" row-start-1 col-start-4">Onsdag</div>
    <div class=" row-start-1 col-start-5">Torsdag</div>
    <div class=" row-start-1 col-start-6">Fredag</div>
    
    <div class=" row-start-2 col-start-1 w-full border-y-2 row-span-4">08.00</div>
    <div class=" row-start-6 col-start-1 w-full border-y-2 row-span-4">09.00</div>
    <div class=" row-start-10 col-start-1 w-full border-y-2 row-span-4">10.00</div>
    <div class=" row-start-14 col-start-1 w-full border-y-2 row-span-4">11.00</div>
    <div class=" row-start-18 col-start-1 w-full border-y-2 row-span-4">12.00</div>
    <div class=" row-start-22 col-start-1 w-full border-y-2 row-span-4">13.00</div>
    <div class=" row-start-26 col-start-1 w-full border-y-2 row-span-4">14.00</div>
    <div class=" row-start-30 col-start-1 w-full border-y-2 row-span-4">15.00</div>

    {#if session}
        <LoggedIn data={data} />
    {:else}
        <NotLoggedIn />
    {/if}

    <div style="grid-row-start: 2;" class=" col-start-7 w-full border-y-2">08.00</div>
    <div style="grid-row-start: 3;" class=" col-start-7 w-full border-y-2">08.00</div>
    <div style="grid-row-start: 4;" class=" col-start-7 w-full border-y-2">08.00</div>
    <div style="grid-row-start: 5;" class=" col-start-7 w-full border-y-2">08.00</div>
    <div style="grid-row-start: 6;" class=" col-start-7 w-full border-y-2">09.00</div>
    <div style="grid-row-start: 7;" class=" col-start-7 w-full border-y-2">09.00</div>
    <div style="grid-row-start: 8;" class=" col-start-7 w-full border-y-2">09.00</div>
    <div style="grid-row-start: 9;" class=" col-start-7 w-full border-y-2">09.00</div>
    <div style="grid-row-start: 10;" class=" col-start-7 w-full border-y-2">10.00</div>
    <div style="grid-row-start: 11;" class=" col-start-7 w-full border-y-2">10.00</div>
    <div style="grid-row-start: 12;" class=" col-start-7 w-full border-y-2">10.00</div>
    <div style="grid-row-start: 13;" class=" col-start-7 w-full border-y-2">10.00</div>
    <div style="grid-row-start: 14;" class=" col-start-7 w-full border-y-2">11.00</div>
    <div style="grid-row-start: 15;" class=" col-start-7 w-full border-y-2">11.00</div>
    <div style="grid-row-start: 16;" class=" col-start-7 w-full border-y-2">11.00</div>
    <div style="grid-row-start: 17;" class=" col-start-7 w-full border-y-2">11.00</div>
    <div style="grid-row-start: 18;" class=" col-start-7 w-full border-y-2">12.00</div>
    <div style="grid-row-start: 19;" class=" col-start-7 w-full border-y-2">12.00</div>
    <div style="grid-row-start: 20;" class=" col-start-7 w-full border-y-2">12.00</div>
    <div style="grid-row-start: 21;" class=" col-start-7 w-full border-y-2">12.00</div>
    <div style="grid-row-start: 22;" class=" col-start-7 w-full border-y-2">13.00</div>
    <div style="grid-row-start: 23;" class=" col-start-7 w-full border-y-2">13.00</div>
    <div style="grid-row-start: 24;" class=" col-start-7 w-full border-y-2">13.00</div>
    <div style="grid-row-start: 25;" class=" col-start-7 w-full border-y-2">13.00</div>
    <div style="grid-row-start: 26;" class=" col-start-7 w-full border-y-2">14.00</div>
    <div style="grid-row-start: 27;" class=" col-start-7 w-full border-y-2">14.00</div>
    <div style="grid-row-start: 28;" class=" col-start-7 w-full border-y-2">14.00</div>
    <div style="grid-row-start: 29;" class=" col-start-7 w-full border-y-2">14.00</div>
    <div style="grid-row-start: 30;" class=" col-start-7 w-full border-y-2">15.00</div>
    <div style="grid-row-start: 31;" class=" col-start-7 w-full border-y-2">15.00</div>
    <div style="grid-row-start: 32;" class=" col-start-7 w-full border-y-2">15.00</div>
    <div style="grid-row-start: 33;" class=" col-start-7 w-full border-y-2">15.00</div>
</div>