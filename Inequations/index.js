    var chart
    
    function graph(){
    // Obtener el formulario, el contenedor de resultados y el elemento canvas para la gráfica
    const form = document.getElementById('equation-form');
    const chartCanvas = document.getElementById('chart');

    // Agregar un evento de envío al formulario
  // Evitar el envío del formulario

      // Obtener los coeficientes y el tipo de desigualdad ingresados por el usuario
      const a = parseFloat(document.getElementById('input-a').value);
      const b = parseFloat(document.getElementById('input-b').value);
      const c = parseFloat(document.getElementById('input-c').value);
      const d = parseFloat(document.getElementById('input-d').value);
      const inequality = document.getElementById('inequality-select').value;

      var infinite = document.getElementById('inequality-select').value;

  
      if (chart) {
        chart.destroy();
      }
      // Calcular la solución de la ecuación
      const x = (d - b) / (a - c);
      
      if(infinite = "<"){
        document.getElementById('resultado').innerHTML = `x ${infinite} ${x} )`;
        document.getElementById('infinite').innerHTML = `S = (-∞ ; ${x})`;
      }
      else if(infinite = ">"){
        document.getElementById('resultado').innerHTML = `x ( ${infinite} ${x}`;
        document.getElementById('infinite').innerHTML = `S = (${x} ; +∞)`;
      }
      else if(infinite = "<="){
        document.getElementById('resultado').innerHTML = `x ${infinite} ${x}]`;
        document.getElementById('infinite').innerHTML = `S = (-∞ ; ${x})`;
      }
      else if(infinite = ">="){
        document.getElementById('resultado').innerHTML = `x [ ${infinite} ${x}`;
        document.getElementById('infinite').innerHTML = `S = (${x} ; +∞)`;
      }

      // Crear un array de valores para la gráfica
      const data = [];
      const line = []
      const startX = inequality === '<=' || inequality === '<' ? x - 10 : x + 10;
      const endX = inequality === '>=' || inequality === '>' ? x + 10 : x - 10;
      for (let i = startX; i <= endX; i += 0.1) {
        const y = a * i + b;
        data.push({ x: x, y: i });
        line.push({ x: -20, y: i },{ x: 20, y: i },)
      }

      // Configurar y dibujar la gráfica utilizando Chart.js
      chart = new Chart(chartCanvas, {
        type: 'scatter',
        data: {
          datasets: [{
            label: 'Gráfica de la ecuación',
            data: data,
            borderColor: 'blue',
            pointRadius: 6,
            backgroundColor: 'blue'
          },
          {
          label: "Eje X",
          data: line,
          showLine: true,
          borderColor: "red",
          backgroundColor: "transparent",
        },
        
        ]
        },
        options: {
          scales: {
            x: {
              type: 'linear',
              position: 'bottom'
            },
            y: {
              type: 'linear',
              position: 'left'
            }
          },
          plugins: {
            zoom: {
              pan: {
                enabled: true,
                mode: 'xy'
              },
              zoom: {
                enabled: true,
                mode: 'xy'
              }
            }
          }
        }
      });
    
  }
  graph()