// faculty.js

var state = {
  data: [],
  normalize: true
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

var color = d3.scaleOrdinal(d3.schemeSet3)

function updateChart() {
  if (state.normalize) {
    yscale.domain([0,300]);
    line.y(function(d) { return yscale(d.normalized) });
  } else {
    yscale.domain([0,2500]);
    line.y(function(d) { return yscale(d.num) });
  }

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
