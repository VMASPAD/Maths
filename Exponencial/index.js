var countX = parseInt(localStorage.getItem("countX")) || 0;
var countElementX = document.getElementById("countX");

// Mostrar el contador actualizado en la página
countElementX.textContent = countX;

// Obtener el botón y agregar un event listener para incrementar el contador
var zoomX = document.getElementById("zoomX");
zoomX.addEventListener("click", function() {
    countX += 1;
    countElementX.textContent = countX;
    calc()
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
    calc()
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
    calc()
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
    calc()
    // Guardar el contador actualizado en el localStorage
    localStorage.setItem("countY", countY);
});


var chart; 
function calc(){
const canvas = document.getElementById('myChart');
var coea = document.getElementById("input-a").value
var base = document.getElementById("input-b").value
var exponent = document.getElementById("input-c").value
var extra = parseFloat(document.getElementById("input-d").value)
console.log(extra)

if (chart) {
    chart.destroy();
}
const xValues = [];
console.log(xValues)
for (let x = -10; x <= 10; x += 0.5) {
  xValues.push(x);
}

coea = eval(coea)
extra = eval(extra)

const operationSelectA = document.getElementById('operation-selectA');
const selectedOperationA = operationSelectA.value;

const operationSelectB = document.getElementById('operation-selectB');
const selectedOperationB = operationSelectB.value;

// Calcula los valores correspondientes de y para cada x
const yValues = xValues.map(x => eval(`${coea}${selectedOperationA}${Math.pow(base, eval(exponent))}${selectedOperationB}${extra}`));
console.log(yValues)
const dataPoints = xValues.map((x, index) => ({ x, y: yValues[index]}));
console.log(dataPoints)


const ejeY = [];
console.log(ejeY)
xValues.forEach((x, index) => {
  if (x === 0) {
    ejeY.push(yValues[index]);
  }
});

const rootPoints = [];
yValues.forEach((x, index) => {
  if (x === 0) {
    rootPoints.push(xValues[index]);
  }
});
console.log(rootPoints, ejeY)
//Propiedades

document.getElementById('ORDO').innerHTML = `ORD.O: ${ejeY}`;
document.getElementById('AH').innerHTML = `AH:> ${ejeY}`;
document.getElementById("Raiz").innerHTML = `Raiz :> x =(${rootPoints})`
document.getElementById("Ejes").innerHTML = `Raiz :(${rootPoints}, 0), (0 , ${ejeY})`
if(rootPoints < 0){
document.getElementById("Cplus").innerHTML = `C+ :( -∞; ${rootPoints})`
document.getElementById("Crest").innerHTML = `C- :( ${rootPoints}; +∞)`
}else{

    document.getElementById("Cplus").innerHTML = `C+ :( ${rootPoints}; +∞ )`
    document.getElementById("Crest").innerHTML = `C- :( -∞ ;${rootPoints})`
}

if(ejeY < 0){
    document.getElementById("Cup").innerHTML = `C↾: R`
    document.getElementById("Cdown").innerHTML = `C⇂: ø`
}else{

    document.getElementById("Cup").innerHTML = `C↾: ø`
    document.getElementById("Cdown").innerHTML = `C⇂: R`
}

document.getElementById("Czero").innerHTML = `C° :{${rootPoints}}`
///
const ultimoPunto = [{ x: -10000, y: yValues[yValues.length - 1] }, { x: 10000, y: yValues[yValues.length - 1] }];


// Crea la gráfica utilizando Chart.js
chart = new Chart(canvas, {
  type: 'line',
  data: {
    labels: xValues,
    datasets: [{
      type: 'line',
      label: 'Funcion exponencial',
      data: yValues,
      borderColor: 'blue',
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
    },
    {
        label: "AH",
        data: [{ x: -10000, y: ejeY }, { x: 10000, y: ejeY }],
        showLine: true,
        borderColor: "black",
        borderDash: [3, 3],
        borderOpacity: 0.5,
        fill: false
      },
      
    {
        label: "Límite",
        data: ultimoPunto,
        pointBackgroundColor: "red",
        pointRadius: 5,
        pointHoverRadius: 8,
        showLine: true,
        borderColor: "black",
        borderWidth: 1,
        fill: false
      },
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

calc()