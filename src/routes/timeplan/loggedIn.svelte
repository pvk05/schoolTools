<script>
    import { dagCol, programFagTimer, timeRow } from './main.js'
    
    export let data;

    let { session, supabase, profile, fagValg } = data
    $: ({ session, supabase, profile, fagValg } = data) 
    
</script>

{#if fagValg.blokkA}
    {#each programFagTimer.blokkA as time}
    <div 
        style="
            grid-row-start: {timeRow[time.start.getHours()][time.start.getMinutes()]}; 
            grid-row-end: {timeRow[time.start.getHours()][time.start.getMinutes()]+(time.end-time.start)/(1000*60*15)};
            grid-column-start: {dagCol[time.day]};
            " 
        class=" border-y-2 bg-surface-100-800-token"
        >
        <h5 class="h5">
            {#if session != null}
                {fagValg.blokkA}
            {/if}
        </h5>
        <span>{time.day}</span>
        <p>{time.startText} - {time.endText}</p>
    </div>
    {/each}
    {/if } <!-- endif fagValg.blokkA-->

    {#if fagValg.blokkB}
    {#each programFagTimer.blokkB as time}
    <div 
        style="
            grid-row-start: {timeRow[time.start.getHours()][time.start.getMinutes()]}; 
            grid-row-end: {timeRow[time.start.getHours()][time.start.getMinutes()]+(time.end-time.start)/(1000*60*15)};
            grid-column-start: {dagCol[time.day]};
            " 
        class=" border-y-2 bg-surface-100-800-token"
        >
        <h5 class="h5">
            {#if session != null}
                {fagValg.blokkB}
            {/if}
        </h5>
        <span>{time.day}</span>
        <p>{time.startText} - {time.endText}</p>
    </div>
    {/each}
    {/if} <!-- endif fagValg.blokkB-->

    {#if fagValg.blokkC}
    {#each programFagTimer.blokkC as time}
    <div 
        style="
            grid-row-start: {timeRow[time.start.getHours()][time.start.getMinutes()]}; 
            grid-row-end: {timeRow[time.start.getHours()][time.start.getMinutes()]+(time.end-time.start)/(1000*60*15)};
            grid-column-start: {dagCol[time.day]};
            " 
        class=" border-y-2 bg-surface-100-800-token"
        >
        <h5 class="h5">
            {#if session != null}
                {fagValg.blokkC}
            {/if}
        </h5>
        <span>{time.day}</span>
        <p>{time.startText} - {time.endText}</p>
    </div>
    {/each}
    {/if} <!-- endif fagValg.blokkC-->

    {#if fagValg.blokkD}
    {#each programFagTimer.blokkD as time}
    <div 
        style="
            grid-row-start: {timeRow[time.start.getHours()][time.start.getMinutes()]}; 
            grid-row-end: {timeRow[time.start.getHours()][time.start.getMinutes()]+(time.end-time.start)/(1000*60*15)};
            grid-column-start: {dagCol[time.day]};
            " 
        class=" border-y-2 bg-surface-100-800-token"
        >
        <h5 class="h5">
            {#if session != null}
                {fagValg.blokkD}
            {/if}
        </h5>
        <span>{time.day}</span>
        <p>{time.startText} - {time.endText}</p>
    </div>
    {/each}
    {/if} <!-- endif fagValg.blokkD-->