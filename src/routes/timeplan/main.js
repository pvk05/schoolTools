export let programFagTimer = {
	blokkA: [
		{
			day: "Mandag",
			start: new Date(2000, 0, 1, 10, 0),
			startText:"10.00",
			end: new Date(2000, 0, 1, 11, 15),
			endText:"11.15"
		},
		{
			day: "Tirsdag",
			start: new Date(2000, 0, 1, 10, 15),
			startText:"10.15",
			end: new Date(2000, 0, 1, 11, 30),
			endText:"11.30"
		},
		{
			day: "Fredag",
			start: new Date(2000, 0, 1, 11, 45),
			startText:"11.45",
			end: new Date(2000, 0, 1, 13, 0),
			endText:"43.00"
		},
	],
	blokkB: [
		{
			day: "Torsdag",
			start: new Date(2000, 0, 1, 10, 15),
			startText:"10.15",
			end: new Date(2000, 0, 1, 11, 30),
			endText:"11.30"
		},
		{
			day: "Fredag",
			start: new Date(2000, 0, 1, 13, 15),
			startText:"13.15",
			end: new Date(2000, 0, 1, 14, 30),
			endText:"14.30"
		},
		{
			day: "Fredag",
			start: new Date(2000, 0, 1, 14, 45),
			startText:"14.45",
			end: new Date(2000, 0, 1, 16, 0),
			endText:"16.00"
		}
	],
	blokkC: [
		{
			day: "Mandag",
			start: new Date(2000, 0, 1, 12, 0),
			startText:"12.00",
			end: new Date(2000, 0, 1, 13, 15),
			endText:"13.15"
		},
		{
			day: "Mandag",
			start: new Date(2000, 0, 1, 13, 30),
			startText:"13.30",
			end: new Date(2000, 0, 1, 14, 30),
			endText:"14.30"
		},
		{
			day: "Onsdag",
			start: new Date(2000, 0, 1, 10, 0),
			startText:"10.00",
			end: new Date(2000, 0, 1, 11, 30),
			endText:"11.30"
		},
	],
	blokkD: [
		{
			day: "Tirsdag",
			start: new Date(2000, 0, 1, 8, 15),
			startText:"08.15",
			end: new Date(2000, 0, 1, 9, 45),
			endText:"09.45"
		},
		{
			day: "Torsdag",
			start: new Date(2000, 0, 1, 12, 0),
			startText:"12.00",
			end: new Date(2000, 0, 1, 13, 15),
			endText:"13.15"
		},
		{
			day: "Torsdag",
			start: new Date(2000, 0, 1, 13, 30),
			startText:"13.30",
			end: new Date(2000, 0, 1, 14, 30),
			endText:"14.30"
		},
	]
}

export let timeRow = {
	8: {
		0: 2,
		15: 3,
		30: 4,
		45: 5
	},
	9: {
		0: 6,
		15: 7,
		30: 8,
		45: 9
	},
	10: {
		0: 10,
		15: 11,
		30: 12,
		45: 13
	},
	11: {
		0: 14,
		15: 15,
		30: 16,
		45: 17
	},
	12: {
		0: 18,
		15: 19,
		30: 20,
		45: 21
	},
	13: {
		0: 22,
		15: 23,
		30: 24,
		45: 25
	},
	14: {
		0: 26,
		15: 27,
		30: 28,
		45: 29
	},
	15: {
		0: 30,
		15: 31,
		30: 32,
		45: 33
	},
}

export let dagCol = {
	Mandag: 2,
	Tirsdag: 3,
	Onsdag: 4,
	Torsdag: 5,
	Fredag: 6
}