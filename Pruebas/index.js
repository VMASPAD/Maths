const Chart = require('chart.js');
const ChartJSImage = require('chartjs-to-image');

const myChart = new Chart(document.getElementById('myChart'), {
  type: 'bar',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Sales',
      data: [12, 19, 3, 5, 2, 3, 10],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

const chartImage = new ChartJSImage(myChart);
chartImage.toFile('myChart.png');

const exportButton = document.getElementById('exportButton');
exportButton.addEventListener('click', function() {
  chartImage.toFile('myChart.png');
});