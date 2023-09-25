function calc() {
  const sideA = parseFloat(document.getElementById("sideA").value);
  const sideB = parseFloat(document.getElementById("sideB").value);
  const sideC = parseFloat(document.getElementById("sideC").value);
  const angleO = parseFloat(document.getElementById("angleO").value);
  const angleb = parseFloat(document.getElementById("angleb").value);
  const selecForm = document.getElementById("selecForm").value;
console.log(sideA,sideB,sideC,angleO,angleb,selecForm)
  // Verificar qué variables contienen valores de tipo int
  const variablesConValorInt = [];
  if (!isNaN(sideA) && Number.isInteger(sideA)) {
    variablesConValorInt.push("sideA");
  }
  if (!isNaN(sideB) && Number.isInteger(sideB)) {
    variablesConValorInt.push("sideB");
  }
  if (!isNaN(sideC) && Number.isInteger(sideC)) {
    variablesConValorInt.push("sideC");
  }
  if (!isNaN(angleO) && Number.isInteger(angleO)) {
    variablesConValorInt.push("angleO");
  }
  if (!isNaN(angleb) && Number.isInteger(angleb)) {
    variablesConValorInt.push("angleb");
  }

  // Verificar qué variables no recibieron valores válidos (NaN)
  const variablesSinValor = [
    "sideA",
    "sideB",
    "sideC",
    "angleO",
    "angleb",
  ].filter((variable) => isNaN(eval(variable)));

  // Realizar los cálculos
  let calculatedValues = "";

  console.log(calculatedValues)
  function sideAB() {
    if (variablesSinValor.includes("sideC")) {
      if (!isNaN(sideA) && !isNaN(sideB)) {
        const sideC = document.getElementById("sideC");
        const sideCSquared = sideA ** 2 + sideB ** 2;
        const calculatedSideC = Math.sqrt(sideCSquared);
        sideC.value = calculatedSideC.toFixed(2);
        const peri = sideA + sideB + calculatedSideC;
        const area = (sideA * sideB) / 2;
        document.getElementById(
          "Perimetro"
        ).innerHTML = `Perimetro: ${peri.toFixed(2)}`;
        document.getElementById("Area").innerHTML = `Area: ${area.toFixed(2)}`;
        calculatedValues += `Lado C: ${calculatedSideC.toFixed(2)} <br>`;
      }
    }

    if (variablesSinValor.includes("angleO")) {
      if (!isNaN(sideA) && !isNaN(sideB)) {
        const angleO = document.getElementById("angleO");
        const calculatedAngleO = Math.atan(sideA / sideB) * (180 / Math.PI);
        angleO.value = calculatedAngleO.toFixed(2);
        calculatedValues += `Ángulo θ: ${calculatedAngleO.toFixed(2)}° <br>`;
      }
    }

    if (variablesSinValor.includes("angleb")) {
      if (!isNaN(sideA) && !isNaN(sideB)) {
        const angleb = document.getElementById("angleb");
        const calculatedAngleb =
          90 - Math.atan(sideA / sideB) * (180 / Math.PI);
        angleb.value = calculatedAngleb.toFixed(2);
        calculatedValues += `Ángulo β: ${calculatedAngleb.toFixed(2)}° <br>`;
      }
    }
  }

  function sideCB() {
    if (variablesSinValor.includes("sideA")) {
      if (!isNaN(sideC) && !isNaN(sideB)) {
        const sideA = document.getElementById("sideA");
        const sideCBquared = sideC ** 2 - sideB ** 2;
        const calculatedSideACB = Math.sqrt(sideCBquared);
        sideA.value = calculatedSideACB.toFixed(2);
        const peri = sideC + sideB + calculatedSideACB;
        const area = (sideC * sideB) / 2;
        document.getElementById("Perimetro").innerHTML = `Perimetro: ${peri}`;
        document.getElementById("Area").innerHTML = `Area: ${area.toFixed(2)}`;
        calculatedValues += `Lado A: ${calculatedSideACB.toFixed(2)} <br>`;
      }
    }
    if (variablesSinValor.includes("angleO")) {
      if (!isNaN(sideC) && !isNaN(sideB)) {
        const angleO = document.getElementById("angleO");
        const calculatedAngleOCB = Math.asin(sideC / sideB);
        angleO.value = calculatedAngleOCB.toFixed(2);
        calculatedValues += `Ángulo θ: ${calculatedAngleOCB.toFixed(2)}° <br>`;
      }
    }

    if (variablesSinValor.includes("angleb")) {
      if (!isNaN(sideC) && !isNaN(sideB)) {
        const angleb = document.getElementById("angleb");
        const calculatedAnglebCB = Math.acos(sideC / sideB);
        angleb.value = calculatedAnglebCB.toFixed(2);
        calculatedValues += `Ángulo β: ${calculatedAnglebCB.toFixed(2)}° <br>`;
      }
    }
  }

  function sideAC() {
    if (variablesSinValor.includes("sideB")) {
      if (!isNaN(sideC) && !isNaN(sideA)) {
        const sideB = document.getElementById("sideB");
        const sideCBquared = sideC ** 2 - sideA ** 2;
        const calculatedSideACB = Math.sqrt(sideCBquared);
        sideB.value = calculatedSideACB.toFixed(2);
        const peri = sideA + sideC + calculatedSideACB;
        const area = (sideA * sideC) / 2;
        sideB.value = "";
        document.getElementById("Perimetro").innerHTML = `Perimetro: ${peri}`;
        document.getElementById("Area").innerHTML = `Area: ${area.toFixed(2)}`;
        calculatedValues += `Lado B: ${calculatedSideACB.toFixed(2)} <br>`;
      }
    }
    if (variablesSinValor.includes("angleO")) {
      if (!isNaN(sideC) && !isNaN(sideA)) {
        const angleO = document.getElementById("angleO");
        const calculatedAngleOAC = Math.acos(sideA / sideC) * (180 / Math.PI);
        angleO.value = "";
        angleO.value = calculatedAngleOAC.toFixed(2);
        calculatedValues += `Ángulo θ: ${calculatedAngleOAC.toFixed(2)}° <br>`;
      }
    }

    if (variablesSinValor.includes("angleb")) {
      if (!isNaN(sideC) && !isNaN(sideA)) {
        const angleb = document.getElementById("angleb");
        const calculatedAnglebAC = Math.asin(sideA / sideC) * (180 / Math.PI);
        angleb.value = "";
        angleb.value = calculatedAnglebAC.toFixed(2);
        calculatedValues += `Ángulo β: ${calculatedAnglebAC.toFixed(2)}° <br>`;
      }
    }
  }

  function angulesidebA() {
    if (variablesSinValor.includes("sideB")) {
      if (!isNaN(angleb) && !isNaN(sideA)) {
        const anglebb = parseFloat(document.getElementById("angleb").value);
        const sideAA = parseFloat(document.getElementById("sideA").value);
        const sideB = document.getElementById("sideB");
        const calculatedAnglebA = sideAA / Math.tan(anglebb * (Math.PI / 180));
        sideB.value = calculatedAnglebA.toFixed(2);
        calculatedValues += `Lado B: ${calculatedAnglebA.toFixed(2)}° <br>`;
      }
    }
    if (variablesSinValor.includes("sideC")) {
      if (!isNaN(angleb) && !isNaN(sideA)) {
        const anglebb = parseFloat(document.getElementById("angleb").value);
        const sideAA = parseFloat(document.getElementById("sideA").value);
        const sideC = document.getElementById("sideC");
        const calculatedAnglebA = sideAA / Math.sin(anglebb * (Math.PI / 180));
        sideC.value = calculatedAnglebA.toFixed(2);
        calculatedValues += `Lado C: ${calculatedAnglebA.toFixed(2)}° <br>`;
      }
    }
    if (variablesSinValor.includes("angleO")) {
      if (!isNaN(angleb) && !isNaN(sideA)) {
        const sideA = parseFloat(document.getElementById("sideA").value);
        const sideB = parseFloat(document.getElementById("sideB").value);
        const sideC = parseFloat(document.getElementById("sideC").value);
        const peri = sideA + sideB + sideC;
        const area = (sideA * sideB) / 2;
        document.getElementById(
          "Perimetro"
        ).innerHTML = `Perimetro: ${peri.toFixed(2)}`;
        document.getElementById("Area").innerHTML = `Area: ${area.toFixed(2)}`;
        const angleb = parseFloat(document.getElementById("angleb").value);
        const angleO = document.getElementById("angleO");
        const calculatedAnglebA = 180 - 90 - angleb;
        angleO.value = calculatedAnglebA.toFixed(2);
        calculatedValues += `Ángulo θ: ${calculatedAnglebA.toFixed(2)}° <br>`;
      }
    }
  }

  function angulesidebB() {
    if (variablesSinValor.includes("sideA")) {
      if (!isNaN(angleb) && !isNaN(sideB)) {
        const anglebb = parseFloat(document.getElementById("angleb").value);
        const sideBB = parseFloat(document.getElementById("sideB").value);
        const sideA = document.getElementById("sideA");
        const anguloEnRadianes = anglebb * (Math.PI / 180);
        const pical = Math.tan(anguloEnRadianes) * sideBB;
        sideA.value = "";
        sideA.value = pical.toFixed(2);
        calculatedValues += `Lado A: ${pical.toFixed(2)}° <br>`;
      }
    }
    if (variablesSinValor.includes("sideC")) {
      if (!isNaN(angleb) && !isNaN(sideB)) {
        const anglebb = parseFloat(document.getElementById("angleb").value);
        const sideBB = parseFloat(document.getElementById("sideB").value);
        const sideC = document.getElementById("sideC");
        const calculatedAnglebAC = sideBB / Math.cos(anglebb * (Math.PI / 180));
        console.log(calculatedAnglebAC);
        sideC.value = "";
        sideC.value = calculatedAnglebAC.toFixed(2);
        calculatedValues += `Lado C: ${calculatedAnglebAC.toFixed(2)}° <br>`;
      }
    }
    if (variablesSinValor.includes("angleO")) {
      if (!isNaN(angleb) && !isNaN(sideB)) {
        const anglebb = parseFloat(document.getElementById("angleb").value);
        const angleO = document.getElementById("angleO");
        const sideA = parseFloat(document.getElementById("sideA").value);
        const sideB = parseFloat(document.getElementById("sideB").value);
        const sideC = parseFloat(document.getElementById("sideC").value);
        const peri = sideA + sideB + sideC;
        const area = (sideA * sideB) / 2;
        document.getElementById(
          "Perimetro"
        ).innerHTML = `Perimetro: ${peri.toFixed(2)}`;
        document.getElementById("Area").innerHTML = `Area: ${area.toFixed(2)}`;
        const calculatedAnglebAC = 180 - 90 - anglebb;
        console.log(calculatedAnglebAC);
        angleO.value = "";
        angleO.value = calculatedAnglebAC.toFixed(2);
        calculatedValues += `Ángulo θ: ${calculatedAnglebAC.toFixed(2)}° <br>`;
      }
    }
  }
  function angulesidebC() {
    if (variablesSinValor.includes("sideA")) {
      if (!isNaN(angleb) && !isNaN(sideC)) {
        const anglebb = parseFloat(document.getElementById("angleb").value);
        const sideCC = parseFloat(document.getElementById("sideC").value);
        const sideA = document.getElementById("sideA");
        const calculatedAnglebAC = sideCC * Math.sin((anglebb * Math.PI) / 180);
        sideA.value = "";
        sideA.value = calculatedAnglebAC.toFixed(2);
        calculatedValues += `Lado A: ${calculatedAnglebAC.toFixed(2)}° <br>`;
      }
    }
    if (variablesSinValor.includes("sideB")) {
      if (!isNaN(angleb) && !isNaN(sideC)) {
        const anglebb = parseFloat(document.getElementById("angleb").value);
        const sideCC = parseFloat(document.getElementById("sideC").value);
        const sideB = document.getElementById("sideB");
        const calculatedAnglebAC = sideCC * Math.cos((anglebb * Math.PI) / 180);
        sideB.value = "";
        sideB.value = calculatedAnglebAC.toFixed(2);
        calculatedValues += `Lado B: ${calculatedAnglebAC.toFixed(2)}° <br>`;
      }
    }
    if (variablesSinValor.includes("angleO")) {
      if (!isNaN(angleb) && !isNaN(sideC)) {
        const angleb = parseFloat(document.getElementById("angleb").value);
        const sideA = parseFloat(document.getElementById("sideA").value);
        const sideB = parseFloat(document.getElementById("sideB").value);
        const sideC = parseFloat(document.getElementById("sideC").value);
        const peri = sideA + sideB + sideC;
        const area = (sideA * sideB) / 2;
        document.getElementById(
          "Perimetro"
        ).innerHTML = `Perimetro: ${peri.toFixed(2)}`;
        document.getElementById("Area").innerHTML = `Area: ${area.toFixed(2)}`;
        const angleO = document.getElementById("angleO");
        const calculatedAnglebAC = 180 - 90 - angleb;
        angleO.value = "";
        angleO.value = calculatedAnglebAC.toFixed(2);
        calculatedValues += `Ángulo θ: ${calculatedAnglebAC.toFixed(2)}° <br>`;
      }
    }
  }

  function angulesideOA() {
    if (variablesSinValor.includes("sideB")) {
      if (!isNaN(angleO) && !isNaN(sideA)) {
        const angleoo = parseFloat(document.getElementById("angleO").value);
        const sideAA = parseFloat(document.getElementById("sideA").value);
        const sideB = document.getElementById("sideB");
        const calculatedAnglebA = sideAA * Math.tan(angleoo * (Math.PI / 180));
        sideB.value = calculatedAnglebA.toFixed(2);
        calculatedValues += `Lado B: ${calculatedAnglebA.toFixed(2)}° <br>`;
      }
    }
    if (variablesSinValor.includes("sideC")) {
      if (!isNaN(angleO) && !isNaN(sideA)) {
        const angleoo = parseFloat(document.getElementById("angleO").value);
        const sideAA = parseFloat(document.getElementById("sideA").value);
        const sideC = document.getElementById("sideC");
        const calculatedAnglebA = sideAA / Math.cos(angleoo * (Math.PI / 180));
        sideC.value = calculatedAnglebA.toFixed(2);
        calculatedValues += `Lado C: ${calculatedAnglebA.toFixed(2)}° <br>`;
      }
    }
    if (variablesSinValor.includes("angleb")) {
      if (!isNaN(angleO) && !isNaN(sideA)) {
        const sideA = parseFloat(document.getElementById("sideA").value);
        const sideB = parseFloat(document.getElementById("sideB").value);
        const sideC = parseFloat(document.getElementById("sideC").value);
        const peri = sideA + sideB + sideC;
        const area = (sideA * sideB) / 2;
        document.getElementById(
          "Perimetro"
        ).innerHTML = `Perimetro: ${peri.toFixed(2)}`;
        document.getElementById("Area").innerHTML = `Area: ${area.toFixed(2)}`;
        const angleoo = parseFloat(document.getElementById("angleO").value);
        const angleb = document.getElementById("angleb");
        const calculatedAnglebA = 180 - 90 - angleoo;
        console.log(calculatedAnglebA);
        angleb.value = calculatedAnglebA.toFixed(2);
        calculatedValues += `Ángulo B: ${calculatedAnglebA.toFixed(2)}° <br>`;
      }
    }
  }
  function angulesideOB() {
    if (variablesSinValor.includes("sideA")) {
      if (!isNaN(angleO) && !isNaN(sideB)) {
        const angleoo = parseFloat(document.getElementById("angleO").value);
        const sideBB = parseFloat(document.getElementById("sideB").value);
        const sideA = document.getElementById("sideA");
        const calculatedAnglebA = sideBB / Math.tan(angleoo * (Math.PI / 180));
        sideA.value = calculatedAnglebA.toFixed(2);
        calculatedValues += `Lado B: ${calculatedAnglebA.toFixed(2)}° <br>`;
      }
    }
    if (variablesSinValor.includes("sideC")) {
      if (!isNaN(angleO) && !isNaN(sideB)) {
        const angleoo = parseFloat(document.getElementById("angleO").value);
        const sideBB = parseFloat(document.getElementById("sideB").value);
        const sideC = document.getElementById("sideC");
        const calculatedAnglebA = sideBB / Math.sin(angleoo * (Math.PI / 180));
        sideC.value = calculatedAnglebA.toFixed(2);
        calculatedValues += `Lado C: ${calculatedAnglebA.toFixed(2)}° <br>`;
      }
    }
    if (variablesSinValor.includes("angleb")) {
      if (!isNaN(angleO) && !isNaN(sideB)) {
        const sideA = parseFloat(document.getElementById("sideA").value);
        const sideB = parseFloat(document.getElementById("sideB").value);
        const sideC = parseFloat(document.getElementById("sideC").value);
        const peri = sideA + sideB + sideC;
        const area = (sideA * sideB) / 2;
        document.getElementById(
          "Perimetro"
        ).innerHTML = `Perimetro: ${peri.toFixed(2)}`;
        document.getElementById("Area").innerHTML = `Area: ${area.toFixed(2)}`;
        const angleoo = parseFloat(document.getElementById("angleO").value);
        const angleb = document.getElementById("angleb");
        const calculatedAnglebA = 180 - 90 - angleoo;
        console.log(calculatedAnglebA);
        angleb.value = calculatedAnglebA.toFixed(2);
        calculatedValues += `Ángulo B: ${calculatedAnglebA.toFixed(2)}° <br>`;
      }
    }
  }
  function angulesideOC() {
    if (variablesSinValor.includes("sideA")) {
      if (!isNaN(angleO) && !isNaN(sideC)) {
        const angleoo = parseFloat(document.getElementById("angleO").value);
        const sideCC = parseFloat(document.getElementById("sideC").value);
        const sideB = document.getElementById("sideA");
        const calculatedAnglebA = sideCC * Math.cos(angleoo * (Math.PI / 180));
        sideB.value = calculatedAnglebA.toFixed(2);
        calculatedValues += `Lado B: ${calculatedAnglebA.toFixed(2)}° <br>`;
      }
    }
    if (variablesSinValor.includes("sideB")) {
      if (!isNaN(angleO) && !isNaN(sideC)) {
        const angleoo = parseFloat(document.getElementById("angleO").value);
        const sideCC = parseFloat(document.getElementById("sideC").value);
        const sideC = document.getElementById("sideB");
        const calculatedAnglebA = sideCC * Math.sin(angleoo * (Math.PI / 180));
        sideC.value = calculatedAnglebA.toFixed(2);
        calculatedValues += `Lado C: ${calculatedAnglebA.toFixed(2)}° <br>`;
      }
    }
    if (variablesSinValor.includes("angleb")) {
      if (!isNaN(angleO) && !isNaN(sideC)) {
        const sideA = parseFloat(document.getElementById("sideA").value);
        const sideB = parseFloat(document.getElementById("sideB").value);
        const sideC = parseFloat(document.getElementById("sideC").value);
        const peri = sideA + sideB + sideC;
        const area = (sideA * sideB) / 2;
        document.getElementById(
          "Perimetro"
        ).innerHTML = `Perimetro: ${peri.toFixed(2)}`;
        document.getElementById("Area").innerHTML = `Area: ${area.toFixed(2)}`;
        const angleoo = parseFloat(document.getElementById("angleO").value);
        const angleb = document.getElementById("angleb");
        const calculatedAnglebA = 180 - 90 - angleoo;
        console.log(calculatedAnglebA);
        angleb.value = calculatedAnglebA.toFixed(2);
        calculatedValues += `Ángulo B: ${calculatedAnglebA.toFixed(2)}° <br>`;
      }
    }
  }
  const selecFormUnk = document.getElementById("selecFormUnk").value;
console.log(selecFormUnk)
  switch (selecFormUnk) {
    case "sideAB":
      sideAB();
      break;
    case "sideCB":
      sideCB();
      break;
    case "sideAC":
      sideAC();
      break;
    case "angulesidebA":
      angulesidebA();
      break;
    case "angulesidebB":
      angulesidebB();
      break;
    case "angulesidebC":
      angulesidebC();
      break;
    case "angulesideOA":
      angulesideOA();
      break;
    case "angulesideOB":
      angulesideOB();
      break;
    case "angulesideOC":
      angulesideOC();
      break;
  }


  document.getElementById("result").innerHTML = `${calculatedValues}`;
}
function clearInput() {
  const sideA = document.getElementById("sideA");
  const sideB = document.getElementById("sideB");
  const sideC = document.getElementById("sideC");
  const angleO = document.getElementById("angleO");
  const angleb = document.getElementById("angleb");

  // Borrar los valores de los inputs
  sideA.value = "";
  sideB.value = "";
  sideC.value = "";
  angleO.value = "";
  angleb.value = "";

  const results = document.getElementById("results");
  const clearArea = document.getElementById("Perimetro");
  const clearPerimetro = document.getElementById("Area");
  results.removeChild(clearPerimetro);
  results.removeChild(clearArea);
}

