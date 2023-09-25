var countX = parseInt(localStorage.getItem("countX")) || 0;
var countElementX = document.getElementById("countX");

// Mostrar el contador actualizado en la página
countElementX.textContent = countX;

// Obtener el botón y agregar un event listener para incrementar el contador
var zoomX = document.getElementById("zoomX");
zoomX.addEventListener("click", function () {
    countX += 1;
    countElementX.textContent = countX;
    updateGraph()
    // Guardar el contador actualizado en el localStorage
    localStorage.setItem("countX", countX);
});

var countX = parseInt(localStorage.getItem("countX")) || 0;
var countElementX = document.getElementById("countX");

// Mostrar el contador actualizado en la página
countElementX.textContent = countX;

// Obtener el botón y agregar un event listener para incrementar el contador
var reduceX = document.getElementById("reduceX");
reduceX.addEventListener("click", function () {
    countX -= 1;
    countElementX.textContent = countX;
    updateGraph()
    // Guardar el contador actualizado en el localStorage
    localStorage.setItem("countX", countX);
});

var countY = parseInt(localStorage.getItem("countY")) || 0;
var countElementY = document.getElementById("countY");

// Mostrar el contador actualizado en la página
countElementY.textContent = countY;

// Obtener el botón y agregar un event listener para incrementar el contador
var zoomY = document.getElementById("zoomY");
zoomY.addEventListener("click", function () {
    countY += 1;
    countElementY.textContent = countY;
    updateGraph()
    // Guardar el contador actualizado en el localStorage
    localStorage.setItem("countY", countY);
});

var countY = parseInt(localStorage.getItem("countY")) || 0;
var countElementY = document.getElementById("countY");

// Mostrar el contador actualizado en la página
countElementY.textContent = countY;

// Obtener el botón y agregar un event listener para incrementar el contador
var reduceY = document.getElementById("reduceY");
reduceY.addEventListener("click", function () {
    countY -= 1;
    countElementY.textContent = countY;
    updateGraph()
    // Guardar el contador actualizado en el localStorage
    localStorage.setItem("countY", countY);
});

var rangeInput = document.getElementById("myRange");
rangeInput.addEventListener("input", function () {
    var value = parseFloat(rangeInput.value);
    localStorage.setItem("valueRange", JSON.stringify(value));
    console.log(value);
});


//-----------------Funcion Curadratica------------------------

var a, b, c;
var chart
window.onload = function () {
    updateChart([]);
};
function calculateXIntercepts() {
    var discriminant = Math.pow(b, 2) - 4 * a * c;
    if (discriminant >= 0) {
        var x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        var x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return { x1, x2 };
    } else {
        return null;
    }
}

function calculateYIntercept() {
    return c;
}

function calculateVertex() {
    var xVertex = -b / (2 * a);
    var yVertex = a * Math.pow(xVertex, 2) + b * xVertex + c;
    return { xVertex, yVertex };
}

function calculateImage() {
    var vertex = calculateVertex();
    var xy = document.getElementById("y-vertex").innerText = vertex.yVertex.toFixed(2);
    if (a > 0) {
        return `${xy}; +∞`;
    } else {
        return `${xy}; -∞`;
    }
}

function calculateGrowthSet() {
    var vertex = calculateVertex();
    var xv = document.getElementById("x-vertex").innerText = vertex.xVertex.toFixed(2);
    if (a > 0) {
        return `[${xv}, +∞)`;
    } else {
        return `(-∞, ${xv}]`;
    }
}
function calculateDecreaseSet() {
    var vertex = calculateVertex();
    var xv = document.getElementById("x-vertex").innerText = vertex.xVertex.toFixed(2);
    if (a > 0) {
        return `(-∞, ${parseFloat(xv)}]`;
    } else {
        return `[${parseFloat(xv)}, +∞)`;
    }
}

