// Basic parameters of the svg
var margin = {
  top: 15,
  bottom: 15,
  left: 70,
  right: 15
};

var width = 900;
var height = 600;

var svgHeight = height + margin.top + margin.bottom;
var svgWidth = width + margin.left + margin.right;

var svg = d3.select('#svg-area')
            .append('svg')
            .attr('width', svgWidth)
            .attr('height', svgHeight);

var tooltip = d3.select('body')
                .append('div')
                .attr('class', 'tooltip')
                .attr('opacity', '0');

// Read and arrange the data



    var svg = d3.select("svg"),
        margin = 200,
        width = svg.attr("width") - margin,
        height = svg.attr("height") - margin

    svg.append("text")
       .attr("transform", "translate(100,0)")
       .attr("x", 50)
       .attr("y", 50)
       .attr("font-size", "24px")
       .text("Chelsea Soccer Points Per Season")

    var xScale = d3.scaleBand().range([0, width]).padding(0.4),
        yScale = d3.scaleLinear().range([height, 0]);

    var g = svg.append("g")
               .attr("transform", "translate(" + 100 + "," + 100 + ")");

	d3.json("data.json", function(error, data) {
        if (error) {
            return console.warn(error);
        }
		

        xScale.domain(data.map(function(d) { return d.year; }));
        yScale.domain([0, d3.max(data, function(d) { return d.points; })]);

        g.append("g")
         .attr("transform", "translate(0," + height + ")")
         .call(d3.axisBottom(xScale))
         .append("text")
         .attr("y", height - 250)
         .attr("x", width - 100)
         .attr("text-anchor", "end")
         .attr("stroke", "black")
         .text("Season by Year");

        g.append("g")
         .call(d3.axisLeft(yScale).tickFormat(function(d){
             return d;
         })


// Set scales

.ticks(12))
         .append("text")
         .attr("transform", "rotate(-90)")
         .attr("y", 6)
         .attr("dy", "-5.1em")
         .attr("text-anchor", "end")
         .attr("stroke", "black")
         .text("Chelsea FC Points Per Season");

        g.selectAll(".bar")
         .data(data)
         .enter().append("rect")
         .attr("class", "bar")
         .attr("x", function(d) { return xScale(d.year); })
         .attr("y", function(d) { return yScale(d.points); })
         .attr("width", xScale.bandwidth())
         .attr("height", function(d) { return height - yScale(d.points); })
		 .append("text")
		 .attr("y", function(d) { return yScale(d.points); });


// Create axes

var ourWins = function(d) { return (d.wins)}; 
	var ourLosses = function(d) { return (d.losses)};
    var ourDraws = function(d) { return (d.draws)};
		 
		 var svg = d3.select("#my_dataviz")
		 svg.append("circle").attr("cx",120).attr("cy",20).attr("r", 6).style("fill", "#00ff00")
		svg.append("circle").attr("cx",220).attr("cy",20).attr("r", 6).style("fill", "#ff0000")
		svg.append("circle").attr("cx",320).attr("cy",20).attr("r", 6).style("fill", "#ff8800")
		svg.append("text").attr("x", 130).attr("y", 20).text("Wins").style("font-size", "15px").attr("alignment-baseline","middle")
		svg.append("text").attr("x", 230).attr("y", 20).text("Losses").style("font-size", "15px").attr("alignment-baseline","middle")
		svg.append("text").attr("x", 330).attr("y", 20).text("Draws").style("font-size", "15px").attr("alignment-baseline","middle")
        svg.append("text").attr("x", 160).attr("y", 20).text(ourWins).style("font-size", "15px").attr("alignment-baseline","middle")
		svg.append("text").attr("x", 260).attr("y", 20).text(ourLosses).style("font-size", "15px").attr("alignment-baseline","middle")
		svg.append("text").attr("x", 360).attr("y", 20).text(ourDraws).style("font-size", "15px").attr("alignment-baseline","middle")

// Append the axes as G

// Add the line
    	 g.selectAll("myCircles")
      	.data(data)
      	.enter()
		.append("circle")
        .attr("fill", "red")
        .attr("stroke", "none")
        .attr("cx", function(d) { return x(d.ourWins) })
        .attr("cy", function(d) { return y(d.ourLosses) })
        .attr("cy", function(d) { return y(d.ourDraws) })
        .attr("r", 3)
		 
    });



// Create Bars or Line function




// Create Circle group




// Mouseover / mouseout



// tooltip



// Legend function
