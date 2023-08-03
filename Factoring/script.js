function grade2() {
  const a = parseFloat(document.getElementById("inputA").value);
  const b = parseFloat(document.getElementById("inputB").value);
  const c = parseFloat(document.getElementById("inputC").value);

  const discriminant = b * b - 4 * a * c;

  if (discriminant < 0) {
    document.getElementById("result").innerText = "La ecuación no tiene soluciones reales.";
    return;
  }

  const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

  const factorizedForm = `${a}(x - ${root1})(x - ${root2})`;

  document.getElementById("result").innerText = `La ecuación factorizada es: ${factorizedForm}`;
}

function grade3() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);
    const d = parseFloat(document.getElementById('d').value);

    const discriminante = (18 * a * b * c * d) - (4 * (b ** 3) * d) + ((b ** 2) * (c ** 2)) - (4 * a * (c ** 3)) - (27 * (a ** 2) * (d ** 2));
    const discriminante2 = (b ** 2) - (3 * a * c);

    if (discriminante !== 0) {
      if (discriminante2 !== 0) {
        const C = Math.cbrt((discriminante + Math.sqrt(discriminante ** 2 - 4 * (discriminante2 ** 3))) / 2);
        const u1 = (C - discriminante2 / C) / 2;
        const u2 = -(C + discriminante2 / C) / 2;

        const x1 = u1 - b / (3 * a);
        const x2 = u2 - b / (3 * a);
        const x3 = -C - b / (3 * a);

        const factorizado = `${a.toFixed(2)}(x - ${x1.toFixed(2)})(x - ${x2.toFixed(2)})(x - ${x3.toFixed(2)})`;

        document.getElementById('resultado').innerText = `La ecuación factorizada es: ${factorizado}`;
      } else {
        // Caso de discriminante2 igual a 0 (una raíz triple)
        const u = Math.cbrt(d / a);
        const x1 = -u - b / (3 * a);
        const x2 = x1;
        const x3 = x1;

        const factorizado = `${a}(x - ${x1})^3`;

        document.getElementById('resultado').innerText = `La ecuación factorizada es: ${factorizado}`;
      }
    } else {
      // En caso de discriminante igual a 0, una raíz simple y una raíz doble.
      const p = (3 * a * c - b ** 2) / (3 * a ** 2);
      const q = (2 * b ** 3 - 9 * a * b * c + 27 * a ** 2 * d) / (27 * a ** 3);
      const discriminante3 = (q / 2) ** 2 + (p / 3) ** 3;

      if (discriminante3 > 0) {
        const R = -q / 2 + Math.sqrt(discriminante3);
        const S = Math.cbrt(R);
        const T = -q / 2 - Math.sqrt(discriminante3);
        const U = Math.cbrt(T);

        const x1 = (S + U) - (b / (3 * a));
        const x2Real = -(S + U) / 2 - (b / (3 * a));
        const x2Imaginario = (Math.sqrt(3) / 2) * (S - U);
        const x3Real = -(S + U) / 2 - (b / (3 * a));
        const x3Imaginario = -(Math.sqrt(3) / 2) * (S - U);

        const factorizado = `${a.toFixed(2)}(x - ${x1.toFixed(2)})(x - ${x2Real.toFixed(2)} + ${x2Imaginario.toFixed(2)}i)(x - ${x3Real.toFixed(2)} + ${x3Imaginario.toFixed(2)}i)`;

        document.getElementById('resultado').innerText = `La ecuación factorizada es: ${factorizado}`;
      } else if (discriminante3 === 0) {
        const R = -q / 2;
        const S = Math.cbrt(R);
        const T = -q / 2;
        const U = Math.cbrt(T);

        const x1 = 2 * S - (b / (3 * a));
        const x2 = -S - (b / (3 * a));

        const factorizado = `${a.toFixed(2)}(x - ${x1.toFixed(2)})(x - ${x2.toFixed(2)})(x - ${x2.toFixed(2)})`;

        document.getElementById('resultado').innerText = `La ecuación factorizada es: ${factorizado}`;
      } else {
        // Caso de discriminante3 menor que 0 (tres raíces reales distintas)
        const R = Math.sqrt(-0+(q / 2) ** 2 - (p / 3) ** 3);
        const theta = Math.atan2(Math.sqrt(Math.abs(R)), -(q / 2)) / 3;
        const rho = Math.cbrt(R);
        const phi = Math.PI / 3;

        const x1 = 2 * rho * Math.cos(theta) - (b / (3 * a));
        const x2 = 2 * rho * Math.cos(theta + phi) - (b / (3 * a));
        const x3 = 2 * rho * Math.cos(theta - phi) - (b / (3 * a));

        const factorizado = `${a}(x - ${x1})(x - ${x2})(x - ${x3})`;

        document.getElementById('resultado').innerText = `La ecuación factorizada es: ${factorizado}`;
      }
    }
  }
  const selecForm = document.getElementById("selecForm").value;
  switch (selecForm) {
    case "grade2":
        Cuadrado();
      break;
    case "grade3":
        Triangulo();
      break;
  }
  function mostrarTexto() {
    const opcionesSelect = document.getElementById("selecForm");
    const textoOcultoDiv = document.getElementById("textoOculto");
    const opcionSeleccionada = opcionesSelect.value;
  
    // Ocultamos el texto si se selecciona la primera opción
    if (opcionSeleccionada === "grade2") {
      textoOcultoDiv.style.display = "block";
      document.getElementById("textoOculto").innerHTML = `
      <br>
    <div>
    <h1>Calculadora de Ecuaciones Polinómicas</h1>
    <label for="inputA">Coeficiente 'a':</label>
    <input type="number" id="inputA"><br>
  
    <label for="inputB">Coeficiente 'b':</label>
    <input type="number" id="inputB"><br>
  
    <label for="inputC">Coeficiente 'c':</label>
    <input type="number" id="inputC"><br>
  
    <button onclick="grade2()">Factorizar</button>
  
    <h2>Resultado:</h2>
    <p id="result"></p>
    </div>
      <br>
      <div>
      <b><p>Polinomio de grado 2 a factor</p></b>
      Un polinomio de grado 2, también conocido como ecuación cuadrática, tiene la forma general:
      <br>
ax^2 + bx + c = 0
<br>
Donde "a", "b" y "c" son coeficientes constantes y "x" es la variable desconocida que queremos encontrar.
<br>
Para resolver una ecuación cuadrática, podemos utilizar la fórmula general o método de la factorización, dependiendo de la complejidad de los coeficientes. A continuación, te presento ambos métodos:
<br>
1. Fórmula general:
La fórmula general para resolver una ecuación cuadrática es:
<br>
<p>$$\ x = \\frac{{-b \\pm \\sqrt{{b^2 - 4ac}}}}{{2a}} \$$</p>
<br>
Donde "±" representa dos posibles soluciones, una con el signo más y otra con el signo menos.
<br>
Pasos para resolver por fórmula general:<br>
a. Identificar los valores de "a", "b" y "c" en la ecuación cuadrática.<br>
b. Sustituir estos valores en la fórmula general.<br>
c. Calcular el valor de la raíz cuadrada (si el discriminante b^2 - 4ac es negativo, la ecuación no tiene soluciones reales).<br>
d. Obtener las dos posibles soluciones para "x".<br>
<br>
2. Método de la factorización:
En algunos casos, la ecuación cuadrática puede factorizarse en dos binomios. Si podemos factorizar la ecuación, podemos encontrar las soluciones más fácilmente.
<br>
Pasos para resolver por factorización:<br>
a. Reorganizar la ecuación en la forma estándar (ax^2 + bx + c = 0).<br>
b. Intentar factorizar la ecuación en dos binomios.<br>
c. Igualar cada binomio a cero y resolver para "x".<br>
d. Obtener las soluciones para "x".
<br>
En casos más complejos, puede ser más conveniente utilizar la fórmula general para encontrar las soluciones de la ecuación cuadrática.
<br>
Ejemplo:
Resolvamos la ecuación cuadrática:

2x^2 - 5x + 2 = 0

Usaremos ambos métodos para obtener las soluciones.

1. Fórmula general:
<pre>
a = 2, b = -5, c = 2

x = (5 ± √((-5)^2 - 4 * 2 * 2)) / (2 * 2)
x = (5 ± √(25 - 16)) / 4
x = (5 ± √9) / 4
x = (5 ± 3) / 4

Entonces, las soluciones son:
x = (5 + 3) / 4 = 8 / 4 = 2
x = (5 - 3) / 4 = 2 / 4 = 0.5
</pre>
2. Método de la factorización:
Reorganizamos la ecuación:
<br>
<pre>
2x^2 - 5x + 2 = 0
(x - 2)(2x - 1) = 0

Igualamos cada binomio a cero y resolvemos para "x":
x - 2 = 0 --> x = 2
2x - 1 = 0 --> 2x = 1 --> x = 1/2 = 0.5
</pre><br>
Las soluciones son las mismas que las obtenidas con la fórmula general, x = 2 y x = 0.5.

Paso 2: Factorizar la ecuación:
La forma factorizada es:
2(x - 2)(x - 0.5) = 0

Esto es la forma factorizada de la ecuación cuadrática dada.

Recuerda que al resolver una ecuación cuadrática, siempre es esencial verificar si el discriminante es positivo, cero o negativo para determinar el número de raíces y su naturaleza (reales o complejas).
    </div>
      `;
      MathJax.typeset();
    } else if (opcionSeleccionada === "grade3") {
        textoOcultoDiv.style.display = "block";
        document.getElementById("textoOculto").innerHTML = `
        <h1>Calculadora de Ecuaciones Polinómicas</h1>
        <p>Introduce los coeficientes de la ecuación polinómica de grado 3:</p>
        <label for="a">Coeficiente de x^3:</label>
        <input type="number" id="a" /><br>
        <label for="b">Coeficiente de x^2:</label>
        <input type="number" id="b" /><br>
        <label for="c">Coeficiente de x:</label>
        <input type="number" id="c" /><br>
        <label for="d">Término independiente:</label>
        <input type="number" id="d" /><br>
        <button onclick="grade3()">Convertir a Factorizada</button>
        <p id="resultado"></p>
        <br>
        <b><p>Polinomio de grado 3 a factor</p></b>
        <br>
<div class="text-justify">
        Resolver un polinomio de grado 3, también conocido como cúbica, implica encontrar sus raíces o soluciones. Existen varias formas de resolver ecuaciones cúbicas, pero una de las más sencillas es el método de factorización. Sin embargo, es importante tener en cuenta que este método solo funciona cuando la ecuación tiene raíces racionales.
<br>
A continuación, te mostraré cómo resolver una ecuación cúbica paso a paso utilizando el método de factorización y luego te daré un ejemplo con una ecuación específica:
<br><br>
Ejemplo:
Resuelve la ecuación cúbica: $$x^3 - 6x^2 + 11x - 6 = 0$$
<br><br>
Paso 1: Intenta con factores simples
Observa los coeficientes del polinomio (1, -6, 11, -6) y prueba con factores simples de la constante (el término independiente) para ver si alguno es una raíz de la ecuación. En este caso, los factores posibles de 6 son ±1, ±2, ±3 y ±6. Intenta con estos valores sustituyendo x por cada uno y verifica si obtienes 0.
<br><br>
Probamos con x = 1:
$$(1)^3 - 6(1)^2 + 11(1) - 6 = 1 - 6 + 11 - 6 = 0$$
<br><br>
Paso 2: Factoriza el polinomio
Como x = 1 es una raíz, podemos factorizar el polinomio usando la división sintética o la división larga para dividirlo por (x - 1).
<br><br>
$$(x^3 - 6x^2 + 11x - 6) / (x - 1) = x^2 - 5x + 6$$
<br><br>
Paso 3: Resuelve la ecuación cuadrática
Ahora tenemos una ecuación cuadrática: x^2 - 5x + 6 = 0. Resuelve esta ecuación factorizándola o usando la fórmula cuadrática.
<br><br>
Factorizamos la ecuación cuadrática: (x - 2)(x - 3) = 0
<br><br>
Paso 4: Encuentra las soluciones finales
Las soluciones para la ecuación original son las raíces de la ecuación cuadrática, teniendo en cuenta que x = 1 ya es una solución:
<br><br>
x = 1 (ya lo encontramos en el Paso 1)
x = 2
x = 3

Por lo tanto, las soluciones de la ecuación cúbica son x = 1, x = 2 y x = 3.
<br>
Recuerda que este método de factorización solo funciona para ecuaciones cúbicas con raíces racionales. Si la ecuación tiene raíces complejas o irracionales, se deben usar otros métodos, como la fórmula de Cardano-Tartaglia o aproximaciones numéricas.
        </div>`;
        MathJax.typeset();
}
}