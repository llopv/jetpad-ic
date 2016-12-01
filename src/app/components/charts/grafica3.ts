export function pintarGrafica3(){

  var width = 1000,
    height = 1000,
    root;

  var force = d3.layout.force()
    .size([width, height])
    .on("tick", tick)

  var svg = d3.select("container2").append("svg")
    .attr("width", width)
    .attr("height", height);

  var link = svg.selectAll(".link"),
    node = svg.selectAll(".node");

    root = {
      "name": "Texto",
      "children": [
        {
          "name": "paragrafro1",
          "children": [
            {"name": "comentF","size": 8258},
            {"name": "comentC", "size": 10001},
            {"name": "preguntas", "size": 821}
          ]},
        {
          "name": "paragrafro2",
          "children": [
            {"name": "comentF","size": 10000},
            {"name": "comentC", "size": 100},
            {"name": "preguntas", "size": 821}
          ]},
        {
          "name": "paragrafro3",
          "children": [
            {"name": "comentF","size": 10000},
            {"name": "comentC", "size": 100},
            {"name": "preguntas", "size": 821}
          ]},
        {
          "name": "paragrafro4",
          "children": [
            {"name": "comentF", "size": 825},
            {"name": "comentC", "size": 1000},
            {"name": "preguntas", "size": 8210}
          ]
        },
        {
          "name": "paragrafro5",
          "children": [
            {"name": "comentF","size": 8258},
            {"name": "comentC", "size": 10001},
            {"name": "preguntas", "size": 821}
          ]},
        {
          "name": "paragrafro6",
          "children": [
            {"name": "comentF","size": 10000},
            {"name": "comentC", "size": 100},
            {"name": "preguntas", "size": 821}
          ]},
        {
          "name": "paragrafro7",
          "children": [
            {"name": "comentF","size": 10000},
            {"name": "comentC", "size": 100},
            {"name": "preguntas", "size": 821}
          ]},
        {
          "name": "paragrafro8",
          "children": [
            {"name": "comentF", "size": 825},
            {"name": "comentC", "size": 1000},
            {"name": "preguntas", "size": 8210}
          ]
        }
      ]
    };

  function update() {
    var nodes = flatten(root),
      links = d3.layout.tree().links(nodes);

    // Restart the force layout.
    force
      .nodes(nodes)
      .links(links)
      .linkStrength(0.3)
      .friction(0.9)
      .linkDistance(30)
      .charge(-280) //parámetro alterado para la longitud del segmento
      .gravity(0.1)
      .theta(0.8)
      .alpha(0.1)
      .start();


    // Update the links…
    link = link.data(links, function(d) { return d.target.id; });

    // Exit any old links.
    link.exit().remove();

    // Enter any new links.
    link.enter().insert("line", ".node")
      .attr("class", "link")
      .attr("x1", function(d) { return (d.source.x*2); })
      .attr("y1", function(d) { return d.source.y; })
      .attr("x2", function(d) { return d.target.x; })
      .attr("y2", function(d) { return d.target.y; });

    // Update the nodes…
    node = node.data(nodes, function(d) { return d.id; });

    // Exit any old nodes.
    node.exit().remove();

    // Enter any new nodes.
    node.enter().append("circle")
      .attr("class", "node")
      .attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; })
      .attr("r", function(d) { return Math.sqrt(d.size) / 5 || 15; }) //segundo parámetro tamaño del nodo
      .style("fill", function(d) {
        if(d.name=='comentF'){return 'green'; }
        else if(d.name=='comentC'){
          return 'red';
        }
        else if(d.name=='preguntas'){return 'Yellow';}
        else if(d.name=='Texto'){return 'White';}
      })
      .on("click", click)
      .call(force.drag);
  }

  function tick() {
    link.attr("x1", function(d) { return d.source.x; })
      .attr("y1", function(d) { return d.source.y; })
      .attr("x2", function(d) { return d.target.x; })
      .attr("y2", function(d) { return d.target.y; });

    node.attr("cx", function(d) { return (d.x); })
      .attr("cy", function(d) { return (d.y); });
  }

  /*
   // Color leaf nodes orange, and packages white or blue.
   function color(d) {
   return d._children ? "#ac4b56" : d.children ? "#FFFFFF" : "#ac4b56";}
   */


// Toggle children on click.
  function click(d) {
    if (!d3.event.defaultPrevented) {
      if (d.children) {
        d._children = d.children;
        d.children = null;
      } else {
        d.children = d._children;
        d._children = null;
      }
      update();
    }
  }

// Returns a list of all nodes under the root.
  function flatten(root) {
    var nodes = [], i = 0;

    function recurse(node) {
      if (node.children) node.children.forEach(recurse);
      if (!node.id) node.id = ++i;
      nodes.push(node);
    }

    recurse(root);
    return nodes;
  }

  update();
}