function mostrarTexto() {
  const opcionesSelect = document.getElementById("selecForm");
  const textoOcultoDiv = document.getElementById("textoOculto");
  const opcionSeleccionada = opcionesSelect.value;

  // Ocultamos el texto si se selecciona la primera opción
  if (opcionSeleccionada === "Trigonometria") {
    textoOcultoDiv.style.display = "block";
    document.getElementById("textoOculto").innerHTML = `
    <h1>Calculadora Triángulo Rectángulo</h1>
    <div>
      <div class="triangulo">
        <img src="./TrianguloReactangulo.png" alt="TrianguloReactangulo" class="TrianguloReactangulo">
      </div>
      <label for="sideA">Cateto A:</label>
      <input type="number" id="sideA" class="input input-bordered input-accent w-38 max-w-xs">
      <br><br>
      <label for="sideB">Cateto B:</label>
      <input type="number" id="sideB" class="input input-bordered input-accent w-38 max-w-xs">
      <br><br>
      <label for="sideC">Cateto C:</label>
      <input type="number" id="sideC" class="input input-bordered input-accent w-38 max-w-xs">
      <br><br>
      <label for="angleb">Ángulo β:</label>
      <input type="number" id="angleb" class="input input-bordered input-accent w-38 max-w-xs">
      <br><br>
      <label for="angleO">Ángulo θ:</label>
      <input type="number" id="angleO" class="input input-bordered input-accent w-38 max-w-xs">
      <br><br>
      <label for="sider">Lado α: 90°</label>
      <b class="resultBold" id="results">
        <!--   <p id="result"></p> -->
        <p id="Perimetro"></p>
        <p id="Area"></p>
      </b>
    </div><br>
    <button onclick="calc()" class="btn btn-outline btn-accen">Calcular</button>
    <button type="button" onclick="clearInput()" class="btn btn-outline btn-error">Borrar Resultados</button>
    <br>
    <br>
    <select id="selecFormUnk" class="select select-warning w-68 max-w-xs" required>
      <option disabled selected>Elije los primeros dos valores</option>
      <option value="sideAB">Valores: A-B</option>
      <option value="sideCB">Valores: C-B</option>
      <option value="sideAC">Valores: A-C</option>
      <option value="angulesidebA">Angulo y cateto: β-A</option>
      <option value="angulesidebB">Angulo y cateto: β-B</option>
      <option value="angulesidebC">Angulo y hipotenusa: β-C</option>
      <option value="angulesideOA">Angulo y cateto: θ-A</option>
      <option value="angulesideOB">Angulo y cateto: θ-B</option>
      <option value="angulesideOC">Angulo y hipotenusa: θ-C</option>
    </select>
    <br>
    <br>
    <b>
      <p class="text-2xl">Trigonometria: Rectangulo / Triangulo</p>
    </b>
    <br>
    <p class="text-justify">Un triángulo rectángulo es un tipo de triángulo que tiene un ángulo interior que mide 90
      grados, es decir, un ángulo recto. Este tipo de triángulo es una de las clasificaciones de acuerdo a la medida de
      sus ángulos interiores.
      La principal característica del triángulo rectángulo es que tiene un lado de mayor longitud llamado
      <b>hipotenusa</b> y otros dos denominados catetos cuya unión forma el ángulo recto.
      <br><br>
      Los lados de un triángulo rectángulo se llaman catetos e <b>hipotenusa</b>.
      <br><br>
      El Teorema de Pitágoras establece que en un triángulo rectángulo, el cuadrado de la <b>hipotenusa</b> es igual a la
      suma de los cuadrados de los catetos.
      <br><br>
      Además, cualquier cuadrado separado en dos por alguna de sus diagonales se divide en dos triángulos rectángulos.
      <br><br>
      Hay dos tipos de triángulo rectángulo: el triángulo rectángulo isósceles y el triángulo rectángulo escaleno.
      <br><br>
      En resumen, un triángulo rectángulo es un triángulo que tiene un ángulo recto y se caracteriza por tener un lado de
      mayor longitud llamado <b>hipotenusa</b> y otros dos llamados catetos.
    </p>
    <br>
    <p>Dato de color: Si sientes que estas trabado, prueba en resolver las los sibolos $$θ ; β = x$$</p>
    <p class="text-2xl"><b>Como se calcula (θ  ,  β)?</b></p>
    <br>
    <table>
      <tr>
        <td>Calcular θ (A-B)</td>
        <td style="color: red;">$$\\tan^{-1}θ * \\frac{B}{A}$$</td>
      </tr>
      <tr>
        <td>Calcular θ (C-B)</td>
        <td style="color: red;">$$\sin^{-1}θ * \\frac{C}{A}$$</td>
      </tr>
      <tr>
        <td>Calcular θ (A-C)</td>
        <td style="color: red;">$$\cos^{-1}θ * \\frac{B}{C}$$</td>
      </tr>
      <tr>
        <td>Calcular β (A-C)</td>
        <td style="color: red;">$$\sin^{-1}θ * \\frac{A}{C}$$</td>
      </tr>
      <tr>
        <td>Calcular β (A-B)</td>
        <td style="color: red;">$$\\tan^{-1}θ * \\frac{A}{B}$$</td>
      </tr>
      <tr>
        <td>Calcular β (B-C)</td>
        <td style="color: red;">$$\cos^{-1}θ * \\frac{B}{C}$$</td>
      </tr>
    </table>
  <br>
    <p class="text-2xl"><b>Como se calcula Cateto A, Cateto B y hipotenusa?</b></p>
  <br>
  <table>
    <tr>
      <td>Cateto A</td>
      <td style="color: blue;">$$\sqrt[2]{{c^2}-{b^2}}$$ $$\\frac {B}{\\tanθ}$$ $$\\tanβ * B$$ $$\cosβ * C$$ $$\sinβ * C$$</td>
    </tr>
    <tr>
      <td>Cateto B</td>
      <td style="color: blue;">$$\sqrt[2]{{c^2}-{a^2}}$$ $$\\tanθ * A$$ $$\cosθ * C$$ $$\sinθ * C$$ $$\\frac {A}{\\tanθ}$$</td>
    </tr>
    <tr>
      <td>Cateto C</td>
      <td style="color: blue;">$$\sqrt[2]{{a^2}+{b^2}}$$ $$\\tanθ * a$$ $$\\frac {A}{\cosθ}$$ $$\\frac {B}{\sinθ}$$ $$\\frac {A}{\sinβ}$$ $$\\frac {B}{\cosθ}$$</td>
    </tr>
    <tr>
      <td>Calcular β </td>
      <td style="color: blue;">$$\\tan^{-1}θ * \\frac{A}{B}$$ $$\cos^{-1}θ * \\frac{B}{C}$$ $$180°-90°-θ$$</td>
    </tr>
    <tr>
      <td>Calcular θ </td>
      <td style="color: blue;">$$\\tan^{-1} * \\frac{B}{A}$$ $$\sin^{-1} * \\frac{B}{C}$$ $$\cos^{-1} * \\frac{A}{C}$$</td>
    </tr>
    <tr>
      <td>Area (A = H)</td>
      <td style="color: blue;">$$ \\frac{B*H}{2}$$</td>
    </tr>
    <tr>
      <td>Perímetro</td>
      <td style="color: blue;">$$A+B+C$$</td>
    </tr>
  </table>

    `;
    MathJax.typeset();
  } else if (opcionSeleccionada === "Oblicuangulos") {
    textoOcultoDiv.style.display = "block";
    document.getElementById("textoOculto").innerHTML = `
    <br>
      <select id="selecFormObli" onchange="unknownVal()" class="select select-warning w-34 max-w-xs" required>
        <option disabled selected>Elija las Incognitas</option>
        <option value="angleABsCrABcS">a,b,φ</option>
        <option value="sideABC">a,b,c</option>
        <option value="sideabA">a,b,α</option>
      </select>
      <div id="textoOcultoObli" style="display: none;">    
    </div>
      `;MathJax.typeset();
  } else if (opcionSeleccionada === "Esfera") {
    textoOcultoDiv.style.display = "block";
    document.getElementById("textoOculto").innerHTML = `
    <div class="triangulo">
      <img src="./Esfere.png" alt="TrianguloReactangulo" class="TrianguloReactangulo">
    </div>
    <p>r : radio de la esfera</p>
    <p>PI(π): 3.1415</p>
    <p>Area lateral = Al total = At</p>
    <p>$$A = 4*π*r^2$$</p>
    <p>$$V = \\frac{4}{3}*π*r^2$$</p>
    <br>
    <div class="triangulo">
      <img src="./Esfere2.png" alt="TrianguloReactangulo" class="TrianguloReactangulo">
    </div>
    <p>AB =Arco de Círculo Máximo</p>
    <p>R = Radio de la Esfera</p>
    <p>π = 3.1415</p>
    <p>$$A = AB x 2R$$</p>

    <div class="triangulo">
      <img src="./circle.png" alt="TrianguloReactangulo" class="TrianguloReactangulo">
    </div>

    $$\(Al = A = 2 \\pi Rh\)$$
    $$A = \\pi *( r^2*h^2)$$
    $$\(At = Al + (r_{ma}^2 + r_{me}^2)\)$$
    $$\V = \\frac{1}{2}\\pi ({rma}^2 + {rme}^2 + \\frac{h^2}{3}$$
    
    <p>rma = Radio de la Base Mayor</p>
    <p>rme = Radio de la Base Menor</p>
    <p>h = Altura</p>
    <p>R = Radio de la Esfera</p>
    <p>π = 3.1416</p>
    <br>
    <label for="radiusH">Radio </label>
    <input type="number" id="radius" name="radius" class="btn btn-outline btn-accen"><br><br>

    <label for="height">Altura (h): </label>
    <input type="number" id="height" name="height"  class="btn btn-outline btn-accen"><br><br>

    <label for="radiusA">Radio a (rma): </label>
    <input type="number" id="radiusA" name="radiusA"  class="btn btn-outline btn-accen"><br><br>

    <label for="radiusE">Radio e (rme): </label>
    <input type="number" id="radiusE" name="radiusE"  class="btn btn-outline btn-accen"><br><br>

    <button onclick="calculateEsfere()" class="btn btn-outline btn-accent">Calcular</button>

<br>
<h2>Resultados:</h2>
<p>Área Lateral (Al): <span id="areaLateralResult"></span></p>
<p>Área Total (At): <span id="areaTotalResult"></span></p>
<p>Volumen (V): <span id="volumeResult"></span></p>
      `;MathJax.typeset();
  }else if (opcionSeleccionada === "Arista") {
    textoOcultoDiv.style.display = "block";
    document.getElementById("textoOculto").innerHTML = `
    <br><br>
    <div class="triangulo">
      <img src="./Arista.PNG" alt="TrianguloReactangulo" class="TrianguloReactangulo">
    </div>
    <label for="a">Arista (a): </label>
    <input type="a" id="a" name="a"  class="btn btn-outline btn-accen"><br><br>
    <br>
    <p id="resultAV"></p>
    <br>
    <div class="triangulo">
      <img src="./Dodecaedro.PNG" alt="TrianguloReactangulo" class="TrianguloReactangulo">
    </div>
    <label for="aa">Arista (a): </label>
    <input type="aa" id="aa" name="aa"  class="btn btn-outline btn-accen"><br><br>
    <br>
    <p id="resultAAVV"></p>
    <br>
    <div class="triangulo">
      <img src="./Octaedro.PNG" alt="TrianguloReactangulo" class="TrianguloReactangulo">
    </div>
    <label for="aaa">Arista (a): </label>
    <input type="aaa" id="aaa" name="aaa"  class="btn btn-outline btn-accen"><br><br>
    <br>
    <p id="resultAAAVVV"></p>
    <br>
    <br>
    <div class="triangulo">
    <img src="./Hexaedro.PNG" alt="TrianguloReactangulo" class="TrianguloReactangulo">
  </div>
  <label for="aaaa">Arista (a): </label>
  <input type="aaaa" id="aaaa" name="aaaa"  class="btn btn-outline btn-accen"><br><br>
  <br>
  <p id="resultAAAAVVVV"></p>
  <br>
  <br>
  <div class="triangulo">
  <img src="./Tetraedro.PNG" alt="TrianguloReactangulo" class="TrianguloReactangulo">
</div>
<label for="aaaaa">Arista (a): </label>
<input type="aaaaa" id="aaaaa" name="aaaaa"  class="btn btn-outline btn-accen"><br><br>
<br>
<p id="resultAAAAVVVV"></p>
<br>
<button onclick="calculateArista()" class="btn btn-outline btn-accent">Calcular</button>
<br><br>
      `;MathJax.typeset();
  }
}

