<script>
    import AddTaskForm from "./addTaskForm.svelte";

    export let data;

	let { session, supabase, profile, fagValg, tasks } = data
	$: ({ session, supabase, profile, fagValg, tasks } = data) 
</script>

<h2 class="h2">Todo lists</h2>

<AddTaskForm data={data} />