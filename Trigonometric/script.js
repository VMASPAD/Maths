

function calc() {
  const sideA = parseFloat(document.getElementById("sideA").value);
  const sideB = parseFloat(document.getElementById("sideB").value);
  const sideC = parseFloat(document.getElementById("sideC").value);
  const angleO = parseFloat(document.getElementById("angleO").value);
  const angleb = parseFloat(document.getElementById("angleb").value);
  const selecForm = document.getElementById("selecForm").value;




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

  function sideAB() {
    if (variablesSinValor.includes("sideC")) {
      if (!isNaN(sideA) && !isNaN(sideB)) {
        const sideC = document.getElementById("sideC");
        const sideCSquared = sideA ** 2 + sideB ** 2;
        const calculatedSideC = Math.sqrt(sideCSquared);
        sideC.value = calculatedSideC.toFixed(2);
        const peri = sideA + sideB + calculatedSideC;
        const area = (sideA * sideB) / 2;
        document.getElementById("Perimetro").innerHTML = `Perimetro: ${peri.toFixed(2)}`;
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
        sideB.value = ""
        document.getElementById("Perimetro").innerHTML = `Perimetro: ${peri}`;
        document.getElementById("Area").innerHTML = `Area: ${area.toFixed(2)}`;
        calculatedValues += `Lado B: ${calculatedSideACB.toFixed(2)} <br>`;
      }
    }
    if (variablesSinValor.includes("angleO")) {
      if (!isNaN(sideC) && !isNaN(sideA)) {
        const angleO = document.getElementById("angleO");
        const calculatedAngleOAC = Math.acos(sideA / sideC) * (180 / Math.PI);
        angleO.value = ""
        angleO.value = calculatedAngleOAC.toFixed(2);
        calculatedValues += `Ángulo θ: ${calculatedAngleOAC.toFixed(2)}° <br>`;
      }
    }

    if (variablesSinValor.includes("angleb")) {
      if (!isNaN(sideC) && !isNaN(sideA)) {
        const angleb = document.getElementById("angleb");
        const calculatedAnglebAC = Math.asin(sideA / sideC) * (180 / Math.PI);
        angleb.value = ""
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
        const sideB = document.getElementById("sideB")
        const calculatedAnglebA = sideAA / Math.tan(anglebb * (Math.PI / 180));
        sideB.value = calculatedAnglebA.toFixed(2);
        calculatedValues += `Lado B: ${calculatedAnglebA.toFixed(2)}° <br>`;
      }
    }
    if (variablesSinValor.includes("sideC")) {
      if (!isNaN(angleb) && !isNaN(sideA)) {
        const anglebb = parseFloat(document.getElementById("angleb").value);
        const sideAA = parseFloat(document.getElementById("sideA").value);
        const sideC = document.getElementById("sideC")
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
        document.getElementById("Perimetro").innerHTML = `Perimetro: ${peri.toFixed(2)}`;
        document.getElementById("Area").innerHTML = `Area: ${area.toFixed(2)}`;
        const angleb = parseFloat(document.getElementById("angleb").value);
        const angleO = document.getElementById("angleO")
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
        const sideA = document.getElementById("sideA")
        const anguloEnRadianes = anglebb * (Math.PI / 180);
        const pical = Math.tan(anguloEnRadianes) * sideBB;
        sideA.value = ""
        sideA.value = pical.toFixed(2);
        calculatedValues += `Lado A: ${pical.toFixed(2)}° <br>`;
      }
    }
    if (variablesSinValor.includes("sideC")) {
      if (!isNaN(angleb) && !isNaN(sideB)) {
        const anglebb = parseFloat(document.getElementById("angleb").value);
        const sideBB = parseFloat(document.getElementById("sideB").value);
        const sideC = document.getElementById("sideC")
        const calculatedAnglebAC = sideBB / Math.cos(anglebb * (Math.PI / 180));
        console.log(calculatedAnglebAC);
        sideC.value = ""
        sideC.value = calculatedAnglebAC.toFixed(2);
        calculatedValues += `Lado C: ${calculatedAnglebAC.toFixed(2)}° <br>`;
      }
    }
    if (variablesSinValor.includes("angleO")) {
      if (!isNaN(angleb) && !isNaN(sideB)) {
        const anglebb = parseFloat(document.getElementById("angleb").value);
        const angleO = document.getElementById("angleO")
        const sideA = parseFloat(document.getElementById("sideA").value);
        const sideB = parseFloat(document.getElementById("sideB").value);
        const sideC = parseFloat(document.getElementById("sideC").value);
        const peri = sideA + sideB + sideC;
        const area = (sideA * sideB) / 2;
        document.getElementById("Perimetro").innerHTML = `Perimetro: ${peri.toFixed(2)}`;
        document.getElementById("Area").innerHTML = `Area: ${area.toFixed(2)}`;
        const calculatedAnglebAC = 180 - 90 - anglebb;
        console.log(calculatedAnglebAC);
        angleO.value = ""
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
        const sideA = document.getElementById("sideA")
        const calculatedAnglebAC = sideCC * Math.sin((anglebb * Math.PI) / 180);
        sideA.value = ""
        sideA.value = calculatedAnglebAC.toFixed(2);
        calculatedValues += `Lado A: ${calculatedAnglebAC.toFixed(2)}° <br>`;
      }
    }
    if (variablesSinValor.includes("sideB")) {
      if (!isNaN(angleb) && !isNaN(sideC)) {
        const anglebb = parseFloat(document.getElementById("angleb").value);
        const sideCC = parseFloat(document.getElementById("sideC").value);
        const sideB = document.getElementById("sideB")
        const calculatedAnglebAC = sideCC * Math.cos((anglebb * Math.PI) / 180);
        sideB.value = ""
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
        document.getElementById("Perimetro").innerHTML = `Perimetro: ${peri.toFixed(2)}`;
        document.getElementById("Area").innerHTML = `Area: ${area.toFixed(2)}`;
        const angleO = document.getElementById("angleO")
        const calculatedAnglebAC = 180 - 90 - angleb;
        angleO.value = ""
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
        const sideB = document.getElementById("sideB")
        const calculatedAnglebA = sideAA * Math.tan(angleoo * (Math.PI / 180));
        sideB.value = calculatedAnglebA.toFixed(2);
        calculatedValues += `Lado B: ${calculatedAnglebA.toFixed(2)}° <br>`;
      }
    }
    if (variablesSinValor.includes("sideC")) {
      if (!isNaN(angleO) && !isNaN(sideA)) {
        const angleoo = parseFloat(document.getElementById("angleO").value);
        const sideAA = parseFloat(document.getElementById("sideA").value);
        const sideC = document.getElementById("sideC")
        const calculatedAnglebA = sideAA / Math.cos(angleoo * (Math.PI / 180));
        sideC.value = calculatedAnglebA.toFixed(2);
        calculatedValues += `Lado C: ${calculatedAnglebA.toFixed(2)}° <br>`;
      }
    }
    if (variablesSinValor.includes("angleb")) {
      if (!isNaN(angleO) && !isNaN(sideA)) {;
        const sideA = parseFloat(document.getElementById("sideA").value);
        const sideB = parseFloat(document.getElementById("sideB").value);
        const sideC = parseFloat(document.getElementById("sideC").value);
        const peri = sideA + sideB + sideC;
        const area = (sideA * sideB) / 2;
        document.getElementById("Perimetro").innerHTML = `Perimetro: ${peri.toFixed(2)}`;
        document.getElementById("Area").innerHTML = `Area: ${area.toFixed(2)}`;
        const angleoo = parseFloat(document.getElementById("angleO").value);
        const angleb = document.getElementById("angleb")
        const calculatedAnglebA = 180 - 90 - angleoo;
        console.log(calculatedAnglebA)
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
        const sideA = document.getElementById("sideA")
        const calculatedAnglebA = sideBB / Math.tan(angleoo * (Math.PI / 180));
        sideA.value = calculatedAnglebA.toFixed(2);
        calculatedValues += `Lado B: ${calculatedAnglebA.toFixed(2)}° <br>`;
      }
    }
    if (variablesSinValor.includes("sideC")) {
      if (!isNaN(angleO) && !isNaN(sideB)) {
        const angleoo = parseFloat(document.getElementById("angleO").value);
        const sideBB = parseFloat(document.getElementById("sideB").value);
        const sideC = document.getElementById("sideC")
        const calculatedAnglebA = sideBB / Math.sin(angleoo * (Math.PI / 180));
        sideC.value = calculatedAnglebA.toFixed(2);
        calculatedValues += `Lado C: ${calculatedAnglebA.toFixed(2)}° <br>`;
      }
    }
    if (variablesSinValor.includes("angleb")) {
      if (!isNaN(angleO) && !isNaN(sideB)) {;
        const sideA = parseFloat(document.getElementById("sideA").value);
        const sideB = parseFloat(document.getElementById("sideB").value);
        const sideC = parseFloat(document.getElementById("sideC").value);
        const peri = sideA + sideB + sideC;
        const area = (sideA * sideB) / 2;
        document.getElementById("Perimetro").innerHTML = `Perimetro: ${peri.toFixed(2)}`;
        document.getElementById("Area").innerHTML = `Area: ${area.toFixed(2)}`;
        const angleoo = parseFloat(document.getElementById("angleO").value);
        const angleb = document.getElementById("angleb")
        const calculatedAnglebA = 180 - 90 - angleoo;
        console.log(calculatedAnglebA)
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
        const sideB = document.getElementById("sideA")
        const calculatedAnglebA = sideCC * Math.cos(angleoo * (Math.PI / 180));
        sideB.value = calculatedAnglebA.toFixed(2);
        calculatedValues += `Lado B: ${calculatedAnglebA.toFixed(2)}° <br>`;
      }
    }
    if (variablesSinValor.includes("sideB")) {
      if (!isNaN(angleO) && !isNaN(sideC)) {
        const angleoo = parseFloat(document.getElementById("angleO").value);
        const sideCC = parseFloat(document.getElementById("sideC").value);
        const sideC = document.getElementById("sideB")
        const calculatedAnglebA = sideCC * Math.sin(angleoo * (Math.PI / 180));
        sideC.value = calculatedAnglebA.toFixed(2);
        calculatedValues += `Lado C: ${calculatedAnglebA.toFixed(2)}° <br>`;
      }
    }
    if (variablesSinValor.includes("angleb")) {
      if (!isNaN(angleO) && !isNaN(sideC)) {;
        const sideA = parseFloat(document.getElementById("sideA").value);
        const sideB = parseFloat(document.getElementById("sideB").value);
        const sideC = parseFloat(document.getElementById("sideC").value);
        const peri = sideA + sideB + sideC;
        const area = (sideA * sideB) / 2;
        document.getElementById("Perimetro").innerHTML = `Perimetro: ${peri.toFixed(2)}`;
        document.getElementById("Area").innerHTML = `Area: ${area.toFixed(2)}`;
        const angleoo = parseFloat(document.getElementById("angleO").value);
        const angleb = document.getElementById("angleb")
        const calculatedAnglebA = 180 - 90 - angleoo;
        console.log(calculatedAnglebA)
        angleb.value = calculatedAnglebA.toFixed(2);
        calculatedValues += `Ángulo B: ${calculatedAnglebA.toFixed(2)}° <br>`;
      }
    }
  }
  
  switch (selecForm) {
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

  document.getElementById("result").innerHTML = 
  `${calculatedValues}`
/*     Variables con valor de tipo int: ${variablesConValorInt.join(", ")} <br>
    Variables sin valor o valor no válido: ${variablesSinValor.join(", ")} <br> */
    
  ;
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
  
  const results = document.getElementById("results")
  const clearArea = document.getElementById("Perimetro")
  const clearPerimetro = document.getElementById("Area")
  results.removeChild(clearPerimetro)
  results.removeChild(clearArea)
}