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

jsonParse(await FileAttachment("data.json").text())

// Set scales

var xScale = d3.scaleBand().range([0, width]).padding(0.5),
            yScale = d3.scaleLinear().range([height, 0]);

// Create axes

xScale.domain(dataset1);
        yScale.domain([0, 100]);

// Append the axes as G

g.append("g")
         .attr("transform", "translate(0," + height + ")")
         .call(d3.axisBottom(xScale).tickFormat(function(d){
           return "Wins: " + d;
         })
         );

        g.append("g")
         .call(d3.axisLeft(yScale).tickFormat(function(d){
             return "$" + d;
         }).ticks(4));



// Create Bars or Line function

g.selectAll(".bar")
         .data(dataset1)
         .enter().append("rect")

         g.selectAll(".bar")
         .data(dataset1)
         .enter().append("rect")
         .attr("class", "bar")
         .attr("x", function(d) { return xScale(d); })
         .attr("y", function(d) { return yScale(d); })
         .attr("width", xScale.bandwidth())
         .attr("height", function(d) { return height - yScale(d); });

// Create Circle group

svg.append("circle").attr("cx",200).attr("cy",130).attr("r", 6).style("fill", "#69b3a2")
svg.append("circle").attr("cx",200).attr("cy",160).attr("r", 6).style("fill", "#404080")
svg.append("circle").attr("cx",200).attr("cy",190).attr("r", 6).style("fill", "#ffff00")

// select the svg area
var svg = d3.select("#my_dataviz")

// Handmade legend

svg.append("text").attr("x", 220).attr("y", 130).text("Wins").style("font-size", "15px").attr("alignment-baseline","middle")
svg.append("text").attr("x", 220).attr("y", 160).text("Losses").style("font-size", "15px").attr("alignment-baseline","middle")
svg.append("text").attr("x", 220).attr("y", 190).text("Draws").style("font-size", "15px").attr("alignment-baseline","middle")


// Mouseover / mouseout



// tooltip

// create a tooltip
var tooltip = d3.select("#my_dataviz")
  .append("div")
    .style("position", "absolute")
    .style("visibility", "hidden")

    d3.select("#circleBasicTooltip")
    .on("mouseover", function(){return tooltip.style("visibility", "visible");})
    .on("mousemove", function(){return tooltip.style("top", (event.pageY-800)+"px").style("left",(event.pageX-800)+"px");})
    .on("mouseout", function(){return tooltip.style("visibility", "hidden");});

// Legend function

  <svg id="my_dataviz" height=300 width=450></svg>