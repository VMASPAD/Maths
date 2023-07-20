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
              min: -10,
              max: 10,
              ticks: {
                stepSize: 1
              }
            },
            y: {
              type: "linear",
              position: "left",
              min: -10,
              max: 10,
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