function calculateArista(){
  const a = parseFloat(document.getElementById("a").value);

  var A = 8.6605* (a**2)
  var V = 2.1817 * (a ** 3)
  document.getElementById("resultAV").innerHTML = `
  <p>Area = ${A}</p>
  <p>Volumen = ${V}</p>
  `;
  const aa = parseFloat(document.getElementById("aa").value);

  var AA = 20.6457 * (aa**2)
  var VV = 7.6631 * (aa ** 3)
  document.getElementById("resultAAVV").innerHTML = `
  <p>Area = ${AA}</p>
  <p>Volumen = ${VV}</p>
  `;
  const aaa = parseFloat(document.getElementById("aaa").value);

  var AAA = 3.4642 * (aaa**2)
  var VVV = 0.4714 * (aaa ** 3)
  document.getElementById("resultAAAVVV").innerHTML = `
  <p>Area = ${AAA}</p>
  <p>Volumen = ${VVV}</p>
  `
  const aaaa = parseFloat(document.getElementById("aaaa").value);

  var AAAA = 6 * (aaaa**2)
  var VVVV = (aaaa ** 3)
  document.getElementById("resultAAAAVVVV").innerHTML = `
  <p>Area = ${AAAA}</p>
  <p>Volumen = ${VVVV}</p>
  `
  const aaaaa = parseFloat(document.getElementById("aaaaa").value);

  var AAAAA = 1.7321 * (aaaaa** 2)
  var VVVVV = 0.1178 * (aaaaa ** 3)
  document.getElementById("resultAAAAAVVVVV").innerHTML = `
  <p>Area = ${AAAAA}</p>
  <p>Volumen = ${VVVVV}</p>
  `
}

