<script>
	import {
		clickedStore,
		toCamelCase
	} from "./main";
	import { elements } from "$lib/data/PeriodicTableJSON.json";


	let clickedElement;
	clickedStore.subscribe((value) => {
		clickedElement = elements.find(({ number }) => number == value);
	});
</script>

{#if clickedElement}
	<div
		class="flex row-start-1 col-start-3 row-span-3 col-span-10 bg-surface-100-800-token"
	>
		<div
			class=" bg-[#cbd5e0] w-1/4 h-full p-3 border-2 {toCamelCase(
				elements[clickedElement.number - 1].category
			)}"
		>
			<div
				class=" inline -mb-1 font-light text-left element-atomic-number text-black"
			>
				{clickedElement.number}
			</div>
			<div>
				<h3
					class="mx-auto font-semibold text-center element-symbol text-black"
				>
					{elements[clickedElement.number - 1].symbol}
				</h3>
			</div>
			<br />
			<div
				class="mx-auto overflow-hidden font-light text-center element-name text-black"
			>
				<h4 class="h4">{elements[clickedElement.number - 1].name}</h4>
			</div>
		</div>
		<div class="w-full">
			Element Info
		</div>
	</div>
{/if}
