<script>
    import { dagCol, programFagTimer, timeRow } from './main.js'
    
</script>

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
            Blokk A
        </h5>
        <span>{time.day}</span>
        <p>{time.startText} - {time.endText}</p>
    </div>
{/each}

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
            Blokk B
        </h5>
        <span>{time.day}</span>
        <p>{time.startText} - {time.endText}</p>
    </div>
{/each}

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
            Blokk C
        </h5>
        <span>{time.day}</span>
        <p>{time.startText} - {time.endText}</p>
    </div>
{/each}

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
            Blokk D
        </h5>
        <span>{time.day}</span>
        <p>{time.startText} - {time.endText}</p>
    </div>
{/each}