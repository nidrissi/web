// faculty.js

var state = {
  data: [],
  normalize: false
};


var minDate = new Date(1998, 1, 1),
    maxDate = new Date(2018, 1, 1);

var chart = d3.select("#chart");
var svg = chart.append("svg")
    .attr("width", "100%")
    .attr("max-width", "100%");
var gMargin;
var gPath;

var color = d3.scaleOrdinal(d3.schemeSet3)
var margin = {top: 20, right: 20, bottom: 20, left: 35}

// to be initialized later
var outerWidth, outerHeight, width, height
var xScale, yScale, xAxis, yAxis
var xAxis, yAxis, xAxisDOM, yAxisDOM

var line = d3.line().x(function(d) { return xScale(d.year); });

function joinData() {
  var paths = gPath.selectAll(".path-group").data(state.data);
  paths.exit().remove();
  var paths_enter = paths.enter().append("g").attr("class", "path-group");
  for (let cat of ["pr", "mcf"]) {
    paths_enter.append("path")
      .attr("class", cat)
      .style("stroke", function(d) { return color(d.groupe) })
      .style("stroke-width", 2)
      .style("fill", "none")
      .style("opacity", ".25")
      .on("mouseover", function(d) {
        gMargin.select("#tooltip").text(d.section + " - " + d.nom + " (" + cat.toUpperCase() + ")");
        d3.select(this).style("opacity", ".85").style("stroke-width", 4);
      })
      .on("mouseout", function(d) {
        gMargin.select("#tooltip").text("");
        d3.select(this).style("opacity", ".25").style("stroke-width", 2);
      });
  }
  paths = paths.merge(paths_enter);
  for (let cat of ["mcf", "pr"]) {
    paths.select("." + cat)
      .transition()
      .duration(300)
      .attr("d", function(d) { return line(d[cat]) });
  }
}

function draw() {
  // dynamic width and height
  outerWidth = chart.node().getBoundingClientRect().width;
  outerHeight = outerWidth / 2;

  // margin trick
  width = outerWidth - margin.left - margin.right;
  height = outerHeight - margin.top - margin.bottom;
  svg.attr("height", outerHeight);
  gMargin = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // tooltip
  gMargin.append("text")
    .attr("id", "tooltip")
    .attr("text-anchor", "middle")
    .attr("transform", "translate(" + (width/2) + "," + (15) + ")");

  // scaling
  xScale = d3.scaleTime()
      .domain([minDate, maxDate])
      .range([0, width]);
  yScale = d3.scaleLinear()
      .range([height, 0]);

  setScales();

  // axis
  xAxis = d3.axisBottom(xScale)
      .ticks(d3.timeYear.every(1));
  xAxisDOM = gMargin.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);
  yAxis = d3.axisLeft(yScale);
  yAxisDOM = gMargin.append("g")
    .call(yAxis);

  // lines
  gPath = gMargin.append("g");
  joinData();
}

// check if we want to normalize
function setScales() {
  if (d3.select("#normalize").node().checked) {
    // normalized data
    yScale.domain([0,300]);
    line.y(function(d) { return yScale(d.normalized) });
  } else {
    // raw data
    yScale.domain([0,2500]);
    line.y(function(d) { return yScale(d.num) });
  }
}

// redraw the axes and the lines
function redraw() {
  yAxisDOM.transition()
    .duration(300)
    .call(yAxis);
  joinData();
}

function clickNormalize() {
  setScales();
  redraw();
}

d3.json('demos.json').then((data) => {
  state.data = data;

  // normalize at 100 in 1998
  // parse years
  for (d of state.data) {
    for (cat of ["mcf", "pr"]) {
      var initial = d[cat].find(function (x) { return x.year == 1998 }).num;
      d[cat].forEach(function(x,i,arr) {
        arr[i].year = new Date(x.year, 1, 1);
        arr[i].normalized = x.num * 100.0 / initial;
      });
    }
  }

  draw();
});
