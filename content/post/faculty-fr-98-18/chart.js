// faculty.js

var state = {
  data: []
};

var width = 1200, height = 600;

var chart = d3.select("#chart").attr("height", height).attr("width", width);

var xscale = d3.scaleLinear()
    .domain([1998,2018])
    .range([0,width]);

var yscale = d3.scaleLinear()
    .domain([0,2500])
    .range([height,0]);

var line = d3.line()
    .x(function(d) { return xscale(d.year); })
    .y(function(d) { return yscale(d.num); });

function updateChart() {
  var paths = chart.selectAll("path").data(state.data);
  var paths_enter = paths.enter()
      .append("g")
      .on("mouseover", function(d) {
        $("#nom-section").text(d.section + " - " + d.nom);
      })
      .on("mouseout", function(d){
        $("#nom-section").text("Toutes les sections :");
      })
      .append("path")
      .style("stroke", "black")
      .style("stroke-width", 2)
      .style("fill", "none")
      .style("opacity", ".25")
      .on("mouseover", function(d) {
        d3.select(this).style("opacity", ".85").style("stroke-width", 3);
      })
      .on("mouseout", function(d) {
        d3.select(this).style("opacity", ".25").style("stroke-width", 2);
      });
  paths.merge(paths_enter).attr("d", function(d) { return line(d.mcf) });
  paths.exit().remove();
}

d3.json('demos.json').then((data) => {
  state.data = data;
  updateChart();
}).catch((error) => {
  console.error('Error loading the data');
});
