import { writable } from "svelte/store";

export let clickedStore = writable(0);

export function elementClick(id) {
	clickedStore.set(id)
}

// make category class name camelCase
export const toCamelCase = (input) => {
	let regex = /\s+(\w)?/gi;
	let output = input
		.toLowerCase()
		.replace(regex, function (match, letter) {
			return letter.toUpperCase();
		});
	return output;
};