 getrandom=(num, mul)=> {
  var value = [];
  for (i = 0; i <= num; i++) {
    var rand = Math.random() * mul;
    value.push(rand);
  }
  return value;
}

var trace1 = {
  type: "mesh3d",
  x: getrandom(1000, 200),
  y: getrandom(1000, 300),
  z: getrandom(1000, 150),
  color: "lightblue"
};

var trace2 = {
  type: "mesh3d",
  x: getrandom(1000, 200),
  y: getrandom(1000, 300),
  z: getrandom(1000, 150),
  color: "pink"
};

var layout = {
  scene: {
    xaxis: { title: "X AXIS TITLE" },
    yaxis: { title: "Y AXIS TITLE" },
    zaxis: { title: "Z AXIS TITLE" }
  },
  autosize: false,
  width: 550,
  height: 500,
  margin: {
    l: 0,
    r: 0,
    b: 50,
    t: 50,
    pad: 4
  }
};

document.addEventListener("DOMContentLoaded", () => {
 Plotly.newPlot("myDiv", [trace1, trace2], layout);
});

