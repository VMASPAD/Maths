var chart;

function updateChart() {

  var a = parseFloat(document.getElementById("input-a").value);
  var b = parseFloat(document.getElementById("input-b").value);
  var c = parseFloat(document.getElementById("input-c").value);
  var d = parseFloat(document.getElementById("input-d").value);
  console.log(a,b,c,d)

  var ctx = document.getElementById("graph").getContext("2d");

  function Dom(){
    if(AV() > 0){
      return `+ {${AV()}}`
    }else{
      return `- {${AV()}}`
    }
  }
  document.getElementById('Dom').innerHTML = `Dom: R ${Dom()}`;
  function Img(){
    if(AV() > 0){
      return `+ {${AH()}}`
    }else{
      return `- {${AH()}}`
    }
  }
  document.getElementById('Img').innerHTML = `Img: R ${Img()}`;
  function Cplus(){
    var a = parseFloat(document.getElementById("input-a").value);
    var b = parseFloat(document.getElementById("input-b").value);
    if (a === 0) {
      // La ecuación no tiene solución
      return null;
    } else {
      // La solución es -b/a
      return -b / a;
    }

  }
  document.getElementById('Cplus').innerHTML = `C+: (-∞ ; ${Cplus()}) U (${AV()} ; +∞)`;

  document.getElementById('Csub').innerHTML = `C-:  (${Rootx()} ${AV()})`;
  document.getElementById('CZERO').innerHTML = `C°:  {${Rootx()}}`;

  document.getElementById('AO').innerHTML = `A°:  ∄ (un solo elemento cumple con la condición)`;

  if(a < 0){
    document.getElementById('Cup').innerHTML = `C↾: R {${AV()}}`;
    document.getElementById('Cdow').innerHTML = `C⇂: ø`;
  }else{
    document.getElementById('Cup').innerHTML = `C↾: ø`;
    document.getElementById('Cdow').innerHTML = `C⇂: R {${AV()}}`;
  }

  function AV(){
    return av = - d / c
  }
  document.getElementById('AV').innerHTML = `AV: ${AV()}`;
  function AH(){
    return ah = a / c
  }
  document.getElementById('AH').innerHTML = `AH: ${AH()}`;

  function Rootx(a, b){  
    var a = parseFloat(document.getElementById("input-a").value);
    var b = parseFloat(document.getElementById("input-b").value);
    if (a === 0) {
      // La ecuación no tiene solución
      return null;
    } else {
      // La solución es -b/a
      return -b / a;
    }
    
  }

  document.getElementById('Rootx').innerHTML = `Raíces: {${Rootx()}}`;
  function Ordo(){
   return y = (a * 0 + b) / (c * 0 + d);
  }
  document.getElementById('Ordo').innerHTML = `Ordenada al origen: (0 ; ${Ordo()})`;
  document.getElementById('Iaxis').innerHTML = `Intersección de ejes: (0 ; ${Ordo()}) (${Rootx()} ; 0)`;

  if (chart) {
    chart.destroy();
  }

  chart = new Chart(ctx, {
    type: "scatter",
    data: {
      datasets: [
        {
          label: "Eje X",
          data: [
            { x: -1000, y: 0 },
            { x: 1000, y: 0 },
          ],
          showLine: true,
          borderColor: "red",
          backgroundColor: "transparent",
        },
        {
          label: "Eje Y",
          data: [
            { x: 0, y: -1000 },
            { x: 0, y: 1000 },
          ],
          showLine: true,
          borderColor: "blue",
          backgroundColor: "transparent",
        },
        {
          label: "Función Homográfica",
          data: calculateGraphData(a, b, c, d),
          showLine: true,
          borderColor: "green",
          backgroundColor: "transparent",
        },
        {
          label: "AH",
          data: [
            { x: 100, y: AH() },
            { x: -100, y: AH() },
          ],
          showLine: true,
          borderColor: "blue",
          borderDash: [5, 5],
          backgroundColor: "transparent",
        },
        {
          label: "AV",
          data:[
            { x: AV(), y: 100 },
            { x: AV(), y: -100 },
          ],
          showLine: true,
          borderColor: "black",
          borderDash: [5, 5],
          backgroundColor: "transparent",
        },
        
      ],
    },
    options: {
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
      annotation: {
        annotations: [
          {
            type: "line",
            mode: "horizontal",
            scaleID: "y",
            value: 0,
            borderColor: "black",
            borderWidth: 1,
            borderDash: [5, 5],
          },
          {
            type: "line",
            mode: "vertical",
            scaleID: "x",
            value: 0,
            borderColor: "black",
            borderWidth: 1,
            borderDash: [5, 5],
          },
        ],
      },
    },
  });
}

function calculateGraphData(a, b, c, d) {
  var data = [];
  console.log(data)
  for (var x = -40; x <= 40; x += 0.4) {
    var y = (a * x + b) / (c * x + d);
    data.push({ x, y });
  }
  return data;
}

updateChart();
