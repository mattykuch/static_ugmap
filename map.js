//Specify Dimensions
var width = 900,
    height = 600;

// Create a SVG element in the map container and give it some
// dimensions.
var svg = d3.select('#map').append('svg')
  .attr('width', width)
  .attr('height', height);

// Define a geographical projection and scale the map 
var projection = d3.geo.mercator()
  .scale(6000)
  .center([32, 1])
  .translate([width/2, height/2]);

// Prepare a path object and apply the projection to it.
var path = d3.geo.path()
  .projection(projection);

// Load the features from the GeoJSON.
d3.json('data/ug_districts2.geojson', function(error, features) {

  svg.append('g') // add a <g> element to the SVG element and give it a class to style later
    .attr('class', 'features')
    .selectAll('path')
    .data(features.features)
    .enter().append('path')
    .attr('d', path);

});