var margin = { top: 10, right: 3, bottom:70, left: 30}

var width = 425 - margin.left - margin.right;
var height = 625 - margin.top - margin.bottom;

var svg = d3. select('.chart') //svg: scaleable vector graphic
	.append('svg')
		.attr('width', width + margin.left + margin.right)
		.attr('height', height + margin.top + margin.bottom)
	.append('g')
		.attr('transform', `translate(${margin.left}, ${margin.top})`);

var data = [ 
	{ score: 63, subject: 'Math'},
	{ score: 98, subject: 'Beer'},
	{ score: 67, subject: 'Journalism'},
	{ score: 25, subject: 'Football'},
	{ score: 83, subject: 'Basketball'},
	{ score: 90, subject: 'Michigan'},
	{ score: 5, subject: 'Trump'},
];

var yScale = d3.scaleLinear()
	.domain([0,100])
	.range ([height, 0]);

var yAxis = d3.axisLeft(yScale).ticks(5);

svg.call(yAxis)

var xScale = d3.scaleBand()
	.paddingInner(0.1)
	.paddingOuter(0.4)
	.domain(data.map(d => d.subject))
	.range([0, width]);

var xAxis = d3.axisBottom(xScale)
	.ticks(5)
	.tickSizeOuter(15)
	.tickPadding(10);

svg 
	.append('g')
		.attr('transform', `translate(0, ${height})`)
	.call(xAxis)
		.selectAll('text')
		.style('text-anchor', 'start')
		.attr('transform', 'rotate(45)');

svg.selectAll('rect')
	.data(data)
	.enter()
	.append('rect')
	.attr('x', d => xScale(d.subject))
	.attr('y', d => yScale(d.score))
	.attr('width', d => xScale.bandwidth())
	.attr('height', d => height - yScale(d.score));

