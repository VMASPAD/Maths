function exetedreon(){
    const selecForm = document.getElementById("selecForm").value;

    function Cuadrado(){
        const ladoL = parseFloat(document.getElementById("input-l").value);

        const lado      = ladoL * 4
        const perimeter = Math.pow(ladoL, 2)
        const diagonal  = ladoL * Math.sqrt(2)
        const diagonalI = ladoL * Math.sqrt(2)
        const area = ladoL ** 2

        document.getElementById("resultados").innerHTML = `
        <b>Total</b>
            <p>Lado: ${lado}</p>
            <p>Longitud: ${perimeter}</p>
            <p>Área : ${area}</p>
            <p>Diagonal : ${diagonal}</p>
            <p>Diagonal Interna: ${diagonalI}</p>
          `;
    }
    function Triangulo(){
        const ladoA = parseFloat(document.getElementById("input-a").value);
        const ladoB = parseFloat(document.getElementById("input-b").value);
        const ladoC = parseFloat(document.getElementById("input-c").value);

        const altura = (ladoA/2) * Math.sqrt(3)
        const perimetro = ladoA + ladoB + ladoC
        const area = (ladoA ** 2) * Math.sqrt(3) / 4
        document.getElementById("resultados").innerHTML = `
        <b>Total</b>
        ${altura}
        ${perimetro}
        ${area}
          `;
    }

    switch (selecForm) {
        case "Cuadrado":
            Cuadrado();
          break;
        case "Triangulo":
            Triangulo();
          break;
        case "Rombo":
            Rombo();
          break;
        case "Circulo":
            Circulo();
          break;
        case "Elipse":
            Elipse();
          break;
        case "Trapecio":
            Trapecio();
          break;
        case "Pentagono":
            Pentagono();
          break;
        case "Octogono":
            Octogono();
          break;
        case "Dodecagono":
            Dodecagono();
          break;
      }

}    
function mostrarTexto() {
        const opcionesSelect = document.getElementById("selecForm");
        const textoOcultoDiv = document.getElementById("textoOculto");
        const opcionSeleccionada = opcionesSelect.value;
      
        // Ocultamos el texto si se selecciona la primera opción
        if (opcionSeleccionada === "Cuadrado") {
          textoOcultoDiv.style.display = "block";
          document.getElementById("textoOculto").innerHTML = `
        <br>
            <label for="input-c">Valor de Lado (L):</label>
            <input type="number" id="input-l" class="input input-bordered input-primary w-28 max-w-xs" >
            <p id="resultados"></p>
            
        <br>
          `;
          MathJax.typeset();
        } else if (opcionSeleccionada === "Triangulo") {
            textoOcultoDiv.style.display = "block";
            document.getElementById("textoOculto").innerHTML = `
          <br>
        <div style="display: grid;
        justify-items: center;
        justify-content: center;
        align-items: center;
        align-content: center;">
          <img src="./img/Triangule.png" style="display: grid;">
          <span>Equilatero**</span>
        </div>    
          <div>
              <label for="input-c">Valor de Lado (A):</label>
              <input type="number" id="input-a" class="input input-bordered input-primary w-28 max-w-xs" >
              <br>
              <label for="input-c">Valor de Lado (B):</label>
              <input type="number" id="input-b" class="input input-bordered input-primary w-28 max-w-xs" >
              <br>
              <label for="input-c">Valor de Lado (C):</label>
              <input type="number" id="input-c" class="input input-bordered input-primary w-28 max-w-xs" >
              <br>
              <p id="resultados"></p>
              </div>
          <br>
            `;
            MathJax.typeset();
    }
}
