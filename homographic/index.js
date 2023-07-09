var chart;

function updateChart() {
  var a = parseFloat(document.getElementById("input-a").value);
  var b = parseFloat(document.getElementById("input-b").value);
  var c = parseFloat(document.getElementById("input-c").value);
  var d = parseFloat(document.getElementById("input-d").value);

  var ctx = document.getElementById("graph").getContext("2d");

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
      ],
    },
    options: {
      scales: {
        x: {
          type: "linear",
          position: "bottom",
          min: -20,
          max: 20,
          ticks: {
            stepSize: 1,
          },
        },
        y: {
          type: "linear",
          position: "left",
          min: -20,
          max: 20,
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
  for (var x = -20; x <= 20; x += 0.5) {
    var y = (a * x + b) / (c * x + d);
    data.push({ x, y });
  }
  return data;
}

updateChart();
