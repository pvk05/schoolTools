<script>

	export let data;

	let { session, supabase, profile, fagValg } = data
	$: ({ session, supabase, profile, fagValg } = data) 

	let blokkAFag = [
		"R2",
		"S2"
	]
	let blokkBFag = [
		"Fysikk 2",
		"Engelsk",
		"Politikk og Menneskerettigheter",
		"Biologi 2",
		"Sosialkunnskap"
	]
	let blokkCFag = [
		"Kjemi 2",
		"Psykologi"
	]
	let blokkDFag = [
		"Tysk",
		"Samfunnsgeografi",
		"Kunst og visuelle virkemidler",
		"Spansk III",
		"Historie og filosofi"
	]

</script>



<div class="form-widget bg-surface-200-700-token w-2/3 p-5 m-auto rounded">
	<h3 class="h3">Fagvalg</h3>
	<form action="?/fagValg" method="post">
		<select name="blokkA" id="blokkA" class="variant-ghost-secondary select my-1" bind:value={fagValg.blokkA}>
			<option value="" hidden>Velg et fag</option>
			<option value="">Ingen fag</option>
			{#each blokkAFag as fagA}
				<option value="{fagA}" class="">{fagA}</option>
			{/each}
		</select>
		<br>
		<select name="blokkB" id="blokkB" class="variant-ghost-secondary select my-1" bind:value={fagValg.blokkB}>
			<option value="" hidden>Velg et fag</option>
			<option value="">Ingen fag</option>
			{#each blokkBFag as fagB}
				<option value="{fagB}">{fagB}</option>
			{/each}
		</select>
		<br>
		<select name="blokkC" id="blokkC" class="variant-ghost-secondary select my-1" bind:value={fagValg.blokkC}>
			<option value="" hidden>Velg et fag</option>
			<option value="">Ingen fag</option>
			{#each blokkCFag as fagC}
				<option value="{fagC}">{fagC}</option>
			{/each}
		</select>
		<br>
		<select name="blokkD" id="blokkD" class="variant-ghost-secondary select my-1" bind:value={fagValg.blokkD}>
			<option value="" hidden>Velg et fag</option>
			<option value="">Ingen fag</option>
			{#each blokkDFag as fagD}
				<option value="{fagD}">{fagD}</option>
			{/each}
		</select>
		<input type="submit" value="Submit" class="btn variant-ghost-primary">
	</form>
</div>