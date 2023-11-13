<script>
	import { elements } from '$lib/data/PeriodicTableJSON.json'
	import { elementClick, toCamelCase } from './main.js'
  	export let style;
  	export let atomicNumber;
</script>


<button
	type="button"
	class=" element p-1 rounded bg-[#cbd5e0] shadow-xl cursor-pointer overflow-hidden border {toCamelCase(elements[atomicNumber - 1].category)}"
	{style} 
	on:click={() => elementClick(atomicNumber)}
>
	<div>
		<div class="-mb-1 font-light text-left element-atomic-number text-black">
			{atomicNumber}
		</div>
		<div>
			<h3 class="mx-auto font-semibold text-center element-symbol text-black">
				{elements[atomicNumber - 1].symbol}
			</h3>
		</div>
		<div
			class="mx-auto overflow-hidden font-light text-center element-name text-black"
		>
			{elements[atomicNumber - 1].name}
		</div>
	</div>
</button>
