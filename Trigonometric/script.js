function calc() {
  const sideA = parseFloat(document.getElementById('sideA').value);
  const sideB = parseFloat(document.getElementById('sideB').value);
  const sideC = parseFloat(document.getElementById('sideC').value);
  const angleO = parseFloat(document.getElementById('angleO').value);
  const angleb = parseFloat(document.getElementById('angleb').value);
  const selecForm = document.getElementById('selecForm').value;
  // Verificar qué variables contienen valores de tipo int
  const variablesConValorInt = [];
  if (!isNaN(sideA) && Number.isInteger(sideA)) {
    variablesConValorInt.push('sideA');
  }
  if (!isNaN(sideB) && Number.isInteger(sideB)) {
    variablesConValorInt.push('sideB');
  }
  if (!isNaN(sideC) && Number.isInteger(sideC)) {
    variablesConValorInt.push('sideC');
  }
  if (!isNaN(angleO) && Number.isInteger(angleO)) {
    variablesConValorInt.push('angleO');
  }
  if (!isNaN(angleb) && Number.isInteger(angleb)) {
    variablesConValorInt.push('angleb');
  }

  // Verificar qué variables no recibieron valores válidos (NaN)
  const variablesSinValor = ['sideA', 'sideB', 'sideC', 'angleO', 'angleb'].filter(variable => isNaN(eval(variable)));

  // Realizar los cálculos
  let calculatedValues = '';


  function sideAB(){
  if (variablesSinValor.includes('sideC')) {
    if (!isNaN(sideA) && !isNaN(sideB)) {
      const sideC = document.getElementById('sideC')
      const sideCSquared = sideA ** 2 + sideB ** 2;
      const calculatedSideC = Math.sqrt(sideCSquared);
      sideC.value = calculatedSideC.toFixed(2)
      const peri = sideA + sideB + calculatedSideC
      document.getElementById("Perimetro").innerHTML = `Perimetro: ${peri.toFixed(2)}`
      calculatedValues += `Lado C: ${calculatedSideC.toFixed(2)} <br>`;
    }
  }

  if (variablesSinValor.includes('angleO')) {
    if (!isNaN(sideA) && !isNaN(sideB)) {
      const angleO = document.getElementById('angleO');
      const calculatedAngleO = Math.atan(sideA / sideB) * (180 / Math.PI);
      angleO.value = calculatedAngleO.toFixed(2)
      calculatedValues += `Ángulo θ: ${calculatedAngleO.toFixed(2)}° <br>`;
    }
  }

  if (variablesSinValor.includes('angleb')) {
    if (!isNaN(sideA) && !isNaN(sideB)) {
      const angleb = document.getElementById('angleb');
      const calculatedAngleb = 90 - Math.atan(sideA / sideB) * (180 / Math.PI);
      angleb.value = calculatedAngleb.toFixed(2)
      calculatedValues += `Ángulo β: ${calculatedAngleb.toFixed(2)}° <br>`;
    }
  }

}

function sideCB(){
 if (variablesSinValor.includes('sideA')) {
    if (!isNaN(sideC) && !isNaN(sideB)) {
      const sideA = document.getElementById('sideA')
      const sideCBquared = sideC ** 2 - sideB ** 2;
      const calculatedSideACB = Math.sqrt(sideCBquared);
      sideA.value = calculatedSideACB.toFixed(2)
      const peri = sideC + sideB + calculatedSideACB
      document.getElementById("Perimetro").innerHTML = `Perimetro: ${peri}`
      calculatedValues += `Lado A: ${calculatedSideACB.toFixed(2)} <br>`;
    }
  }
  if (variablesSinValor.includes('angleO')) {
    if (!isNaN(sideC) && !isNaN(sideB)) {
      const angleO = document.getElementById('angleO')
      const calculatedAngleOCB = Math.asin(sideC / sideB);
      angleO.value = calculatedAngleOCB.toFixed(2)
      calculatedValues += `Ángulo θ: ${calculatedAngleOCB.toFixed(2)}° <br>`;
    }
  }

  if (variablesSinValor.includes('angleb')) {
    if (!isNaN(sideC) && !isNaN(sideB)) {
      const angleb = document.getElementById('angleb')
      const calculatedAnglebCB = Math.acos(sideC / sideB);
      angleb.value = calculatedAnglebCB.toFixed(2)
      calculatedValues += `Ángulo β: ${calculatedAnglebCB.toFixed(2)}° <br>`;
    }
  }
}

function sideAC(){
  if (variablesSinValor.includes('sideB')) {
     if (!isNaN(sideC) && !isNaN(sideA)) {
       const sideB = document.getElementById('sideB')
       const sideCBquared = sideC ** 2 - sideA ** 2;
       const calculatedSideACB = Math.sqrt(sideCBquared);
       sideB.value = calculatedSideACB.toFixed(2)
       const peri = sideA + sideC + calculatedSideACB
       document.getElementById("Perimetro").innerHTML = `Perimetro: ${peri}`
       calculatedValues += `Lado B: ${calculatedSideACB.toFixed(2)} <br>`;
     }
   }
   if (variablesSinValor.includes('angleO')) {
     if (!isNaN(sideC) && !isNaN(sideA)) {
       const angleO = document.getElementById('angleO')
       const calculatedAngleOAC = Math.acos(sideA / sideC) * (180 / Math.PI);
       angleO.value = calculatedAngleOAC.toFixed(2)
       calculatedValues += `Ángulo θ: ${calculatedAngleOAC.toFixed(2)}° <br>`;
     }
   }
 
   if (variablesSinValor.includes('angleb')) {
     if (!isNaN(sideC) && !isNaN(sideA)) {
       const angleb = document.getElementById('angleb')
       const calculatedAnglebAC = Math.asin(sideA / sideC) * (180 / Math.PI);
       angleb.value = calculatedAnglebAC.toFixed(2)
       calculatedValues += `Ángulo β: ${calculatedAnglebAC.toFixed(2)}° <br>`;
     }
   }
 }

switch (selecForm){
  case "sideAB":
    sideAB()
  break
  case "sideCB":
    sideCB()
  break
  case "sideAC":
    sideAC()
  break
  
}



  document.getElementById('result').innerHTML = `
    Variables con valor de tipo int: ${variablesConValorInt.join(', ')} <br>
    Variables sin valor o valor no válido: ${variablesSinValor.join(', ')} <br>
    ${calculatedValues}
  `;
}