function calculateZeroSet() {
    if (a !== 0) {
        var discriminant = Math.pow(b, 2) - 4 * a * c;
        if (discriminant > 0) {
            var x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            var x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            return `[${x1.toFixed(2)}, ${x2.toFixed(2)}]`;
        } else if (discriminant === 0) {
            var x = -b / (2 * a);
            return `[${x.toFixed(2)}]`;
        } else {
            return "No tiene ceros reales";
        }
    } else if (b !== 0) {
        var x = -c / b;
        return `[${x.toFixed(2)}]`;
    } else if (c !== 0) {
        return "No tiene ceros reales";
    } else {
        return "(-∞, +∞)";
    }
}

function updateGraph() {
    a = parseFloat(document.getElementById("a").value);
    b = parseFloat(document.getElementById("b").value);
    c = parseFloat(document.getElementById("c").value);

    var graphData = calculateGraphData();
    updateChart(graphData);
    var xIntercepts = calculateXIntercepts();
    if (a > 0) {
        document.getElementById("x-intercept").innerText = `(${xIntercepts.x1.toFixed(2)} U ${xIntercepts.x2.toFixed(2)})`;
        document.getElementById("x-interceptVal").innerText = `(-∞, ${xIntercepts.x1.toFixed(2)}) y (${xIntercepts.x2.toFixed(2)} +∞)`;
    } else if (a < 0) {
        document.getElementById("x-interceptVal").innerText = `(${xIntercepts.x1.toFixed(2)} U ${xIntercepts.x2.toFixed(2)})`;
        document.getElementById("x-intercept").innerText = `(-∞, ${xIntercepts.x1.toFixed(2)}) y (${xIntercepts.x2.toFixed(2)} +∞)`;
    } else {
        document.getElementById("x-intercept").innerText = "No cruza el eje X";
    }

    var yIntercept = calculateYIntercept();
    document.getElementById("y-intercept").innerText = `(0, ${yIntercept.toFixed(2)})`;

    var origin = calculateYIntercept();
    document.getElementById("origin").innerText = `(0, ${origin.toFixed(2)})`;

    var vertex = calculateVertex();
    document.getElementById("x-vertex").innerText = vertex.xVertex.toFixed(2);
    document.getElementById("y-vertex").innerText = vertex.yVertex.toFixed(2);

    if (a > 0) {
        document.getElementById("parabola-direction").innerText = "ascendente";
    } else {
        document.getElementById("parabola-direction").innerText = "descendente";
    }

    var image = calculateImage();
    document.getElementById("image").innerText = image;

    var growthSet = calculateGrowthSet();
    document.getElementById("growth-set").innerText = growthSet;

    var decreaseSet = calculateDecreaseSet();
    document.getElementById("decrease-set").innerText = decreaseSet;

    var zeroSet = calculateZeroSet();
    document.getElementById("zero-set").innerText = zeroSet;
    document.getElementById("zero-setEjes").innerText = zeroSet;
   
}
updateChart()
//Definicion de la grafica y la linea que dibuja la funcion
function calculateGraphData(a, b, c) {
    var a = parseFloat(document.getElementById('a').value)
    var b = parseFloat(document.getElementById('b').value)
    var c = parseFloat(document.getElementById('c').value)
    var data = [];
    for (var x = -30; x <= 30; x += parseFloat(JSON.parse(localStorage.getItem("valueRange")))) {
        var y = a * Math.pow(x, 2) + b * x + c;
        data.push({ x, y });
    }
    return data;
}


function updateChart(graphData) {
    var ctx = document.getElementById("graph").getContext("2d");

    if (chart) {
        chart.destroy();
    }

    chart = new Chart(ctx, {    
        type: "scatter",
        data: {
            datasets: [
                {
                    label: "Parábola",
                    data: graphData,
                    showLine: true,
                    borderColor: "blue",
                    backgroundColor: "transparent"
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
                            enabled: true,
                        },
                        pinch: {
                            enabled: true
                        },
                        mode: 'xy',
                    }
                }
            }
        }
    });
}
updateChart();

