function exetedreon(){
    const selecForm = document.getElementById("selecForm").value;

    function Rectantugulo(){
        const ladoA = parseFloat(document.getElementById("input-a").value);
        const ladoB = parseFloat(document.getElementById("input-b").value);

        const area = (ladoA * ladoB) / 2


        document.getElementById("resultados").innerHTML = `
        <b>Total</b>
            <p>Area: ${area}</p>
           
          `;
    }
    function Equilatero(){
        const ladoL = parseFloat(document.getElementById("input-l").value);
        const area = (Math.sqrt(3))/4 * (ladoL ** 2)
        document.getElementById("resultados").innerHTML = `
        <b>Total</b>
        <p>Area: ${area}</p>
          `;
    }
    function Isosceles(){
        const ladoA = parseFloat(document.getElementById("input-a").value);
        const ladoB = parseFloat(document.getElementById("input-b").value);

        const ladoC = parseFloat(document.getElementById("input-c").value);
        const ladoD = parseFloat(document.getElementById("input-d").value);

        const area =ladoB * (Math.sqrt((ladoA**2)-(ladoB**2)/4)) / 2
        const areaANG = ((ladoC ** 2) /2) * Math.sin(ladoD)

        document.getElementById("resultados").innerHTML = `
        <b>Total</b>
            <p>Area: ${area}</p>
          `;
          document.getElementById("resultadosT").innerHTML = `
          <b>Total</b>
              <p>Area: ${areaANG}</p>
            `;
    }
    function Triangulo(){
        const ladoA = parseFloat(document.getElementById("input-a").value);
        const ladoB = parseFloat(document.getElementById("input-b").value);
        const ladoC = parseFloat(document.getElementById("input-c").value);
      
        const base = parseFloat(document.getElementById("input-base").value);
        const altura = parseFloat(document.getElementById("input-altura").value);

        const anguleA = parseFloat(document.getElementById("input-anguleA").value);
        const anguleB = parseFloat(document.getElementById("input-anguleB").value);
        const anguleC = parseFloat(document.getElementById("input-anguleC").value);
        


        const semiPeri = (ladoA + ladoB + ladoC) / 2
        
        const area =Math.sqrt(semiPeri * (semiPeri-ladoA)*(semiPeri-ladoB)*(semiPeri-ladoC))
        
        const areaBH = (base * altura) / 2

        const areaBC = (ladoA**2)*Math.sin(anguleB)*Math.sin(anguleC)/2*Math.sin(anguleB+anguleC)
        
        const areaAC = (ladoB**2)*Math.sin(anguleA)*Math.sin(anguleC)/2*Math.sin(anguleA+anguleC)
        
        const areaAB = (ladoC**2)*Math.sin(anguleA)*Math.sin(anguleB)/2*Math.sin(anguleA+anguleB)

        const areaABC = ladoA * ladoB * Math.sin(anguleC) / 2
        const areaACB = ladoA * ladoC * Math.sin(anguleB) / 2
        const areaBCA = ladoB * ladoC * Math.sin(anguleA) / 2

        document.getElementById("resultados").innerHTML = `
        <b>Total</b>
            <p>SemiPerímetro ${semiPeri}</p>
            <p>Area: ${area}</p>
        `;
        document.getElementById("resultadosT").innerHTML = `
        <b>Total (Base, Altura)</b>
            <p>Area: ${areaBH}</p>
        `;
        document.getElementById("resultadosBC").innerHTML = `
        <b>Total (Lado A, Angulo B, Angulo C)</b>
            <p>Area: ${areaBC}</p>
        `;
        document.getElementById("resultadosAC").innerHTML = `
        <b>Total (Lado B, Angulo A, Angulo C)</b>
            <p>Area: ${areaAC}</p>
        `;
        document.getElementById("resultadosAB").innerHTML = `
        <b>Total (Lado C, Angulo A, Angulo B)</b>
            <p>Area: ${areaAB}</p>
        `;
        document.getElementById("resultadosABC").innerHTML = `
        <b>Total (Lado A, Lado B, Angulo C)</b>
            <p>Area: ${areaABC}</p>
        `;
        document.getElementById("resultadosACB").innerHTML = `
        <b>Total (Lado A, Lado C, Angulo C)</b>
            <p>Area: ${areaACB}</p>
        `;
        document.getElementById("resultadosBCA").innerHTML = `
        <b>Total (Lado B, Lado C, Angulo A)</b>
            <p>Area: ${areaBCA}</p>
        `;
    }

    switch (selecForm) {
        case "Rectantugulo":
            Rectantugulo();
          break;
        case "Equilatero":
            Equilatero();
          break;
        case "Isosceles":
            Isosceles();
        break;
        case "Triangulo":
            Triangulo();
        break;
      }

}    
function mostrarTexto() {
        const opcionesSelect = document.getElementById("selecForm");
        const textoOcultoDiv = document.getElementById("textoOculto");
        const opcionSeleccionada = opcionesSelect.value;
      
        // Ocultamos el texto si se selecciona la primera opción
        if (opcionSeleccionada === "Rectantugulo") {
          textoOcultoDiv.style.display = "block";
          document.getElementById("textoOculto").innerHTML = `
        <br>
            <label for="input-c">Valor de Lado (a):</label>
            <input type="number" id="input-a" class="input input-bordered input-primary w-28 max-w-xs" >
           <br>
            <label for="input-c">Valor de Lado (b):</label>
            <input type="number" id="input-b" class="input input-bordered input-primary w-28 max-w-xs" >
            
            <p id="resultados"></p>
            <p>$$\(\\frac{{A * B}}{2}\)$$</p>
        <br>
          `;
          MathJax.typeset();
        } else if (opcionSeleccionada === "Equilatero") {
            textoOcultoDiv.style.display = "block";
            document.getElementById("textoOculto").innerHTML = `
          <br>
        
        </div>    
          <div>
              <label for="input-c">Valor de Lado (L):</label>
              <input type="number" id="input-l" class="input input-bordered input-primary w-28 max-w-xs" >
              <br>
              <p id="resultados"></p>
              </div>
          <br>
          <p>$$\\frac{\\sqrt{3}}{4} \\cdot L^2$$</p>
            `;
            MathJax.typeset();
    }else if (opcionSeleccionada === "Isosceles") {
        textoOcultoDiv.style.display = "block";
        document.getElementById("textoOculto").innerHTML = `
      <br>
    
    </div>    
      <div>
      <p>Valores A,B (a es uno de los dos lados iguales)</p>
      <label for="input-c">Valor de Lado (a):</label>
      <input type="number" id="input-a" class="input input-bordered input-primary w-28 max-w-xs" >
     <br>
      <label for="input-c">Valor de Lado (b):</label>
      <input type="number" id="input-b" class="input input-bordered input-primary w-28 max-w-xs" >
      <br>
          <p id="resultados"></p>
      </div>
      <br>
      <p>A uno de los lados iguales y angulo de B formado por estos</p>
      <label for="input-c">Valor de Lado (a):</label>
      <input type="number" id="input-c" class="input input-bordered input-primary w-28 max-w-xs" >
     <br>
      <label for="input-c">Valor de angulo (angulo B):</label>
      <input type="number" id="input-d" class="input input-bordered input-primary w-28 max-w-xs" >
     <br> <p id="resultadosT"></p>

     <p>$$\\frac{b *\\sqrt{a^2 - \\frac{b^2}{4}}}{2}$$</p>
     <p>$$\\frac{c^2}{2} \\cdot \\sin(d)$$</p>

     `;
        MathJax.typeset();
}else if (opcionSeleccionada === "Triangulo") {
    textoOcultoDiv.style.display = "block";
    document.getElementById("textoOculto").innerHTML = `
  <br>
</div>    
  <div>
  <p>Valores A,B (a es uno de los dos lados iguales)</p>
  <label for="input-c">Valor de Lado (a):</label>
  <input type="number" id="input-a" class="input input-bordered input-primary w-28 max-w-xs" >
 <br>
  <label for="input-c">Valor de Lado (b):</label>
  <input type="number" id="input-b" class="input input-bordered input-primary w-28 max-w-xs" >
  <br>
  <label for="input-c">Valor de Lado (c):</label>
  <input type="number" id="input-c" class="input input-bordered input-primary w-28 max-w-xs" >
  <br>
  <label for="input-c">Valor de base:</label>
  <input type="number" id="input-base" class="input input-bordered input-primary w-28 max-w-xs" >
  <br>
  <label for="input-c">Valor de altura:</label>
  <input type="number" id="input-altura" class="input input-bordered input-primary w-28 max-w-xs" >
  <br>
  <label for="input-c">Valor de Lado (A):</label>
  <input type="number" id="input-b" class="input input-bordered input-primary w-28 max-w-xs" >
  <br>
  <label for="input-c">Valor de angulo A:</label>
  <input type="number" id="input-anguleA" class="input input-bordered input-primary w-28 max-w-xs" >
  <br>
  <label for="input-c">Valor de angulo B:</label>
  <input type="number" id="input-anguleB" class="input input-bordered input-primary w-28 max-w-xs" >
  <br>
  <label for="input-c">Valor de angulo C:</label>
  <input type="number" id="input-anguleC" class="input input-bordered input-primary w-28 max-w-xs" >
  <br>
  <div class="gridResults">
      <p class="cell" id="resultados"></p>
      <p class="cell" id="resultadosBC"></p>
      <p class="cell" id="resultadosAC"></p>
      <p class="cell" id="resultadosT"></p>
      <p class="cell" id="resultadosAB"></p>
      <p class="cell" id="resultadosABC"></p>
      <p class="cell" id="resultadosACB"></p>
      <p class="cell" id="resultadosBCA"></p>
  </div>
      <p>$$\\frac{ladoA + ladoB + ladoC}{2}$$</p>
      <p>$$\\sqrt{s(s-ladoA)(s-ladoB)(s-ladoC)}$$</p>
      <p>$$\\frac{base \\cdot altura}{2}$$</p>
      <p>$$\\frac{ladoA^2 \\cdot \\sin(anguloβ) \\cdot \\sin(anguloC)}{2 \\cdot \\sin(anguloβ+anguloC)}$$</p>
      <p>$$\\frac{ladoB^2 \\cdot \\sin(anguloα) \\cdot \\sin(anguloC)}{2 \\cdot \\sin(anguloα+anguloC)}$$</p>
      <p>$$\\frac{ladoC^2 \\cdot \\sin(anguloα) \\cdot \\sin(anguloβ)}{2 \\cdot \\sin(anguloα+anguloβ)}$$</p>
      <p>$$\\frac{\\sqrt{3}}{4} \\cdot ladoL^2$$</p>
      <p>$$\\frac{{ladoα \\cdot ladoβ \\cdot \\sin(anguloC)}}{2}$$</p>
      <p>$$\\frac{{ladoα \\cdot ladoC \\cdot \\sin(anguloβ)}}{2}$$</p>
      <p>$$\\frac{{ladoβ \\cdot ladoC \\cdot \\sin(anguloα)}}{2}$$</p>
  </div>
  `;
    MathJax.typeset();
}
}
