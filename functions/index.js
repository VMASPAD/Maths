var rangeInput = document.getElementById("myRange");
        
rangeInput.addEventListener("input", function() {
  var value = parseFloat(rangeInput.value) ;
  localStorage.setItem("valueRange", JSON.stringify(value));
  console.log(value);
});

        var a, b, c;
        var chart = null;

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
                return `(-∞, ${xv}]`;
            } else {
                return `[${xv}, +∞)`;
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
            }else {
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
        //Definicion de la grafica y la linea que dibuja la funcion
        function calculateGraphData() {
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
                            min: -40,
                            max: 40,
                            ticks: {
                                stepSize: 1
                            }
                        },
                        y: {
                            type: "linear",
                            position: "left",
                            min: -40,
                            max: 40,
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

        updateGraph();