function calculateEsfere() {
  const radius = parseFloat(document.getElementById("radius").value);
  const height = parseFloat(document.getElementById("height").value);
  const radiusA = parseFloat(document.getElementById("radiusA").value);
  const radiusE = parseFloat(document.getElementById("radiusE").value);

  const Al = 2 * Math.PI * radius
  const At = Al + Math.PI * (radiusA ** 2 + radiusE ** 2);
  const V = (1 / 2) * Math.PI * (radiusA ** 2 + radiusE ** 2 + (height ** 2) / 3);

  document.getElementById("areaLateralResult").textContent = Al.toFixed(2);
  document.getElementById("areaTotalResult").textContent = At.toFixed(2);
  document.getElementById("volumeResult").textContent = V.toFixed(2);
}

function calculateValues() {
  const selecFormD = document.getElementById("selecFormObli").value;

  switch (selecFormD) {
    case "angleABsCrABcS":
      angleABsCrABcS();
      break;
    case "sideABC":
      sideABC();
      break;
      case "sideabA":
        sideabA();
        break;
  }
}

function angleABsCrABcS() {
  const angleC = parseFloat(document.getElementById("angleC").value);
  const angleCC = parseFloat(document.getElementById("angleCC").value);
  const angleCCC = parseFloat(document.getElementById("angleCCC").value);
  const angleCCCC = parseFloat(document.getElementById("angleCCCC").value);
  const sideA = parseFloat(document.getElementById("sideA").value);
  const angleA = parseFloat(document.getElementById("angleA").value);

  const sideAA = parseFloat(document.getElementById("sideAA").value);
  const sideAAA = parseFloat(document.getElementById("sideAAA").value);
  const sideB = parseFloat(document.getElementById("sideB").value);
  const sideBB = parseFloat(document.getElementById("sideBB").value);
  var angleAB = (180 - angleC) / 2;
  console.log(angleAB);
  document.getElementById(
    "angleABsCresult"
  ).innerHTML = `Angulos: α y β: ${angleAB}°`;

  var angleCAsA = (sideA * Math.sin(angleCC)) / Math.sin(angleA);
  console.log(angleCAsA);
  document.getElementById("angleABcSr").innerHTML = `c: ${angleCAsA.toFixed(
    3
  )}°`;

  var angleCsAB =
    Math.sqrt(sideAA ** 2 + sideB ** 2 - 2) *
    sideA *
    sideB *
    Math.cos(angleCCC);
  console.log(angleCsAB);
  document.getElementById("angleCsABrc").innerHTML = `c: ${angleCsAB.toFixed(
    3
  )}°`;

  var angleCsABrS = (sideAAA * sideBB * Math.sin(angleCCCC)) / 2;
  console.log(angleCsAB);
  document.getElementById(
    "angleCsABrS"
  ).innerHTML = `S (Altura): ${angleCsABrS.toFixed(3)}`;
}
function sideABC(){
  const sideA = parseFloat(document.getElementById("sideA").value);
  const sideB = parseFloat(document.getElementById("sideB").value);
  const sideC = parseFloat(document.getElementById("sideC").value);

  const semiPerimeter = (sideA + sideB + sideC) / 2;
  const area = Math.sqrt(semiPerimeter * (semiPerimeter - sideA) * (semiPerimeter - sideB) * (semiPerimeter - sideC));

  const senA2 = Math.sqrt((semiPerimeter - sideB) * (semiPerimeter - sideC) )/ (sideB * sideC);
  var arcsinA2 = ((Math.asin(senA2) / 2) * 180) /Math.PI
  
  const senB2 = Math.sqrt((semiPerimeter - sideA) * (semiPerimeter - sideC) )/ (sideA * sideC);
  var arcsinB2 = ((Math.asin(senB2) / 2) * 180) /Math.PI
  
  const senC2 = Math.sqrt((semiPerimeter - sideA) * (semiPerimeter - sideB) )/ (sideA * sideB);
  var arcsinC2 = ((Math.asin(senC2) / 2) * 180) /Math.PI
  

  document.getElementById("areaResult").textContent =  `P: ${area.toFixed(2)}`;
  document.getElementById("senA2Result").textContent = `A: ${arcsinA2.toFixed(4)}°`;
  document.getElementById("senB2Result").textContent = `B: ${arcsinB2.toFixed(4)}°`;
  document.getElementById("senC2Result").textContent = `C: ${arcsinC2.toFixed(4)}°`;

  
    const sideAA = parseFloat(document.getElementById("sideAA").value);
    const sideBB = parseFloat(document.getElementById("sideBB").value);
    const sideCC = parseFloat(document.getElementById("sideCC").value);
    
    const p = (sideAA + sideBB + sideCC) / 2;
  
    const R = Math.sqrt((p - sideAA) * (p - sideBB) * (p - sideCC)) / p;
  
    const tanA2 = Math.sqrt(R) / (p - sideAA);
    const tanB2 = Math.sqrt(R) / (p - sideBB);
    const tanC2 = Math.sqrt(R) / (p - sideCC);
  
    const S = Math.sqrt(p * (p - sideAA) * (p - sideBB) * (p - sideCC));
  
    document.getElementById("resultR").innerHTML = `R: ${R.toFixed(2)}`;
    document.getElementById("resultTanA2").innerHTML = `A: ${tanA2.toFixed(2)}`;
    document.getElementById("resultTanB2").innerHTML = `B: ${tanB2.toFixed(2)}`;
    document.getElementById("resultTanC2").innerHTML = `C: ${tanC2.toFixed(2)}`;
    document.getElementById("resultS").innerHTML = `S: ${S.toFixed(2)}`;

}

