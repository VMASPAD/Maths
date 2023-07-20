var chart;

function calc() {
  var ctx = document.getElementById("chart").getContext("2d");
  var a = parseFloat(document.getElementById("input-a").value);
  var b = parseFloat(document.getElementById("input-b").value);

  var c = document.getElementById("input-c").value;
  console.log(c);
  var d = parseFloat(document.getElementById("input-d").value);
  const optionA = document.getElementById("operation-selectA").value;
  const optionB = document.getElementById("operation-selectB").value;
  console.log(optionA, optionB);
  if (chart) {
    chart.destroy();
  }
  var dataArray = [];
  console.log(dataArray)
  function logarithmicFunction(x) {
    logBeta = eval(c);
    var functionlog = eval(
      `${a} ${optionA} ${Math.log(logBeta) / Math.log(b)} ${optionB} ${d}`
    );
    console.log(functionlog);
    dataArray.push(functionlog);
    console.log(dataArray[60]);
    

    return functionlog;
  }
  
  // Generar los datos para el gráfico
  var data = {
    labels: [],
    datasets: [
      {
        label: "Función Logarítmica",
        data: [],
        borderColor: "blue",
        fill: false,
      },
      {
        label: "Eje X",
        data: [{ x: -10000, y: 0 }, { x: 10000, y: 0 }],
        showLine: true,
        borderColor: "red",
        backgroundColor: "transparent",
      },
      {
        label: "Eje Y",
        data: [{ x: 0, y: -10000 }, { x: 0, y: 10000 }],
        showLine: true,
        borderColor: "green",
        backgroundColor: "transparent",
      },
      {
        label: "Intersección X",
        data: [],
        showLine: true,
        borderColor: "black",
        borderDash: [5, 5],
        fill: false,
      },
      {
        label: "Intersección Y",
        data: [
          { x: -10000, y: 0 },
          { x: 10000, y: 0 },
        ],
        showLine: true,
        borderColor: "black",
        borderDash: [5, 5],
        fill: false,
      },
    ],
  };

  // Generar los puntos para la función logarítmica
  for (var x = -30; x <= 30; x += 0.5) {
    data.labels.push(x.toFixed(1));
    var yValue = logarithmicFunction(x);
    data.datasets[0].data.push(yValue);
  }

  // Obtener el valor en la posición 53 de dataArray
  var valorEnPosicion53 = dataArray[53];
  console.log(valorEnPosicion53);

  // Agregar el valor en la posición 53 a los datos de la "Intersección X"
  data.datasets[3].data = [
    { x: valorEnPosicion53, y: -10000 },
    { x: valorEnPosicion53, y: 10000 },
  ];

  // Configurar opciones del gráfico
  var options = {
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        min: -40,
        max: 40,
        ticks: {
          stepSize: 1,
        },
      },
      y: {
        type: "linear",
        position: "left",
        min: -40,
        max: 40,
        ticks: {
          stepSize: 1,
        },
      },
    },
    plugins: {
      zoom: {
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: "xy",
        },
      },
    },
  };

  // Crear el gráfico
  chart = new Chart(ctx, {
    type: "line",
    data: data,
    options: options,
  });

  // Encontrar la intersección con el eje X
  let intersectionX = null;
  for (let i = 0; i < data.labels.length - 1; i++) {
    const y1 = data.datasets[0].data[i];
    const y2 = data.datasets[0].data[i + 1];

    if ((y1 < 0 && y2 >= 0) || (y1 >= 0 && y2 < 0)) {
      const x1 = parseFloat(data.labels[i]);
      const x2 = parseFloat(data.labels[i + 1]);

      intersectionX = x1 - y1 * ((x2 - x1) / (y2 - y1));
      break;
    }
  }

  // Encontrar la intersección con el eje Y
  let intersectionY = dataArray[0] > dataArray[60] ? dataArray[0] : dataArray[60];


  
  // Actualizar las coordenadas de las líneas de intersección
  chart.data.datasets[3].data = [
    { x: intersectionX, y: -10000 },
    { x: intersectionX, y: 10000 },
  ];
  chart.data.datasets[4].data = [
    { x: -10000, y: intersectionY },
    { x: 10000, y: intersectionY },
  ];

  // Actualizar el gráfico
  chart.update();

  // Mostrar las intersecciones en la consola
  console.log("Intersección con el eje X:", intersectionX);
  console.log("Intersección con el eje Y:", intersectionY);
  console.log("punto principio", valorEnPosicion53)

  // Logica de caracteristicas
  document.getElementById("ORDO").innerHTML = `ORD.O: ${intersectionY}`;

  if(intersectionX < 0){
    document.getElementById("Dom").innerHTML = `Dom: (${intersectionY}; +∞)`;
    document.getElementById("Cplus").innerHTML = `C+ : (-∞; ${intersectionX})`;
  }else{
    document.getElementById("Dom").innerHTML = `Dom: (-∞ ; ${intersectionY})`;
    document.getElementById("Cplus").innerHTML = `C+ :(${intersectionX} ; +∞)`;
  }

  if(intersectionY < 0){
    document.getElementById("Crest").innerHTML = `C- : (${intersectionX}; ${intersectionY})`;
  }else{
    document.getElementById("Crest").innerHTML = `C- :(${intersectionY} ; +∞)`;
  }

  if(intersectionY < 0){
    document.getElementById("Cup").innerHTML = `C↾ :ø`;
    document.getElementById("Cdpwn").innerHTML = `C⇂ :(${valorEnPosicion53} ; +∞)`;
  }else{
    document.getElementById("Cup").innerHTML = `C↾ : (-∞ ; (${valorEnPosicion53})`;
    document.getElementById("Cdpwn").innerHTML = `C⇂ : ø`;
  }
  document.getElementById("Czero").innerHTML = `C° : ${valorEnPosicion53}`;
  document.getElementById("AV").innerHTML = `AV=> x = ${valorEnPosicion53}`;

  document.getElementById("IEjes").innerHTML = `Intersección con los Ejes: (${intersectionX}; 0) , (0 ;${intersectionY})`;
  //
}
calc();
