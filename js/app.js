var ordinalScale = d3.scaleOrdinal()
	.domain(['cold', 'cool', 'ok', 'nice', 'warm'])
	.range(['blue','light blue','white','yellow','green']);

console.log(ordinalScale('cool'));
console.log(ordinalScale('warm'));
console.log(ordinalScale('ok'));