function aumentarContador() {
    return id++;
  }

  
var showLine = true;
var functionsData = [];
var id = 0; // Declarar id como una variable global

function colorSetMaster(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    var color = `rgb(${red},${green},${blue})`;
    return color;
}

function dataListFunctions(isVisible = true){
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
    var c = parseFloat(document.getElementById('c').value);

    var data = addNewCaracthers()

    var id = parseInt(aumentarContador()+ 1)
    var funcion = `${a > 0 ? `+${a}x^2` : `${a}x^2`}${b > 0 ? `+${b}x` : `${b}x`}${c > 0 ? `+${c}` : `${c}`}`;
    var functionList = document.getElementById("function-list");
    var listItem = document.createElement("li");
    listItem.setAttribute("function-list", isVisible);
    listItem.innerHTML = `
   
    <div class="flex flex-col"> 
    <div><p>$$${funcion}$$</p></div>
    <p id="idValue">Numero de funcion: ${id}</p>
    <div class="flex flex-row">
    <!--<button class="btn btn-info btn-outline" onclick="updateFunction()">Editar</button>-->
        <button class="btn btn-error btn-outline delete-button">Eliminar</button>
        <button class="btn btn-warning btn-outline toggle-visibility" >Ocultar</button> 
    </div>
    
    <div class="collapse bg-base-200">
        <input type="checkbox" name="my-accordion-1" /> 
            <div class="collapse-title text-xl font-medium">
                Datos de la funcion
            </div>
        <div class="collapse-content"> 
            <p> Dominio: Reales</p>
            <p> Imagen: (<span id="imageData">${data.image}</span>)</p>
            <p> C+ <span id="x-interceptValData">${data.cPlus}</span></p><!--C+-->
            <p> C- <span id="x-interceptData">${data.cRest}</p>
            <p> Del Punto del vértice XvY: <span id="parabola-directionDataData">${data.verticeXY}</span> (a partir del vértice)</p>
            <p> C⇂ <span id="decrease-set">${data.cUp}</span></p>
            <p> C↾ <span id="growth-setData">${data.cDown}</span></p>
            <p> C°: <span id="zero-setData">${data.cZero}</span></p>
            <p> Vértice: (<span id="x-vertexData">${data.vertice}</span>, <span id="y-vertexData"></span>)</p>
            <p> La Ordenada al origen: <span id="originData">${data.ordo}</span></p>
            <p> Intersección con los ejes (XvY): <span id="zero-setEjesData">${data.interEjeX};</span><span id="y-interceptData">(0, ${data.interEjeY})</span></p>
        </div>
    </div>
    `;MathJax.typeset();
   

    functionList.appendChild(listItem);
    var toggleVisibilityButton = listItem.querySelector(".toggle-visibility");
    toggleVisibilityButton.addEventListener("click", function() {
      var isVisible = listItem.getAttribute("function-list") === "true"; // Obtener el estado actual de visibilidad
      isVisible = !isVisible; // Cambiar el estado de visibilidad
      listItem.setAttribute("function-list", isVisible); // Actualizar el atributo
      toggleVisibilityButton.textContent = isVisible ? "Ocultar" : "Mostrar"; // Cambiar el texto del botón
      // También debes actualizar la visibilidad en el gráfico
      updateFunctionVisibility(id, isVisible);
    });
    var deleteButton = listItem.querySelector(".delete-button");
    deleteButton.addEventListener("click", function() {
      // Eliminar el elemento padre (el <li>) al hacer clic en "Eliminar"
      functionList.removeChild(listItem);
      // También debes eliminar la función del gráfico
      removeFunctionFromChart(funcion);
    });

}

// Añade esta función para almacenar el color original cuando se agrega una nueva función.
function storeOriginalColor(dataset, color) {
    if (!dataset.originalBorderColor) {
        dataset.originalBorderColor = color;
    }
}

