<script>

    export let data;

	let { session, supabase, profile, fagValg, tasks } = data
	$: ({ session, supabase, profile, fagValg, tasks } = data) 
    console.log(tasks)
    let lists
    $: lists
    if(tasks){
        lists = tasks.map(task => task.listName)
        lists = [...new Set( tasks.map(obj => obj.listName)) ];
        console.log(lists)
    }

    let list;
</script>

<form action="?/addTask" method="post">
    <input type="text" name="taskName" id="taskName">
    {#if tasks}
    <select name="listName" id="listName" class="select variant-ghost-secondary" bind:value={list}>
        <option value="new">New List</option>
        {#each lists as list}
            <option value="{list}">{list}</option>
        {/each}
    </select>
    {:else}
    <input type="text" name="listName" id="listName" class="input variant-ghost-secondary">
    {/if}
    {#if list == "new"}
        <input type="text" name="newListName" id="newListName" class="input variant-ghost-secondary">
    {/if}
    <input type="submit" value="Submit" class="btn variant-ghost-secondary">
</form>

{#each lists as list}
    <h2 class="h2">{list}</h2>
    <table class="table w-1/2">
        {#each tasks.filter((task) => task.listName == list) as task}
            <tr>
                <td><input type="checkbox" name="chk{task.id}" id="chk{task.id}"></td>
                <td>{task.task}</td>
                <td>{task.listName}</td>
                <td>
                    <form action="?/deleteTask" method="post">
                        <input type="number" name="taskId" id="taskId" bind:value={task.id} hidden>
                        <input type="submit" value="Delete" class="btn variant-ghost-secondary">
                    </form>
                </td>
            </tr>
        {/each}
    </table>
    <br>
{/each}
