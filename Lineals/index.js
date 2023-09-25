
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
//------------------------------------
function addData(color, funcion, isVisible = true) {
  // Agrega un parámetro isVisible para controlar la visibilidad
  var dataTable = document.getElementById("data-table");
  var id = parseInt(aumentarContador()+ 1)
  var data = dateFunction();
  var listItem = document.createElement("li");
  listItem.setAttribute("data-visible", isVisible); // Añade un atributo para rastrear la visibilidad
  listItem.innerHTML = `
  <div class="flex flex-col"> 
  <div><p>${funcion}</p></div>
  <p id="idValue">Numero de funcion: ${id}</p>
  <div class="flex flex-row">
      <button class="btn btn-info btn-outline" onclick="updateFunction()">Editar</button>
      <button class="btn btn-error btn-outline delete-button">Eliminar</button>
      <button class="btn btn-warning btn-outline toggle-visibility" >Ocultar</button> 
  </div>
  
<div class="collapse bg-base-200">
  <input type="checkbox" name="my-accordion-1" /> 
    <div class="collapse-title text-xl font-medium">
      Datos de la funcion
    </div>
    <div class="collapse-content"> 
        <p id="xCrossingsData">Cruce en eje X: ${data.xCrossing}</p>
        <p id="yCrossingsData">Cruce en eje Y: ${data.yCrossing}</p>
        <p id="imageData">${data.image}</p>
        <p id="zerosData">${data.zeros}</p>
        <p id="idcreData">${data.idcre}</p>
        <p id="iddecreData">${data.iddecre}</p>
        <p id="concreData">${data.concre}</p>
        <p id="condecreData">${data.condecre}</p>
        <p id="czeroData"></p>
    </div>
</div>
</div>
  `;
  function dateFunction() {
    var a = parseFloat(document.getElementById("input-a").value);
    var b = parseFloat(document.getElementById("input-b").value);
  
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
  
    var image = a < 0 ? "Imagen: (+∞ ; -∞)" : "Imagen: (-∞ ; +∞)";
    var zeros = `C°: {${xCrossing}}`;
    var idcre = a < 0 ? "I.CRE: ∅" : "I.CRE:∅";
    var iddecre = a < 0 ? "I.DECRE: (-∞ ; +∞)" : "I.DECRE: (+∞ ; -∞)";
    var concre = xCrossing < 0 ? `C+: (${xCrossing} ; +∞)` : `C+: (-∞ ; ${xCrossing})`;
    var condecre = xCrossing < 0 ? `C-: (-∞ ; ${xCrossing})` : `C-: (${xCrossing} ; +∞)`;
  
    var dataObject = {
      color: "purple",
      funcion: `${a}x ${b > 0 ? `+${b}` : `${b}`}`,
      isVisible: true,
      xCrossing: xCrossing,
      yCrossing: yCrossing,
      image: image,
      zeros: zeros,
      idcre: idcre,
      iddecre: iddecre,
      concre: concre,
      condecre: condecre,
    };
  
    return dataObject;
  }
  // Agregar el nuevo elemento como el último hijo de la lista
  dataTable.appendChild(listItem);

  var editButton = listItem.querySelector(".btn-info");
  editButton.addEventListener("click", function() {
    // Mostrar un cuadro de diálogo para ingresar nuevos valores de 'a' y 'b'
    var newA = parseFloat(prompt("Nuevo valor de 'a' (Solo números):"));
    var newB = parseFloat(prompt("Nuevo valor de 'b' (Solo números):"));

    // Actualizar la función en la lista
    listItem.querySelector("p").textContent = `${newA}x ${newB > 0 ? `+${newB}` : `${newB}`}`;

    // Actualizar la función en el gráfico
    updateFunctionParameters(id, newA, newB);
  });
  // Agregar un manejador de eventos al botón "Eliminar"
  var deleteButton = listItem.querySelector(".delete-button");
  deleteButton.addEventListener("click", function() {
    // Eliminar el elemento padre (el <li>) al hacer clic en "Eliminar"
    dataTable.removeChild(listItem);
    // También debes eliminar la función del gráfico
    removeFunctionFromChart(id);
  });

  // Agregar un manejador de eventos al botón "Ocultar"
  var toggleVisibilityButton = listItem.querySelector(".toggle-visibility");
  toggleVisibilityButton.addEventListener("click", function() {
    var isVisible = listItem.getAttribute("data-visible") === "true"; // Obtener el estado actual de visibilidad
    isVisible = !isVisible; // Cambiar el estado de visibilidad
    listItem.setAttribute("data-visible", isVisible); // Actualizar el atributo
    toggleVisibilityButton.textContent = isVisible ? "Ocultar" : "Mostrar"; // Cambiar el texto del botón
    // También debes actualizar la visibilidad en el gráfico
    updateFunctionVisibility(id, isVisible);
  });
}