function sideabA(){
  const sideAAA = parseFloat(document.getElementById("sideAAA").value);
  const sideBBB = parseFloat(document.getElementById("sideBBB").value);
  const angleA = parseFloat(document.getElementById("angleA").value);

  const senB =( sideBBB * Math.sin(angleA)) / sideAAA;
  var arcB = (Math.asin(senB)) * (Math.PI / 180)
  document.getElementById("resultSenB").innerHTML = `β: ${arcB.toFixed(3)}`;

  const angleB = 180 - (angleA + arcB);
  document.getElementById("resultC").innerHTML = `Ángulo φ: ${angleB.toFixed(2)}°`;

  const senC = Math.sin(angleB * (Math.PI / 180));
  const c = (sideAAA * senC) / Math.sin(angleA * (Math.PI / 180));
  document.getElementById("resultc").innerHTML = `c: ${c.toFixed(3)}`;

  const Ss = (sideAAA * sideBBB * senC) / 2;
  document.getElementById("resultS").innerHTML = `S: ${Ss.toFixed(3)}`;
}

function unknownVal() {
  const opcionesSelect = document.getElementById("selecFormObli");
  const textoOcultoDiv = document.getElementById("textoOcultoObli");
  const opcionSeleccionada = opcionesSelect.value;

  if (opcionSeleccionada === "angleABsCrABcS") {
    textoOcultoDiv.style.display = "block";
    textoOcultoDiv.innerHTML = `
  <br>
  <div class="triangulo">
    <img src="./oblicuangulo.svg" alt="TrianguloReactangulo" class="TrianguloReactangulo">
  </div>

$$\\frac{a+b}{2} =  \\frac{180^° -φ}{2}\$$

<label for="sideA">Lado a y b:</label>
      <input type="number" id="angleC" class="input input-bordered input-accent w-38 max-w-xs">
      <br><br>
      $$c =  \\frac{a * sen φ}{sen A}\$$
    <label for="sideA">Lado a:</label>
    <input type="number" id="sideA" class="input input-bordered input-accent w-38 max-w-xs">
    <br><br>
    <label for="sideA">Angulo α:</label>
    <input type="number" id="angleA" class="input input-bordered input-accent w-38 max-w-xs">
    <br><br>
    <label for="sideA">Angulo φ:</label>
    <input type="number" id="angleCC" class="input input-bordered input-accent w-38 max-w-xs">
    <br><br>
    $$(\\sqrt{a^2 + b^2 - 2}) * a*b* \\cos φ$$

    <label for="sideA">Lado a:</label>
    <input type="number" id="sideAA" class="input input-bordered input-accent w-38 max-w-xs">
    <br><br>
    <label for="sideA">Lado b:</label>
    <input type="number" id="sideB" class="input input-bordered input-accent w-38 max-w-xs">
    <br><br>
    <label for="sideA">Angulo φ:</label>
    <input type="number" id="angleCCC" class="input input-bordered input-accent w-38 max-w-xs">

    $$\S = \\frac{a*b* sinφ}{2}\$$

    <label for="sideA">Lado a:</label>
    <input type="number" id="sideAAA" class="input input-bordered input-accent w-38 max-w-xs">
    <br><br>
    <label for="sideA">Lado b:</label>
    <input type="number" id="sideBB" class="input input-bordered input-accent w-38 max-w-xs">
    <br><br>
    <label for="sideA">Angulo φ:</label>
    <input type="number" id="angleCCCC" class="input input-bordered input-accent w-38 max-w-xs">
    <br><br>
    <button onclick="calculateValues()" class="btn btn-outline btn-accen">Calcular</button>
    <br><br>
    <h4 id="angleABsCresult" class="text-2xl"></h4>
    <h4 id="angleABcSr" class="text-2xl"></h4>
    <h4 id="angleCsABrc" class="text-2xl"></h4>
    <h4 id="angleCsABrS" class="text-2xl"></h4>
      `;
    MathJax.typeset();
  } else if (opcionSeleccionada === "sideABC") {
    textoOcultoDiv.style.display = "block";
    textoOcultoDiv.innerHTML = `
    <br>
    <div class="triangulo">
      <img src="./oblicuangulo.svg" alt="TrianguloReactangulo" class="TrianguloReactangulo">
    </div>
    
    $$P = \\frac{a+b+c}{2}$$
    $$\\sin\\left(\\frac{α}{2}\\right) = \\sqrt{\\frac{(p – b)*(p – c)}{b*c}}$$
    $$\\sin\\left(\\frac{β}{2}\\right) = \\sqrt{\\frac{(p – a)*(p – c)}{a*c}}$$
    $$\\sin\\left(\\frac{φ}{2}\\right) = \\sqrt{\\frac{(p – a)*(p – b)}{a*b}}$$

   
    <label for="sideA">Lado a:</label>
    <input type="number" id="sideA" class="btn btn-outline btn-accen" placeholder="Lado a">
    <br><br>
    
    <label for="sideB">Lado b:</label>
    <input type="number" id="sideB" class="btn btn-outline btn-accen" placeholder="Lado b">
    <br><br>
    
    <label for="sideC">Lado c:</label>
    <input type="number" id="sideC" class="btn btn-outline btn-accen" placeholder="Lado c">
    <br><br>
    
    <h4 id="areaResult" class="text-xl"></h4>
    <h4 id="areaResult" class="text-xl"></h4>
    <h4 id="senA2Result" class="text-xl"></h4>
    <h4 id="senB2Result" class="text-xl"></h4>
    <h4 id="senC2Result" class="text-xl"></h4>
    <h4 id="radiusResult" class="text-xl"></h4>

    $$R = \\sqrt{\\frac{(p - a)(p - b)(p - c)}{p}}$$</p>
    $$\\tan\\left(\\frac{α}{2}\\right) = \\frac{R}{p - a}$$
    $$\\tan\\left(\\frac{β}{2}\\right) = \\frac{R}{p - b}$$
    $$\\tan\\left(\\frac{φ}{2}\\right) = \\frac{R}{p - c}$$

    <label for="sideA">Lado a:</label>
    <input type="number" id="sideAA" class="btn btn-outline btn-accen">
    <br><br>
    <label for="sideB">Lado b:</label>
    <input type="number" id="sideBB" class="btn btn-outline btn-accen">
    <br><br>
    <label for="sideC">Lado c:</label>
    <input type="number" id="sideCC" class="btn btn-outline btn-accen">
    <br><br>
    <button onclick="calculateValues()" class="btn btn-outline btn-accen">Calcular</button>
    <br><br>
    <h3>Resultados:</h3>
    <p id="resultR" class="text-2xl"></p>
    <p id="resultTanA2" class="text-2xl"></p>
    <p id="resultTanB2" class="text-2xl"></p>
    <p id="resultTanC2" class="text-2xl"></p>
    <p id="resultS"></p>

    `;MathJax.typeset();
  } else if (opcionSeleccionada === "sideabA") {
    textoOcultoDiv.style.display = "block";
    textoOcultoDiv.innerHTML = `
    <div class="triangulo">
      <img src="./oblicuangulo.svg" alt="TrianguloReactangulo" class="TrianguloReactangulo">
    </div>
    $$\\sin β = \\frac{b \\sin α}{a}$$
    $$φ = 180° - (α + β)$$
    $$c = \\frac{a \\sin φ}{\\sin α}$$
    $$S = \\frac{a*b \\sin φ}{2}$$
    <label for="sideA">Lado a:</label>
    <input type="number" id="sideAAA" class="input input-bordered input-accent w-38 max-w-xs">
    <br><br>
    <label for="sideB">Lado b:</label>
    <input type="number" id="sideBBB" class="input input-bordered input-accent w-38 max-w-xs">
    <br><br>
    <label for="angleA">Ángulo α:</label>
    <input type="number" id="angleA" class="input input-bordered input-accent w-38 max-w-xs">
    <br><br>
    <button onclick="calculateValues()" class="btn btn-outline btn-accen">Calcular</button>
    <br><br>
    <p id="resultSenB"></p>
    <p id="resultC"></p>
    <p id="resultc"></p>
    <p id="resultS"></p>
    `;MathJax.typeset();
  }
}