function updateFunctionVisibility(id, isVisible) {
    // Busca la función correspondiente en chart.data.datasets
    const dataset = chart.data.datasets.find((dataset) => dataset.id === id);
    addNewCaracthers()
    if (dataset) {
        // Almacena el color original si aún no se ha almacenado
        storeOriginalColor(dataset, dataset.borderColor);
        
        // Actualiza la propiedad borderColor para ocultar o mostrar la función
        dataset.borderColor = isVisible ? dataset.originalBorderColor : "transparent";
        
        // Actualiza el gráfico para reflejar los cambios
        chart.update();
    }
}
function addNewCaracthers() {
    a = parseFloat(document.getElementById("a").value);
    b = parseFloat(document.getElementById("b").value);
    c = parseFloat(document.getElementById("c").value);

    var image = calculateImage();
    var xIntercepts = calculateXIntercepts();
    var decreaseSet = calculateDecreaseSet();
    var growthSet = calculateGrowthSet();
    var zeroSet = calculateZeroSet();
    var vertex = calculateVertex();
    var origin = calculateYIntercept();
    var zeroSet = calculateZeroSet();
    var yIntercept = calculateYIntercept();

    if (a > 0) {
        var cPlus = `(${xIntercepts.x1.toFixed(2)} U ${xIntercepts.x2.toFixed(2)})`;
        var cRest = `(-∞, ${xIntercepts.x1.toFixed(2)}) y (${xIntercepts.x2.toFixed(2)} +∞)`;
    } else if (a < 0) {
        var cPlus = `(${xIntercepts.x1.toFixed(2)} U ${xIntercepts.x2.toFixed(2)})`;
        var cRest = `(-∞, ${xIntercepts.x1.toFixed(2)}) y (${xIntercepts.x2.toFixed(2)} +∞)`;
    } else {
        document.getElementById("x-intercept").innerText = "No cruza el eje X";
    }

    if (a > 0) {
        var verticeXY = "ascendente";
    } else {
        var verticeXY = "descendente";
    }

    var dataObject = {
        image: image,
        cPlus: cPlus,
        cRest: cRest,
        verticeXY: verticeXY,
        cUp: growthSet,
        cDown: decreaseSet,
        cZero: zeroSet,
        vertice:[vertex.xVertex.toFixed(2), vertex.yVertex.toFixed(2)],
        ordo: origin.toFixed(2),
        interEjeX: zeroSet,
        interEjeY: yIntercept,
      };
    return dataObject
}
function removeFunctionFromChart(funcion) {
    // Busca la función correspondiente en chart.data.datasets
    const datasetIndex = chart.data.datasets.findIndex((dataset) => dataset.label === funcion);
  
    if (datasetIndex !== -1) {
      // Si se encuentra la función, elimínala del gráfico
      chart.data.datasets.splice(datasetIndex, 1);
      // Actualiza el gráfico para reflejar los cambios
      chart.update();
    }
  }

function addNewLine() {
  var a = parseFloat(document.getElementById('a').value)
  var b = parseFloat(document.getElementById('b').value)
  var c = parseFloat(document.getElementById('c').value)

  var dataColor = colorSetMaster()
    // Calcular los datos de la nueva función
    var graphData = calculateGraphData(a, b, c);
    // Agregar los nuevos datos al gráfico
    chart.data.datasets.push({
        label: `${a > 0 ? `+${a}x^2` : `${a}x^2`}${b > 0 ? `+${b}x` : `${b}x`}${c > 0 ? `+${c}` : `${c}`}`,
        id: (id + 1),
        data: graphData,
        borderColor: dataColor,
        backgroundColor: "transparent",
        showLine: true,
        fill: false
    });

    // Actualizar el gráfico
    chart.update();

    // Registrar los datos de la nueva función
    functionsData.push({
        id: (id + 1),
        a: a,
        b: b,
        c: c,
        graphData: graphData
    });
    dataListFunctions()
    console.log(functionsData)
}
aumentarContador()