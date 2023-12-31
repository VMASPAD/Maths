var countX = parseInt(localStorage.getItem("countX")) || 0;
var countElementX = document.getElementById("countX");

// Mostrar el contador actualizado en la página
countElementX.textContent = countX;

// Obtener el botón y agregar un event listener para incrementar el contador
var zoomX = document.getElementById("zoomX");
zoomX.addEventListener("click", function() {
    countX += 1;
    countElementX.textContent = countX;
    updateChart()
    // Guardar el contador actualizado en el localStorage
    localStorage.setItem("countX", countX);
});

var countX = parseInt(localStorage.getItem("countX")) || 0;
var countElementX = document.getElementById("countX");

// Mostrar el contador actualizado en la página
countElementX.textContent = countX;

// Obtener el botón y agregar un event listener para incrementar el contador
var reduceX = document.getElementById("reduceX");
reduceX.addEventListener("click", function() {
    countX -= 1;
    countElementX.textContent = countX;
    updateChart()
    // Guardar el contador actualizado en el localStorage
    localStorage.setItem("countX", countX);
});

var countY = parseInt(localStorage.getItem("countY")) || 0;
var countElementY = document.getElementById("countY");

// Mostrar el contador actualizado en la página
countElementY.textContent = countY;

// Obtener el botón y agregar un event listener para incrementar el contador
var zoomY = document.getElementById("zoomY");
zoomY.addEventListener("click", function() {
    countY += 1;
    countElementY.textContent = countY;
    updateChart()
    // Guardar el contador actualizado en el localStorage
    localStorage.setItem("countY", countY);
});

var countY = parseInt(localStorage.getItem("countY")) || 0;
var countElementY = document.getElementById("countY");

// Mostrar el contador actualizado en la página
countElementY.textContent = countY;

// Obtener el botón y agregar un event listener para incrementar el contador
var reduceY = document.getElementById("reduceY");
reduceY.addEventListener("click", function() {
    countY -= 1;
    countElementY.textContent = countY;
    updateChart()
    // Guardar el contador actualizado en el localStorage
    localStorage.setItem("countY", countY);
});

var chart;

var showLine = true;
var showLineejeX = true;
var showLineejeY = true;
var showLinepoints = true;

var currentValue = "transparent";


function updateChart() {
  var ctx = document.getElementById("graph").getContext("2d");

  if (chart) {
    chart.destroy();
  }

  var yone = document.getElementById("yone").value
  var ytwo = document.getElementById("ytwo").value
  var xone = document.getElementById("xone").value
  var xtwo = document.getElementById("xtwo").value

  // Puntos de la recta
  var point1 = { x: xone, y: yone };
  var point2 = { x: xtwo, y: ytwo };

  // Cálculo de la pendiente y el intercepto
  var m = (point2.y - point1.y) / (point2.x - point1.x);
  var n = point1.y - m * point1.x;
  console.log(m)
  console.log(n)
  // Función de la recta
  var lineFunction = function(x) {
    return m * x + n;
  };


  document.getElementById("rect").innerHTML = `<p> $$f(x) = ${m}x ${n > 0 ? "+" : "-"} ${n}$$</p>`
  // Datos de la recta
  var lineData = [];
  console.log(lineData)
  for (var x = -100; x <= 100; x += 5) {
    lineData.push({ x: x, y: lineFunction(x) });
  }
  var maths = -n/m
  chart = new Chart(ctx, {
    type: "scatter",
    data: {
      datasets: [
        {
          label: "Eje X",
          data: [{ x: -1000, y: 0 }, { x: 1000, y: 0 }],
          showLine: true,
          borderColor: showLineejeX ? "red" : "transparent",
          backgroundColor: "transparent"
        },
        {
          label: "Eje Y",
          data: [{ x: 0, y: -1000 }, { x: 0, y: 1000 }],
          showLine: true,
          borderColor: showLineejeY ? "blue" : "transparent",
          backgroundColor: "transparent"
        },
        {
          label: "Recta",
          data: lineData,
          showLine: true,
          borderColor: showLine ? "green" : "transparent",
          backgroundColor: "transparent"
        },
        {
        label: "Puntos",
        data: [
          { x: maths, y: 0 },
          { x: 0, y: n },
        ],
        backgroundColor: showLinepoints ? "yellow" : "transparent",
        borderColor: showLinepoints ? "black" : "transparent",
        showLine: true,
      }
      ]
    },
    options: {
      scales: {
        x: {
            type: "linear",
            position: "bottom",
            min: -(parseFloat(JSON.parse(localStorage.getItem("countX")))),
            max: parseFloat(JSON.parse(localStorage.getItem("countX"))),
            ticks: {
                stepSize: 1
            }
        },
        y: {
            type: "linear",
            position: "left",
            min: -(parseFloat(JSON.parse(localStorage.getItem("countY")))),
            max: parseFloat(JSON.parse(localStorage.getItem("countY"))),
            ticks: {
                stepSize: 1
            }
        }
    },
      plugins: {
        zoom: {
          zoom: {
            wheel: {
              enabled: true
            },
            pinch: {
              enabled: true
            },
            mode: "xy"
          }
        }
      },
      annotation: {
        annotations: [
          {
            type: "line",
            mode: "horizontal",
            scaleID: "y",
            value: 0,
            borderColor: "black",
            borderWidth: 1,
            borderDash: [5, 5]
          },
          {
            type: "line",
            mode: "vertical",
            scaleID: "x",
            value: 0,
            borderColor: "black",
            borderWidth: 1,
            borderDash: [5, 5]
          }
        ]
      }
    }
  });
}
    
updateChart();

var toggleButton = document.getElementById("toggleButton");
toggleButton.addEventListener("click", function() {
  showLineejeX = !showLineejeX;
  updateChart();
  toggleButton.textContent = showLineejeX ? "Ocultar EjeX" : "Mostrar EjeX";
});

var ejeY = document.getElementById("ejeY");
ejeY.addEventListener("click", function() {
  showLineejeY = !showLineejeY;
  updateChart();
  ejeY.textContent = showLineejeY ? "Ocultar EjeY" : "Mostrar EjeY";
});

var ejeX = document.getElementById("ejeX");
ejeX.addEventListener("click", function() {
  showLine = !showLine;
  updateChart();
  ejeX.textContent = showLine ? "Ocultar Recta" : "Mostrar Recta";
});

var points = document.getElementById("points");
points.addEventListener("click", function() {
  showLinepoints = !showLinepoints;
  updateChart();
  points.textContent = showLinepoints ? "Ocultar Puntos" : "Mostrar Puntos";
});