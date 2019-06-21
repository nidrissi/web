// faculty.js

var state = {
  data: [],
  normalize: true
};

var chart = d3.select("#chart");

var color = d3.scaleOrdinal(d3.schemeSet3)

function updateChart() {
  // dynamic width and height
  var outerWidth = chart.node().getBoundingClientRect().width;
  var outerHeight = outerWidth / 2;
  chart.attr("height", outerHeight);

  // margin trick
  var margin = {top: 20, right: 20, bottom: 20, left: 30},
      width = outerWidth - margin.left - margin.right,
      height = outerHeight - margin.top - margin.bottom;
  chart = chart.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // scaling (note the margin)
  var xscale = d3.scaleLinear()
      .domain([1998,2018])
      .range([0, width]);
  var yscale = d3.scaleLinear()
      .range([height, 0]);

  // our lines
  var line = d3.line()
      .x(function(d) { return xscale(d.year); });
  if (state.normalize) {
    // normalized data
    yscale.domain([0,300]);
    line.y(function(d) { return yscale(d.normalized) });
  } else {
    // raw data
    yscale.domain([0,2500]);
    line.y(function(d) { return yscale(d.num) });
  }

  // axis
  var xAxis = d3.axisBottom(xscale).tickValues([1998,2003,2008,2013,2018]);
  chart.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);
  var yAxis = d3.axisLeft(yscale);
  chart.append("g")
    .call(yAxis);

  // lines
  var paths = chart.selectAll("path").data(state.data);
  var paths_enter = paths.enter();
  var cat;
  for (cat of ["mcf", "pr"]) {
    paths_enter.append("path")
      .attr("d", function(d) { return line(d[cat]) })
      .style("stroke", function(d) { return color(d.groupe) })
      .style("stroke-width", 2)
      .style("fill", "none")
      .style("opacity", ".25")
      .on("mouseover", function(d) {
        $("#nom-section").text(d.section + " - " + d.nom + " (" + cat.toUpperCase() + ")");
        d3.select(this).style("opacity", ".85").style("stroke-width", 3);
      })
      .on("mouseout", function(d) {
        $("#nom-section").text("Toutes les sections :");
        d3.select(this).style("opacity", ".25").style("stroke-width", 2);
      });
  }
  paths.exit().remove();
}

d3.json('demos.json').then((data) => {
  state.data = data;

  // normalize at 100 in 1998
  for (d of state.data) {
    for (cat of ["mcf", "pr"]) {
      var initial = d[cat].find(function (x) { return x.year == 1998 }).num;
      d[cat].forEach(function(x,i,arr) {
        arr[i].normalized = x.num * 100.0 / initial;
      });
    }
  }

  updateChart();
});//.catch((error) => {
//   console.error('Error loading the data');
// });
