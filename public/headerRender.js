function getSize(element){

  var w = window.innerWidth;
  var h = window.innerHeight;

  var svg = element
  .select("object")
  .select(".mainSvg");

  svg.attr("width", w)
  .attr("height", 40);
};
