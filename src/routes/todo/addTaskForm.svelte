<script>

    export let data;

	let { session, supabase, profile, fagValg, tasks } = data
	$: ({ session, supabase, profile, fagValg, tasks } = data) 
    console.log(tasks)
</script>

<form action="?/addTask" method="post">
    <input type="text" name="taskName" id="taskName">
    {#if tasks}
    <select name="listName" id="listName" class="select variant-ghost-secondary">
        {#each tasks as task}
            <option value="{task.listName}">{task.listName}</option>
        {/each}
    </select>
    {:else}
    <input type="text" name="listName" id="listName" class="input variant-ghost-secondary">
    {/if}
    <input type="submit" value="Submit" class="btn variant-ghost-secondary">
</form>