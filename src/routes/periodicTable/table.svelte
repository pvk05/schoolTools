<script>
	import { elements } from '$lib/data/PeriodicTableJSON.json'
	import Element from './element.svelte'
    import ElementInfo from './elementInfo.svelte';

	
</script>

<style>
	.periodicTable {
    display: grid;
    grid-template-columns: repeat(18, auto) 1fr;
    gap: 0.1vw;
  }
</style>

<div class=" periodicTable">
	{#each elements as element, i}
      <Element
        atomicNumber={element.number}
        style="grid-column: {element.xpos}; grid-row: {element.ypos}" />
    {:else}{null}{/each}
	<ElementInfo />
</div>