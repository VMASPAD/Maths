var chart;



function addData(color, funcion) {
  var dataTable = document.getElementById("data-table");
  var newRow = dataTable.insertRow();
  var colorCell = newRow.insertCell();
  var funcionCell = newRow.insertCell();
  var eliminarCell = newRow.insertCell();

  colorCell.textContent = color;
  funcionCell.textContent = funcion;

  var eliminarButton = document.createElement("button");
  eliminarButton.textContent = "Eliminar";
  eliminarButton.addEventListener("click", function() {
    dataTable.deleteRow(newRow.rowIndex);
  });
  eliminarCell.appendChild(eliminarButton);
}

function updateChart() {
  var a = parseFloat(document.getElementById("input-a").value);
  var b = parseFloat(document.getElementById("input-b").value);

  var ctx = document.getElementById("graph").getContext("2d");

  if (chart) {
    chart.destroy();
  }


  chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "Ecuación Lineal",
          data: [
            { x: 0, y: a * 0 + b },
            { x:  -b / a , y: 0 }
          ],
          borderColor: "blue",
          fill: false
        },
        {
          label: "Eje X",
          data: [{ x: -10000, y: 0 }, { x: 10000, y: 0 }],
          showLine: true,
          borderColor: "red",
          backgroundColor: "transparent"
        },
        {
          label: "Eje Y",
          data: [{ x: 0, y: -10000 }, { x: 0, y: 10000 }],
          showLine: true,
          borderColor: "green",
          backgroundColor: "transparent"
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

  // Verificar puntos de cruce con el eje X y el eje Y
  var xCrossings = [];
  var yCrossings = [];

  if (a !== 0) {
    var xCrossing = -b / a;
    xCrossings.push(xCrossing);
  }

  var yCrossing = -b;
  yCrossings.push(yCrossing);

  var xCrossingsText = "Cruce en eje X: ";
  if (xCrossings.length === 0) {
    xCrossingsText += "Ninguno";
  } else {
    xCrossingsText += xCrossings.join(", ");
  }

  document.getElementById("zeros").innerHTML = `C°: {${xCrossing}}`
  document.getElementById("zeros").innerHTML = `Ordenada al origen: {0 ;${b}}`
  
  if(a<0){
    document.getElementById("idcre").innerHTML = "I.CRE: ∅"
    document.getElementById("iddecre").innerHTML = "I.DECRE: (-∞ ; +∞)"
  }else{
    document.getElementById("iddecre").innerHTML = "I.CRE:∅"
    document.getElementById("idcre").innerHTML = "I.DECRE: (+∞ ; -∞)"
  }
  
  if(a < 0){
    document.getElementById("image").innerHTML = "Imagen: (+∞ ; -∞)"
  }else{
    document.getElementById("image").innerHTML = "Imagen: (-∞ ; +∞)"
  }

  if(xCrossing < 0){
    document.getElementById("concre").innerHTML   = `C+: (${xCrossing} ; +∞)`
    document.getElementById("condecre").innerHTML = `C-: (-∞ ; ${xCrossing})`
  }else{
    document.getElementById("concre").innerHTML   = `C+: (-∞ ; ${xCrossing})`
    document.getElementById("condecre").innerHTML = `C-: (${xCrossing} ; +∞)`
  }

  document.getElementById("xCrossings").innerHTML = xCrossingsText;
  document.getElementById("yCrossings").innerHTML = `Cruce en eje Y: ${b}`;


var addLineButton = document.getElementById("graf");
addLineButton.addEventListener("click", addNewLine());
}

updateChart();
async function addNewLine(){
  var a = parseFloat(document.getElementById("input-a").value);
  var b = parseFloat(document.getElementById("input-b").value);
  var newData = [
    { x: 0, y: a * 0 + b },
    { x:  -b / a , y: 0 }
  ];
  
  chart.data.datasets.push({
    label: `${a}x ${b > 0 ? `+${b}` : `${b}`}`,
    data: newData,
    borderColor: "#7d3c98",
    fill: false
  });
  chart.update();
}
var añadir = document.getElementById("graf");
    añadir.addEventListener("click", function() {
      var a = parseFloat(document.getElementById("input-a").value);
      var b = parseFloat(document.getElementById("input-b").value);
   addData("purple",`${a}x ${b > 0 ? `+${b}` : `${b}`}`)
    });