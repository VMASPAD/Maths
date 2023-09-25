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

var ctx = document.getElementById('myChart').getContext('2d');
var equationInput = document.getElementById('equationInput');
var updateButton = document.getElementById('updateButton');
var dataTable = document.getElementById('dataTable');
var myChart;

// Función para actualizar la gráfica y la tabla
function updateChart() {
  var equation = equationInput.value;
  console.log(equation)
  var xValue = parseFloat(document.getElementById("limitx").value);
  console.log(xValue)

  var data = [];
  var tableHTML = '<tr><th>X</th><th>Y</th></tr>';
  for (var i = -10; i <= 10; i++) {
    var x = xValue + (i * 0.5);
    var y = eval(equation.replace(/x/g, '(' + x + ')'));
    console.log(y)
    if (!isNaN(y)) {
      data.push({ x: x, y: y });
      tableHTML += '<tr><td>' + x.toFixed(2) + '</td><td>' + y.toFixed(2) + '</td></tr>';
    }
  }

  var chartConfig = {
    type: 'line',
    data: {
      datasets: [{
        label: 'Función',
        data: data,
        borderColor: 'blue',
        borderWidth: 1,
        pointRadius: 3,
        fill: false
      },
      {
        label: "Eje X",
        data: [{ x: -100, y: 0 }, { x: 100, y: 0 }],
        showLine: true,
        borderColor: "red",
        backgroundColor: "transparent"
      },
      {
        label: "Eje Y",
        data: [{ x: 0, y: -100 }, { x: 0, y: 100 }],
        showLine: true,
        borderColor: "green",
        backgroundColor: "transparent"
      },
      {
        label: "Limite X",
        data: [{ x: xValue - 0.50 , y: -100 }, { x: xValue - 0.50, y: 100 }],
        showLine: true,
        borderColor: "black",
        borderDash: [5, 5],
        backgroundColor: "transparent",
      },
      {
        label: "Limite X",
        data: [{ x: xValue + 0.50, y: -100 }, { x: xValue + 0.50, y: 100 }],
        showLine: true,
        borderColor: "black",          
        borderDash: [5, 5],
        backgroundColor: "transparent",
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
        title: {
          display: true,
          text: 'Gráfico'
        }
      },
      annotation: {
        annotations: {
          line1: {
            type: 'line',
            mode: 'vertical',
            scaleID: 'x',
            value: xValue - 0.5,
            borderColor: 'red',
            borderWidth: 1,
            borderDash: [5, 5],
            label: {
              content: '-0.50',
              enabled: true,
              position: 'top'
            }
          },
          line2: {
            type: 'line',
            mode: 'vertical',
            scaleID: 'x',
            value: xValue + 0.5,
            borderColor: 'red',
            borderWidth: 1,
            borderDash: [5, 5],
            label: {
              content: '0.50',
              enabled: true,
              position: 'top'
            }
          }
        }}
    }
  };

  // Si la gráfica ya existe, la destruimos antes de crear una nueva
  if (myChart) {
    myChart.destroy();
  }

  myChart = new Chart(ctx, chartConfig);
  dataTable.innerHTML = tableHTML;
}

// Agregar evento de clic al botón de actualización
updateButton.addEventListener('click', updateChart);
window.addEventListener('DOMContentLoaded', updateChart);
