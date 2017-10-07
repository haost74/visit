function getSize(element){

  var w = window.innerWidth;
  var h = window.innerHeight;

  var ell = element
  .select("object")
  .select("svg");

  ell.attr("width", w);
};