function removeFunctionFromChart(id) {
  // Busca la función correspondiente en chart.data.datasets
  const datasetIndex = chart.data.datasets.findIndex((dataset) => dataset.id === id);

  if (datasetIndex !== -1) {
    // Si se encuentra la función, elimínala del gráfico
    chart.data.datasets.splice(datasetIndex, 1);
    // Actualiza el gráfico para reflejar los cambios
    chart.update();
  }
}
function storeOriginalColor(dataset, color) {
  if (!dataset.originalBorderColor) {
      dataset.originalBorderColor = color;
  }
}
function updateFunctionVisibility(id, isVisible) {
  // Busca la función correspondiente en chart.data.datasets
  const dataset = chart.data.datasets.find((dataset) => dataset.id === id);
  if (dataset) {
      // Almacena el color original si aún no se ha almacenado
      storeOriginalColor(dataset, dataset.borderColor);
      
      // Actualiza la propiedad borderColor para ocultar o mostrar la función
      dataset.borderColor = isVisible ? dataset.originalBorderColor : "transparent";
      
      // Actualiza el gráfico para reflejar los cambios
      chart.update();
  }
}

function updateFunctionParameters(funcion, newA, newB) {
  // Buscar la función correspondiente en chart.data.datasets
  const dataset = chart.data.datasets.find((dataset) => dataset.label === funcion);

  if (dataset) {
    // Actualizar los parámetros 'a' y 'b' de la función en el gráfico
    dataset.data = [
      { x: 0, y: newA * 0 + newB },
      { x: -newB / newA, y: 0 }
    ];

    // Actualizar el gráfico para reflejar los cambios
    chart.update();
  }
}


var showLine = true;
function aumentarContador() {
  return id++;
}
var functionsData = [];
var id = 0; 
var currentValue = "transparent";

//------------------------------------
function updateChart(a,b) {
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
// Declarar id como una variable global
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


}
function colorSetMaster(){
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  var color = `rgb(${red},${green},${blue})`;
  return color;
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
    id: (id + 1),
    data: newData,
    borderColor: showLine ? colorSetMaster() : "transparent",
    backgroundColor: "transparent",
    fill: false
  });
  chart.update();
  functionsData.push({
    id: (id + 1),
    a: a,
    b: b,
    newData: newData
});
console.log(functionsData)
}
aumentarContador()
var añadir = document.getElementById("graf");
    añadir.addEventListener("click", function() {
      var a = parseFloat(document.getElementById("input-a").value);
      var b = parseFloat(document.getElementById("input-b").value);
      addData("purple",`${a}x ${b > 0 ? `+${b}` : `${b}`}`)
    });
    


//----------------IMGEXPORT---------------------------
    var imgElement; // Declarar una variable global para el elemento img

    function exportToPNG() {
      var chartContainer = document.getElementById('graph').parentElement;
      html2canvas(chartContainer).then(function(canvas) {
        var imgData = canvas.toDataURL('image/png');
    
        // Borrar la imagen anterior si existe
        if (imgElement) {
          imgElement.remove();
        }
    
        // Crear un elemento img y mostrar la imagen generada
        imgElement = document.createElement('img');
        imgElement.src = imgData;
        imgElement.style.marginTop = '10px'; // Añadir un margen superior
    
        // Crear un enlace de descarga
        var downloadLink = document.createElement('a');
        downloadLink.download = 'grafico.png'; // Nombre de archivo para descargar
        downloadLink.href = imgData;
        downloadLink.appendChild(imgElement); // Agregar la imagen dentro del enlace
    
        // Agregar el enlace al contenedor
        var downloadLinkContainer = document.getElementById('downloadLinkContainer');
        if (downloadLinkContainer) {
          downloadLinkContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar el enlace
          downloadLinkContainer.appendChild(downloadLink);
        }
      });
    }
    
    // Mostrar el botón de compartir cuando se genera la imagen
    function showShareButton() {
      var shareButtonContainer = document.getElementById('shareButtonContainer');
      if (shareButtonContainer) {
        shareButtonContainer.style.display = 'block';
      }
    }

    var funcionLine = document.getElementById("funcionLine");
    funcionLine.addEventListener("click", function() {
      showLine = !showLine;
      updateChart();
      funcionLine.textContent = showLine ? "Ocultar Recta" : "Mostrar Recta";
    });

//-----------------------------------------------